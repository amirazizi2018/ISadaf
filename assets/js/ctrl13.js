console.clear();


app.factory('selecttype', function () {

  return {

casetype: function (type) {

  switch (type) {
          case "employer":
            return "EMP";
            break;
            case "service_provider":
              return "SP";
              break;
              case "job_seekers":
                return "JS";
                break;
                case "EMP":
                  return "EMP";
                  break;
                  case "SP":
                    return "SP";
                    break;
                    case "JS":
                      return "JS";
                      break;

        }


}

};

});


app.controller('jobseekerdashboardpage',

  ['$compile', '$sce', '$scope', '$window', '$http', 'Upload', '$timeout', 'ShareData', '$location', '$localStorage', 'selecttype' ,'$sessionStorage', function($compile, $sce, $scope, $window, $http, Upload, $timeout, ShareData, $location, $localStorage, selecttype ,$sessionStorage) {

    $scope.activeTabF = "tab1";

    var server_name = "https://sadaf.systmngr.ir/api/";




    var mustafasite = "https://sadaf.systmngr.ir/api/v1";



    $http.get(server_name + '/v1/job_seeker', {

      headers: {

        "Content-Type": 'application/json',

        'Access-Token': $localStorage.TokenKey.access,

      }

    }).then(function(response) {

      $scope.current = response.data.null_percent;

      $scope.logopic = response.data.avatar;

      $scope.fullname = response.data.fullname;

      $scope.position = response.data.position;

      $scope.email = response.data.email;

      $scope.activestatus = response.data.active;

      $scope.phone = response.data.phone;

      $scope.phonefix = response.data.fixed_phone;

      $scope.address = response.data.address;

      $scope.socials = response.data.socials;


    });





    $scope.max = 100;





    $scope.savelogo = function(dataUrl, name) {

      dataUrl2 = dataUrl.replace("data:image/png;base64,", "");

      var data = {

        "image": dataUrl2,

      }



      var config = {

        headers: {

          'Content-Type': 'application/json',

          'Access-Token': $localStorage.TokenKey.access,

        }

      }





      $http.put(mustafasite + '/job_seeker/avatar64', JSON.stringify(data), config).then(function(response) {

        $timeout(function() {

          $scope.logopic = response.data;

          $('#ShowPopupUploadLogo').modal('hide');

          $scope.logopicfile = null;

        });

      });

    }









    $http.get(mustafasite + '/job_seeker/notification?per_page=1000', {

      headers: {

        "Content-Type": 'application/json',

        'Access-Token': $localStorage.TokenKey.access,

      }

    }).then(function(response) {

      $scope.notificationdata = response.data.notification;

      $scope.notificationtotalItems = $scope.notificationdata.length;

    });





    $scope.notificationviewby = 5;

    $scope.notificationcurrentPage = 1;

    $scope.notificationitemsPerPage = $scope.notificationviewby;

    $scope.notificationmaxSize = 5;



    $scope.notificationsetPage = function(pageNo) {

      $scope.notificationcurrentPage = pageNo;

    };









    $scope.showpagestarjobrating = 4;

    $scope.showpagestarjoboptions = {

      ratedFill: '#FFD24D',

      normalFill: '#fff',

          rtl: false,

      readOnly: true,

      maxValue: 5,

      numStars: 5,

      spacing: "5px",

          starWidth: "16px"

    };



    $scope.showpagerectanjobrating = 7.2;

    $scope.showpagerectanjoboptions = {

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


    $scope.jobsaveddata = [];


    $scope.getbookmarkedjob = function() {

      var configjap = {

        headers: {

          "Content-Type": 'application/json',

          'Access-Token': $localStorage.TokenKey.access,

        }


      }



      $http.get(mustafasite + "/job_seeker", configjap).then(function(response) {

        for (var i = 0; i < response.data.bookmarked_job.length; i++) {
            $scope.jobsaveddata.push(response.data.bookmarked_job[i].job);
        }

        $scope.jobsaveddatatotalItems = $scope.jobsaveddata.length;
        $scope.jobsaveddataviewby = 6;
        $scope.jobsaveddatacurrentPage = 1;
        $scope.jobsaveddataitemsPerPage = $scope.jobsaveddataviewby;
        $scope.jobsaveddatamaxSize = 5;



        $scope.jobsaveddatasetPage = function(pageNo) {
          $scope.jobsaveddatacurrentPage = pageNo;
        };




      });
    }

    $scope.getbookmarkedjob();


    $scope.pindedplus = [];
    $scope.pindedcheck = [];
    $scope.pindedplusshow = [];
    $scope.pindedcheckhide = [];
    $scope.requestshow = [];
    $scope.requestshowshow = [];
    $scope.derequestshow = [];
    $scope.derequestshowhide = [];

    $scope.removejob = function(item) {

      var data = item.id;



      var config = {

        headers: {

          'Access-Token': $localStorage.TokenKey.access,

        }

      }



      $http.delete(mustafasite + '/job_seeker/bookmark/job/' + data, config).then(function(response) {

        $scope.getbookmarkedjob();

      });



    }



    $scope.requestjob = function(item, $index) {

      var data = {

        id: item.id,

      };



      var config = {

        headers: {

          'Content-Type': 'application/json',

          'Access-Token': $localStorage.TokenKey.access,

        }

      }



      $http.post(mustafasite + '/job_seeker/request_job', JSON.stringify(data), config).then(function(response) {

        $scope.requestshowshow[$index] = true;
        $scope.requestshow[$index] = false;
        $scope.derequestshowhide[$index] = false;
        $scope.derequestshow[$index] = true;

      });



    }





    $scope.derequestjob = function(item, $index) {

      var data = item.id;



      var config = {

        headers: {

          'Access-Token': $localStorage.TokenKey.access,

        }

      }



      $http.delete(mustafasite + '/job_seeker/request_job/' + data, config).then(function(response) {

        $scope.requestshowshow[$index] = false;
        $scope.requestshow[$index] = true;
        $scope.derequestshowhide[$index] = true;
        $scope.derequestshow[$index] = false;

      });



    }


    $scope.showajob = function(item) {

      var config = {

        headers: {

          'Content-Type': 'application/json',

          'Access-Token': $localStorage.TokenKey.access,

        }

      }

      $http.get(mustafasite + "/job_seeker", config).then(function(response) {

        ShareData.setPropertyjobid(item.id);

        $location.path("apostpage");

      });

    }









    $scope.yourrequestingorganizations = [{
      companylogo: 'assets/images/samanlogo.png',
      companyname: 'بانک سامان',
      companylink: '#'
    }, {
      companylogo: 'assets/images/mapnalogo.png',
      companyname: 'مپنا',
      companylink: '#'
    }, ];

    $scope.yourskill = [{
      skill: 'Microsoft Exell',
      persent: '70'
    }, {
      skill: 'مدیریت پروژه',
      persent: '60'
    }, {
      skill: 'MSP',
      persent: '50'
    }, {
      skill: 'Comfar',
      persent: '40'
    }, {
      skill: 'گزارش نویسی',
      persent: '30'
    }, ];

    $scope.numberdownandrep = [{
      numrepeat: '27',
      numdownload: '77'
    }];









    $scope.brokers = [{
      kargozarname: "کارگزار۱",
      kargozargeymat: "310000",
      kargozaricon: "assets/images/lk1.png"
    }, {
      kargozarname: "کارگزار2",
      kargozargeymat: "320000",
      kargozaricon: "assets/images/lk2.png"
    }, {
      kargozarname: "کارگزار3",
      kargozargeymat: "330000",
      kargozaricon: "assets/images/lk3.png"
    }, {
      kargozarname: "کارگزار4",
      kargozargeymat: "340000",
      kargozaricon: "assets/images/lk5.png"
    }, {
      kargozarname: "کارگزار5",
      kargozargeymat: "350000",
      kargozaricon: "assets/images/lk5.png"
    }, {
      kargozarname: "کارگزار6",
      kargozargeymat: "360000",
      kargozaricon: "assets/images/lk1.png"
    }, {
      kargozarname: "کارگزار7",
      kargozargeymat: "370000",
      kargozaricon: "assets/images/lk2.png"
    }, {
      kargozarname: "کارگزار 8",
      kargozargeymat: "380000",
      kargozaricon: "assets/images/lk3.png"
    }, ];



    $scope.biselbroker = {};

    $scope.toggleDetailsbi = function(name) {

      if ($scope.biselbroker.shown === name) {

        $scope.biselbroker.shown = null;

      } else {

        $scope.biselbroker.shown = name;

        $scope.caselbroker.shown = null;

        $scope.ccselbroker.shown = null;

        $scope.peselbroker.shown = null;

      }

    }



    $scope.selectbibrokerfun = function(broker) {

      var getselectbibroker = broker.kargozaricon;

      $scope.selectbibroker = broker;

      $scope.savebibroker = function(x) {

        $scope.bibroker = getselectbibroker;

        $scope.caselbroker.shown = null;

        $scope.biselbroker.shown = null;

        $scope.ccselbroker.shown = null;

        $scope.peselbroker.shown = null;

      }

    }





    $scope.peselbroker = {};

    $scope.toggleDetailspe = function(name) {

      if ($scope.peselbroker.shown === name) {

        $scope.peselbroker.shown = null;

      } else {

        $scope.biselbroker.shown = null;

        $scope.caselbroker.shown = null;

        $scope.ccselbroker.shown = null;

        $scope.peselbroker.shown = name;

      }

    }



    $scope.selectpebrokerfun = function(broker) {

      var getselectpebroker = broker.kargozaricon;

      $scope.selectpebroker = broker;

      $scope.savepebroker = function(x) {

        $scope.pebroker = getselectpebroker;

        $scope.caselbroker.shown = null;

        $scope.biselbroker.shown = null;

        $scope.ccselbroker.shown = null;

        $scope.peselbroker.shown = null;

      }

    }



    $scope.ccselbroker = {};

    $scope.toggleDetailscc = function(name) {

      if ($scope.ccselbroker.shown === name) {

        $scope.ccselbroker.shown = null;

      } else {

        $scope.ccselbroker.shown = name;

        $scope.biselbroker.shown = null;

        $scope.caselbroker.shown = null;

        $scope.peselbroker.shown = null;

      }

    }



    $scope.selectccbrokerfun = function(broker) {

      var getselectccbroker = broker.kargozaricon;

      $scope.selectccbroker = broker;

      $scope.saveccbroker = function(x) {

        $scope.ccbroker = getselectccbroker;

        $scope.caselbroker.shown = null;

        $scope.biselbroker.shown = null;

        $scope.ccselbroker.shown = null;

        $scope.peselbroker.shown = null;

      }

    }





    $scope.caselbroker = {};

    $scope.toggleDetailsca = function(name) {

      if ($scope.caselbroker.shown === name) {

        $scope.caselbroker.shown = null;

      } else {

        $scope.caselbroker.shown = name;

        $scope.biselbroker.shown = null;

        $scope.ccselbroker.shown = null;

        $scope.peselbroker.shown = null;

      }

    }



    $scope.selectcabrokerfun = function(broker) {

      var getselectcabroker = broker.kargozaricon;

      $scope.selectcabroker = broker;

      $scope.savecabroker = function(x) {

        $scope.cabroker = getselectcabroker;

        $scope.caselbroker.shown = null;

        $scope.biselbroker.shown = null;

        $scope.ccselbroker.shown = null;

        $scope.peselbroker.shown = null;

      }

    }









    $scope.isreceiveVisible = false;

    $scope.issentVisible = false;

    $scope.composeEmail = {};

    $scope.activeTab = "inbox";

    // $scope.sentEmails = [
    //
    //   {
    //
    //     frommail: 'A20Group@yahoo.com',
    //
    //     from: 'شرکت آسان پرداخت',
    //
    //     to: 'شزکت فناپ',
    //
    //     subject: 'دعوت به مصاحبه',
    //
    //     date: '96/07/24',
    //
    //     time: '2:33 ب.ظ',
    //
    //     body: 'با سلامتحقق این هدف و چشم انداز در صورتی محقق می گردد که این سامانه دارای ویژگی¬های خاصی باشد که دارا بودن آن ویژگی¬ها در گام اول شروط لازم را جهت تحقق این چشم انداز برآورده نموده و در گام بعد این ویژگی ها با به وجود آوردن مزیت های رقابتی برای این سامانه شروط کافی جهت موفقیت این سامانه را نیز فراهم می آورد باتشکر معاونت منابع انسانی شرکت آسان پرداخت'
    //
    //   },
    //
    //   {
    //
    //     frommail: 'A20Group@yahoo.com',
    //
    //     from: 'شرکت آسان پرداخت',
    //
    //     to: 'شزکت فناپ',
    //
    //     subject: 'دعوت به مصاحبه',
    //
    //     date: '96/07/24',
    //
    //     time: '2:32 ب.ظ',
    //
    //     body: 'با سلامتحقق این هدف و چشم انداز در صورتی محقق می گردد که این سامانه دارای ویژگی¬های خاصی باشد که دارا بودن آن ویژگی¬ها در گام اول شروط لازم را جهت تحقق این چشم انداز برآورده نموده و در گام بعد این ویژگی ها با به وجود آوردن مزیت های رقابتی برای این سامانه شروط کافی جهت موفقیت این سامانه را نیز فراهم می آورد باتشکر معاونت منابع انسانی شرکت آسان پرداخت'
    //
    //   },
    // ];

    $scope.GetSendMessage = function() {

      var config = {

        headers: {

          'Content-Type': 'application/json',

          'Access-Token': $localStorage.TokenKey.access,

        }

      }

      $http.get(mustafasite + '/job_seeker/sent_message?per_page=100000', config).then(function(response) {
        $scope.SendMessage = response.data.messages;
      });

    }

    $scope.GetSendMessage();


        $scope.replayesentmail = function(selectedsentEmail) {
          $scope.composeEmail = {};

          $scope.activeTab = "compose";

          $scope.composeEmail.subject = selectedsentEmail.title;
          if (selectedsentEmail.to == "EMP") {
            var ShowNameMailReplay = selectedsentEmail.employer.fa_name;
            var input = $('#_value');
            input.val(ShowNameMailReplay);
            $scope.sentuserid = selectedsentEmail.employer.id;
            $scope.sentusertype = "EMP";
          }
          if (selectedsentEmail.to == "SP") {
            var ShowNameMailReplay = selectedsentEmail.service_provider.fa_name;
            var input = $('#_value');
            input.val(ShowNameMailReplay);
            $scope.sentuserid = selectedsentEmail.service_provider.id;
            $scope.sentusertype = "SP";
          }
      		if (selectedsentEmail.to == "JS") {
      			var ShowNameMailReplay = selectedsentEmail.job_seeker.fa_name;
      			var input = $('#_value');
      			input.val(ShowNameMailReplay);
      			$scope.sentuserid = selectedsentEmail.job_seeker.id;
      			$scope.sentusertype = "JS";
      		}

          $scope.isreceiveVisible = false;

        };

    $scope.sendEmail = function() {

      // $scope.activeTab = "sent";
      // $scope.sentEmails.push($scope.composeEmail);
      //
      // $scope.composeEmail = {};
      var config = {

        headers: {

          'Content-Type': 'application/json',

          'Access-Token': $localStorage.TokenKey.access,

        }

      }

      var data = null;
      if ($scope.atachmailmodel == null) {


        if ($scope.sentusertype != null) {
          data = {
           text: $scope.composeEmail.body,
           title: $scope.composeEmail.subject,
           target : selecttype.casetype($scope.sentusertype),
           target_id: parseInt($scope.sentuserid),
           // file : value.split(',')[1],
           // file_format : getfileformat,
         };
       } else if($scope.sentusertype == null) {
          data = {
           text: $scope.composeEmail.body,
           title: $scope.composeEmail.subject,
           target : selecttype.casetype($scope.composeEmail.to.originalObject.type),
           target_id: parseInt($scope.composeEmail.to.originalObject.id),
           // file : value.split(',')[1],
           // file_format : getfileformat,
         };
        }



          $http.post(mustafasite + '/job_seeker/message', JSON.stringify(data), config).then(function(response) {
            $scope.GetSendMessage();
            $scope.composeEmail = {};
            $scope.searchStr = null;
            $scope.searchStr = null;
            $scope.sentusertype =null;
            $scope.sentuserid =null;
            var input = $('#_value');
            input.val("");
            $scope.isreceiveVisible = false;
            $scope.activeTab = "sent";
          });




      }else if ($scope.atachmailmodel != null) {
        var getfileformat = $scope.atachmailmodel.name.split('.').pop();
      var getfilebase64 = Upload.base64DataUrl($scope.atachmailmodel);
      getfilebase64.then(function(value) {
          // var getlenght = $scope.composeEmail;
          // console.log(Object.keys(getlenght).length);
          // console.log($scope.composeEmail);
          // console.log($scope.sentusertype);
        if ($scope.sentusertype != null) {
          data = {
           text: $scope.composeEmail.body,
           title: $scope.composeEmail.subject,
           target : selecttype.casetype($scope.sentusertype),
           target_id: parseInt($scope.sentuserid),
           file : value.split(',')[1],
           file_format : getfileformat,
         };
       } else if($scope.sentusertype == null) {
          data = {
           text: $scope.composeEmail.body,
           title: $scope.composeEmail.subject,
           target : selecttype.casetype($scope.composeEmail.to.originalObject.type),
           target_id: parseInt($scope.composeEmail.to.originalObject.id),
           file : value.split(',')[1],
           file_format : getfileformat,
         };
        }



          $http.post(mustafasite + '/job_seeker/message', JSON.stringify(data), config).then(function(response) {
            $scope.GetSendMessage();
            $scope.atachmailmodel = null;
            $scope.composeEmail = {};
            $scope.searchStr = null;
            $scope.searchStr = null;
            $scope.sentusertype =null;
            $scope.sentuserid =null;
            var input = $('#_value');
            input.val("");
            $scope.isreceiveVisible = false;
            $scope.activeTab = "sent";
          });


      });



      }

    };


    $scope.backtoreceivemail = function() {

      $scope.isreceiveVisible = false;

    };



    $scope.showsentmail = function(email) {

      $scope.issentVisible = true;

      $scope.selectedsentEmail = email;

    };



    $scope.backtosentmail = function() {

      $scope.issentVisible = false;

    };



    // $scope.emails = [
    //
    //   {
    //
    //     frommail: 'A20Group@yahoo.com',
    //
    //     from: 'شرکت آسان پرداخت',
    //
    //     to: 'me',
    //
    //     subject: 'دعوت به مصاحبه',
    //
    //     date: '96/07/24',
    //
    //     time: '2:33 ب.ظ',
    //
    //     body: 'با سلامتحقق این هدف و چشم انداز در صورتی محقق می گردد که این سامانه دارای ویژگی¬های خاصی باشد که دارا بودن آن ویژگی¬ها در گام اول شروط لازم را جهت تحقق این چشم انداز برآورده نموده و در گام بعد این ویژگی ها با به وجود آوردن مزیت های رقابتی برای این سامانه شروط کافی جهت موفقیت این سامانه را نیز فراهم می آورد باتشکر معاونت منابع انسانی شرکت آسان پرداخت'
    //
    //   },
    //
    //   {
    //
    //     frommail: 'A20Group@yahoo.com',
    //
    //     from: 'شرکت آسان پرداخت',
    //
    //     to: 'me',
    //
    //     subject: 'دعوت به مصاحبه',
    //
    //     date: '96/07/24',
    //
    //     time: '2:32 ب.ظ',
    //
    //     body: 'با سلامتحقق این هدف و چشم انداز در صورتی محقق می گردد که این سامانه دارای ویژگی¬های خاصی باشد که دارا بودن آن ویژگی¬ها در گام اول شروط لازم را جهت تحقق این چشم انداز برآورده نموده و در گام بعد این ویژگی ها با به وجود آوردن مزیت های رقابتی برای این سامانه شروط کافی جهت موفقیت این سامانه را نیز فراهم می آورد باتشکر معاونت منابع انسانی شرکت آسان پرداخت'
    //
    //   },
    //
    //   {
    //
    //     frommail: 'A20Group@yahoo.com',
    //
    //     from: 'شرکت آسان پرداخت',
    //
    //     to: 'me',
    //
    //     subject: 'دعوت به مصاحبه',
    //
    //     date: '96/07/24',
    //
    //     time: '2:31 ب.ظ',
    //
    //     body: 'با سلامتحقق این هدف و چشم انداز در صورتی محقق می گردد که این سامانه دارای ویژگی¬های خاصی باشد که دارا بودن آن ویژگی¬ها در گام اول شروط لازم را جهت تحقق این چشم انداز برآورده نموده و در گام بعد این ویژگی ها با به وجود آوردن مزیت های رقابتی برای این سامانه شروط کافی جهت موفقیت این سامانه را نیز فراهم می آورد باتشکر معاونت منابع انسانی شرکت آسان پرداخت'
    //
    //   }
    //
    // ];

    $scope.GetReceiveMessage = function() {

      var config = {

        headers: {

          'Content-Type': 'application/json',

          'Access-Token': $localStorage.TokenKey.access,

        }

      }

      $http.get(mustafasite + '/job_seeker/receive_message?per_page=100000', config).then(function(response) {
        $scope.ReceiveMessage = response.data.messages;
      });

    }

    $scope.GetReceiveMessage();

    $scope.showreceivemail = function(email) {

      var config = {

        headers: {

          'Content-Type': 'application/json',

          'Access-Token': $localStorage.TokenKey.access,

        }

      }

      if (email.seen == true) {
        $scope.isreceiveVisible = true;
        $scope.selectedreceiveEmail = email;
      } else if (email.seen == false){
        $http.get(mustafasite + '/job_seeker/message/' + email.id, config).then(function(response) {
          $scope.isreceiveVisible = true;
          $scope.GetReceiveMessage();
          $scope.selectedreceiveEmail = email;
        });
      }

    };



    $scope.replayereceivemail = function(selectedreceiveEmail) {

      $scope.composeEmail = {};

  		$scope.activeTab = "compose";

  		$scope.composeEmail.subject = selectedsentEmail.title;
  		if (selectedsentEmail.from == "EMP") {
  			var ShowNameMailReplay = selectedsentEmail.employer.fa_name;
  			var input = $('#_value');
  			input.val(ShowNameMailReplay);
  			$scope.sentuserid = selectedsentEmail.employer.id;
  			$scope.sentusertype = "EMP";
  		}
  		if (selectedsentEmail.from == "SP") {
  			var ShowNameMailReplay = selectedsentEmail.service_provider.fa_name;
  			var input = $('#_value');
  			input.val(ShowNameMailReplay);
  			$scope.sentuserid = selectedsentEmail.service_provider.id;
  			$scope.sentusertype = "SP";
  		}
  		if (selectedsentEmail.from == "JS") {
  			var ShowNameMailReplay = selectedsentEmail.job_seeker.fa_name;
  			var input = $('#_value');
  			input.val(ShowNameMailReplay);
  			$scope.sentuserid = selectedsentEmail.job_seeker.id;
  			$scope.sentusertype = "JS";
  		}

  		$scope.isreceiveVisible = false;

    };








    $scope.removereceiveemail = function(selectedreceiveEmail) {


      //
      //
      //
      // var index = -1;
      //
      //
      //
      // $scope.emails.some(function(obj, i) {
      //
      //   return obj.id == selectedreceiveEmail.body ? index = i : false;
      //
      // });
      //
      //
      //
      // $scope.emails.splice($scope.emails.indexOf(selectedreceiveEmail), 1);
      //
      // $scope.isreceiveVisible = false;

      var config = {

        headers: {

          'Content-Type': 'application/json',

          'Access-Token': $localStorage.TokenKey.access,

        }

      }

      $http.delete(mustafasite + '/job_seeker/message/' + selectedreceiveEmail.id , config).then(function(response) {
        $scope.GetReceiveMessage();
        $scope.isreceiveVisible = false;
      });



    };



    $scope.removesentmail = function(selectedsentEmail) {




      //
      // var index = -1;
      //
      //
      //
      // $scope.sentEmails.some(function(obj, i) {
      //
      //   return obj.id == selectedsentEmail.body ? index = i : false;
      //
      // });
      //
      //
      //
      // $scope.sentEmails.splice($scope.sentEmails.indexOf(selectedsentEmail), 1);
      //
      // $scope.issentVisible = false;
      var config = {

        headers: {

          'Content-Type': 'application/json',

          'Access-Token': $localStorage.TokenKey.access,

        }

      }

      $http.delete(mustafasite + '/job_seeker/message/' + selectedsentEmail.id , config).then(function(response) {
        $scope.GetSendMessage();
        $scope.issentVisible = false;
      });






    };









    $scope.orderByField = '';

    $scope.reverseSort = false;



    $scope.mytransactions = [

      {
        transactionhistory: '96/7/24',
        transactiontype: 'واریز',
        issuetracking: '45613216511632151',
        transactionprice: '420,000+',
        transactioncredit: '420,000',
        recivefactorlink: '',
      },

      {
        transactionhistory: '96/7/24',
        transactiontype: 'پرداخت',
        issuetracking: '45613216511632151',
        transactionprice: '420,000-',
        transactioncredit: '0',
        recivefactorlink: '',
      },

      {
        transactionhistory: '96/7/24',
        transactiontype: 'واریز ناموفق',
        issuetracking: '45613216511632151',
        transactionprice: '420,000',
        transactioncredit: '420,000',
        recivefactorlink: '',
      },

      {
        transactionhistory: '96/7/24',
        transactiontype: 'واریز',
        issuetracking: '45613216511632151',
        transactionprice: '420,000+',
        transactioncredit: '420,000',
        recivefactorlink: '',
      },

      {
        transactionhistory: '96/7/24',
        transactiontype: 'پرداخت',
        issuetracking: '45613216511632151',
        transactionprice: '420,000-',
        transactioncredit: '0',
        recivefactorlink: '',
      },

      {
        transactionhistory: '96/7/24',
        transactiontype: 'واریز ناموفق',
        issuetracking: '45613216511632151',
        transactionprice: '420,000',
        transactioncredit: '420,000',
        recivefactorlink: '',
      },

      {
        transactionhistory: '96/7/24',
        transactiontype: 'واریز',
        issuetracking: '45613216511632151',
        transactionprice: '420,000+',
        transactioncredit: '420,000',
        recivefactorlink: '',
      },

      {
        transactionhistory: '96/7/24',
        transactiontype: 'پرداخت',
        issuetracking: '45613216511632151',
        transactionprice: '420,000-',
        transactioncredit: '0',
        recivefactorlink: '',
      },

      {
        transactionhistory: '96/7/24',
        transactiontype: 'واریز ناموفق',
        issuetracking: '45613216511632151',
        transactionprice: '420,000',
        transactioncredit: '420,000',
        recivefactorlink: '',
      },

      {
        transactionhistory: '96/7/24',
        transactiontype: 'واریز',
        issuetracking: '45613216511632151',
        transactionprice: '420,000+',
        transactioncredit: '420,000',
        recivefactorlink: '',
      },

      {
        transactionhistory: '96/7/24',
        transactiontype: 'پرداخت',
        issuetracking: '45613216511632151',
        transactionprice: '420,000-',
        transactioncredit: '0',
        recivefactorlink: '',
      },

      {
        transactionhistory: '96/7/24',
        transactiontype: 'واریز ناموفق',
        issuetracking: '45613216511632151',
        transactionprice: '420,000',
        transactioncredit: '420,000',
        recivefactorlink: '',
      },

      {
        transactionhistory: '96/7/24',
        transactiontype: 'واریز',
        issuetracking: '45613216511632151',
        transactionprice: '420,000+',
        transactioncredit: '420,000',
        recivefactorlink: '',
      },

      {
        transactionhistory: '96/7/24',
        transactiontype: 'پرداخت',
        issuetracking: '45613216511632151',
        transactionprice: '420,000-',
        transactioncredit: '0',
        recivefactorlink: '',
      },

      {
        transactionhistory: '96/7/24',
        transactiontype: 'واریز ناموفق',
        issuetracking: '45613216511632151',
        transactionprice: '420,000',
        transactioncredit: '420,000',
        recivefactorlink: '',
      },



    ];



    $scope.viewby = 7;

    $scope.totalItems = $scope.mytransactions.length;

    $scope.currentPage = 1;

    $scope.itemsPerPage = $scope.viewby;

    $scope.maxSize = 5;



    $scope.setPage = function(pageNo) {

      $scope.currentPage = pageNo;

    };



    $scope.setItemsPerPage = function(num) {

      $scope.itemsPerPage = num;

      $scope.currentPage = 1;

    }




    $scope.ChengePassWord = function(currentpassword, newpassword) {

      var data = {

        old_password: currentpassword,
        new_password: newpassword

      };



      var config = {

        headers: {

          'Content-Type': 'application/json',

          'Access-Token': $localStorage.TokenKey.access,

        }

      }



      $http.put(mustafasite + '/job_seeker/password', JSON.stringify(data), config).then(function(response) {
        $scope.newpassword = null;
        $scope.currentpassword = null;
        alert("پسورد با موفیقت ویرایش شد.")
      });



    }






  }]);









app.controller('mysetting', function($compile, $sce, $scope, $window, $http) {





});
