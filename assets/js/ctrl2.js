console.clear();



app.controller('jobseekermainpage', function($compile, $sce, $scope, $window, $http, ShareData, $location, $localStorage, $sessionStorage,SweetAlert) {

  var mustafasite = "https://sadaf.systmngr.ir/api/v1";





  $scope.showalljobs = function() {

    ShareData.setPropertysermahhp("");

    $location.path("jobpostspage");

  }


  $scope.soonservice = function() {
    SweetAlert.swal({
     title: "کاربر گرامی",
     text: "این سرویس به زودی بر روی سامانه فعال خواهد شد.",
     type: "warning",
     showCancelButton: false,
     confirmButtonColor: "#DD6B55",
     confirmButtonText: "متوجه شدم",
   })
  }

  $scope.gotoprofilepage = function() {
    $location.path("jobseekerprofilepage");
  }



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



  // $scope.companystatistics = [
  //
  //   {
  //     img: 'assets/images/statistics1.svg',
  //     number: '۲۰۱۵۵۳',
  //     title: 'نیروی کارجو',
  //   },
  //
  //   {
  //     img: 'assets/images/statistics2.svg',
  //     number: '۸۷۸۵',
  //     title: 'شرکت/سازمان',
  //   },
  //
  //   {
  //     img: 'assets/images/statistics3.svg',
  //     number: '۱۲۰۸',
  //     title: 'موقعیت شغلی',
  //   },
  //
  //   {
  //     img: 'assets/images/statistics4.svg',
  //     number: '۱۷۹',
  //     title: 'کارگزار خدمات',
  //   },
  //
  //   {
  //     img: 'assets/images/statistics5.svg',
  //     number: '36',
  //     title: 'فرصت پژوهشی',
  //   },
  //
  // ];
  //




  var config = {

    headers: {

      'Content-Type': 'application/json',
      'Access-Token': $localStorage.TokenKey.access,


    }

  }



  $http.get(mustafasite + "/job?research=false&per_page=9", config).then(function(response) {

    $scope.jobsdata = response.data.hits;


  });

  var confignt = {

    headers: {

      'Content-Type': 'application/json',

    }

  }

  $http.get(mustafasite + "/statistic", confignt).then(function(response) {

    $scope.statistic = response.data;

  });






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


  $scope.Searchmahratfun = function(searchmaharat) {

    ShareData.setPropertysermahhp(searchmaharat);

    $location.path("acertificatepage");

  }



  $scope.Searchjobfun = function(searchjob2) {

    ShareData.setPropertysermahhp(searchjob2);

    $location.path("jobpostspage");

  }







  $scope.showajob = function(item) {

    // var config = {
    //
    //   headers: {
    //
    //     'Content-Type': 'application/json',
    //
    //     'Access-Token': $localStorage.TokenKey.access,
    //
    //   }
    //
    // }

    // $http.get(mustafasite + "/job_seeker", config).then(function(response) {
    //
    //
    //
    // });

    ShareData.setPropertyjobid(item.id);

    $location.path("apostpage");

  }







  $(window).scroll(function() {

    if ($(this).scrollTop() > 100) {

      $('.scrollToTop').fadeIn();

    } else {

      $('.scrollToTop').fadeOut();

    }

  });

  $('.scrollToTop').click(function() {

    $("html, body").animate({

      scrollTop: 0

    }, 1000);

    return false;

  });





});
