console.clear();



app.controller('spdashboardpage', function($compile, $sce, $scope, $window, $http, Upload, $timeout, ShareData, $location, $localStorage, $sessionStorage) {

  var mustafasite = "https://sadaf.systmngr.ir/api/v1";


  $scope.activeTabF = "tab1";



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






  $scope.max = 100;



  $scope.getaliispset = function() {

    $http.get(mustafasite + '/service_provider/me', {

      headers: {

        "Content-Type": 'application/json',

        'Access-Token': $localStorage.TokenKey.access,

      }

    }).then(function(response) {


      $scope.current = response.data.null_percent;

      $scope.logopic = response.data.avatar;

      $scope.fa_name = response.data.fa_name;

      $scope.motto = response.data.motto;

      $scope.email = response.data.email;

      $scope.activestatus = response.data.active;

      $scope.phone = response.data.phone;

      $scope.phonefix = response.data.fixed_phone;

      $scope.address = response.data.address;

      $scope.servicesmanagements = response.data.exams;

      $scope.servicesmanagementstotalItems = $scope.servicesmanagements.length;

			$scope.socials = response.data.socials;


    });


  }

  $scope.getaliispset();

  $scope.gotoprofilepage = function() {
    $location.path("spprofilepage");
    $localStorage.LocationUser = "spprofilepage";
  }



  $scope.packagesstatus = [

    {
      packagename: 'بسته یکماهه ارائه خدمات کارگزاری سامانه صدف',
      packagestatus: 'فعال',
      timee: 'Thu, 11 Jan 2018 12:43:03 GMT',
    },

  ];





  $scope.membershippackages = [

    {
      name: 'بسته ماهیانه 1 ماهه',
      price: '110 هزارتومن',
      serve1: 'سقف نامحدود',
      serve2: 'میزان فعالیت مشتریان',
      serve3: 'سقف نامحدود',
      serve4: 'سقف نامحدوده',
      btnlink: '',
    },

    {
      name: 'بسته حرفه ای 3 ماهه',
      price: '96 هزارتومن',
      serve1: 'سقف نامحدود',
      serve2: 'میزان فعالیت مشتریان',
      serve3: 'سقف نامحدود',
      serve4: 'سقف نامحدوده',
      btnlink: '',
    },

    {
      name: 'بسته حرفه ای 6 ماهه',
      price: '86 هزارتومن',
      serve1: 'سقف نامحدود',
      serve2: 'میزان فعالیت مشتریان',
      serve3: 'سقف نامحدود',
      serve4: 'سقف نامحدوده',
      btnlink: '',
      status: 'active',
    },

  ];





  $http.get(mustafasite + '/service_provider/notification', {

    headers: {

      "Content-Type": 'application/json',

      'Access-Token': $localStorage.TokenKey.access,

    }

  }).then(function(response) {

    $scope.notificationdata = response.data.notification;

    $scope.notificationtotalItems = $scope.notificationdata.length;

  });



  /*
  	 $scope.notificationdata = [

        {newnotificationclass : 'newnotification' ,description:'شی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی <a href>طرح سفارش</a> گرفته شده استفاده می نماید'},

        {newnotificationclass : 'newnotification' ,description:'شی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی <a href>طرح سفارش</a> گرفته شده استفاده می نماید<br><br><button type="button" class="btn bluebtnreverse">ارتقای پروفایل</button>'},

        {description:'شی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح '},

        {description:'شی و بی&zwnj;معنی در صنعت چاپ، صفحه&zwnj;آرایی و طراحی گرافیک گفته می&zwnj;شود. طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح <br><div class="brokersem ng-scope" ng-repeat="broker in brokers"><img class="img brokericonimg" ng-class="{active: broker == selectpebroker}" src="themeFiles/images/lk2.png" ng-click="selectpebrokerfun(broker)" role="button" tabindex="0"></div><div class="brokersem ng-scope" ng-repeat="broker in brokers"><img class="img brokericonimg" ng-class="{active: broker == selectpebroker}" src="themeFiles/images/lk1.png" ng-click="selectpebrokerfun(broker)" role="button" tabindex="0"></div><div class="brokersem ng-scope" ng-repeat="broker in brokers"><img class="img brokericonimg" ng-class="{active: broker == selectpebroker}" src="themeFiles/images/lk3.png" ng-click="selectpebrokerfun(broker)" role="button" tabindex="0"></div>'},

        {description:'شی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی <a href>طرح سفارش</a> گرفته شده استفاده می نماید<br><br><button type="button" class="btn bluebtnreverse">ارتقای پروفایل</button>'},

        {description:'شی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی <a href>طرح سفارش</a> گرفته شده استفاده می نماید'},

        {description:'شی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی <a href>طرح سفارش</a> گرفته شده استفاده می نماید<br><br><button type="button" class="btn bluebtnreverse">ارتقای پروفایل</button>'},

        {description:'شی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی <a href>طرح سفارش</a> گرفته شده استفاده می نماید'},

        {description:'شی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی <a href>طرح سفارش</a> گرفته شده استفاده می نماید<br><br><button type="button" class="btn bluebtnreverse">ارتقای پروفایل</button>'},

        {description:'شی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی <a href>طرح سفارش</a> گرفته شده استفاده می نماید'},

        {description:'شی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی <a href>طرح سفارش</a> گرفته شده استفاده می نماید<br><br><button type="button" class="btn bluebtnreverse">ارتقای پروفایل</button>'},

        {description:'شی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح '},

        {description:'شی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی <a href>طرح سفارش</a> گرفته شده استفاده می نماید'},

        {description:'شی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی <a href>طرح سفارش</a> گرفته شده استفاده می نماید<br><br><button type="button" class="btn bluebtnreverse">ارتقای پروفایل</button>'},

        {description:'شی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی <a href>طرح سفارش</a> گرفته شده استفاده می نماید'},

        {description:'شی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی <a href>طرح سفارش</a> گرفته شده استفاده می نماید<br><br><button type="button" class="btn bluebtnreverse">ارتقای پروفایل</button>'},

        {description:'شی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح '},

        {description:'شی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی <a href>طرح سفارش</a> گرفته شده استفاده می نماید'},

        {description:'شی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی <a href>طرح سفارش</a> گرفته شده استفاده می نماید<br><br><button type="button" class="btn bluebtnreverse">ارتقای پروفایل</button>'},

      ];
   */


  $scope.notificationviewby = 5;

  /*   $scope.notificationtotalItems = $scope.notificationdata.length;
   */
  $scope.notificationcurrentPage = 1;

  $scope.notificationitemsPerPage = $scope.notificationviewby;

  $scope.notificationmaxSize = 5;



  $scope.notificationsetPage = function(pageNo) {

    $scope.notificationcurrentPage = pageNo;

  };



  //$scope.pageChanged = function() {

  //console.log('Page changed to: ' + $scope.currentPage);

  //};



  // for cheche number page

  //	View <select ng-model="viewby" ng-change="setItemsPerPage(viewby)"><option>3</option><option>5</option><option>10</option><option>20</option><option>30</option><option>40</option><option>50</option></select> records at a time.

  /*

  $scope.setItemsPerPage = function(num) {

    $scope.itemsPerPage = num;

    $scope.currentPage = 1;

  }



   */

   $scope.CategoryExam = ["رزومه","روانشناختی","مهارتی","شایستگی"];
   $scope.getvahedzaman = [
     {
          "faname": "دقیقه",
          "enname": "min",
      },
      {
           "faname": "ساعت",
           "enname": "hur",
       },
       {
            "faname": "روز",
            "enname": "day",
        },
   ];

   $scope.dastekhedmatselected = "شایستگی";


  $http.get(mustafasite + '/exam').then(function(response) {
    $scope.getexamnameid = response.data.exams;
  });

  $http.get(mustafasite + '/suitability/package').then(function(response) {
    $scope.getsuitabilitynameid = response.data.packages;
  });




  $scope.savekhdmat = function() {

    var data = {
      exam_id: parseInt($scope.namekhedmatselected),
      price: parseInt($scope.pricekhedmatselected),
    };



    var config = {

      headers: {

        'Content-Type': 'application/json',

        'Access-Token': $localStorage.TokenKey.access,

      }

    }

    $http.post(mustafasite + '/exam', JSON.stringify(data), config).then(function(response) {

      $scope.namekhedmatselected = "";
      $scope.pricekhedmatselected = "";
      $("#ShowPopupaddexam").modal('hide');
      $scope.getaliispset();

    });



  }

  $scope.orderByField = '';

  $scope.reverseSort = false;



  /*   $scope. = [

    {id: '1' , name: 'MBTI', marketshare: '23',employers: '23',jobseeker: '120',condition:'صعودی',},

    {id: '2' , name: 'Neo-Pi', marketshare: '16',employers: '16',jobseeker: '52',condition:'صعودی',},

    {id: '3' , name: 'Microsoft Exell', marketshare: '17',employers: '17',jobseeker: '15',condition:'نزولی',},

    {id: '4' , name: 'Neo-Pi', marketshare: '42',employers: '42',jobseeker: '64',condition:'نزولی',},

    {id: '5' , name: 'Microsoft Exell', marketshare: '12',employers: '12',jobseeker: '48',condition:'صعودی',},

    {id: '6' , name: 'Neo-Pi', marketshare: '16',employers: '16',jobseeker: '52',condition:'صعودی',},

    {id: '7' , name: 'Microsoft Exell', marketshare: '17',employers: '17',jobseeker: '15',condition:'نزولی',},

    {id: '8' , name: 'Neo-Pi', marketshare: '42',employers: '42',jobseeker: '64',condition:'نزولی',},

    ];
   */




  $scope.removeservicesmanagement = function(servicesmanagement) {

    if (confirm('آیا مطمئنی ؟')) {



      var index = -1;



      $scope.servicesmanagements.some(function(obj, i) {

        return obj.id == servicesmanagement.id ? index = i : false;

      });



      $scope.servicesmanagements.splice($scope.servicesmanagements.indexOf(servicesmanagement), 1);

    }

  };



  $scope.expand = function(servicesmanagement) {

    if (confirm('آیا مطمئنی ؟')) {

      servicesmanagement.show_variables = !servicesmanagement.show_variables;



    }

  };





  $scope.servicesmanagementsviewby = 6;


  $scope.servicesmanagementscurrentPage = 1;

  $scope.servicesmanagementsitemsPerPage = $scope.servicesmanagementsviewby;

  $scope.servicesmanagementsmaxSize = 5;



  $scope.servicesmanagementssetPage = function(pageNo) {

    $scope.servicesmanagementscurrentPage = pageNo;

  };



  /* $scope.setItemsPerPage = function(num) {

    $scope.itemsPerPage = num;

    $scope.currentPage = 1;

  } */



  $scope.removeservicesmanagement = function(item) {

    $scope.servicesmanagements.splice(item, 1);

  };









  $scope.isreceiveVisible = false;

  $scope.issentVisible = false;

  $scope.composeEmail = {};

  $scope.activeTab = "inbox";

  $scope.sentEmails = [

    {

      id: '4',



      frommail: 'A20Group@yahoo.com',

      from: 'شرکت آسان پرداخت',

      to: 'شزکت فناپ',

      subject: 'دعوت به مصاحبه',

      date: '96/07/24',

      time: '2:33 ب.ظ',

      body: 'با سلامتحقق این هدف و چشم انداز در صورتی محقق می گردد که این سامانه دارای ویژگی¬های خاصی باشد که دارا بودن آن ویژگی¬ها در گام اول شروط لازم را جهت تحقق این چشم انداز برآورده نموده و در گام بعد این ویژگی ها با به وجود آوردن مزیت های رقابتی برای این سامانه شروط کافی جهت موفقیت این سامانه را نیز فراهم می آورد باتشکر معاونت منابع انسانی شرکت آسان پرداخت'

    },

    {

      id: '5',



      frommail: 'A20Group@yahoo.com',

      from: 'شرکت آسان پرداخت',

      to: 'شزکت فناپ',

      subject: 'دعوت به مصاحبه',

      date: '96/07/24',

      time: '2:32 ب.ظ',

      body: 'با سلامتحقق این هدف و چشم انداز در صورتی محقق می گردد که این سامانه دارای ویژگی¬های خاصی باشد که دارا بودن آن ویژگی¬ها در گام اول شروط لازم را جهت تحقق این چشم انداز برآورده نموده و در گام بعد این ویژگی ها با به وجود آوردن مزیت های رقابتی برای این سامانه شروط کافی جهت موفقیت این سامانه را نیز فراهم می آورد باتشکر معاونت منابع انسانی شرکت آسان پرداخت'

    },
  ];



  $scope.sendEmail = function(file) {

    $scope.activeTab = "sent";

    $scope.composeEmail.from = "me";

    $scope.composeEmail.to = $scope.composeEmail.to;

    $scope.composeEmail.subject = $scope.composeEmail.subject;

    $scope.composeEmail.date = "96/07/24";

    $scope.composeEmail.time = "2:30 ب.ظ";

    $scope.sentEmails.push($scope.composeEmail);

    $scope.composeEmail = {};



    file.upload = Upload.upload({

      url: '/sadafupload/upload.php',

      data: {

        'targetPath': 'images/',

        username: $scope.username,

        file: file

      },

    });



    file.upload.then(function(response) {

      $timeout(function() {

        alert('/sadafupload/' + response.data);

        $scope.composeEmail.attachfile = '/sadafupload/' + response.data;

        file.result = response.data;

        $scope.attachmailfile = null;



      });

    }, function(response) {

      if (response.status > 0)

        $scope.errorMsg = response.status + ': ' + response.data;

    });



  };







  $scope.showreceivemail = function(email) {

    $scope.isreceiveVisible = true;

    $scope.selectedreceiveEmail = email;

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



  $scope.emails = [

    {

      id: '1',

      frommail: 'A20Group@yahoo.com',

      from: 'شرکت آسان پرداخت',

      to: 'me',

      subject: 'دعوت به مصاحبه',

      date: '96/07/24',

      time: '2:33 ب.ظ',

      body: 'با سلامتحقق این هدف و چشم انداز در صورتی محقق می گردد که این سامانه دارای ویژگی¬های خاصی باشد که دارا بودن آن ویژگی¬ها در گام اول شروط لازم را جهت تحقق این چشم انداز برآورده نموده و در گام بعد این ویژگی ها با به وجود آوردن مزیت های رقابتی برای این سامانه شروط کافی جهت موفقیت این سامانه را نیز فراهم می آورد باتشکر معاونت منابع انسانی شرکت آسان پرداخت'

    },

    {

      id: '2',

      frommail: 'A20Group@yahoo.com',

      from: 'شرکت آسان پرداخت',

      to: 'me',

      subject: 'دعوت به مصاحبه',

      date: '96/07/24',

      time: '2:32 ب.ظ',

      body: 'با سلامتحقق این هدف و چشم انداز در صورتی محقق می گردد که این سامانه دارای ویژگی¬های خاصی باشد که دارا بودن آن ویژگی¬ها در گام اول شروط لازم را جهت تحقق این چشم انداز برآورده نموده و در گام بعد این ویژگی ها با به وجود آوردن مزیت های رقابتی برای این سامانه شروط کافی جهت موفقیت این سامانه را نیز فراهم می آورد باتشکر معاونت منابع انسانی شرکت آسان پرداخت'

    },

    {

      id: '3',

      frommail: 'A20Group@yahoo.com',

      from: 'شرکت آسان پرداخت',

      to: 'me',

      subject: 'دعوت به مصاحبه',

      date: '96/07/24',

      time: '2:31 ب.ظ',

      body: 'با سلامتحقق این هدف و چشم انداز در صورتی محقق می گردد که این سامانه دارای ویژگی¬های خاصی باشد که دارا بودن آن ویژگی¬ها در گام اول شروط لازم را جهت تحقق این چشم انداز برآورده نموده و در گام بعد این ویژگی ها با به وجود آوردن مزیت های رقابتی برای این سامانه شروط کافی جهت موفقیت این سامانه را نیز فراهم می آورد باتشکر معاونت منابع انسانی شرکت آسان پرداخت'

    }

  ];



  $scope.replayereceivemail = function(selectedreceiveEmail) {

    $scope.composeEmail = {};

    $scope.activeTab = "compose";

    $scope.composeEmail.to = selectedreceiveEmail.frommail;

    $scope.isreceiveVisible = false;

  };



  $scope.replayesentmail = function(selectedsentEmail) {

    $scope.composeEmail = {};

    $scope.activeTab = "compose";

    $scope.composeEmail.to = selectedsentEmail.frommail;

    $scope.issentVisible = false;

  };





  $scope.removereceiveemail = function(selectedreceiveEmail) {





    var index = -1;



    $scope.emails.some(function(obj, i) {

      return obj.id == selectedreceiveEmail.body ? index = i : false;

    });



    $scope.emails.splice($scope.emails.indexOf(selectedreceiveEmail), 1);

    $scope.isreceiveVisible = false;





  };



  $scope.removesentmail = function(selectedsentEmail) {





    var index = -1;



    $scope.sentEmails.some(function(obj, i) {

      return obj.id == selectedsentEmail.body ? index = i : false;

    });



    $scope.sentEmails.splice($scope.sentEmails.indexOf(selectedsentEmail), 1);

    $scope.issentVisible = false;





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



  $scope.mytransactionsviewby = 7;

  $scope.mytransactionstotalItems = $scope.mytransactions.length;

  $scope.mytransactionscurrentPage = 1;

  $scope.mytransactionsitemsPerPage = $scope.mytransactionsviewby;

  $scope.mytransactionsmaxSize = 5;



  $scope.mytransactionssetPage = function(pageNo) {

    $scope.mytransactionscurrentPage = pageNo;

  };



  /* $scope.setItemsPerPage = function(num) {

    $scope.itemsPerPage = num;

    $scope.currentPage = 1;

  } */



  $scope.jobseekers = [

    {
      id: "1",
      picture: "https://myevent.com/assets/myevent/common/img/user.png",
      name: "حمید محمدی",
      tag: "کارشناس",
      status: "پیام داده شد",
      date: "امروز",
      sendmass: "",
      viewprofile: "",
      downloadprofile: "",
      reqtype: "ارزیابی شایستگی",
      testtype: "بسته شایستگی عمومی",
    },

    {
      id: "2",
      picture: "https://myevent.com/assets/myevent/common/img/user.png",
      name: "اصغر صفی علیشاه",
      tag: "کارشناس",
      status: "جدید",
      date: "امروز",
      sendmass: "",
      viewprofile: "",
      downloadprofile: "",
      reqtype: "گواهینامه",
      testtype: "زبان انگلیسی",
    },

    {
      id: "3",
      picture: "https://myevent.com/assets/myevent/common/img/user.png",
      name: "محمدرضا تقی زاد مژگان",
      tag: "کارشناس",
      status: "جدید",
      date: "امروز",
      sendmass: "",
      viewprofile: "",
      downloadprofile: "",
      reqtype: "درخواست دوره",
      testtype: "ویژال استودیو",
    },

    {
      id: "4",
      picture: "https://myevent.com/assets/myevent/common/img/user.png",
      name: "رئیس علی نادر کلابادی",
      tag: "کارشناس",
      status: "جدید",
      date: "امروز",
      sendmass: "",
      viewprofile: "",
      downloadprofile: "",
      reqtype: "درخواست تعﯿﯿن سطح",
      testtype: "زبان انگلیسی",
    },

  ];





  $scope.jobseekersviewby = 8;

  $scope.jobseekerstotalItems = $scope.jobseekers.length;

  $scope.jobseekerscurrentPage = 1;

  $scope.jobseekersitemsPerPage = $scope.jobseekersviewby;

  $scope.jobseekersmaxSize = 5;



  $scope.gotomailpage = function(jobseeker) {

    $scope.composeEmail = {};

    $scope.activeTab = "compose";
    $scope.activeTabF = "tab4";

    $scope.composeEmail.to = jobseeker.id;

    $scope.isreceiveVisible = false;
  };

  $scope.downloadattach = function(jobseeker) {
    window.open(jobseeker, '_blank', '');
  };


  $scope.taiid = function(jobseeker) {
    $("#ShowPopupTaiid").modal('show');
  };

  $scope.sendfactor = function(jobseeker) {
    if (confirm("ایا اطمینان دارید؟")) {
      alert("فاکتور ارسال شد");
    }
  };


  $scope.adamtaiid = function(jobseeker) {
    if (confirm("ایا اطمینان دارید؟")) {
      alert("کاربر رد شد");
    }
  };

  $scope.jobseekerssetPage = function(pageNo) {

    $scope.jobseekerscurrentPage = pageNo;

  };



  $scope.setItemsPerPage = function(num) {

    $scope.itemsPerPage = num;

    $scope.currentPage = 1;

  }









});
