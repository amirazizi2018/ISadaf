console.clear();

var app = angular.module('sadaf-reg-ads', ['angular-flexslider','angucomplete','ngAnimate', 'ngRoute', 'ngStorage', 'ui.router', 'angular-svg-round-progressbar', 'ngMaterial', 'ui.bootstrap', 'ngFileUpload', 'ngImgCrop', 'angular-typed', 'rateYo', 'ui.select', 'ngSanitize', ])


app.config(function($routeProvider, $locationProvider) {

  $routeProvider.when("/home", {
    controller: "mainpage",
    templateUrl: "/../mainpage/index.html"
  });

  $routeProvider.when("/jobseekermainpage", {
    controller: "jobseekermainpage",
    templateUrl: "/../jobseekermainpage/index.html"
  });

  $routeProvider.when("/jobpostspage", {
    controller: "jobpostspage",
    templateUrl: "/../jobpostspage/index.html"
  });

  $routeProvider.when("/apostpage", {
    controller: "apostpage",
    templateUrl: "/../apostpage/index.html"
  });

  $routeProvider.when("/acompanypage", {
    controller: "acompanypage",
    templateUrl: "/../acompanypage/index.html"
  });

  $routeProvider.when("/jobseekerprofilepage", {
    controller: "jobseekerprofilepage",
    templateUrl: "/../jobseekerprofilepage/index.html"
  });

  $routeProvider.when("/chooseatestpage", {
    controller: "chooseatestpage",
    templateUrl: "/../chooseatestpage/index.html"
  });

  $routeProvider.when("/companymainpage", {
    controller: "companymainpage",
    templateUrl: "/../companymainpage/index.html"
  });

  $routeProvider.when("/searchscenarios", {
    controller: "searchscenarios",
    templateUrl: "/../searchscenarios/index.html"
  });

  $routeProvider.when("/postajobscenarios", {
    controller: "postajobscenarios",
    templateUrl: "/../postajobscenarios/index.html"
  });

  $routeProvider.when("/createapostpage", {
    controller: "createapostpage",
    templateUrl: "/../createapostpage/index.html"
  });

  $routeProvider.when("/searchdatabasepage", {
    controller: "searchdatabasepage",
    templateUrl: "/../searchdatabasepage/index.html"
  });

  $routeProvider.when("/jobseekerdashboardpage", {
    controller: "jobseekerdashboardpage",
    templateUrl: "/../jobseekerdashboardpage/index.html"
  });

  $routeProvider.when("/companydashboardpage", {
    controller: "companydashboardpage",
    templateUrl: "/../companydashboardpage/index.html"
  });

  $routeProvider.when("/spmainpage", {
    controller: "spmainpage",
    templateUrl: "/../spmainpage/index.html"
  });

  $routeProvider.when("/spprofilepage", {
    controller: "spprofilepage",
    templateUrl: "/../spprofilepage/index.html"
  });

  $routeProvider.when("/spdashboardpage", {
    controller: "spdashboardpage",
    templateUrl: "/../spdashboardpage/index.html"
  });

  $routeProvider.when("/jobsalbum", {
    controller: "jobsalbum",
    templateUrl: "/../jobsalbum/index.html"
  });

  $routeProvider.when("/aresearchpage", {
    controller: "aresearchpage",
    templateUrl: "/../aresearchpage/index.html"
  });

  $routeProvider.when("/researchposts", {
    controller: "researchposts",
    templateUrl: "/../researchposts/index.html"
  });

  $routeProvider.when("/createaresearchpage", {
    controller: "createaresearchpage",
    templateUrl: "/../createaresearchpage/index.html"
  });

  $routeProvider.when("/acertificatepage", {
    controller: "acertificatepage",
    templateUrl: "/../acertificatepage/index.html"
  });


  $routeProvider.otherwise({
    redirectTo: "/home"
  });

  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });
});

app.directive('compileHtml', ['$sce', '$parse', '$compile',
  function($sce, $parse, $compile) {
    return {
      restrict: 'A',
      compile: function ngBindHtmlCompile(tElement, tAttrs) {
        var ngBindHtmlGetter = $parse(tAttrs.compileHtml);
        var ngBindHtmlWatch = $parse(tAttrs.compileHtml, function getStringValue(value) {
          return (value || '').toString();
        });
        $compile.$$addBindingClass(tElement);

        return function ngBindHtmlLink(scope, element, attr) {
          $compile.$$addBindingInfo(element, attr.compileHtml);

          scope.$watch(ngBindHtmlWatch, function ngBindHtmlWatchAction() {

            element.html($sce.trustAsHtml(ngBindHtmlGetter(scope)) || '');
            $compile(element.contents())(scope);
          });
        };
      }
    };
  }
]);


app.service('ShareData', function() {
  var sermahhp = null;
  var jobid = null;
  var empid = null;
  var spid = null;

  return {
    getPropertysermahhp: function() {
      return sermahhp;
    },
    setPropertysermahhp: function(value) {
      sermahhp = value;
    },

    getPropertyjobid: function() {
      return jobid;
    },
    setPropertyjobid: function(value) {
      jobid = value;
    },
    getPropertyempid: function() {
      return empid;
    },
    setPropertyempid: function(value) {
      empid = value;
    },
    getPropertyspid: function() {
      return spid;
    },
    setPropertyspid: function(value) {
      spid = value;
    }
  };
});


app.filter('trustAsHtml', ['$sce', function($sce) {
  return function(text) {
    return $sce.trustAsHtml(text);
  };
}]);

app.filter('jalaliDateage', function() {
  return function(inputDate, format) {
    var date = moment(inputDate);
    return date.fromNow();
  }
});

app.filter('jalaliDate', function() {
  return function(inputDate, format) {
    var date = moment(inputDate);
    return date.format(format);
  }
});

app.filter('jalaliDatewill', function() {
  return function(inputDate, format) {
    var nowd = moment();
    var date = moment(inputDate);
    return date.diff(nowd, 'days');
  }
});

app.controller('home', function($compile, $sce, $scope, $window, $http, ShareData, $location, $localStorage, $sessionStorage,SweetAlert) {
  var mustafasite = "https://sadaf.systmngr.ir/api/v1";
  moment.locale('fa');


  $scope.checkauth = function() {
    if ($localStorage.TokenKey == null || $localStorage.UserType == null) {
      $scope.isHideafterlogin = true;
      $scope.isActiveafterlogin = false;
      $scope.isHidelogin = false;
      $scope.isActivelogin = false;
      $location.path("mainpage");
      $localStorage.UserType = " ";
      $localStorage.LocationUser = " ";
      $localStorage.TokenKey = " ";

    } else {
      var config = {
        headers: {
          'Content-Type': 'application/json',
          'Access-Token': $localStorage.TokenKey.access,
        }
      }

      if ($localStorage.UserType == "JS") {
        $http.get(mustafasite + "/job_seeker", config).then(function(response) {
          $scope.isHideafterlogin = false;
          $scope.isActiveafterlogin = true;
          $scope.profiledetaflogin = response.data;
          $scope.isHidelogin = true;
          $scope.isActivelogin = false;
          $location.path($localStorage.LocationUser);
        }, function errorCallback(response) {
          $scope.isHideafterlogin = true;
          $scope.isActiveafterlogin = false;
          $scope.isHidelogin = false;
          $scope.isActivelogin = false;
          $location.path("mainpage");
        });
      }
      if ($localStorage.UserType == "EMP") {
        $http.get(mustafasite + "/employer/me", config).then(function(response) {
          $scope.isHideafterlogin = false;
          $scope.isActiveafterlogin = true;
          $scope.profiledetaflogin = response.data;
          $scope.isHidelogin = true;
          $scope.isActivelogin = false;
          $location.path($localStorage.LocationUser);
        }, function errorCallback(response) {
          $scope.isHideafterlogin = true;
          $scope.isActiveafterlogin = false;
          $scope.isHidelogin = false;
          $scope.isActivelogin = false;
          $location.path("mainpage");
        });
      }
      if ($localStorage.UserType == "SP") {
        $http.get(mustafasite + "/service_provider/me", config).then(function(response) {
          $scope.isHideafterlogin = false;
          $scope.isActiveafterlogin = true;
          $scope.profiledetaflogin = response.data;
          $scope.isHidelogin = true;
          $scope.isActivelogin = false;
          $location.path($localStorage.LocationUser);
        }, function errorCallback(response) {
          $scope.isHideafterlogin = true;
          $scope.isActiveafterlogin = false;
          $scope.isHidelogin = false;
          $scope.isActivelogin = false;
          $location.path("mainpage");
        });
      }
    }

  }

  $scope.checkauth();


  $scope.ShowForJS = function() {
    if ($localStorage.UserType == 'JS') {
      return true
    } else {
      return false
    }
  }
  $scope.ShowForEMP = function() {
    if ($localStorage.UserType == 'EMP') {
      return true
    } else {
      return false
    }
  }
  $scope.ShowForSP = function() {
    if ($localStorage.UserType == 'SP') {
      return true
    } else {
      return false
    }
  }

  $scope.gotomainpage = function() {
    if ($localStorage.UserType == "JS") {
      $location.path("jobseekermainpage");
      $localStorage.LocationUser = "jobseekermainpage";

    }
    if ($localStorage.UserType == "EMP") {
      $location.path("companymainpage");
      $localStorage.LocationUser = "companymainpage";
    }
    if ($localStorage.UserType == "SP") {
      $location.path("spmainpage");
      $localStorage.LocationUser = "spmainpage";
    }
    else {
      $location.path("home");
      $localStorage.LocationUser = "home";
    }
  }



  $scope.gotoprofilepagejs = function() {
    $location.path("jobseekerprofilepage");
    $localStorage.LocationUser = "jobseekerprofilepage";
  }
  $scope.gotoresearchpage = function() {
    $location.path("researchposts");
    $localStorage.LocationUser = "researchposts";
  }
  $scope.gotosppage = function() {
    $location.path("spmainpage");
    $localStorage.LocationUser = "spmainpage";
  }

  $scope.gotoadsjob = function() {

    $http.get(mustafasite + '/employer/me', {

      headers: {

        "Content-Type": 'application/json',

        'Access-Token': $localStorage.TokenKey.access,

      }

      }).then(function(response) {
      if (response.data.advertisements.length > 0) {
            $location.path("createapostpage");
            $localStorage.LocationUser = "createapostpage";
      }
      if (response.data.advertisements.length < 1) {
        $location.path("postajobscenarios");
        $localStorage.LocationUser = "postajobscenarios";
      }
    });

  }

  $scope.gotosearchdat = function() {
    $http.get(mustafasite + '/employer/me', {

      headers: {

        "Content-Type": 'application/json',

        'Access-Token': $localStorage.TokenKey.access,

      }

      }).then(function(response) {

      if (response.data.search_packs.length > 0) {
            $location.path("searchdatabasepage");
            $localStorage.LocationUser = "searchdatabasepage";
      }
      else if (response.data.search_packs.length = 0) {
        $location.path("searchscenarios");
        $localStorage.LocationUser = "searchscenarios";
      }
        });

  }

  $scope.gotocrearesarch = function() {
    $location.path("createaresearchpage");
    $localStorage.LocationUser = "createaresearchpage";
  }

  $scope.gotoprofilepage = function() {
    if ($localStorage.UserType == "JS") {
      $location.path("jobseekerprofilepage");
      $localStorage.LocationUser = "jobseekerprofilepage";

    }
    if ($localStorage.UserType == "EMP") {
      $location.path("acompanypage");
      $localStorage.LocationUser = "acompanypage";
    }
    if ($localStorage.UserType == "SP") {
      $location.path("spprofilepage");
      $localStorage.LocationUser = "spprofilepage";
    }

  }

  $scope.gotodashboard = function() {
    if ($localStorage.UserType == "JS") {
      $location.path("jobseekerdashboardpage");
      $localStorage.LocationUser = "jobseekerdashboardpage";

    }
    if ($localStorage.UserType == "EMP") {
      $location.path("companydashboardpage");
      $localStorage.LocationUser = "companydashboardpage";
    }
    if ($localStorage.UserType == "SP") {
      $location.path("spdashboardpage");
      $localStorage.LocationUser = "spdashboardpage";
    }
  }


  $scope.gotoemppage = function() {
    $location.path("companymainpage");
  }

  $(".forgotpasslp").on("click", function() {
    $("#ShowPopuplogin").modal('hide');
  });
  $(".ozvnismlp").on("click", function() {
    $("#ShowPopuplogin").modal('hide');
  });
  $(".forgotpasslp").on("click", function() {
    $("#ShowPopuplogin").modal('hide');
  });

  $scope.showreges = function() {
    if ($location.path() == "/home") {
      $("#ShowPopupRegsJs").modal('show');
    } else if ($location.path() == "/companymainpage") {
      $("#ShowPopupRegsEMP").modal('show');
    } else {
      alert("برای ثبت نام باید وارد صفحه هوم پیج شوید");
    }
  }




  $scope.valichengemelicode = function() {

    function checkCodeMeli(code) {
      var L = code.length;

      if (L < 8 || parseInt(code, 10) == 0) return false;
      code = ('0000' + code).substr(L + 4 - 10);
      if (parseInt(code.substr(3, 6), 10) == 0) return false;
      var c = parseInt(code.substr(9, 1), 10);
      var s = 0;
      for (var i = 0; i < 9; i++)
        s += parseInt(code.substr(i, 1), 10) * (10 - i);
      s = s % 11;
      return (s < 2 && c == s) || (s >= 2 && c == (11 - s));
    }

    if (checkCodeMeli($scope.MeliCodeJS)) {
      $scope.MeliCodeReq = false;
    } else {
      $scope.MeliCodeReq = true;
    }

  }




  $scope.RegisteryJS = function(UserNameJS, PhoneJS, PassJS, FullNameJS, EmailJS, MeliCodeJS) {

    var PhoneJSRes = PhoneJS.slice(1);

    var data = {
      username: UserNameJS,
      phone: "98"+PhoneJSRes,
      password: PassJS,
      fullname: FullNameJS,
      email: EmailJS,
      national_code: MeliCodeJS,
      register_type: "SADAF",
    };

    var config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }


    $http.post(mustafasite + '/job_seeker/register', JSON.stringify(data), config).then(function(response) {
      $("#ShowPopupRegsJs").modal('hide');
      $scope.UserNameJS = null;
      $scope.PhoneJS = null;
      $scope.PassJS = null;
      $scope.EmailJS = null;
      $scope.FullNameJS = null;
      $scope.MeliCodeJS = null;
    });



  };




  $scope.RegisteryEMP = function(UserNameEMP, PhoneEMP, PassEMP, FullNameEMP, EmailEMP) {

    var PhoneEMPRes = PhoneEMP.slice(1);

    var data = {
      username: UserNameEMP,
      phone: "98"+PhoneEMPRes,
      password: PassEMP,
      fa_name: FullNameEMP,
      email: EmailEMP,
    };

    var config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }


    $http.post(mustafasite + '/employer', JSON.stringify(data), config).then(function(response) {
      $("#ShowPopupRegsEMP").modal('hide');
      $scope.UserNameEMP = null;
      $scope.PhoneEMP = null;
      $scope.PassEMP = null;
      $scope.EmailEMP = null;
      $scope.FullNameEMP = null;

    });



  };


  $scope.Loginsc = function(UserName, Pass) {

    SweetAlert.swal("Good job!", "You clicked the button!", "success")

    var data = {
      username: UserName,
      password: Pass,
    };

    var config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }

    $http.post(mustafasite + '/login', JSON.stringify(data), config).then(function(response) {

      if (response.data.type == null) {
        if (response.data.data.type == "JS") {
          $localStorage.TokenKey = response.data;
          $localStorage.UserType = "JS";

          var config2 = {
            headers: {
              'Content-Type': 'application/json',
              'Access-Token': $localStorage.TokenKey.access,
            }
          }
          $http.get(mustafasite + "/job_seeker", config2).then(function(response) {
            $location.path("jobseekermainpage");
            $scope.profiledetaflogin = response.data;
            $("#ShowPopuplogin").modal('hide');
            $scope.isHideafterlogin = false;
            $scope.isActiveafterlogin = true;
            $scope.isHidelogin = true;
          });
        }
        if (response.data.data.type == "EMP") {
          $localStorage.TokenKey = response.data;
          $localStorage.UserType = "EMP";
          var config2 = {
            headers: {
              'Content-Type': 'application/json',
              'Access-Token': $localStorage.TokenKey.access,
            }
          }
          $http.get(mustafasite + "/employer/me", config2).then(function(response) {
            $location.path("companymainpage");
            $scope.profiledetaflogin = response.data;
            $("#ShowPopuplogin").modal('hide');
            $scope.isHideafterlogin = false;
            $scope.isActiveafterlogin = true;
            $scope.isHidelogin = true;
          });
        }
        if (response.data.data.type == "SP") {
          $localStorage.TokenKey = response.data;
          $localStorage.UserType = "SP";

          var config2 = {
            headers: {
              'Content-Type': 'application/json',
              'Access-Token': $localStorage.TokenKey.access,
            }
          }
          $http.get(mustafasite + "/service_provider/me", config2).then(function(response) {
            $location.path("spmainpage");
            $scope.profiledetaflogin = response.data;
            $("#ShowPopuplogin").modal('hide');
            $scope.isHideafterlogin = false;
            $scope.isActiveafterlogin = true;
            $scope.isHidelogin = true;
          });
        }


      } else {

        $("#ShowPopuplogin").modal('hide');
        $("#ShowPopupactivecode").modal('show');
        $localStorage.UserId = response.data.id;
        $localStorage.UserFaName = response.data.fullname;

        $scope.activecode = function(Activecodeph) {
          var data2 = {
            username: UserName,
            code: Activecodeph,
          };

          var config = {
            headers: {
              'Content-Type': 'application/json'
            }
          }
          if (response.data.type == "JS") {
            $http.post(mustafasite + '/job_seeker/activate', JSON.stringify(data2), config).then(function(response) {
              $localStorage.TokenKey = response.data;
              $localStorage.UserType = "JS";


              var config2 = {
                headers: {
                  'Content-Type': 'application/json',
                  'Access-Token': $localStorage.TokenKey.access,
                }
              }
              $http.get(mustafasite + "/job_seeker", config2).then(function(response) {
                $location.path("jobseekermainpage");
                $scope.profiledetaflogin = response.data;
                $("#ShowPopupactivecode").modal('hide');
                $scope.isHideafterlogin = false;
                $scope.isActiveafterlogin = true;
                $scope.isHidelogin = true;
              });
            });
          }

          if (response.data.type == "EMP") {
            $http.post(mustafasite + '/employer/activate', JSON.stringify(data2), config).then(function(response) {
              $localStorage.TokenKey = response.data;
              $localStorage.UserType = "EMP";
              var config2 = {
                headers: {
                  'Content-Type': 'application/json',
                  'Access-Token': $localStorage.TokenKey.access,
                }
              }
              $http.get(mustafasite + "/employer/me", config2).then(function(response) {
                $location.path("companymainpage");
                $scope.profiledetaflogin = response.data;
                $("#ShowPopupactivecode").modal('hide');
                $scope.isHideafterlogin = false;
                $scope.isActiveafterlogin = true;
                $scope.isHidelogin = true;
              });
            });
          }

          if (response.data.type == "SP") {
            $http.post(mustafasite + '/service_provider/activate', JSON.stringify(data2), config).then(function(response) {
              $localStorage.TokenKey = response.data;
              $localStorage.UserType = "SP";

              var config2 = {
                headers: {
                  'Content-Type': 'application/json',
                  'Access-Token': $localStorage.TokenKey.access,
                }
              }
              $http.get(mustafasite + "/service_provider/me", config2).then(function(response) {
                $location.path("spmainpage");
                $scope.profiledetaflogin = response.data;
                $("#ShowPopupactivecode").modal('hide');
                $scope.isHideafterlogin = false;
                $scope.isActiveafterlogin = true;
                $scope.isHidelogin = true;
              });
            });
          }

        };

      }


    });


  };



  $scope.logoutuser = function() {
    var config = {
      headers: {
        'Content-Type': 'application/json',
        'Access-Token': $localStorage.TokenKey.access,
      }
    }
    if ($localStorage.UserType == "JS") {
      $http.delete(mustafasite + "/job_seeker/revoke", config).then(function(response) {
        $location.path("mainpage");
        $scope.isHideafterlogin = true;
        $scope.isActiveafterlogin = false;
        $scope.isHidelogin = false;
        $localStorage.LocationUser = null;
      });
    }
    if ($localStorage.UserType == "EMP") {
      $http.delete(mustafasite + "/employer/revoke", config).then(function(response) {
        $location.path("mainpage");
        $scope.isHideafterlogin = true;
        $scope.isActiveafterlogin = false;
        $scope.isHidelogin = false;
        $localStorage.LocationUser = null;

      });
    }
    if ($localStorage.UserType == "SP") {
      $http.delete(mustafasite + "/service_provider/revoke", config).then(function(response) {
        $location.path("mainpage");
        $scope.isHideafterlogin = true;
        $scope.isActiveafterlogin = false;
        $scope.isHidelogin = false;
        $localStorage.LocationUser = null;

      });
    }
  }
  $scope.ForgotPass = function(Phone) {

    var PhoneForgRes = Phone.slice(1);

    var data = {
      phone: "98"+PhoneForgRes,
    };

    var config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }

    $http.post(mustafasite + '/job_seeker/password/forget', JSON.stringify(data), config).then(function(response) {

    });
  };

  $scope.SendMessToAdmin = function(titlemesadmin, bodymesadmin) {
    var data = {
      title: titlemesadmin,
      body: bodymesadmin
    };

    var config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }

    $http.post(mustafasite + '/suggestion', JSON.stringify(data), config).then(function(response) {
      console.log(data);
    });
  };




  $scope.showpagestarrating = 4;
  $scope.showpagestaroptions = {
    ratedFill: '#FFD24D',
    normalFill: '#fff',
        rtl: false,
    readOnly: true,
    maxValue: 5,
    numStars: 5,
    spacing: "5px",
        starWidth: "16px"
  };

  $scope.showpagerectanrating = 7.2;
  $scope.showpagerectanoptions = {
    ratedFill: '#3DC474',
    normalFill: '#E6E6E6',
        rtl: false,
    readOnly: true,
    maxValue: 10,
    numStars: 10,
    starWidth: "12px",
    spacing: "-2px",

    "starSvg": '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="-316 235.7 6.1 11.3" style="enable-background:new -316 235.7 6.1 11.3;" xml:space="preserve">' +
      '<path id="XMLID_1775_" class="st0" d="M-310.9,247h-4.1c-0.6,0-1-0.4-1-1v-9.3c0-0.6,0.4-1,1-1h4.1c0.6,0,1,0.4,1,1v9.3  C-309.9,246.6-310.4,247-310.9,247z"/>' +
      '</svg>'
  };




});
