console.clear();

app.controller('searchscenarios', function($compile, $sce, $scope, $window, $http) {
	$scope.jobrateuser = '3' ;
	$scope.jobratesystem = '7';
	
	$scope.banners = [
	{title : 'ایجاد پروفایل شغلی' , img : '/assets/images/three-home1.svg' , text : 'برای اضافه نمودن یک پروفایل کافیست ابتدا اقدام به عضویت نموده و وارد حساب برای آنکه بتوانید برای یک شغل درخواست ثبت کنید می بایست تا حد مشخصی پروفایل کاملی داشته باشید' ,},
	{title : 'انجام پژوهش برای صنعت توسط شما' , img : '/assets/images/three-home2.svg' , text : 'برای اضافه نمودن یک پروفایل کافیست ابتدا اقدام به عضویت نموده و وارد حساب برای آنکه بتوانید برای یک شغل درخواست ثبت کنید می بایست تا حد مشخصی پروفایل کاملی داشته باشید' ,},
	{title : 'معرفی شما به عنوان نیروی کار' , img : '/assets/images/three-home3.svg' , text : 'برای اضافه نمودن یک پروفایل کافیست ابتدا اقدام به عضویت نموده و وارد حساب برای آنکه بتوانید برای یک شغل درخواست ثبت کنید می بایست تا حد مشخصی پروفایل کاملی داشته باشید' ,},
	];	

		$scope.adspackages = [
	{name : 'بسته حرفه ای 2' , desshort : 'یک ساله + یک ماه رایگان' , price : '25000000' , desshort2 : 'امکان حذف یا تغییر بسته در حالت یر بسته در حالت حرفت یم ب یبی سیب' , "description" : [{title : 'یبسسبسیبس ینبسکیبنم س',} ,{title : 'یبسسبسیبس ینبسکیبنم س',} ,{title : 'یبسسبسیبس ینبسکیبنم س',} ,{title : 'یبسسبسیبس ینبسکیبنم س',} ,],class : ''},
	{name : 'بسته حرفه ای 1' , desshort : 'یک ساله + یک ماه رایگان' , price : '20000000' , desshort2 : 'امکان حذف یا تغییر بسته در حالت یر بسته در حالت حرفت یم ب یبی سیب' , "description" : [{title : 'یبسسبسیبس ینبسکیبنم س',} ,{title : 'یبسسبسیبس ینبسکیبنم س',} ,{title : 'یبسسبسیبس ینبسکیبنم س',} ,{title : 'یبسسبسیبس ینبسکیبنم س',} ,],class : ''},
	{name : 'بسته رایگان' , desshort : 'جستجوی محدود یک هفته ای' , price : 'رایگان' , desshort2 : 'امکان حذف یا تغییر بسته در حالت یر بسته در حالت حرفت یم ب یبی سیب' , "description" : [{title : 'یبسسبسیبس ینبسکیبنم س',} ,{title : 'یبسسبسیبس ینبسکیبنم س',} ,{title : 'یبسسبسیبس ینبسکیبنم س',} ,{title : 'یبسسبسیبس ینبسکیبنم س',} ,], class : 'active'},
	{name : 'بسته استارتر' , desshort : 'یک ساله + یک ماه رایگان' , price : '10000000' , desshort2 : 'امکان حذف یا تغییر بسته در حالت یر بسته در حالت حرفت یم ب یبی سیب' , "description" : [{title : 'یبسسبسیبس ینبسکیبنم س',} ,{title : 'یبسسبسیبس ینبسکیبنم س',} ,{title : 'یبسسبسیبس ینبسکیبنم س',} ,{title : 'یبسسبسیبس ینبسکیبنم س',} ,], class : ''},
	];	

	
		  $scope.data = [
         {id:'1',companylogo:'/assets/images/samanlogo.png',jobname:'مدیر تولید ',joblocations:'تهران',jobfield:'مهندسی صنایع/ مهندسی مکانیک/ مدیریت صنعتی',typeofcooperation: [{activeclass : 'active' ,textbtn:'تمام وقت'},{textbtn:'پاره وقت'},{textbtn:'کارآموزی'},{textbtn:'کاروندی'},],requestforcooperationjoblink : '#' ,readmorejoblink : '#' ,jobdate : '7 / تیر / 96' ,jobrateuser : '3' ,jobratesystem : '7'},
         {id:'2',companylogo:'/assets/images/mapnalogo.png',jobname:'مدیر تولید ',joblocations:'تهران',jobfield:'مهندسی صنایع/ مهندسی مکانیک/ مدیریت صنعتی',typeofcooperation: [{activeclass : 'active' ,textbtn:'تمام وقت'},{textbtn:'پاره وقت'},{textbtn:'کارآموزی'},{textbtn:'کاروندی'},],requestforcooperationjoblink : '#' ,readmorejoblink : '#' ,jobdate : '5 / تیر / 96' ,jobrateuser : '3' ,jobratesystem : '7'},
         {id:'3',companylogo:'/assets/images/samanlogo.png',jobname:'مدیر تولید ',joblocations:'تهران',jobfield:'مهندسی صنایع/ مهندسی مکانیک/ مدیریت صنعتی',typeofcooperation: [{activeclass : 'active' ,textbtn:'تمام وقت'},{textbtn:'پاره وقت'},{textbtn:'کارآموزی'},{textbtn:'کاروندی'},],requestforcooperationjoblink : '#' ,readmorejoblink : '#' ,jobdate : '7 / تیر / 96' ,jobrateuser : '3' ,jobratesystem : '7'},
         {id:'4',companylogo:'/assets/images/mapnalogo.png',jobname:'مدیر تولید ',joblocations:'تهران',jobfield:'مهندسی صنایع/ مهندسی مکانیک/ مدیریت صنعتی',typeofcooperation: [{activeclass : 'active' ,textbtn:'تمام وقت'},{textbtn:'پاره وقت'},{textbtn:'کارآموزی'},{textbtn:'کاروندی'},],requestforcooperationjoblink : '#' ,readmorejoblink : '#' ,jobdate : '5 / تیر / 96' ,jobrateuser : '3' ,jobratesystem : '7'},
         {id:'5',companylogo:'/assets/images/samanlogo.png',jobname:'مدیر تولید ',joblocations:'تهران',jobfield:'مهندسی صنایع/ مهندسی مکانیک/ مدیریت صنعتی',typeofcooperation: [{activeclass : 'active' ,textbtn:'تمام وقت'},{textbtn:'پاره وقت'},{textbtn:'کارآموزی'},{textbtn:'کاروندی'},],requestforcooperationjoblink : '#' ,readmorejoblink : '#' ,jobdate : '7 / تیر / 96' ,jobrateuser : '3' ,jobratesystem : '7'},
         {id:'6',companylogo:'/assets/images/mapnalogo.png',jobname:'مدیر تولید ',joblocations:'تهران',jobfield:'مهندسی صنایع/ مهندسی مکانیک/ مدیریت صنعتی',typeofcooperation: [{activeclass : 'active' ,textbtn:'تمام وقت'},{textbtn:'پاره وقت'},{textbtn:'کارآموزی'},{textbtn:'کاروندی'},],requestforcooperationjoblink : '#' ,readmorejoblink : '#' ,jobdate : '5 / تیر / 96' ,jobrateuser : '3' ,jobratesystem : '7'},
   ];
   
   	
  init();

    function init () {
        $scope.prodList = [
      {id : '1' , title:'استفاده از اطلاعات پردازش هوشمند سیستم', descr:'', 'price':'20000000',   toltip: ''},

    ];
        $scope.orders = {};
        $scope.orders.prods = {};
        $scope.orders.prods.prod = {};
        $scope.totalkhaskardanagahi = function () {
            return $scope.prodList.filter(function (prod) {
                return $scope.orders.prods.prod[prod.title];
            }).reduce(function (subtotal, selectedProd) {
                return subtotal + parseInt(selectedProd.price);
            }, 0);
        };
      
    }

        $scope.kargozarha = [
   {kargozarname : "کارگزار 234" , kargozargeymat : "10000000", kargozaricon : "/assets/images/lk1.png" },
   {kargozarname : "کارگزار 234" , kargozargeymat : "20000000", kargozaricon : "/assets/images/lk3.png" },
   {kargozarname : "کارگزار 234" , kargozargeymat : "30000000", kargozaricon : "/assets/images/lk2.png" },
   {kargozarname : "کارگزار 234" , kargozargeymat : "50000000", kargozaricon : "/assets/images/lk1.png" },
    ];
	
	$scope.geymatkargozar = 0;
	  $scope.showgeymatkargozar = function(kargozar) {
		$scope.selected = kargozar; 
        var getnamekargozar = kargozar.kargozarname;
        var getgeymatkargozar = kargozar.kargozargeymat;
		$scope.geymatkargozar = getgeymatkargozar;
  $scope.kargozarentekhabshode = [{
      namekargozar : getnamekargozar,
	  geymatkargozar : getgeymatkargozar ,
    }];	
    } 
	
	$scope.checkboxusedatebasekargozarclick = function() {
		$scope.selected = ""; 
	$scope.geymatkargozar = 0;
	 $scope.kargozarentekhabshode = [{
      namekargozar : "",
	  geymatkargozar : "" ,
    }];	
	};

$scope.totalazmonravan = function() {
        var totalazmonravan = 0;
        angular.forEach($scope.kargozarentekhabshode, function(item) {
            totalazmonravan += item.geymatkargozar * 1;
        })
        return totalazmonravan;
    }

});
