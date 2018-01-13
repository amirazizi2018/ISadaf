console.clear();



app.controller('postajobscenarios', function($compile, $sce, $scope, $window, $http, ShareData, $location, $localStorage, $sessionStorage) {


  $scope.GetJobPack = function() {

    var config = {

      headers: {

        'Content-Type': 'application/json'

      }

    }

    $http.get(mustafasite + '/job/advertisements', JSON.stringify(data), config).then(function(response) {
      $scope.AddJobPack = response.data.advertisements;
    });
  }

$scope.GetJobPack();


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



  // 	$scope.adspackages = [

  // {name : 'بسته حرفه ای 1' , desshort : '10 آگهی + 3 آگهی رایگان' , price : '20000000' , desshort2 : 'امکان حذف یا تغییر بسته در حالت یر بسته در حالت حرفت یم ب یبی سیب' , "description" : [{title : 'یبسسبسیبس ینبسکیبنم س',} ,{title : 'یبسسبسیبس ینبسکیبنم س',} ,{title : 'یبسسبسیبس ینبسکیبنم س',} ,{title : 'یبسسبسیبس ینبسکیبنم س',} ,], classoff : 'mavaliboxprice'},

  // {name : 'بسته رایگان' , desshort : 'یک آگهی رایگان یک هفته ای' , price : 'رایگان' , desshort2 : 'امکان حذف یا تغییر بسته در حالت یر بسته در حالت حرفت یم ب یبی سیب' , "description" : [{title : 'یبسسبسیبس ینبسکیبنم س',} ,{title : 'یبسسبسیبس ینبسکیبنم س',} ,{title : 'یبسسبسیبس ینبسکیبنم س',} ,{title : 'یبسسبسیبس ینبسکیبنم س',} ,], class : 'active'},

  // {name : 'بسته استارتر' , desshort : 'سه آگهی مدت دار' , price : '10000000' , desshort2 : 'امکان حذف یا تغییر بسته در حالت یر بسته در حالت حرفت یم ب یبی سیب' , "description" : [{title : 'یبسسبسیبس ینبسکیبنم س',} ,{title : 'یبسسبسیبس ینبسکیبنم س',} ,{title : 'یبسسبسیبس ینبسکیبنم س',} ,{title : 'یبسسبسیبس ینبسکیبنم س',} ,], class : ''},

  // ];



  //
  //   $scope.data = [

  //       {id:'1',companylogo:'assets/images/samanlogo.png',jobname:'مدیر تولید ',joblocations:'تهران',jobfield:'مهندسی صنایع/ مهندسی مکانیک/ مدیریت صنعتی',typeofcooperation: [{activeclass : 'active' ,textbtn:'تمام وقت'},{textbtn:'پاره وقت'},{textbtn:'کارآموزی'},{textbtn:'کاروندی'},],requestforcooperationjoblink : '#' ,readmorejoblink : '#' ,jobdate : '7 / تیر / 96' ,jobrateuser : '3' ,jobratesystem : '7'},

  //       {id:'2',companylogo:'assets/images/mapnalogo.png',jobname:'مدیر تولید ',joblocations:'تهران',jobfield:'مهندسی صنایع/ مهندسی مکانیک/ مدیریت صنعتی',typeofcooperation: [{activeclass : 'active' ,textbtn:'تمام وقت'},{textbtn:'پاره وقت'},{textbtn:'کارآموزی'},{textbtn:'کاروندی'},],requestforcooperationjoblink : '#' ,readmorejoblink : '#' ,jobdate : '5 / تیر / 96' ,jobrateuser : '3' ,jobratesystem : '7'},

  //       {id:'3',companylogo:'assets/images/samanlogo.png',jobname:'مدیر تولید ',joblocations:'تهران',jobfield:'مهندسی صنایع/ مهندسی مکانیک/ مدیریت صنعتی',typeofcooperation: [{activeclass : 'active' ,textbtn:'تمام وقت'},{textbtn:'پاره وقت'},{textbtn:'کارآموزی'},{textbtn:'کاروندی'},],requestforcooperationjoblink : '#' ,readmorejoblink : '#' ,jobdate : '7 / تیر / 96' ,jobrateuser : '3' ,jobratesystem : '7'},

  //       {id:'4',companylogo:'assets/images/mapnalogo.png',jobname:'مدیر تولید ',joblocations:'تهران',jobfield:'مهندسی صنایع/ مهندسی مکانیک/ مدیریت صنعتی',typeofcooperation: [{activeclass : 'active' ,textbtn:'تمام وقت'},{textbtn:'پاره وقت'},{textbtn:'کارآموزی'},{textbtn:'کاروندی'},],requestforcooperationjoblink : '#' ,readmorejoblink : '#' ,jobdate : '5 / تیر / 96' ,jobrateuser : '3' ,jobratesystem : '7'},

  //       {id:'5',companylogo:'assets/images/samanlogo.png',jobname:'مدیر تولید ',joblocations:'تهران',jobfield:'مهندسی صنایع/ مهندسی مکانیک/ مدیریت صنعتی',typeofcooperation: [{activeclass : 'active' ,textbtn:'تمام وقت'},{textbtn:'پاره وقت'},{textbtn:'کارآموزی'},{textbtn:'کاروندی'},],requestforcooperationjoblink : '#' ,readmorejoblink : '#' ,jobdate : '7 / تیر / 96' ,jobrateuser : '3' ,jobratesystem : '7'},

  //       {id:'6',companylogo:'assets/images/mapnalogo.png',jobname:'مدیر تولید ',joblocations:'تهران',jobfield:'مهندسی صنایع/ مهندسی مکانیک/ مدیریت صنعتی',typeofcooperation: [{activeclass : 'active' ,textbtn:'تمام وقت'},{textbtn:'پاره وقت'},{textbtn:'کارآموزی'},{textbtn:'کاروندی'},],requestforcooperationjoblink : '#' ,readmorejoblink : '#' ,jobdate : '5 / تیر / 96' ,jobrateuser : '3' ,jobratesystem : '7'},

  // ];

  //


  init();

	function init() {

    $http.get(mustafasite + '/job/advertisement_types', {

      headers: {

        "Content-Type": 'application/json',


      }

    }).then(function(response) {

      $scope.prodList = response.data.advertisement_types;
    });
    $scope.orders = {};

    $scope.orders.prods = {};

    $scope.orders.prods.prod = {};

    $scope.totalkhaskardanagahi = function() {

      return $scope.prodList.filter(function(prod) {

        return $scope.orders.prods.prod[prod.id];

      }).reduce(function(subtotal, selectedProd) {

        return subtotal + parseInt(selectedProd.gift_count);

      }, 0);

    };



  }

  // $scope.gotocreatejob = function() {
  //   $location.path("createapostpage");
  // }

	$scope.selectjobpack = function(x) {
		$scope.selectedjobpack = x;
	}

});
