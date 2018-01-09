console.clear();



app.controller('spprofilepage', function($compile, $sce, $scope, $window, $http, Upload, $timeout, ShareData, $location, $localStorage, $sessionStorage) {



  var mustafasite = "https://sadaf.systmngr.ir/api/v1";



  $scope.commestarrating = 4;

  $scope.commestaroptions = {

    ratedFill: '#FFD24D',

    normalFill: '#888a8c',

        rtl: false,

    readOnly: true,

    maxValue: 5,

    numStars: 5,

    spacing: "5px",

        starWidth: "16px"

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





  $scope.showpagestarrating = 4;

  $scope.showpagestaroptions = {

    ratedFill: '#FFD24D',

    normalFill: '#fff',

        rtl: false,

    readOnly: false,

    maxValue: 5,

    numStars: 5,

    spacing: "5px",

        starWidth: "20px"

  };





  $scope.showmulstarrating1 = 4.2;

  $scope.showmulstaroptions1 = {

    ratedFill: '#56ACE0',

    normalFill: '#E6E6E6',

        rtl: false,

    readOnly: false,

    maxValue: 5,

    numStars: 5,

    spacing: "5px",

        starWidth: "20px"

  };



  $scope.showmulstarrating2 = 4.2;

  $scope.showmulstaroptions2 = {

    ratedFill: '#56ACE0',

    normalFill: '#fff',

        rtl: false,

    readOnly: false,

    maxValue: 5,

    numStars: 5,

    spacing: "5px",

        starWidth: "17px"

  };



  $scope.showmulstarrating3 = 4.2;

  $scope.showmulstaroptions3 = {

    ratedFill: '#56ACE0',

    normalFill: '#fff',

        rtl: false,

    readOnly: false,

    maxValue: 5,

    numStars: 5,

    spacing: "5px",

        starWidth: "17px"

  };



  $scope.showmulstarrating4 = 4.2;

  $scope.showmulstaroptions4 = {

    ratedFill: '#56ACE0',

    normalFill: '#fff',

        rtl: false,

    readOnly: false,

    maxValue: 5,

    numStars: 5,

    spacing: "5px",

        starWidth: "17px"

  };





  $scope.showmulstarrating5 = 4.2;

  $scope.showmulstaroptions5 = {

    ratedFill: '#56ACE0',

    normalFill: '#fff',

        rtl: false,

    readOnly: false,

    maxValue: 5,

    numStars: 5,

    spacing: "5px",

        starWidth: "17px"

  };



  $scope.showmulstarrating6 = 4.2;

  $scope.showmulstaroptions6 = {

    ratedFill: '#56ACE0',

    normalFill: '#fff',

        rtl: false,

    readOnly: false,

    maxValue: 5,

    numStars: 5,

    spacing: "5px",

        starWidth: "17px"

  };









  $scope.showonestarrating1 = 4 / 5;

  $scope.showonestaroptions1 = {

    ratedFill: '#FFD24D',

    normalFill: '#fff',

        rtl: false,

    readOnly: true,

    maxValue: 1,

    numStars: 1,

    spacing: "5px",

        starWidth: "20px"

  };



  $scope.showonestarrating2 = 4 / 5;

  $scope.showonestaroptions2 = {

    ratedFill: '#FFD24D',

    normalFill: '#fff',

        rtl: false,

    readOnly: true,

    maxValue: 1,

    numStars: 1,

    spacing: "5px",

        starWidth: "17px"

  };



  $scope.showonestarrating3 = 4 / 5;

  $scope.showonestaroptions3 = {

    ratedFill: '#FFD24D',

    normalFill: '#fff',

        rtl: false,

    readOnly: true,

    maxValue: 1,

    numStars: 1,

    spacing: "5px",

        starWidth: "17px"

  };



  $scope.showonestarrating4 = 4 / 5;

  $scope.showonestaroptions4 = {

    ratedFill: '#FFD24D',

    normalFill: '#fff',

        rtl: false,

    readOnly: true,

    maxValue: 1,

    numStars: 1,

    spacing: "5px",

        starWidth: "17px"

  };



  $scope.showonestarrating5 = 4 / 5;

  $scope.showonestaroptions5 = {

    ratedFill: '#FFD24D',

    normalFill: '#fff',

        rtl: false,

    readOnly: true,

    maxValue: 1,

    numStars: 1,

    spacing: "5px",

        starWidth: "17px"

  };



  $scope.showonestarrating6 = 4 / 5;

  $scope.showonestaroptions6 = {

    ratedFill: '#FFD24D',

    normalFill: '#fff',

        rtl: false,

    readOnly: true,

    maxValue: 1,

    numStars: 1,

    spacing: "5px",

        starWidth: "17px"

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



  $scope.showpagerectanrating = 7.2;

  $scope.showpagerectanoptions = {

    ratedFill: '#3DC474',

    normalFill: '#E6E6E6',

        rtl: false,

    readOnly: false,

    maxValue: 10,

    numStars: 10,

    starWidth: "17px",

    spacing: "-5px",



    "starSvg": '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="-316 235.7 6.1 11.3" style="enable-background:new -316 235.7 6.1 11.3;" xml:space="preserve">' +

      '<path id="XMLID_1775_" class="st0" d="M-310.9,247h-4.1c-0.6,0-1-0.4-1-1v-9.3c0-0.6,0.4-1,1-1h4.1c0.6,0,1,0.4,1,1v9.3  C-309.9,246.6-310.4,247-310.9,247z"/>' +

      '</svg>'

  };



  $scope.showmulrectanrating1 = 7.2;

  $scope.showmulrectanoptions1 = {

    ratedFill: '#3DC474',

    normalFill: '#c9c9c9',

        rtl: false,

    readOnly: false,

    maxValue: 10,

    numStars: 10,

    starWidth: "17px",

    spacing: "-4px",



    "starSvg": '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="-316 235.7 6.1 11.3" style="enable-background:new -316 235.7 6.1 11.3;" xml:space="preserve">' +

      '<path id="XMLID_1775_" class="st0" d="M-310.9,247h-4.1c-0.6,0-1-0.4-1-1v-9.3c0-0.6,0.4-1,1-1h4.1c0.6,0,1,0.4,1,1v9.3  C-309.9,246.6-310.4,247-310.9,247z"/>' +

      '</svg>'

  };



  $scope.showmulrectanrating2 = 7.2;

  $scope.showmulrectanoptions2 = {

    ratedFill: '#3DC474',

    normalFill: '#c9c9c9',

        rtl: false,

    readOnly: false,

    maxValue: 10,

    numStars: 10,

    starWidth: "17px",

    spacing: "-4px",



    "starSvg": '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="-316 235.7 6.1 11.3" style="enable-background:new -316 235.7 6.1 11.3;" xml:space="preserve">' +

      '<path id="XMLID_1775_" class="st0" d="M-310.9,247h-4.1c-0.6,0-1-0.4-1-1v-9.3c0-0.6,0.4-1,1-1h4.1c0.6,0,1,0.4,1,1v9.3  C-309.9,246.6-310.4,247-310.9,247z"/>' +

      '</svg>'

  };



  $scope.showmulrectanrating3 = 7.2;

  $scope.showmulrectanoptions3 = {

    ratedFill: '#3DC474',

    normalFill: '#c9c9c9',

        rtl: false,

    readOnly: false,

    maxValue: 10,

    numStars: 10,

    starWidth: "17px",

    spacing: "-4px",



    "starSvg": '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="-316 235.7 6.1 11.3" style="enable-background:new -316 235.7 6.1 11.3;" xml:space="preserve">' +

      '<path id="XMLID_1775_" class="st0" d="M-310.9,247h-4.1c-0.6,0-1-0.4-1-1v-9.3c0-0.6,0.4-1,1-1h4.1c0.6,0,1,0.4,1,1v9.3  C-309.9,246.6-310.4,247-310.9,247z"/>' +

      '</svg>'

  };



  $scope.showmulrectanrating4 = 7.2;

  $scope.showmulrectanoptions4 = {

    ratedFill: '#3DC474',

    normalFill: '#c9c9c9',

        rtl: false,

    readOnly: false,

    maxValue: 10,

    numStars: 10,

    starWidth: "17px",

    spacing: "-4px",



    "starSvg": '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="-316 235.7 6.1 11.3" style="enable-background:new -316 235.7 6.1 11.3;" xml:space="preserve">' +

      '<path id="XMLID_1775_" class="st0" d="M-310.9,247h-4.1c-0.6,0-1-0.4-1-1v-9.3c0-0.6,0.4-1,1-1h4.1c0.6,0,1,0.4,1,1v9.3  C-309.9,246.6-310.4,247-310.9,247z"/>' +

      '</svg>'

  };





  $scope.showmulrectanrating5 = 7.2;

  $scope.showmulrectanoptions5 = {

    ratedFill: '#3DC474',

    normalFill: '#c9c9c9',

        rtl: false,

    readOnly: false,

    maxValue: 10,

    numStars: 10,

    starWidth: "17px",

    spacing: "-4px",



    "starSvg": '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="-316 235.7 6.1 11.3" style="enable-background:new -316 235.7 6.1 11.3;" xml:space="preserve">' +

      '<path id="XMLID_1775_" class="st0" d="M-310.9,247h-4.1c-0.6,0-1-0.4-1-1v-9.3c0-0.6,0.4-1,1-1h4.1c0.6,0,1,0.4,1,1v9.3  C-309.9,246.6-310.4,247-310.9,247z"/>' +

      '</svg>'

  };





  $scope.showmulrectanrating6 = 7.2;

  $scope.showmulrectanoptions6 = {

    ratedFill: '#3DC474',

    normalFill: '#c9c9c9',

        rtl: false,

    readOnly: false,

    maxValue: 10,

    numStars: 10,

    starWidth: "17px",

    spacing: "-4px",



    "starSvg": '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="-316 235.7 6.1 11.3" style="enable-background:new -316 235.7 6.1 11.3;" xml:space="preserve">' +

      '<path id="XMLID_1775_" class="st0" d="M-310.9,247h-4.1c-0.6,0-1-0.4-1-1v-9.3c0-0.6,0.4-1,1-1h4.1c0.6,0,1,0.4,1,1v9.3  C-309.9,246.6-310.4,247-310.9,247z"/>' +

      '</svg>'

  };





  $scope.showmulrectanrating7 = 7.2;

  $scope.showmulrectanoptions7 = {

    ratedFill: '#3DC474',

    normalFill: '#c9c9c9',

        rtl: false,

    readOnly: false,

    maxValue: 10,

    numStars: 10,

    starWidth: "17px",

    spacing: "-4px",



    "starSvg": '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="-316 235.7 6.1 11.3" style="enable-background:new -316 235.7 6.1 11.3;" xml:space="preserve">' +

      '<path id="XMLID_1775_" class="st0" d="M-310.9,247h-4.1c-0.6,0-1-0.4-1-1v-9.3c0-0.6,0.4-1,1-1h4.1c0.6,0,1,0.4,1,1v9.3  C-309.9,246.6-310.4,247-310.9,247z"/>' +

      '</svg>'

  };




  $scope.NotShowForSP = function() {
    if ($localStorage.UserType == 'SP') {
      return false
    } else {
      return true
    }
  }

  $scope.ShowForSP = function() {
    if ($localStorage.UserType == 'SP') {
      return true
    } else {
      return false
    }
  }





  $scope.max = 100;





  $http.get(mustafasite + '/service_provider/me', {

    headers: {

      "Content-Type": 'application/json',

      'Access-Token': $localStorage.TokenKey.access,

    }

  }).then(function(response) {

    $scope.current = response.data.null_percent;
    $scope.fa_name = response.data.fa_name;
    $scope.avatar = response.data.avatar;
    $scope.business_type = response.data.business_type;
    $scope.motto = response.data.motto;
    $scope.fax = response.data.fax;
    $scope.address = response.data.address;
    $scope.second_address = response.data.second_address;
    $scope.email = response.data.email;
    $scope.web_site = response.data.web_site;
    $scope.socials = response.data.socials;


    $scope.editorEnabledbusiness_type = false;



    $scope.enableEditorbusiness_type = function() {

      $scope.editorEnabledbusiness_type = true;

      $scope.editableTitlebusiness_type = $scope.business_type;

    };

    $scope.showpupedit = function() {
      if ($localStorage.UserType == 'JS') {
        $('#ShowPopupEditTamas').modal('show');
      } else {

      }



    };



    $scope.disableEditorbusiness_type = function() {

      $scope.editorEnabledbusiness_type = false;

    };



    $scope.saveeditbusiness_type = function() {

      var data = {

        business_type: $scope.editableTitlebusiness_type,

      };



      var config = {

        headers: {

          'Content-Type': 'application/json',

          'Access-Token': $localStorage.TokenKey.access,

        }

      }

      $http.put(mustafasite + "/service_provider", JSON.stringify(data), config).then(function(response) {

        $scope.position = $scope.editableTitlebusiness_type;

        $scope.disableEditorbusiness_type();

      });



    };

    $scope.editorEnabledmotto = false;



    $scope.enableEditormotto = function() {

      $scope.editorEnabledmotto = true;

      $scope.editableTitlemotto = $scope.motto;

    };



    $scope.disableEditormotto = function() {

      $scope.editorEnabledmotto = false;

    };





    $scope.saveeditmotto = function() {

      var data = {

        motto: $scope.editableTitlemotto,

      };



      var config = {

        headers: {

          'Content-Type': 'application/json',

          'Access-Token': $localStorage.TokenKey.access,

        }

      }

      $http.put(mustafasite + "/service_provider", JSON.stringify(data), config).then(function(response) {

        $scope.motto = $scope.editableTitlemotto;

        $scope.disableEditormotto();

      });



    };





    $scope.TamasFormJS = function() {

      var data = {

        fixed_phone: $scope.phonefix,

        address: $scope.address,

      };



      var config = {

        headers: {

          'Content-Type': 'application/json',

          'Access-Token': $localStorage.TokenKey.access,

        }

      }

      $http.put(mustafasite + "/job_seeker", JSON.stringify(data), config).then(function(response) {

        $scope.phonefix = $scope.phonefix;

        $scope.address = $scope.address;

        $('#ShowPopupEditTamas').modal('hide');

      });



    };

  });





  $scope.savelogo = function(dataUrl, name) {

    Upload.upload({

      url: '/sadafupload/upload.php',

      data: {

        'targetPath': 'images/',

        file: Upload.dataUrltoBlob(dataUrl, name)

      },

    }).then(function(response) {

      $timeout(function() {

        $scope.logopic = '/sadafupload/' + response.data;

        $scope.result = response.data;

        $('#ShowPopupUploadLogo').modal('hide');

        $scope.logopicfile = null;



      });

    }, function(response) {

      if (response.status > 0) $scope.errorMsg = response.status

        +
        ': ' + response.data;

    });

  }



  $scope.services = [

    {
      id: '1',
      servetitle: 'تست MBTI',
      servedesc: 'لورم ایپسوم به انگلیسی متنی است بی مفهوم که تشکیل شده از کلمات معنی دار یا بی معنی کنار هم. کاربر با دیدن متن لورم ایپسوم تصور میکند متنی که در صفحه مشاهده میکند این متن واقعی و مربوط به توضیحات صفحه مورد نظر است واقعی است. حالا سوال اینجاست که این متن " لورم ایپسوم " به چه دردی میخورد و اساسا برای چه منظور و هدفی ساخته شده است؟ پیش از بوجود آمدن لورم ایپسوم ، طراحان وب سایت در پروژه های وب سایت و طراحان کرافیک در پروژه های طراحی کاتولوگ ، بروشور ، پوستر و ... همواره با این مشکل مواجه بودند که صفحات پروژه خود را پیش از آنکه متن اصلی ',
      serveimg: 'http://gorganiau.ac.ir/my_doc/gorgan/education/faculties/humanities/photo/business-management.jpg',
    },

    {
      id: '1',
      servetitle: 'تست ICDL',
      servedesc: 'لورم ایپسوم به انگلیسی متنی است بی مفهوم که تشکیل شده از کلمات معنی دار یا بی معنی کنار هم. کاربر با دیدن متن لورم ایپسوم تصور میکند متنی که در صفحه مشاهده میکند این متن واقعی و مربوط به توضیحات صفحه مورد نظر است واقعی است. حالا سوال اینجاست که این متن " لورم ایپسوم " به چه دردی میخورد و اساسا برای چه منظور و هدفی ساخته شده است؟ پیش از بوجود آمدن لورم ایپسوم ، طراحان وب سایت در پروژه های وب سایت و طراحان کرافیک در پروژه های طراحی کاتولوگ ، بروشور ، پوستر و ... همواره با این مشکل مواجه بودند که صفحات پروژه خود را پیش از آنکه متن اصلی ',
      serveimg: 'http://gorganiau.ac.ir/my_doc/gorgan/education/faculties/humanities/photo/business-management.jpg',
    },

    {
      id: '1',
      servetitle: 'تست مایرز',
      servedesc: 'لورم ایپسوم به انگلیسی متنی است بی مفهوم که تشکیل شده از کلمات معنی دار یا بی معنی کنار هم. کاربر با دیدن متن لورم ایپسوم تصور میکند متنی که در صفحه مشاهده میکند این متن واقعی و مربوط به توضیحات صفحه مورد نظر است واقعی است. حالا سوال اینجاست که این متن " لورم ایپسوم " به چه دردی میخورد و اساسا برای چه منظور و هدفی ساخته شده است؟ پیش از بوجود آمدن لورم ایپسوم ، طراحان وب سایت در پروژه های وب سایت و طراحان کرافیک در پروژه های طراحی کاتولوگ ، بروشور ، پوستر و ... همواره با این مشکل مواجه بودند که صفحات پروژه خود را پیش از آنکه متن اصلی ',
      serveimg: 'http://gorganiau.ac.ir/my_doc/gorgan/education/faculties/humanities/photo/business-management.jpg',
    },

  ];



  $scope.comments = [

    {
      id: '1',
      profileimg: 'https://www.1plusx.com/app/mu-plugins/all-in-one-seo-pack-pro/images/default-user-image.png',
      commenttext: 'لورم ایپسوم به انگلیسی متنی است بی مفهوم که تشکیل شده از کلمات معنی دار یا بی معنی کنار هم. کاربر با دیدن متن لورم ایپسوم تصور میکند متنی که در صفحه  لورم ایپسوم به انگلیسی متنی است بی مفهوم که تشکیل شده از کلمات معنی دار یا بی معنی کنار هم. کاربر با دیدن متن لورم ایپسوم تصور میکند متنی که در صفحه  ',
    },

    {
      id: '1',
      profileimg: 'https://www.1plusx.com/app/mu-plugins/all-in-one-seo-pack-pro/images/default-user-image.png',
      commenttext: 'لورم ایپسوم به انگلیسی متنی است بی مفهوم که تشکیل شده از کلمات معنی دار یا بی معنی کنار هم. کاربر با دیدن متن لورم ایپسوم تصور میکند متنی که در صفحه  لورم ایپسوم به انگلیسی متنی است بی مفهوم که تشکیل شده از کلمات معنی دار یا بی معنی کنار هم. کاربر با دیدن متن لورم ایپسوم تصور میکند متنی که در صفحه  ',
    },

    {
      id: '1',
      profileimg: 'https://www.1plusx.com/app/mu-plugins/all-in-one-seo-pack-pro/images/default-user-image.png',
      commenttext: 'لورم ایپسوم به انگلیسی متنی است بی مفهوم که تشکیل شده از کلمات معنی دار یا بی معنی کنار هم. کاربر با دیدن متن لورم ایپسوم تصور میکند متنی که در صفحه  لورم ایپسوم به انگلیسی متنی است بی مفهوم که تشکیل شده از کلمات معنی دار یا بی معنی کنار هم. کاربر با دیدن متن لورم ایپسوم تصور میکند متنی که در صفحه  ',
    },

  ];


  //
  // $scope.ourteam = [
  //
  //   {
  //     id: '1',
  //     profileimg: 'https://www.1plusx.com/app/mu-plugins/all-in-one-seo-pack-pro/images/default-user-image.png',
  //     name: 'نادر فتحی سرایداری بالا تپه',
  //     place: 'مدیر فنی',
  //     inlink: ' ',
  //   },
  //
  //   {
  //     id: '2',
  //     profileimg: 'https://www.1plusx.com/app/mu-plugins/all-in-one-seo-pack-pro/images/default-user-image.png',
  //     name: '2نادر فتحی سرایداری بالا تپه',
  //     place: 'مدیر فنی',
  //     inlink: ' ',
  //   },
  //
  //   {
  //     id: '3',
  //     profileimg: 'https://www.1plusx.com/app/mu-plugins/all-in-one-seo-pack-pro/images/default-user-image.png',
  //     name: '3نادر فتحی سرایداری بالا تپه',
  //     place: 'مدیر فنی',
  //     inlink: ' ',
  //   },
  //
  //   {
  //     id: '4',
  //     profileimg: 'https://www.1plusx.com/app/mu-plugins/all-in-one-seo-pack-pro/images/default-user-image.png',
  //     name: '3نادر فتحی سرایداری بالا تپه',
  //     place: 'مدیر فنی',
  //     inlink: ' ',
  //   },
  //
  //   {
  //     id: '5',
  //     profileimg: 'https://www.1plusx.com/app/mu-plugins/all-in-one-seo-pack-pro/images/default-user-image.png',
  //     name: '3نادر فتحی سرایداری بالا تپه',
  //     place: 'مدیر فنی',
  //     inlink: ' ',
  //   },
  //
  //   {
  //     id: '6',
  //     profileimg: 'https://www.1plusx.com/app/mu-plugins/all-in-one-seo-pack-pro/images/default-user-image.png',
  //     name: '3نادر فتحی سرایداری بالا تپه',
  //     place: 'مدیر فنی',
  //     inlink: ' ',
  //   },
  //
  //   {
  //     id: '7',
  //     profileimg: 'https://www.1plusx.com/app/mu-plugins/all-in-one-seo-pack-pro/images/default-user-image.png',
  //     name: '3نادر فتحی سرایداری بالا تپه',
  //     place: 'مدیر فنی',
  //     inlink: ' ',
  //   },
  //
  //   {
  //     id: '8',
  //     profileimg: 'https://www.1plusx.com/app/mu-plugins/all-in-one-seo-pack-pro/images/default-user-image.png',
  //     name: '3نادر فتحی سرایداری بالا تپه',
  //     place: 'مدیر فنی',
  //     inlink: ' ',
  //   },
  //
  //   {
  //     id: '9',
  //     profileimg: 'https://www.1plusx.com/app/mu-plugins/all-in-one-seo-pack-pro/images/default-user-image.png',
  //     name: '3نادر فتحی سرایداری بالا تپه',
  //     place: 'مدیر فنی',
  //     inlink: ' ',
  //   },
  //
  //   {
  //     id: '10',
  //     profileimg: 'https://www.1plusx.com/app/mu-plugins/all-in-one-seo-pack-pro/images/default-user-image.png',
  //     name: '3نادر فتحی سرایداری بالا تپه',
  //     place: 'مدیر فنی',
  //     inlink: ' ',
  //   },
  //
  //   {
  //     id: '11',
  //     profileimg: 'https://www.1plusx.com/app/mu-plugins/all-in-one-seo-pack-pro/images/default-user-image.png',
  //     name: '3نادر فتحی سرایداری بالا تپه',
  //     place: 'مدیر فنی',
  //     inlink: ' ',
  //   },
  //
  // ];



  // $scope.editperson = function(index) {
  //
  //
  //
  //   $scope.editpersonf = angular.copy(
  //
  //     $scope.ourteam[index]
  //
  //   );
  //
  //   $scope.selectededitpersonfIndex = index;
  //
  //
  //
  // }

	$scope.getmyteams = function() {

    var config = {

      headers: {

        'Content-Type': 'application/json',

        'Access-Token': $localStorage.TokenKey.access,

      }

    }

    $http.get(mustafasite + "/service_provider/my_teams", config).then(function(response) {
			$scope.ourteam = response.data.services;
    });
  }

	$scope.getmyteams();


  $scope.saveperson = function(dataUrl, name) {

    // Upload.upload({
    //
    //   url: '/sadafupload/upload.php',
    //
    //   data: {
    //
    //     'targetPath': 'images/',
    //
    //     file: Upload.dataUrltoBlob(dataUrl, name)
    //
    //   },
    //
    // }).then(function(response) {
    //
    //   $timeout(function() {
    //
    //     $scope.editpersonf.profileimg = '/sadafupload/' + response.data;
    //
    //     $scope.result = response.data;
    //
    //     if ($scope.selectededitpersonfIndex == -1) {
    //
    //       $scope.ourteam.push(angular.copy($scope.editpersonf));
    //
    //       $scope.$parent.selectededitpersonfIndex = $scope.ourteam.length - 1;
    //
    //     } else {
    //
    //       $scope.ourteam[$scope.selectededitpersonfIndex] = angular.copy($scope.editpersonf);
    //
    //     }
    //
    //     $('#ShowPopupEditperson').modal('hide');
    //
    //     $scope.personpicFile = null;
    //
    //
    //
    //   });
    //
    // }, function(response) {
    //
    //   if (response.status > 0) $scope.errorMsg = response.status
    //
    //     +
    //     ': ' + response.data;
    //
    // });

		dataUrl2 = dataUrl.replace("data:image/png;base64,", "");

		var data = {

			"image": dataUrl2,
			"url": $scope.teampersonlink,
			"name": $scope.teampersonname,
			"position": $scope.teampersonposition,


		}



		var config = {

			headers: {

				'Content-Type': 'application/json',

				'Access-Token': $localStorage.TokenKey.access,

			}

		}





		$http.post(mustafasite + '/service_provider/team', JSON.stringify(data), config).then(function(response) {

				$scope.getmyteams();
				$('#ShowPopupEditperson').modal('hide');
				$scope.teampersonlink = null;
				$scope.teampersonname = null;
			  $scope.teampersonposition = null;

		});

  }



  $scope.addperson = function() {

   $('#ShowPopupEditperson').modal('show');

  };





  $scope.removeperson = function(person) {


    var data = person.id;



    var config = {

      headers: {

        'Content-Type': "multipart/form-data",
        'Access-Token': $localStorage.TokenKey.access,

      }

    }



    $http.delete(mustafasite + '/service_provider/team/' + data, config).then(function(response) {

			$scope.getmyteams();

    });


  }




});
