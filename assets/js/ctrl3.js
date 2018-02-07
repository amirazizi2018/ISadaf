console.clear();


app.controller('jobpostspage', function($compile, $sce, $scope, $window, $http, ShareData, $location, $localStorage, $sessionStorage , SweetAlert ) {



  var mustafasite = "https://sadaf.systmngr.ir/api/v1";

  $http.post(mustafasite + '/items', {

    headers: {

      "Content-Type": 'application/json',


    }

  }).then(function(response) {
    $scope.yourskillsandexpertises = response.data.data;
  });

  $scope.shahr = [
    {
      nameper: "شهریار",
      nameeng: "shariyar"
    },
    {
      nameper: "تهران",
      nameeng: "tehran"
    },

    {
      nameper: "پردیس",
      nameeng: "pardis"
    },

    {
      nameper: "کرج",
      nameeng: "karaj"
    },
  ];



  if (ShareData.getPropertysermahhp() != null) {

    $scope.searchkeyword = ShareData.getPropertysermahhp();







    $scope.searchbtnjp = function() {

      var config = {

        headers: {

          'Content-Type': 'application/json',
          'Access-Token': $localStorage.TokenKey.access,

        }

      }

      if ($scope.shahrselect != null) {
        var selectcity = "city:"+$scope.shahrselect;
      } else {
        var selectcity = " ";
      }



      if ($scope.FULL_TIME == true) {

        var sfulltime = "FULL_TIME";

      } else {

        var sfulltime = " ";

      }

      if ($scope.PART_TIME == true) {

        var sparttime = "PART_TIME";

      } else {

        var sparttime = " ";

      }

      if ($scope.KAR_AMUZI == true) {

        var skaramuzi = "KAR_AMUZI";

      } else {

        var skaramuzi = " ";

      }

      if ($scope.KARVARZI == true) {

        var sKARVARZI = "KARVARZI";

      } else {

        var sKARVARZI = " ";

      }

      if ($scope.Resume == true) {

        var Resume = "accept_user_witout_resume:"+$scope.shahrselect;

      } else {

        var Resume = " ";

      }

      if ($scope.RavanShanakhti == true) {

        var RavanShanakhti = "accept_user_witout_exam:"+$scope.RavanShanakhti;

      } else {

        var RavanShanakhti = " ";

      }

      if ($scope.Maharati == true) {

        var Maharati = "accept_user_witout_skill:"+$scope.Maharati;

      } else {

        var Maharati = " ";

      }

      if ($scope.Shayesteghi == true) {

        var Shayesteghi = "accept_user_witout_suitability:"+$scope.Shayesteghi;

      } else {

        var Shayesteghi = " ";

      }

      if ($scope.searchkeyword != null) {

        var searchkeyword = $scope.searchkeyword;

      } else {

        var searchkeyword = " ";

      }




      var myDate = new Date();



      if ($scope.adstimevalue == "previousDay") {

        var Mindate = new Date(myDate);

        Mindate.setDate(myDate.getDate() - 1);

      } else if ($scope.adstimevalue == "previousWeek") {

        var Mindate = new Date(myDate);

        Mindate.setDate(myDate.getDate() - 7);

      } else if ($scope.adstimevalue == "previousMonth") {

        var Mindate = new Date(myDate);

        Mindate.setMonth(myDate.getMonth() - 1);

      } else if ($scope.adstimevalue == "previousYear") {

        var Mindate = new Date(myDate);

        Mindate.setYear(myDate.getFullYear() - 1);

      }





      $http.get(mustafasite + "/job?research=false&and_keywords=" + searchkeyword + " " + sfulltime + " " + sparttime + " " + skaramuzi + " " + sKARVARZI + " " + $scope.sexvalue + " " + Resume + " " + Shayesteghi + " "  + RavanShanakhti + " " + Maharati + " " + selectcity , config).then(function(response) {

        $scope.jobsdata = response.data.hits;

        /* 							$scope.pindedplus = true;

        					$scope.requestshow = true; */

        $scope.totalItems = $scope.jobsdata.length;

      });



      $scope.viewby = 9;

      $scope.currentPage = 1;

      $scope.itemsPerPage = $scope.viewby;

      $scope.maxSize = 5;

      $scope.setPage = function(pageNo) {

        $scope.currentPage = pageNo;

      };

    }

    $scope.searchbtnjp();



  } else {



    var config = {

      headers: {

        'Content-Type': 'application/json'

      }

    }



    $http.get(mustafasite + "/job?research=false", config).then(function(response) {

      $scope.jobsdata = response.data.hits;

      /* 			$scope.pindedplus = true;

      	$scope.requestshow = true; */

      $scope.totalItems = $scope.jobsdata.length;





    });

    $scope.viewby = 9;

    $scope.currentPage = 1;

    $scope.itemsPerPage = $scope.viewby;

    $scope.maxSize = 5;

    $scope.setPage = function(pageNo) {

      $scope.currentPage = pageNo;

    };




    $scope.searchkeyword = ShareData.getPropertysermahhp();







    $scope.searchbtnjp = function() {

      var config = {

        headers: {

          'Content-Type': 'application/json',
          'Access-Token': $localStorage.TokenKey.access,

        }

      }

      if ($scope.shahrselect != null) {
        var selectcity = "city:"+$scope.shahrselect;
      } else {
        var selectcity = " ";
      }



      if ($scope.FULL_TIME == true) {

        var sfulltime = "FULL_TIME";

      } else {

        var sfulltime = " ";

      }

      if ($scope.PART_TIME == true) {

        var sparttime = "PART_TIME";

      } else {

        var sparttime = " ";

      }

      if ($scope.KAR_AMUZI == true) {

        var skaramuzi = "KAR_AMUZI";

      } else {

        var skaramuzi = " ";

      }

      if ($scope.KARVARZI == true) {

        var sKARVARZI = "KARVARZI";

      } else {

        var sKARVARZI = " ";

      }

      if ($scope.Resume == true) {

        var Resume = "accept_user_witout_resume:"+$scope.shahrselect;

      } else {

        var Resume = " ";

      }

      if ($scope.RavanShanakhti == true) {

        var RavanShanakhti = "accept_user_witout_exam:"+$scope.RavanShanakhti;

      } else {

        var RavanShanakhti = " ";

      }

      if ($scope.Maharati == true) {

        var Maharati = "accept_user_witout_skill:"+$scope.Maharati;

      } else {

        var Maharati = " ";

      }

      if ($scope.Shayesteghi == true) {

        var Shayesteghi = "accept_user_witout_suitability:"+$scope.Shayesteghi;

      } else {

        var Shayesteghi = " ";

      }

      if ($scope.searchkeyword != null) {

        var searchkeyword = $scope.searchkeyword;

      } else {

        var searchkeyword = " ";

      }





      var myDate = new Date();



      if ($scope.adstimevalue == "previousDay") {

        var Mindate = new Date(myDate);

        Mindate.setDate(myDate.getDate() - 1);

      } else if ($scope.adstimevalue == "previousWeek") {

        var Mindate = new Date(myDate);

        Mindate.setDate(myDate.getDate() - 7);

      } else if ($scope.adstimevalue == "previousMonth") {

        var Mindate = new Date(myDate);

        Mindate.setMonth(myDate.getMonth() - 1);

      } else if ($scope.adstimevalue == "previousYear") {

        var Mindate = new Date(myDate);

        Mindate.setYear(myDate.getFullYear() - 1);

      }





      $http.get(mustafasite + "/job?research=false&and_keywords=" + searchkeyword + " " + sfulltime + " " + sparttime + " " + skaramuzi + " " + sKARVARZI + " " + $scope.sexvalue + " " + Resume + " " + Shayesteghi + " "  + RavanShanakhti + " " + Maharati + " " + selectcity , config).then(function(response) {

        $scope.jobsdata = response.data.hits;

        /* 							$scope.pindedplus = true;

        					$scope.requestshow = true; */

        $scope.totalItems = $scope.jobsdata.length;

      });



      $scope.viewby = 9;

      $scope.currentPage = 1;

      $scope.itemsPerPage = $scope.viewby;

      $scope.maxSize = 5;

      $scope.setPage = function(pageNo) {

        $scope.currentPage = pageNo;

      };

    }


  }



  $scope.ratesearch = 0;

  $scope.ratesearchoptions = {

    ratedFill: '#29ABE2',

    normalFill: '#6e8d9a',

        rtl: false,

    readOnly: false,

    maxValue: 5,

    numStars: 5,

    spacing: "5px",

        starWidth: "16px"

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





  $scope.set = function(event, data) {

    $scope.ratesearch = data.rating;

  };



  $scope.banners = [

    {
      title: 'ایجاد پروفایل شغلی',
      img: 'assets/images/three-home1.svg',
      text: 'برای اضافه نمودن یک پروفایل کافیست ابتدا اقدام به عضویت نموده و وارد حساب برای آنکه بتوانید برای یک شغل درخواست ثبت کنید می بایست تا حد مشخصی پروفایل کاملی داشته باشید',
    },

    {
      title: 'انجام پژوهش برای صنعت توسط شما',
      img: 'assets/images/three-home2.svg',
      text: 'برای اضافه نمودن یک پروفایل کافیست ابتدا اقدام به عضویت نموده و وارد حساب برای آنکه بتوانید برای یک شغل درخواست ثبت کنید می بایست تا حد مشخصی پروفایل کاملی داشته باشید',
    },

    {
      title: 'معرفی شما به عنوان نیروی کار',
      img: 'assets/images/three-home3.svg',
      text: 'برای اضافه نمودن یک پروفایل کافیست ابتدا اقدام به عضویت نموده و وارد حساب برای آنکه بتوانید برای یک شغل درخواست ثبت کنید می بایست تا حد مشخصی پروفایل کاملی داشته باشید',
    },

  ];



  $scope.adstime = [

    {
      nameper: "یک روز پیش",
      nameeng: "previousDay"
    },

    {
      nameper: "یک هفته پیش",
      nameeng: "previousWeek"
    },

    {
      nameper: "ماه پیش",
      nameeng: "previousMonth"
    },

    {
      nameper: "سال پیش",
      nameeng: "previousYear"
    },

  ];

  $scope.adstimevalue = "previousYear";



  $scope.sex = [
    {
        nameper: "مرد / زن",
        nameeng: "both"
      },
    {
      nameper: "مرد",
      nameeng: "male"
    },
    {
      nameper: "زن",
      nameeng: "female"
    },
  ];
  $scope.sexvalue = "male";




  $scope.sazman = [

    {
      nameper: "دولتی",
      nameeng: "shariyar"
    },

    {
      nameper: "خصوصی",
      nameeng: "tehran"
    },

    {
      nameper: "خصولتی",
      nameeng: "tehran"
    },

  ];






  $scope.pindedplus = [];
  $scope.pindedcheck = [];
  $scope.pindedplusshow = [];
  $scope.pindedcheckhide = [];
  $scope.requestshow = [];
  $scope.requestshowshow = [];
  $scope.derequestshow = [];
  $scope.derequestshowhide = [];





  $scope.add = function(item, $index) {

    var data = {

      id: item.id,

    };



    var config = {

      headers: {

        'Content-Type': 'application/json',

        'Access-Token': $localStorage.TokenKey.access,

      }

    }

    $http.post(mustafasite + '/job_seeker/bookmark/job', JSON.stringify(data), config).then(function(response) {

      $scope.pindedplusshow[$index] = false;
      $scope.pindedcheckhide[$index] = false;
      $scope.pindedplus[$index] = true;
      $scope.pindedcheck[$index] = true;

    },function Error (response) {

  if (response.status == 401) {
      SweetAlert.swal({
       title: "خطا!",
       text: "برای استفاده از سرویسهای سامانه صدف لازم است ثبت نام نموده و یا به حساب کاربری خود وارد شوید.",
       type: "error",
       showCancelButton: false,
       confirmButtonColor: "#DD6B55",
       confirmButtonText: "بازگشت",
     });
  }

  if (response.status == 404) {
      SweetAlert.swal({
       title: "خطا!",
       text: "شغل مورد نظر شما اخیرا از سامانه حذف گردیده است.",
       type: "error",
       showCancelButton: false,
       confirmButtonColor: "#DD6B55",
       confirmButtonText: "بازگشت",
     });
  }

  if (response.status == 403) {
      SweetAlert.swal({
       title: "خطا!",
       text: "با عرض پوزش ، سامانه تا دقایقی در دسترس نمیباشد. لطفا در زمان دیگری دوباره اقدام فرمایید.",
       type: "error",
       showCancelButton: false,
       confirmButtonColor: "#DD6B55",
       confirmButtonText: "بازگشت",
     });
  }

  if (response.status == 500) {
      SweetAlert.swal({
       title: "خطا!",
       text: "با عرض پوزش ، سامانه تا دقایقی در دسترس نمیباشد. لطفا در زمان دیگری دوباره اقدام فرمایید.",
       type: "error",
       showCancelButton: false,
       confirmButtonColor: "#DD6B55",
       confirmButtonText: "بازگشت",
     });
  }




});



  }



  $scope.remove = function(item, $index) {

    var data = item.id;



    var config = {

      headers: {

        'Access-Token': $localStorage.TokenKey.access,

      }

    }



    $http.delete(mustafasite + '/job_seeker/bookmark/job/' + data, config).then(function(response) {

      $scope.pindedplus[$index] = false;
      $scope.pindedcheck[$index] = false;
      $scope.pindedplusshow[$index] = true;
      $scope.pindedcheckhide[$index] = true;

    },function Error (response) {

  if (response.status == 401) {
      SweetAlert.swal({
       title: "خطا!",
       text: "برای استفاده از سرویسهای سامانه صدف لازم است ثبت نام نموده و یا به حساب کاربری خود وارد شوید.",
       type: "error",
       showCancelButton: false,
       confirmButtonColor: "#DD6B55",
       confirmButtonText: "بازگشت",
     });
  }

  if (response.status == 404) {
      SweetAlert.swal({
       title: "خطا!",
       text: "شغل مورد نظر شما اخیرا از سامانه حذف گردیده است.",
       type: "error",
       showCancelButton: false,
       confirmButtonColor: "#DD6B55",
       confirmButtonText: "بازگشت",
     });
  }

  if (response.status == 403) {
      SweetAlert.swal({
       title: "خطا!",
       text: "با عرض پوزش ، سامانه تا دقایقی در دسترس نمیباشد. لطفا در زمان دیگری دوباره اقدام فرمایید.",
       type: "error",
       showCancelButton: false,
       confirmButtonColor: "#DD6B55",
       confirmButtonText: "بازگشت",
     });
  }

  if (response.status == 500) {
      SweetAlert.swal({
       title: "خطا!",
       text: "با عرض پوزش ، سامانه تا دقایقی در دسترس نمیباشد. لطفا در زمان دیگری دوباره اقدام فرمایید.",
       type: "error",
       showCancelButton: false,
       confirmButtonColor: "#DD6B55",
       confirmButtonText: "بازگشت",
     });
  }




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

    },function Error (response) {

  if (response.status == 401) {
      SweetAlert.swal({
       title: "خطا!",
       text: "برای استفاده از سرویسهای سامانه صدف لازم است ثبت نام نموده و یا به حساب کاربری خود وارد شوید.",
       type: "error",
       showCancelButton: false,
       confirmButtonColor: "#DD6B55",
       confirmButtonText: "بازگشت",
     });
  }

  if (response.status == 404) {
      SweetAlert.swal({
       title: "خطا!",
       text: "شغل مورد نظر شما اخیرا از سامانه حذف گردیده است.",
       type: "error",
       showCancelButton: false,
       confirmButtonColor: "#DD6B55",
       confirmButtonText: "بازگشت",
     });
  }

  if (response.status == 403) {
      SweetAlert.swal({
       title: "خطا!",
       text: "برای درخواست این موقعیت شغلی ابتدا میبایست پروفایل کاربری خود را تکمیل نمایید.",
       type: "error",
       showCancelButton: false,
       confirmButtonColor: "#DD6B55",
       confirmButtonText: "بازگشت",
     });
  }

  if (response.status == 500) {
      SweetAlert.swal({
       title: "خطا!",
       text: "با عرض پوزش ، سامانه تا دقایقی در دسترس نمیباشد. لطفا در زمان دیگری دوباره اقدام فرمایید.",
       type: "error",
       showCancelButton: false,
       confirmButtonColor: "#DD6B55",
       confirmButtonText: "بازگشت",
     });
  }




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

    },function Error (response) {

  if (response.status == 401) {
      SweetAlert.swal({
       title: "خطا!",
       text: "برای استفاده از سرویسهای سامانه صدف لازم است ثبت نام نموده و یا به حساب کاربری خود وارد شوید.",
       type: "error",
       showCancelButton: false,
       confirmButtonColor: "#DD6B55",
       confirmButtonText: "بازگشت",
     });
  }

  if (response.status == 404) {
      SweetAlert.swal({
       title: "خطا!",
       text: "شغل مورد نظر شما اخیرا از سامانه حذف گردیده است.",
       type: "error",
       showCancelButton: false,
       confirmButtonColor: "#DD6B55",
       confirmButtonText: "بازگشت",
     });
  }

  if (response.status == 403) {
      SweetAlert.swal({
       title: "خطا!",
       text: "برای درخواست این موقعیت شغلی ابتدا میبایست پروفایل کاربری خود را تکمیل نمایید.",
       type: "error",
       showCancelButton: false,
       confirmButtonColor: "#DD6B55",
       confirmButtonText: "بازگشت",
     });
  }

  if (response.status == 500) {
      SweetAlert.swal({
       title: "خطا!",
       text: "با عرض پوزش ، سامانه تا دقایقی در دسترس نمیباشد. لطفا در زمان دیگری دوباره اقدام فرمایید.",
       type: "error",
       showCancelButton: false,
       confirmButtonColor: "#DD6B55",
       confirmButtonText: "بازگشت",
     });
  }




});




  }



  $scope.showajob = function(item) {

      ShareData.setPropertyjobid(item.id);

      $location.path("apostpage");

  }



});
