console.clear();

app.controller('aresearchpage' ,function($compile, $sce, $scope, $window, $http, Upload, $timeout) {

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

            "starSvg": '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="-316 235.7 6.1 11.3" style="enable-background:new -316 235.7 6.1 11.3;" xml:space="preserve">'+
'<path id="XMLID_1775_" class="st0" d="M-310.9,247h-4.1c-0.6,0-1-0.4-1-1v-9.3c0-0.6,0.4-1,1-1h4.1c0.6,0,1,0.4,1,1v9.3  C-309.9,246.6-310.4,247-310.9,247z"/>'+
'</svg>'   };	
	
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

            "starSvg": '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="-316 235.7 6.1 11.3" style="enable-background:new -316 235.7 6.1 11.3;" xml:space="preserve">'+
'<path id="XMLID_1775_" class="st0" d="M-310.9,247h-4.1c-0.6,0-1-0.4-1-1v-9.3c0-0.6,0.4-1,1-1h4.1c0.6,0,1,0.4,1,1v9.3  C-309.9,246.6-310.4,247-310.9,247z"/>'+
'</svg>'
        };	
		

    $scope.current =        40;
    $scope.max =            100;
	
	$scope.logopic = 'data:image/png;base64,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';
	
	 $scope.savelogo = function(dataUrl, name){
			          Upload.upload({
            url: '/sadafupload/upload.php',
            data: {
			'targetPath' : 'images/',
            file: Upload.dataUrltoBlob(dataUrl, name)
            },
        }).then(function (response) {
            $timeout(function () {
                $scope.logopic = '/sadafupload/' + response.data;
                $scope.result = response.data;
		  $('#ShowPopupUploadLogo').modal('hide');
          $scope.logopicfile = null;

            });
        }, function (response) {
            if (response.status > 0) $scope.errorMsg = response.status 
                + ': ' + response.data;
        });
  } 
	
	$scope.productsandservices = [
	{name : 'تولید خودرو' , img : 'assets/images/isaco.png' , link : '' ,},
	{name : 'تولید قطعات' , img : 'assets/images/isaco.png' , link : '' ,},
	{name : 'تولید خودرو' , img : 'assets/images/isaco.png' , link : '' ,},
	{name : 'تولید قطعات' , img : 'assets/images/isaco.png' , link : '' ,},
    ];		
	
	$scope.ourbrands = [
	{name : 'تولید خودرو' , img : 'assets/images/isaco.png' , link : '' ,},
	{name : 'تولید قطعات' , img : 'assets/images/isaco.png' , link : '' ,},
	{name : 'تولید خودرو' , img : 'assets/images/isaco.png' , link : '' ,},
	{name : 'تولید قطعات' , img : 'assets/images/isaco.png' , link : '' ,},
    ];

	$scope.companystatistics = [
	{name : 'تاریخ آگهی:'},
	{name : '2 روز پیش'},
	{name : 'زمان باقیمانده:'},
	{name : '28 روز'},
	{name : 'محل فعالیت:'},
	{name : 'تهران'},
	{name : 'تعداد درخواست ها:'},
	{name : '25 کارجو'},
	{name : 'میانگین پروفایل ها:'},
	{name : '32 درصد'},
    ];	
	
    $scope.typeofcooperation = [
	{activeclass : 'active' ,textbtn:'تمام وقت'},
	{textbtn:'پاره وقت'},
	{textbtn:'کارآموزی'},
	{textbtn:'کارورزی'},
	];
	
	$scope.companychart = [
	{upimg : 'assets/images/u1.jpg' , mainimg : 'assets/images/u2.jpg' , 
	"downimg" : [
	{name : 'تولید خودرو' , img : 'assets/images/isaco.png' , link : '' ,},
	{name : 'تولید خودرو' , img : 'assets/images/u3.png' , link : '' ,},
	{name : 'تولید خودرو' , img : 'assets/images/u1.png' , link : '' ,},
   ]
	},
	];

	$scope.jobpagetable = [
	{name : 'شرایط عمومی' , 
	"row" : [
	{title : 'مدت زمان انجام' , value : 'مرد / زن' ,},
	{title : 'قیمت پیشنهادی' , value : '20 تا 30 سال' ,},
	{title : 'حوزه کاربرد مسئله' , value : 'دارای کارت پایان خدمت یا معافیت دائم (آقایان)' ,},
	{title : 'رویکردهای' , value : 'متاهل' ,},
	{title : 'فایل های کمکی' , value : '<a href=""  class="auxiliaryfiles"><span><span class="auxiliaryfilestitle">تصاویر.zip</span><span class="auxiliaryfilessuffix">ZIP</span></span></a><a href=""  class="auxiliaryfiles"><span><span class="auxiliaryfilestitle">آر اف پی پروژه.pdf</span><span class="auxiliaryfilessuffix">pdf</span></span></a>' ,},
	{title : 'توضیحات' , value : ' این متن واقعی و مربوط به توضیحات صفحه مورد نظر است واقعی است حالا سوال اینجاست که این متن لورم ایپسوم " به چه دردی میخورد و اساسا برای چه منظور و هدفی ساخته شد پیش از بوجود آمدن لورم ایپسوم ، طراحان وب سایت در پروژه های وب سایت طراحان کرافیک در پروژه های طراحی کاتولوگ ، بروشور ، پوستر و ... همواره با این مشکل مواجه بودند صفحات پروژه خود را پی ی چه منظور و هدفی ساخته شد پیش از بوجود آمدن لورم ایپسوم ، طراحان وب سایت در پروژه های وب سایت طراحان کرافیک در پروژه های طراحی کاتولوگ ، بروشور ، پوستر و ... همواره با این مشکل مواجه بودند صفحات پرو' ,},
   ]
	},
	];
	
	
	$scope.assmereq = [
	{name : 'ارزیابی کلی:' , 
	"row" : [
	{title : 'روزمه شخصی' , img : 'assets/images/lk1' , link : '' , level : '' ,},
   ]
	},
	
	{name : 'ارزیابی شخصیت:' , 
	"row" : [
	{title : 'تست MBTI' , img : 'assets/images/lk1' , link : '' , level : '' ,},
	{title : 'تست Watson-Glaser' , img : 'assets/images/lk1' , link : '' , level : '' ,},
   ]
	},	
	
	{name : 'ارزیابی مهارتی:' , 
	"row" : [
	{title : 'گزارش نویسی' , img : 'assets/images/lk2' , link : '' , level : 'سطح 1' ,},
	{title : 'Microsoft Exell' , img : 'assets/images/lk2' , link : '' , level : 'سطح 1' ,},
	{title : 'Microsoft Project' , img : 'assets/images/lk2' , link : '' , level : 'سطح 1' ,},
	{title : 'Comfar' , img : 'assets/images/lk2' , link : '' , level : 'سطح 1' ,},
	{title : 'بازرسی فنی' , img : 'assets/images/lk2' , link : '' , level : 'سطح 1' ,},
   ]
	},	
	
	{name : 'ارزیابی شایستگی:' , 
	"row" : [
	{title : 'تفکر تحلیلی' , img : 'assets/images/lk3' , link : '' , level : '' ,},
   ]
	},
	
	];
	    

			$scope.data = [
         {id:'1',  companyname:'بانک سامان',companylogo:'assets/images/samanlogo.png',jobname:'کاتولوپژوهش بر روی ایجاد پوشش نانوساختار کاربید تنگستن روی سطوح آلومینیومی به روش مهندسی معکوس',jobtime:'3 ماه',jobprice:' 52,000,000',jobfield:'کاتولومهندسی صنایع/ مهندسی مکانیک/ مدیریت صنعتی/مهندسی شیمی/مهندسی مواد/...',jobtag: [{textbtn:'آنالیز سیستم ها'},{textbtn:'آنالیز سیستم ها'},{textbtn:'بازرسی سطح'},{textbtn:'سنتز مواد پیشرفته'},{textbtn:'آنالیز سیستم ها'},],requestforcooperationjoblink : '#' ,readmorejoblink : '#' ,jobdate : '7 / تیر / 96' ,jobrateuser : '3' ,jobratesystem : '7'},
         {id:'1',  companyname:'بانک سامان',companylogo:'assets/images/samanlogo.png',jobname:'کاتولوپژوهش بر روی ایجاد پوشش نانوساختار کاربید تنگستن روی سطوح آلومینیومی به روش مهندسی معکوس',jobtime:'3 ماه',jobprice:' 52,000,000',jobfield:'کاتولومهندسی صنایع/ مهندسی مکانیک/ مدیریت صنعتی/مهندسی شیمی/مهندسی مواد/...',jobtag: [{textbtn:'آنالیز سیستم ها'},{textbtn:'آنالیز سیستم ها'},{textbtn:'بازرسی سطح'},{textbtn:'سنتز مواد پیشرفته'},{textbtn:'آنالیز سیستم ها'},],requestforcooperationjoblink : '#' ,readmorejoblink : '#' ,jobdate : '7 / تیر / 96' ,jobrateuser : '3' ,jobratesystem : '7'},
         {id:'1',  companyname:'بانک سامان',companylogo:'assets/images/samanlogo.png',jobname:'کاتولوپژوهش بر روی ایجاد پوشش نانوساختار کاربید تنگستن روی سطوح آلومینیومی به روش مهندسی معکوس',jobtime:'3 ماه',jobprice:' 52,000,000',jobfield:'کاتولومهندسی صنایع/ مهندسی مکانیک/ مدیریت صنعتی/مهندسی شیمی/مهندسی مواد/...',jobtag: [{textbtn:'آنالیز سیستم ها'},{textbtn:'آنالیز سیستم ها'},{textbtn:'بازرسی سطح'},{textbtn:'سنتز مواد پیشرفته'},{textbtn:'آنالیز سیستم ها'},],requestforcooperationjoblink : '#' ,readmorejoblink : '#' ,jobdate : '7 / تیر / 96' ,jobrateuser : '3' ,jobratesystem : '7'},
         {id:'1',  companyname:'بانک سامان',companylogo:'assets/images/samanlogo.png',jobname:'کاتولوپژوهش بر روی ایجاد پوشش نانوساختار کاربید تنگستن روی سطوح آلومینیومی به روش مهندسی معکوس',jobtime:'3 ماه',jobprice:' 52,000,000',jobfield:'کاتولومهندسی صنایع/ مهندسی مکانیک/ مدیریت صنعتی/مهندسی شیمی/مهندسی مواد/...',jobtag: [{textbtn:'آنالیز سیستم ها'},{textbtn:'آنالیز سیستم ها'},{textbtn:'بازرسی سطح'},{textbtn:'سنتز مواد پیشرفته'},{textbtn:'آنالیز سیستم ها'},],requestforcooperationjoblink : '#' ,readmorejoblink : '#' ,jobdate : '7 / تیر / 96' ,jobrateuser : '3' ,jobratesystem : '7'},
       ];
	

	 
  $scope.viewby = 3;
  $scope.totalItems = $scope.data.length;
  $scope.currentPage = 1;
  $scope.itemsPerPage = $scope.viewby;
  $scope.maxSize = 5;

  $scope.setPage = function (pageNo) {
    $scope.currentPage = pageNo;
  };

$scope.setItemsPerPage = function(num) {
  $scope.itemsPerPage = num;
  $scope.currentPage = 1; 
}

  $scope.removejob = function(item) {
    $scope.data.splice(item, 1);
  };
  

	
});
