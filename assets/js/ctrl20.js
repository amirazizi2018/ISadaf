console.clear();

app.controller('researchposts' ,function($compile, $sce, $scope, $window, $http, Upload, $timeout) {


		var mustafasite = "https://sadaf.systmngr.ir/api/v1";

		$http.post(mustafasite + '/items', {

			headers: {

				"Content-Type": 'application/json',


			}

		}).then(function(response) {
			$scope.yourskillsandexpertises = response.data.data;
		});



		    var config = {

		      headers: {

		        'Content-Type': 'application/json'

		      }

		    }



		    $http.get(mustafasite + "/job?research=true", config).then(function(response) {

		      $scope.data = response.data.hits;

					$scope.totalItems = $scope.data.length;

		    });

				$scope.viewby = 3;

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

    $scope.current =        40;
    $scope.max =            100;
	
	// $scope.yourskillsandexpertises = [
	// {title : 'ایجاد پروفایل شغلی'},
	// {title : 'fdddfdfdf'},
	// {title : 'بلیلبیلبیل'},
	// ];	
  //
	
	$scope.adstime = [
        {nameper : "1 تا 2 ماه", nameeng : "shariyar"},
		{nameper : "2 تا 3 ماه", nameeng : "tehran"},
		{nameper : "3 تا 4 ماه", nameeng : "robatkarim"},
		{nameper : "4 تا 6 ماه", nameeng : "karaj"},
    ];		

      //
			// $scope.data = [
      //    {id:'1',  companyname:'بانک سامان',companylogo:'assets/images/samanlogo.png',jobname:'کاتولوپژوهش بر روی ایجاد پوشش نانوساختار کاربید تنگستن روی سطوح آلومینیومی به روش مهندسی معکوس',jobtime:'3 ماه',jobprice:' 52,000,000',jobfield:'کاتولومهندسی صنایع/ مهندسی مکانیک/ مدیریت صنعتی/مهندسی شیمی/مهندسی مواد/...',jobtag: [{textbtn:'آنالیز سیستم ها'},{textbtn:'آنالیز سیستم ها'},{textbtn:'بازرسی سطح'},{textbtn:'سنتز مواد پیشرفته'},{textbtn:'آنالیز سیستم ها'},],requestforcooperationjoblink : '#' ,readmorejoblink : '#' ,jobdate : '7 / تیر / 96' ,jobrateuser : '3' ,jobratesystem : '7'},
      //    {id:'1',  companyname:'بانک سامان',companylogo:'assets/images/samanlogo.png',jobname:'کاتولوپژوهش بر روی ایجاد پوشش نانوساختار کاربید تنگستن روی سطوح آلومینیومی به روش مهندسی معکوس',jobtime:'3 ماه',jobprice:' 52,000,000',jobfield:'کاتولومهندسی صنایع/ مهندسی مکانیک/ مدیریت صنعتی/مهندسی شیمی/مهندسی مواد/...',jobtag: [{textbtn:'آنالیز سیستم ها'},{textbtn:'آنالیز سیستم ها'},{textbtn:'بازرسی سطح'},{textbtn:'سنتز مواد پیشرفته'},{textbtn:'آنالیز سیستم ها'},],requestforcooperationjoblink : '#' ,readmorejoblink : '#' ,jobdate : '7 / تیر / 96' ,jobrateuser : '3' ,jobratesystem : '7'},
      //    {id:'1',  companyname:'بانک سامان',companylogo:'assets/images/samanlogo.png',jobname:'کاتولوپژوهش بر روی ایجاد پوشش نانوساختار کاربید تنگستن روی سطوح آلومینیومی به روش مهندسی معکوس',jobtime:'3 ماه',jobprice:' 52,000,000',jobfield:'کاتولومهندسی صنایع/ مهندسی مکانیک/ مدیریت صنعتی/مهندسی شیمی/مهندسی مواد/...',jobtag: [{textbtn:'آنالیز سیستم ها'},{textbtn:'آنالیز سیستم ها'},{textbtn:'بازرسی سطح'},{textbtn:'سنتز مواد پیشرفته'},{textbtn:'آنالیز سیستم ها'},],requestforcooperationjoblink : '#' ,readmorejoblink : '#' ,jobdate : '7 / تیر / 96' ,jobrateuser : '3' ,jobratesystem : '7'},
      //    {id:'1',  companyname:'بانک سامان',companylogo:'assets/images/samanlogo.png',jobname:'کاتولوپژوهش بر روی ایجاد پوشش نانوساختار کاربید تنگستن روی سطوح آلومینیومی به روش مهندسی معکوس',jobtime:'3 ماه',jobprice:' 52,000,000',jobfield:'کاتولومهندسی صنایع/ مهندسی مکانیک/ مدیریت صنعتی/مهندسی شیمی/مهندسی مواد/...',jobtag: [{textbtn:'آنالیز سیستم ها'},{textbtn:'آنالیز سیستم ها'},{textbtn:'بازرسی سطح'},{textbtn:'سنتز مواد پیشرفته'},{textbtn:'آنالیز سیستم ها'},],requestforcooperationjoblink : '#' ,readmorejoblink : '#' ,jobdate : '7 / تیر / 96' ,jobrateuser : '3' ,jobratesystem : '7'},
      //  ];

	 

  

	
});
