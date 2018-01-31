console.clear();



app.controller('spmainpage', function($compile, $sce, $scope, $window, $http, ShareData, $location, $localStorage, $sessionStorage) {

  var mustafasite = "https://sadaf.systmngr.ir/api/v1";






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
      title: 'ارزیابی از کارجویان',
      img: 'assets/images/sptopb3.svg',
      text: 'در سامانه صدف کارجویان در فرآیند معرفی به کارفرمایان توسط کارگزاران در سه سطح مورد ارزیابی قرار می گیرند. ارزیابی از طریق آزمون های آنلاین، ارزیابی مهارتی و ارزیابی شایستگی.',
    },

    {
      title: 'نمایش خدمات و محصولات',
      img: 'assets/images/sptopb2.svg',
      text: 'کارگزاران می توانند از طریق پروفایل خود و فضاهای تبلیلغات در سامان صدف سرویس و خدمات خود را به کارفرمایان و کارجویان ارائه و  معرفی نمایند',
    },

    {
      title: 'مشاوره به کارفرمایان',
      img: 'assets/images/sptopb1.svg',
      text: 'در فرآیند ارائه هر خدمت کارفرمایان و کارجویان می توانند در مورد سرویس و خدمات کارگزاران به صورت آنلاین مشاوره دریافت نمایند.',
    },

  ];



  var config = {

    headers: {

      'Content-Type': 'application/json'

    }

  }



  $http.get(mustafasite + "/service_provider?per_page=12", config).then(function(response) {

    $scope.serviceproviders = response.data.hits;


  });







  $scope.showasp = function(serviceprovider) {

    ShareData.setPropertyspid(serviceprovider.id);

    $location.path("spprofilepage");

  }



  $scope.RegSp = function(directphone, organemail) {

    var data = {

      phone: directphone,

      email: organemail

    };



    var config = {

      headers: {

        'Content-Type': 'application/json'

      }

    }




    $http.post(mustafasite + '/service_provider/request', JSON.stringify(data), config).then(function(response) {

      $scope.directphone = null
      $scope.organemail = null;
      SweetAlert.swal({
       title: "تبریک!",
       text: "درخواست شما برای عضویت در سامانه صدف با موفیقت ثبت شد. به زودی سامانه صدف با شما تماس خواهد گرفت.",
       type: "success",
       showCancelButton: false,
       confirmButtonColor: "#29b572",
       confirmButtonText: "ورود",
     });


    },function Error (response) {

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

      if (response.status == 409) {
          SweetAlert.swal({
           title: "خطا!",
           text: "شما قبلا با این مشخصات در سامانه صدف درخواست عضویت داده اید.",
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





});
