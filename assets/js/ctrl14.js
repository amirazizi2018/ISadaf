console.clear();

app.controller('companydashboardpage', function($compile, $sce, $scope, $window, $http, Upload, $timeout ,ShareData, $location, $localStorage, $sessionStorage) {

	$scope.activeTabF = "tab1";
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


    $scope.max =            100;
		$scope.current = 24;

		$scope.getaliiempset = function() {
		$http.get(mustafasite + '/employer/me', {

	    headers: {

	      "Content-Type": 'application/json',

	      'Access-Token': $localStorage.TokenKey.access,

	    }

	    }).then(function(response) {


	    $scope.fa_name = response.data.fa_name;
	    $scope.avatar = response.data.avatar;
	    $scope.business_type = response.data.business_type;
	    $scope.motto = response.data.motto;
	    $scope.padash = response.data.padash;
	    $scope.vaam = response.data.vaam;
	    $scope.advantage = response.data.advantage;
	    $scope.assurance = response.data.assurance;
	    $scope.fax = response.data.fax;
	    $scope.address = response.data.address;
	    $scope.second_address = response.data.second_address;
	    $scope.phone = response.data.phone;
	    $scope.email = response.data.email;
	    $scope.web_site = response.data.web_site;
	    $scope.mybio = response.data.description;
	    $scope.foundation_year = response.data.foundation_year;
	    $scope.industry_type = response.data.industry_type;
	    $scope.city = response.data.city;
	    $scope.employee_count = response.data.employee_count;
	    $scope.socials = response.data.socials;
			$scope.advertisements = response.data.advertisements;
			$scope.search_packs = response.data.search_packs;

			$scope.jobsaveddata = response.data.jobs;
			$scope.jobsavedtotalItems = $scope.jobsaveddata.length;

			$scope.jobseekersaved = response.data.bookmarked_js;
			$scope.jobseekersavedtotalItems = $scope.jobseekersaved.length;

			// JS requests
			$scope.jobseekers = [];
			for (var x = 0; x < response.data.jobs.length; x++) {
				for (var i = 0; i < response.data.jobs[x].requests.length; i++) {
					$scope.jobseekers.push(response.data.jobs[x].requests[i]);
				}
			}

			$scope.jobseekerstotalItems = $scope.jobseekers.length;

	  });
}
$scope.getaliiempset();








		$scope.gotoprofilepage = function() {
			$location.path("acompanypage");
			$localStorage.LocationUser = "acompanypage";
		}

		$http.get(mustafasite + '/employer/notification', {

			headers: {

				"Content-Type": 'application/json',

				'Access-Token': $localStorage.TokenKey.access,

			}

		}).then(function(response) {

			$scope.notificationdata = response.data.notification;

			$scope.notificationtotalItems = $scope.notificationdata.length;

		});

	
	//  $scope.savelogo = function(dataUrl, name){
	// 		          Upload.upload({
  //           url: '/sadafupload/upload.php',
  //           data: {
	// 		'targetPath' : 'images/',
  //           file: Upload.dataUrltoBlob(dataUrl, name)
  //           },
  //       }).then(function (response) {
  //           $timeout(function () {
  //               $scope.logopic = '/sadafupload/' + response.data;
  //               $scope.result = response.data;
	// 	  $('#ShowPopupUploadLogo').modal('hide');
  //         $scope.logopicfile = null;
  //
  //           });
  //       }, function (response) {
  //           if (response.status > 0) $scope.errorMsg = response.status 
  //               + ': ' + response.data;
  //       });
  // } 
	
	// $scope.packagesstatus = [
	// {packagename : 'بسته آگهی شغلی حرفه ای' ,packagestatus : 'فعال' ,packagedet : '12 عدد آگهی شغلی' ,packageremaining : '4 عدد باقیمانده' ,},
	// {packagename : 'بسته جستجوی دیتابیس حرفه ای' ,packagestatus : 'فعال' ,packagedet : 'یک ماهه' ,packageremaining : '11 روز باقیمانده' ,},
  //   ];	
  //
	
	
	
	
	
  //
	// $scope.notificationdata = [
  //     {newnotificationclass : 'newnotification' ,description:'شی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی <a href>طرح سفارش</a> گرفته شده استفاده می نماید'},
  //     {newnotificationclass : 'newnotification' ,description:'شی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی <a href>طرح سفارش</a> گرفته شده استفاده می نماید<br><br><button type="button" class="btn bluebtnreverse">ارتقای پروفایل</button>'},
  //     {description:'شی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح '},
  //     {description:'شی و بی&zwnj;معنی در صنعت چاپ، صفحه&zwnj;آرایی و طراحی گرافیک گفته می&zwnj;شود. طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح <br><div class="brokersem ng-scope" ng-repeat="broker in brokers"><img class="img brokericonimg" ng-class="{active: broker == selectpebroker}" src="assets/images/lk2.png" ng-click="selectpebrokerfun(broker)" role="button" tabindex="0"></div><div class="brokersem ng-scope" ng-repeat="broker in brokers"><img class="img brokericonimg" ng-class="{active: broker == selectpebroker}" src="assets/images/lk1.png" ng-click="selectpebrokerfun(broker)" role="button" tabindex="0"></div><div class="brokersem ng-scope" ng-repeat="broker in brokers"><img class="img brokericonimg" ng-class="{active: broker == selectpebroker}" src="assets/images/lk3.png" ng-click="selectpebrokerfun(broker)" role="button" tabindex="0"></div>'},
  //     {description:'شی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی <a href>طرح سفارش</a> گرفته شده استفاده می نماید<br><br><button type="button" class="btn bluebtnreverse">ارتقای پروفایل</button>'},
  //     {description:'شی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی <a href>طرح سفارش</a> گرفته شده استفاده می نماید'},
  //     {description:'شی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی <a href>طرح سفارش</a> گرفته شده استفاده می نماید<br><br><button type="button" class="btn bluebtnreverse">ارتقای پروفایل</button>'},
  //     {description:'شی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی <a href>طرح سفارش</a> گرفته شده استفاده می نماید'},
  //     {description:'شی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی <a href>طرح سفارش</a> گرفته شده استفاده می نماید<br><br><button type="button" class="btn bluebtnreverse">ارتقای پروفایل</button>'},
  //     {description:'شی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی <a href>طرح سفارش</a> گرفته شده استفاده می نماید'},
  //     {description:'شی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی <a href>طرح سفارش</a> گرفته شده استفاده می نماید<br><br><button type="button" class="btn bluebtnreverse">ارتقای پروفایل</button>'},
  //     {description:'شی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح '},
  //     {description:'شی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی <a href>طرح سفارش</a> گرفته شده استفاده می نماید'},
  //     {description:'شی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی <a href>طرح سفارش</a> گرفته شده استفاده می نماید<br><br><button type="button" class="btn bluebtnreverse">ارتقای پروفایل</button>'},
  //     {description:'شی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی <a href>طرح سفارش</a> گرفته شده استفاده می نماید'},
  //     {description:'شی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی <a href>طرح سفارش</a> گرفته شده استفاده می نماید<br><br><button type="button" class="btn bluebtnreverse">ارتقای پروفایل</button>'},
  //     {description:'شی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح '},
  //     {description:'شی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی <a href>طرح سفارش</a> گرفته شده استفاده می نماید'},
  //     {description:'شی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی <a href>طرح سفارش</a> گرفته شده استفاده می نماید<br><br><button type="button" class="btn bluebtnreverse">ارتقای پروفایل</button>'},
  //   ];
	
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

/* $scope.setItemsPerPage = function(num) {
  $scope.itemsPerPage = num;
  $scope.currentPage = 1; 
} */






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

		//   $scope.jobsaveddata = [
   //       {id:'1', companyname:'بانک سامان',companylogo:'assets/images/samanlogo.png',jobname:'مدیر تولید ',joblocations:'تهران',jobfield:'مهندسی صنایع/ مهندسی مکانیک/ مدیریت صنعتی',typeofcooperation: [{activeclass : 'active' ,textbtn:'تمام وقت'},{textbtn:'پاره وقت'},{textbtn:'کارآموزی'},{textbtn:'کارورزی'},],requestforcooperationjoblink : '#' ,readmorejoblink : '#' ,jobdate : '7 / تیر / 96' ,jobrateuser : '3' ,jobratesystem : '7'},
   //       {id:'2', companyname:'شرکت مپنا',companylogo:'assets/images/mapnalogo.png',jobname:'مدیر تولید ',joblocations:'تهران',jobfield:'مهندسی صنایع/ مهندسی مکانیک/ مدیریت صنعتی',typeofcooperation: [{activeclass : 'active' ,textbtn:'تمام وقت'},{textbtn:'پاره وقت'},{textbtn:'کارآموزی'},{textbtn:'کارورزی'},],requestforcooperationjoblink : '#' ,readmorejoblink : '#' ,jobdate : '5 / تیر / 96' ,jobrateuser : '3' ,jobratesystem : '7'},
   //       {id:'3', companyname:'بانک سامان',companylogo:'assets/images/samanlogo.png',jobname:'مدیر تولید ',joblocations:'تهران',jobfield:'مهندسی صنایع/ مهندسی مکانیک/ مدیریت صنعتی',typeofcooperation: [{activeclass : 'active' ,textbtn:'تمام وقت'},{textbtn:'پاره وقت'},{textbtn:'کارآموزی'},{textbtn:'کارورزی'},],requestforcooperationjoblink : '#' ,readmorejoblink : '#' ,jobdate : '7 / تیر / 96' ,jobrateuser : '3' ,jobratesystem : '7'},
   //       {id:'4', companyname:'شرکت مپنا',companylogo:'assets/images/mapnalogo.png',jobname:'مدیر تولید ',joblocations:'تهران',jobfield:'مهندسی صنایع/ مهندسی مکانیک/ مدیریت صنعتی',typeofcooperation: [{activeclass : 'active' ,textbtn:'تمام وقت'},{textbtn:'پاره وقت'},{textbtn:'کارآموزی'},{textbtn:'کارورزی'},],requestforcooperationjoblink : '#' ,readmorejoblink : '#' ,jobdate : '5 / تیر / 96' ,jobrateuser : '3' ,jobratesystem : '7'},
   //       {id:'5', companyname:'بانک سامان',companylogo:'assets/images/samanlogo.png',jobname:'مدیر تولید ',joblocations:'تهران',jobfield:'مهندسی صنایع/ مهندسی مکانیک/ مدیریت صنعتی',typeofcooperation: [{activeclass : 'active' ,textbtn:'تمام وقت'},{textbtn:'پاره وقت'},{textbtn:'کارآموزی'},{textbtn:'کارورزی'},],requestforcooperationjoblink : '#' ,readmorejoblink : '#' ,jobdate : '7 / تیر / 96' ,jobrateuser : '3' ,jobratesystem : '7'},
   //       {id:'6', companyname:'شرکت مپنا',companylogo:'assets/images/mapnalogo.png',jobname:'مدیر تولید ',joblocations:'تهران',jobfield:'مهندسی صنایع/ مهندسی مکانیک/ مدیریت صنعتی',typeofcooperation: [{activeclass : 'active' ,textbtn:'تمام وقت'},{textbtn:'پاره وقت'},{textbtn:'کارآموزی'},{textbtn:'کارورزی'},],requestforcooperationjoblink : '#' ,readmorejoblink : '#' ,jobdate : '5 / تیر / 96' ,jobrateuser : '3' ,jobratesystem : '7'},
   // ];


	 
  $scope.jobsavedviewby = 6;
  $scope.jobsavedcurrentPage = 1;
  $scope.jobsaveditemsPerPage = $scope.jobsavedviewby;
  $scope.jobsavedmaxSize = 5;

  $scope.jobsavedsetPage = function (pageNo) {
    $scope.jobsavedcurrentPage = pageNo;
  };

/* $scope.setItemsPerPage = function(num) {
  $scope.itemsPerPage = num;
  $scope.currentPage = 1; 
} */

  $scope.removejob = function(item) {


  };

	$scope.HideJob = function(item) {

		var data = item.id;

		$http.get(mustafasite + '/employer/job/' + data, {

			headers: {

				"Content-Type": 'application/json',

				'Access-Token': $localStorage.TokenKey.access,

			}

		}).then(function(response) {

$scope.getaliiempset();

		});


  };

  

  
	$scope.addtobookmark = function(jobseeker) {

		 // var json = {
		 // 	where : "بوکمارک در داشبرد مدیریتی و در تب درخواست ها"
		 // }

	    // var data = {
			// 	id : parseInt(jobseeker.job_seeker.id),
			// 	detail : json,
			// 	status : "جدید",
			// }

			var data = {
				id : parseInt(jobseeker.job_seeker.id),
			}

	    var config = {

	      headers: {

					'Content-Type' : 'application/json',
	        'Access-Token': $localStorage.TokenKey.access,

	      }

	    }



	    $http.post(mustafasite + '/employer/bookmark/job_seeker' , JSON.stringify(data), config).then(function(response) {

				$scope.getaliiempset();

	    });



	  }
  
  
  
  
 //
	// $scope.filterdatejosdata = [
 //         {"name":"کارشناس فروش","date":"96/01/24",},
 //    ];
 //
	// $scope.jobseekers = [ 
 //      {id : "1" , picture : "https://myevent.com/assets/myevent/common/img/user.png" , name : "حمید محمدی", tag : "ک2ارشناس فروش", status : "پیام داده شد", date : "4/4/96", sendmass : "", viewprofile : "", downloadprofile : "",},
 //        {id : "1" , picture : "https://myevent.com/assets/myevent/common/img/user.png" , name : "حمید محمدی", tag : "ک2ارشناس فروش", status : "پیام داده شد", date : "4/4/96", sendmass : "", viewprofile : "", downloadprofile : "",},
 //        {id : "1" , picture : "https://myevent.com/assets/myevent/common/img/user.png" , name : "حمید محمدی", tag : "ک2ارشناس فروش", status : "پیام داده شد", date : "4/4/96", sendmass : "", viewprofile : "", downloadprofile : "",},
 //        {id : "1" , picture : "https://myevent.com/assets/myevent/common/img/user.png" , name : "حمید محمدی", tag : "ک2ارشناس فروش", status : "پیام داده شد", date : "4/4/96", sendmass : "", viewprofile : "", downloadprofile : "",},      
	//   {id : "1" , picture : "https://myevent.com/assets/myevent/common/img/user.png" , name : "حمید محمدی", tag : "کارشناس فروش", status : "جدید", date : "امروز", sendmass : "", viewprofile : "", downloadprofile : "",},
 //        {id : "1" , picture : "https://myevent.com/assets/myevent/common/img/user.png" , name : "حمید محمدی", tag : "کارشناس فروش", status : "جدید", date : "امروز", sendmass : "", viewprofile : "", downloadprofile : "",},
 //        {id : "1" , picture : "https://myevent.com/assets/myevent/common/img/user.png" , name : "حمید محمدی", tag : "کارشناس فروش", status : "جدید", date : "امروز", sendmass : "", viewprofile : "", downloadprofile : "",},
 //        {id : "1" , picture : "https://myevent.com/assets/myevent/common/img/user.png" , name : "حمید محمدی", tag : "ک2ارشناس فروش", status : "پیام داده شد", date : "4/4/96", sendmass : "", viewprofile : "", downloadprofile : "",},
 //        {id : "1" , picture : "https://myevent.com/assets/myevent/common/img/user.png" , name : "حمید محمدی", tag : "ک2ارشناس فروش", status : "پیام داده شد", date : "4/4/96", sendmass : "", viewprofile : "", downloadprofile : "",},
 // ];	
 //
 //
  $scope.jobseekersviewby = 8;
  $scope.jobseekerscurrentPage = 1;
  $scope.jobseekersitemsPerPage = $scope.jobseekersviewby;
  $scope.jobseekersmaxSize = 5;

  $scope.jobseekerssetPage = function (pageNo) {
    $scope.jobseekerscurrentPage = pageNo;
  };

$scope.setItemsPerPage = function(num) {
  $scope.itemsPerPage = num;
  $scope.currentPage = 1; 
}



   
	// $scope.jobseekersaved = [ 
 //      {id : "1" , picture : "https://myevent.com/assets/myevent/common/img/user.png" , name : "حمید محمدی", tag : "ک2ارشناس فروش", status : "پیام داده شد", date : "4/4/96", sendmass : "", viewprofile : "", downloadprofile : "", searchlog : "",},
 //        {id : "1" , picture : "https://myevent.com/assets/myevent/common/img/user.png" , name : "حمید محمدی", tag : "ک2ارشناس فروش", status : "پیام داده شد", date : "4/4/96", sendmass : "", viewprofile : "", downloadprofile : "", searchlog : "",},
 //        {id : "1" , picture : "https://myevent.com/assets/myevent/common/img/user.png" , name : "حمید محمدی", tag : "ک2ارشناس فروش", status : "پیام داده شد", date : "4/4/96", sendmass : "", viewprofile : "", downloadprofile : "", searchlog : "",},
 //        {id : "1" , picture : "https://myevent.com/assets/myevent/common/img/user.png" , name : "حمید محمدی", tag : "ک2ارشناس فروش", status : "پیام داده شد", date : "4/4/96", sendmass : "", viewprofile : "", downloadprofile : "", searchlog : "",},      
	//   {id : "1" , picture : "https://myevent.com/assets/myevent/common/img/user.png" , name : "حمید محمدی", tag : "کارشناس فروش", status : "جدید", date : "امروز", sendmass : "", viewprofile : "", downloadprofile : "", searchlog : "",},
 //        {id : "1" , picture : "https://myevent.com/assets/myevent/common/img/user.png" , name : "حمید محمدی", tag : "کارشناس فروش", status : "جدید", date : "امروز", sendmass : "", viewprofile : "", downloadprofile : "", searchlog : "",},
 //        {id : "1" , picture : "https://myevent.com/assets/myevent/common/img/user.png" , name : "حمید محمدی", tag : "کارشناس فروش", status : "جدید", date : "امروز", sendmass : "", viewprofile : "", downloadprofile : "", searchlog : "",},
 //        {id : "1" , picture : "https://myevent.com/assets/myevent/common/img/user.png" , name : "حمید محمدی", tag : "ک2ارشناس فروش", status : "پیام داده شد", date : "4/4/96", sendmass : "", viewprofile : "", downloadprofile : "", searchlog : "",},
 //        {id : "1" , picture : "https://myevent.com/assets/myevent/common/img/user.png" , name : "حمید محمدی", tag : "ک2ارشناس فروش", status : "پیام داده شد", date : "4/4/96", sendmass : "", viewprofile : "", downloadprofile : "", searchlog : "",},
 // ];	
 //
// 			$scope.sendsearchinjobse  = function() {
// $scope.jobseekersaved = [ 
//       {id : "1" , picture : "https://myevent.com/assets/myevent/common/img/user.png" , name : "حمید محمدی", tag : "ک2ارشناس فروش", status : "پیام داده شد", date : "4/4/96", sendmass : "", viewprofile : "", downloadprofile : "", searchlog : "",},
//         {id : "1" , picture : "https://myevent.com/assets/myevent/common/img/user.png" , name : "حمید محمدی", tag : "ک2ارشناس فروش", status : "پیام داده شد", date : "4/4/96", sendmass : "", viewprofile : "", downloadprofile : "", searchlog : "",},
//        {id : "1" , picture : "https://myevent.com/assets/myevent/common/img/user.png" , name : "حمید محمدی", tag : "ک2ارشناس فروش", status : "پیام داده شد", date : "4/4/96", sendmass : "", viewprofile : "", downloadprofile : "", searchlog : "",},
//         {id : "1" , picture : "https://myevent.com/assets/myevent/common/img/user.png" , name : "حمید محمدی", tag : "ک2ارشناس فروش", status : "پیام داده شد", date : "4/4/96", sendmass : "", viewprofile : "", downloadprofile : "", searchlog : "",},
//  ];	
//      }
  
//



  $scope.removejobseekerbookmark = function(jobseeker) {

    var dataremove = {
			id : parseInt(jobseeker.job_seeker.id),
		}



    var configremove = {

      headers: {
				'Content-Type' : 'application/json',
        'Access-Token': $localStorage.TokenKey.access,

      }

    }



    $http.delete(mustafasite + '/employer/bookmark/job_seeker' , JSON.stringify(dataremove), configremove).then(function(response) {

			$scope.getaliiempset();

    });



  }



$scope.jobseekersavedviewby = 8;

$scope.jobseekersavedcurrentPage = 1;

$scope.jobseekersaveditemsPerPage = $scope.jobseekersavedviewby;

$scope.jobseekersavedmaxSize = 5;



$scope.jobseekersavedsetPage = function (pageNo) {

	$scope.jobseekersavedcurrentPage = pageNo;

};



$scope.setItemsPerPage = function(num) {

$scope.itemsPerPage = num;

$scope.currentPage = 1;

}









	$scope.brokers = [ {kargozarname : "کارگزار۱" , kargozargeymat : "310000", kargozaricon : "assets/images/lk1.png" } , {kargozarname : "کارگزار2" , kargozargeymat : "320000", kargozaricon : "assets/images/lk2.png" } ,{kargozarname : "کارگزار3" , kargozargeymat : "330000", kargozaricon : "assets/images/lk3.png" } ,{kargozarname : "کارگزار4" , kargozargeymat : "340000", kargozaricon : "assets/images/lk5.png" } ,{kargozarname : "کارگزار5" , kargozargeymat : "350000", kargozaricon : "assets/images/lk5.png" } ,{kargozarname : "کارگزار6" , kargozargeymat : "360000", kargozaricon : "assets/images/lk1.png" } ,{kargozarname : "کارگزار7" , kargozargeymat : "370000", kargozaricon : "assets/images/lk2.png" } ,{kargozarname : "کارگزار 8" , kargozargeymat : "380000", kargozaricon : "assets/images/lk3.png" } ,];
	
	 $scope.biselbroker = {};
     $scope.toggleDetailsbi = function(name){
 		if($scope.biselbroker.shown === name){
    	$scope.biselbroker.shown = null;
		} 
	else {
	$scope.biselbroker.shown = name;
	$scope.caselbroker.shown = null;
	$scope.ccselbroker.shown = null;
	$scope.peselbroker.shown = null;
	}
 }
 
     $scope.selectbibrokerfun = function(broker) {
		var getselectbibroker = broker.kargozaricon;		
		$scope.selectbibroker = broker;		
	 $scope.savebibroker = function(x) {
		$scope.bibroker = getselectbibroker;
					$scope.caselbroker.shown = null;
			$scope.biselbroker.shown = null;
	$scope.ccselbroker.shown = null;
	$scope.peselbroker.shown = null;
     }
     } 

	 
	 $scope.peselbroker = {};
     $scope.toggleDetailspe = function(name){
 		if($scope.peselbroker.shown === name){
    	$scope.peselbroker.shown = null;
		} 
	else {
	$scope.biselbroker.shown = null;
	$scope.caselbroker.shown = null;
	$scope.ccselbroker.shown = null;
	$scope.peselbroker.shown = name;
	}
 }
 
     $scope.selectpebrokerfun = function(broker) {
		var getselectpebroker = broker.kargozaricon;		
		$scope.selectpebroker = broker;		
	 $scope.savepebroker = function(x) {
		$scope.pebroker = getselectpebroker;
					$scope.caselbroker.shown = null;
			$scope.biselbroker.shown = null;
	$scope.ccselbroker.shown = null;
	$scope.peselbroker.shown = null;
     }
     } 
	 
	 $scope.ccselbroker = {};
     $scope.toggleDetailscc = function(name){
 		if($scope.ccselbroker.shown === name){
    	$scope.ccselbroker.shown = null;
		} 
	else {
	$scope.ccselbroker.shown = name;
	$scope.biselbroker.shown = null;
	$scope.caselbroker.shown = null;
	$scope.peselbroker.shown = null;
	}
 }
 
     $scope.selectccbrokerfun = function(broker) {
		var getselectccbroker = broker.kargozaricon;		
		$scope.selectccbroker = broker;		
	 $scope.saveccbroker = function(x) {
		$scope.ccbroker = getselectccbroker;
					$scope.caselbroker.shown = null;
			$scope.biselbroker.shown = null;
	$scope.ccselbroker.shown = null;
	$scope.peselbroker.shown = null;
     }
     } 	 
	 
	 
	 $scope.caselbroker = {};
     $scope.toggleDetailsca = function(name){
 		if($scope.caselbroker.shown === name){
    	$scope.caselbroker.shown = null;
		} 
	else {
	$scope.caselbroker.shown = name;
	$scope.biselbroker.shown = null;
	$scope.ccselbroker.shown = null;
	$scope.peselbroker.shown = null;
	}
 }
 
     $scope.selectcabrokerfun = function(broker) {
		var getselectcabroker = broker.kargozaricon;		
		$scope.selectcabroker = broker;		
	 $scope.savecabroker = function(x) {
		$scope.cabroker = getselectcabroker;
			$scope.caselbroker.shown = null;
			$scope.biselbroker.shown = null;
	$scope.ccselbroker.shown = null;
	$scope.peselbroker.shown = null;
     }
     } 
	 
 	

	
	
	
	
	
	
    $scope.isreceiveVisible = false;
    $scope.issentVisible = false;
    $scope.composeEmail = {};
    $scope.activeTab = "inbox";
    $scope.sentEmails = [
	        { 
            frommail: 'A20Group@yahoo.com',
            from: 'شرکت آسان پرداخت',
            to: 'شزکت فناپ',
            subject: 'دعوت به مصاحبه', 
            date: '96/07/24', 
            time: '2:33 ب.ظ', 
            body: 'با سلامتحقق این هدف و چشم انداز در صورتی محقق می گردد که این سامانه دارای ویژگی¬های خاصی باشد که دارا بودن آن ویژگی¬ها در گام اول شروط لازم را جهت تحقق این چشم انداز برآورده نموده و در گام بعد این ویژگی ها با به وجود آوردن مزیت های رقابتی برای این سامانه شروط کافی جهت موفقیت این سامانه را نیز فراهم می آورد باتشکر معاونت منابع انسانی شرکت آسان پرداخت' 
        },
        { 
           frommail: 'A20Group@yahoo.com',
            from: 'شرکت آسان پرداخت',
            to: 'شزکت فناپ',
            subject: 'دعوت به مصاحبه', 
            date: '96/07/24', 
            time: '2:32 ب.ظ', 
            body: 'با سلامتحقق این هدف و چشم انداز در صورتی محقق می گردد که این سامانه دارای ویژگی¬های خاصی باشد که دارا بودن آن ویژگی¬ها در گام اول شروط لازم را جهت تحقق این چشم انداز برآورده نموده و در گام بعد این ویژگی ها با به وجود آوردن مزیت های رقابتی برای این سامانه شروط کافی جهت موفقیت این سامانه را نیز فراهم می آورد باتشکر معاونت منابع انسانی شرکت آسان پرداخت' 
     },];
    
    $scope.sendEmail = function() {
	    $scope.activeTab = "sent";
        $scope.composeEmail.from = "me";
        $scope.composeEmail.to = $scope.composeEmail.to;
        $scope.composeEmail.subject = $scope.composeEmail.subject;        
        $scope.composeEmail.date = "96/07/24";        
        $scope.composeEmail.time = "2:30 ب.ظ";        
        $scope.sentEmails.push($scope.composeEmail);
		 $scope.composeEmail = {};

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
            frommail: 'A20Group@yahoo.com',
            from: 'شرکت آسان پرداخت',
            to: 'me',
            subject: 'دعوت به مصاحبه', 
            date: '96/07/24', 
            time: '2:33 ب.ظ', 
            body: 'با سلامتحقق این هدف و چشم انداز در صورتی محقق می گردد که این سامانه دارای ویژگی¬های خاصی باشد که دارا بودن آن ویژگی¬ها در گام اول شروط لازم را جهت تحقق این چشم انداز برآورده نموده و در گام بعد این ویژگی ها با به وجود آوردن مزیت های رقابتی برای این سامانه شروط کافی جهت موفقیت این سامانه را نیز فراهم می آورد باتشکر معاونت منابع انسانی شرکت آسان پرداخت' 
        },
        { 
           frommail: 'A20Group@yahoo.com',
            from: 'شرکت آسان پرداخت',
            to: 'me',
            subject: 'دعوت به مصاحبه', 
            date: '96/07/24', 
            time: '2:32 ب.ظ', 
            body: 'با سلامتحقق این هدف و چشم انداز در صورتی محقق می گردد که این سامانه دارای ویژگی¬های خاصی باشد که دارا بودن آن ویژگی¬ها در گام اول شروط لازم را جهت تحقق این چشم انداز برآورده نموده و در گام بعد این ویژگی ها با به وجود آوردن مزیت های رقابتی برای این سامانه شروط کافی جهت موفقیت این سامانه را نیز فراهم می آورد باتشکر معاونت منابع انسانی شرکت آسان پرداخت' 
     },
        { 
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
  {transactionhistory: '96/7/24',transactiontype: 'واریز',issuetracking: '45613216511632151',transactionprice: '420,000+',transactioncredit: '420,000',recivefactorlink: '',},
  {transactionhistory: '96/7/24',transactiontype: 'پرداخت',issuetracking: '45613216511632151',transactionprice: '420,000-',transactioncredit: '0',recivefactorlink: '',},
  {transactionhistory: '96/7/24',transactiontype: 'واریز ناموفق',issuetracking: '45613216511632151',transactionprice: '420,000',transactioncredit: '420,000',recivefactorlink: '',},
  {transactionhistory: '96/7/24',transactiontype: 'واریز',issuetracking: '45613216511632151',transactionprice: '420,000+',transactioncredit: '420,000',recivefactorlink: '',},
  {transactionhistory: '96/7/24',transactiontype: 'پرداخت',issuetracking: '45613216511632151',transactionprice: '420,000-',transactioncredit: '0',recivefactorlink: '',},
  {transactionhistory: '96/7/24',transactiontype: 'واریز ناموفق',issuetracking: '45613216511632151',transactionprice: '420,000',transactioncredit: '420,000',recivefactorlink: '',},
  {transactionhistory: '96/7/24',transactiontype: 'واریز',issuetracking: '45613216511632151',transactionprice: '420,000+',transactioncredit: '420,000',recivefactorlink: '',},
  {transactionhistory: '96/7/24',transactiontype: 'پرداخت',issuetracking: '45613216511632151',transactionprice: '420,000-',transactioncredit: '0',recivefactorlink: '',},
  {transactionhistory: '96/7/24',transactiontype: 'واریز ناموفق',issuetracking: '45613216511632151',transactionprice: '420,000',transactioncredit: '420,000',recivefactorlink: '',},
  {transactionhistory: '96/7/24',transactiontype: 'واریز',issuetracking: '45613216511632151',transactionprice: '420,000+',transactioncredit: '420,000',recivefactorlink: '',},
  {transactionhistory: '96/7/24',transactiontype: 'پرداخت',issuetracking: '45613216511632151',transactionprice: '420,000-',transactioncredit: '0',recivefactorlink: '',},
  {transactionhistory: '96/7/24',transactiontype: 'واریز ناموفق',issuetracking: '45613216511632151',transactionprice: '420,000',transactioncredit: '420,000',recivefactorlink: '',},
  {transactionhistory: '96/7/24',transactiontype: 'واریز',issuetracking: '45613216511632151',transactionprice: '420,000+',transactioncredit: '420,000',recivefactorlink: '',},
  {transactionhistory: '96/7/24',transactiontype: 'پرداخت',issuetracking: '45613216511632151',transactionprice: '420,000-',transactioncredit: '0',recivefactorlink: '',},
  {transactionhistory: '96/7/24',transactiontype: 'واریز ناموفق',issuetracking: '45613216511632151',transactionprice: '420,000',transactioncredit: '420,000',recivefactorlink: '',},

  ];
  
  $scope.mytransactionsviewby = 7;
  $scope.mytransactionstotalItems = $scope.mytransactions.length;
  $scope.mytransactionscurrentPage = 1;
  $scope.mytransactionsitemsPerPage = $scope.mytransactionsviewby;
  $scope.mytransactionsmaxSize = 5;

  $scope.mytransactionssetPage = function (pageNo) {
    $scope.mytransactionscurrentPage = pageNo;
  };

$scope.setItemsPerPage = function(num) {
  $scope.itemsPerPage = num;
  $scope.currentPage = 1; 
}

  $scope.removejob = function(item) {
    $scope.data.splice(item, 1);
  };
  

  
	
	
});





