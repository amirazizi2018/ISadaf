console.clear();

app.controller('acompanypage' ,function($compile, $sce, $scope, $window, $http, Upload, $timeout, ShareData , $location ,  $localStorage , $sessionStorage) {
	
    var mustafasite = "https://sadaf.systmngr.ir/api/v1";

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
		
		
		
		
        $scope.showonestarrating1 = 4/5;
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

		        $scope.showonestarrating2 = 4/5;
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

		        $scope.showonestarrating3 = 4/5;
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
		
		        $scope.showonestarrating4 = 4/5;
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
		
		        $scope.showonestarrating5 = 4/5;
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
		
		        $scope.showonestarrating6 = 4/5;
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

            "starSvg": '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="-316 235.7 6.1 11.3" style="enable-background:new -316 235.7 6.1 11.3;" xml:space="preserve">'+
'<path id="XMLID_1775_" class="st0" d="M-310.9,247h-4.1c-0.6,0-1-0.4-1-1v-9.3c0-0.6,0.4-1,1-1h4.1c0.6,0,1,0.4,1,1v9.3  C-309.9,246.6-310.4,247-310.9,247z"/>'+
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

            "starSvg": '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="-316 235.7 6.1 11.3" style="enable-background:new -316 235.7 6.1 11.3;" xml:space="preserve">'+
'<path id="XMLID_1775_" class="st0" d="M-310.9,247h-4.1c-0.6,0-1-0.4-1-1v-9.3c0-0.6,0.4-1,1-1h4.1c0.6,0,1,0.4,1,1v9.3  C-309.9,246.6-310.4,247-310.9,247z"/>'+
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

            "starSvg": '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="-316 235.7 6.1 11.3" style="enable-background:new -316 235.7 6.1 11.3;" xml:space="preserve">'+
'<path id="XMLID_1775_" class="st0" d="M-310.9,247h-4.1c-0.6,0-1-0.4-1-1v-9.3c0-0.6,0.4-1,1-1h4.1c0.6,0,1,0.4,1,1v9.3  C-309.9,246.6-310.4,247-310.9,247z"/>'+
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

            "starSvg": '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="-316 235.7 6.1 11.3" style="enable-background:new -316 235.7 6.1 11.3;" xml:space="preserve">'+
'<path id="XMLID_1775_" class="st0" d="M-310.9,247h-4.1c-0.6,0-1-0.4-1-1v-9.3c0-0.6,0.4-1,1-1h4.1c0.6,0,1,0.4,1,1v9.3  C-309.9,246.6-310.4,247-310.9,247z"/>'+
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

            "starSvg": '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="-316 235.7 6.1 11.3" style="enable-background:new -316 235.7 6.1 11.3;" xml:space="preserve">'+
'<path id="XMLID_1775_" class="st0" d="M-310.9,247h-4.1c-0.6,0-1-0.4-1-1v-9.3c0-0.6,0.4-1,1-1h4.1c0.6,0,1,0.4,1,1v9.3  C-309.9,246.6-310.4,247-310.9,247z"/>'+
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

            "starSvg": '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="-316 235.7 6.1 11.3" style="enable-background:new -316 235.7 6.1 11.3;" xml:space="preserve">'+
'<path id="XMLID_1775_" class="st0" d="M-310.9,247h-4.1c-0.6,0-1-0.4-1-1v-9.3c0-0.6,0.4-1,1-1h4.1c0.6,0,1,0.4,1,1v9.3  C-309.9,246.6-310.4,247-310.9,247z"/>'+
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

            "starSvg": '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="-316 235.7 6.1 11.3" style="enable-background:new -316 235.7 6.1 11.3;" xml:space="preserve">'+
'<path id="XMLID_1775_" class="st0" d="M-310.9,247h-4.1c-0.6,0-1-0.4-1-1v-9.3c0-0.6,0.4-1,1-1h4.1c0.6,0,1,0.4,1,1v9.3  C-309.9,246.6-310.4,247-310.9,247z"/>'+
'</svg>'
        };

    $scope.current =        40;
    $scope.max =            100;
	
	    $http.get(mustafasite +'/employer/me', {    headers: {        "Content-Type": 'application/json',                'Access-Token': $localStorage.TokenKey.access,    }  }).then(function (response) {		    $scope.avatar = response.data.avatar;		    $scope.business_type = response.data.business_type;		    $scope.motto = response.data.motto;		    $scope.padash = response.data.padash;		    $scope.advantage = response.data.advantage;		    $scope.assurance = response.data.assurance;		    $scope.fax = response.data.fax;		    $scope.address = response.data.address;		    $scope.email = response.data.email;		    $scope.web_site = response.data.web_site;		    $scope.mybio = response.data.web_site;		    $scope.foundation_year = response.data.foundation_year;		    $scope.industry_type = response.data.industry_type;		    $scope.city = response.data.city;		    $scope.employee_count = response.data.employee_count;											    $scope.employeejobs = response.data.jobs;  $scope.viewby = 3;  $scope.totalItems = $scope.employeejobs.length;  $scope.currentPage = 1;  $scope.itemsPerPage = $scope.viewby;  $scope.maxSize = 5;  $scope.setPage = function (pageNo) {    $scope.currentPage = pageNo;  };$scope.setItemsPerPage = function(num) {  $scope.itemsPerPage = num;  $scope.currentPage = 1; }			$scope.editorEnabledposition = false;  $scope.enableEditorposition = function() {    $scope.editorEnabledposition = true;    $scope.editableTitleposition = $scope.position;  };  $scope.showpupedit = function() {   if($localStorage.UserType == 'JS'){		  		  $('#ShowPopupEditTamas').modal('show');	  }	  else {		  	  }  };  $scope.disableEditorposition = function() {    $scope.editorEnabledposition = false;  };  $scope.saveeditposition = function() {	          var data = {                    position: $scope.editableTitleposition,                };	          var config = {            headers: {                'Content-Type': 'application/json',                'Access-Token': $localStorage.TokenKey.access,            }        }        $http.put(mustafasite + "/job_seeker", JSON.stringify(data), config).then(function(response) {		    $scope.position = $scope.editableTitleposition;    $scope.disableEditorposition();        });				};					  $scope.editorEnabledbio = false;  $scope.enableEditorbio = function() {    $scope.editorEnabledbio = true;    $scope.editableTitlebio = $scope.mybio;  };  $scope.disableEditorbio = function() {    $scope.editorEnabledbio = false;  };       $scope.saveeditbio = function() {	          var data = {                    bio: $scope.editableTitlebio,                };	          var config = {            headers: {                'Content-Type': 'application/json',                'Access-Token': $localStorage.TokenKey.access,            }        }        $http.put(mustafasite + "/job_seeker", JSON.stringify(data), config).then(function(response) {		    $scope.mybio = $scope.editableTitlebio;    $scope.disableEditorbio();        });		  };   $scope.TamasFormJS = function() {	          var data = {                    fixed_phone: $scope.phonefix,                    address: $scope.address,                };	          var config = {            headers: {                'Content-Type': 'application/json',                'Access-Token': $localStorage.TokenKey.access,            }        }        $http.put(mustafasite + "/job_seeker", JSON.stringify(data), config).then(function(response) {		    $scope.phonefix = $scope.phonefix;		    $scope.address = $scope.address;		  $('#ShowPopupEditTamas').modal('hide');        });		  };    }); 
			            $scope.getservice = function() {                var config = {                        headers: {                            'Content-Type': 'application/json',                            'Access-Token': $localStorage.TokenKey.access,                        }                 }                $http.get(mustafasite + '/employer/my_services', config).then(function(response) {						$scope.productsandservices = response.data.services;				}); 				}	       				$scope.getservice();									            $scope.getourbrand = function() {                var config = {                        headers: {                            'Content-Type': 'application/json',                            'Access-Token': $localStorage.TokenKey.access,                        }                 }                $http.get(mustafasite + '/employer/my_logos', config).then(function(response) {						$scope.ourbrands = response.data.logos;				    }); 				}	       				$scope.getourbrand();				
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
	
/* 	$scope.productsandservices = [
	{name : 'تولید خودرو' , img : 'assets/images/isaco.png' , link : '' ,},
	{name : 'تولید قطعات' , img : 'assets/images/isaco.png' , link : '' ,},
	{name : 'تولید خودرو' , img : 'assets/images/isaco.png' , link : '' ,},
	{name : 'تولید قطعات' , img : 'assets/images/isaco.png' , link : '' ,},
    ];	 */	
	
/* 	$scope.ourbrands = [
	{name : 'تولید خودرو' , img : 'assets/images/isaco.png' , link : '' ,},
	{name : 'تولید قطعات' , img : 'assets/images/isaco.png' , link : '' ,},
	{name : 'تولید خودرو' , img : 'assets/images/isaco.png' , link : '' ,},
	{name : 'تولید قطعات' , img : 'assets/images/isaco.png' , link : '' ,},
    ];
 */
	$scope.companystatistics = [
	{name : 'نوع صنعت:'},
	{name : 'خودرویی'},
	{name : 'سال تاسیس:'},
	{name : '1358'},
	{name : 'تعداد کارمندان:'},
	{name : '2300'},
	{name : 'محل فعالیت:'},
	{name : 'تهران'},
	{name : 'نرخ پذیرش:'},
	{name : '32 درصد'},
    ];	

	
	$scope.companychart = [
	{upimg : 'assets/images/u1.jpg' , mainimg : 'assets/images/u2.jpg' , 
	"downimg" : [
	{name : 'شرکت ایساکو' , img : 'assets/images/isaco.png' , link : '' ,},
	{name : 'شرکت تست' , img : 'assets/images/u3.png' , link : '' ,},
	{name : 'شرکت مپنا' , img : 'assets/images/u1' , link : '' ,},
   ]
	},
	];
	    

/* 		  $scope.data = [
         {id:'1', companyname:'بانک سامان',companylogo:'assets/images/samanlogo.png',jobname:'مدیر تولید ',joblocations:'تهران',jobfield:'مهندسی صنایع/ مهندسی مکانیک/ مدیریت صنعتی',typeofcooperation: [{activeclass : 'active' ,textbtn:'تمام وقت'},{textbtn:'پاره وقت'},{textbtn:'کارآموزی'},{textbtn:'کاروندی'},],requestforcooperationjoblink : '#' ,readmorejoblink : '#' ,jobdate : '7 / تیر / 96' ,jobrateuser : '3' ,jobratesystem : '7'},
         {id:'2', companyname:'شرکت مپنا',companylogo:'assets/images/mapnalogo.png',jobname:'مدیر تولید ',joblocations:'تهران',jobfield:'مهندسی صنایع/ مهندسی مکانیک/ مدیریت صنعتی',typeofcooperation: [{activeclass : 'active' ,textbtn:'تمام وقت'},{textbtn:'پاره وقت'},{textbtn:'کارآموزی'},{textbtn:'کاروندی'},],requestforcooperationjoblink : '#' ,readmorejoblink : '#' ,jobdate : '5 / تیر / 96' ,jobrateuser : '3' ,jobratesystem : '7'},
         {id:'3', companyname:'بانک سامان',companylogo:'assets/images/samanlogo.png',jobname:'مدیر تولید ',joblocations:'تهران',jobfield:'مهندسی صنایع/ مهندسی مکانیک/ مدیریت صنعتی',typeofcooperation: [{activeclass : 'active' ,textbtn:'تمام وقت'},{textbtn:'پاره وقت'},{textbtn:'کارآموزی'},{textbtn:'کاروندی'},],requestforcooperationjoblink : '#' ,readmorejoblink : '#' ,jobdate : '7 / تیر / 96' ,jobrateuser : '3' ,jobratesystem : '7'},
         {id:'4', companyname:'شرکت مپنا',companylogo:'assets/images/mapnalogo.png',jobname:'مدیر تولید ',joblocations:'تهران',jobfield:'مهندسی صنایع/ مهندسی مکانیک/ مدیریت صنعتی',typeofcooperation: [{activeclass : 'active' ,textbtn:'تمام وقت'},{textbtn:'پاره وقت'},{textbtn:'کارآموزی'},{textbtn:'کاروندی'},],requestforcooperationjoblink : '#' ,readmorejoblink : '#' ,jobdate : '5 / تیر / 96' ,jobrateuser : '3' ,jobratesystem : '7'},
         {id:'5', companyname:'بانک سامان',companylogo:'assets/images/samanlogo.png',jobname:'مدیر تولید ',joblocations:'تهران',jobfield:'مهندسی صنایع/ مهندسی مکانیک/ مدیریت صنعتی',typeofcooperation: [{activeclass : 'active' ,textbtn:'تمام وقت'},{textbtn:'پاره وقت'},{textbtn:'کارآموزی'},{textbtn:'کاروندی'},],requestforcooperationjoblink : '#' ,readmorejoblink : '#' ,jobdate : '7 / تیر / 96' ,jobrateuser : '3' ,jobratesystem : '7'},
         {id:'6', companyname:'شرکت مپنا',companylogo:'assets/images/mapnalogo.png',jobname:'مدیر تولید ',joblocations:'تهران',jobfield:'مهندسی صنایع/ مهندسی مکانیک/ مدیریت صنعتی',typeofcooperation: [{activeclass : 'active' ,textbtn:'تمام وقت'},{textbtn:'پاره وقت'},{textbtn:'کارآموزی'},{textbtn:'کاروندی'},],requestforcooperationjoblink : '#' ,readmorejoblink : '#' ,jobdate : '5 / تیر / 96' ,jobrateuser : '3' ,jobratesystem : '7'},
   ]; */

	

$scope.pindedplus = [];$scope.pindedcheck = [];$scope.pindedplusshow = [];$scope.pindedcheckhide = [];$scope.requestshow = [];$scope.requestshowshow = [];$scope.derequestshow = [];$scope.derequestshowhide = [];	            $scope.add = function(item,$index) {                var data = {                    id: item.id,                };                var config = {                        headers: {                            'Content-Type': 'application/json',                            'Access-Token': $localStorage.TokenKey.access,                        }                 }                $http.post(mustafasite + '/job_seeker/bookmark/job', JSON.stringify(data), config).then(function(response) {			$scope.pindedplusshow[$index] = false;					$scope.pindedcheckhide[$index] = false ;					$scope.pindedplus[$index] = true;					$scope.pindedcheck[$index] = true ;									    }); 				}	       				$scope.remove = function(item,$index) {                var data =  item.id;                var config = {                        headers: {                            'Access-Token': $localStorage.TokenKey.access,                        }                 }                $http.delete(mustafasite + '/job_seeker/bookmark/job/' + data, config).then(function(response) {			$scope.pindedplus[$index] = false;					$scope.pindedcheck[$index] = false ;					$scope.pindedplusshow[$index] = true;					$scope.pindedcheckhide[$index] = true ;				    }); 				}				$scope.requestjob = function(item,$index) {                var data = {                    id: item.id,                };                var config = {                        headers: {                            'Content-Type': 'application/json',                            'Access-Token': $localStorage.TokenKey.access,                        }                 }                $http.post(mustafasite + '/job_seeker/request_job', JSON.stringify(data), config).then(function(response) {		$scope.requestshowshow[$index] = true;					$scope.requestshow[$index] = false ;					$scope.derequestshowhide[$index] = false;					$scope.derequestshow[$index] = true ;				    }); 				}					$scope.derequestjob = function(item,$index) {                var data =  item.id;                var config = {                        headers: {                            'Access-Token': $localStorage.TokenKey.access,                        }                 }                $http.delete(mustafasite + '/job_seeker/request_job/' + data, config).then(function(response) {				$scope.requestshowshow[$index] = false;					$scope.requestshow[$index] = true ;					$scope.derequestshowhide[$index] = true;					$scope.derequestshow[$index] = false ;				    }); 				}	$scope.showajob = function(item) {                    var config = {                        headers: {                            'Content-Type': 'application/json',                            'Access-Token': $localStorage.TokenKey.access,                        }                    }                    $http.get(mustafasite + "/job_seeker", config).then(function(response) {					ShareData.setPropertyjobid(item.id);					$location.path("apostpage");                    });				}			
  

	
});
