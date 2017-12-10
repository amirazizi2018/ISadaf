console.clear();

app.controller('spdashboardpage', function($compile, $sce, $scope, $window, $http, Upload, $timeout) {

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
	
	$scope.logopic = 'data:image/jpeg;base64,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';
	
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
	
	$scope.packagesstatus = [
	{packagename : 'بسته یکماهه ارائه خدمات کارگزاری سامانه صدف' ,packagestatus : 'فعال' ,packageremaining : '15 روز باقیمانده' ,},
    ];	
	
		
	$scope.membershippackages = [
	{name : 'بسته ماهیانه 1 ماهه' ,price : '110 هزارتومن' ,serve1 : 'سقف نامحدود' ,serve2 : 'میزان فعالیت مشتریان' , serve3 : 'سقف نامحدود' , serve4 : 'سقف نامحدوده' , btnlink : '' ,},
	{name : 'بسته حرفه ای 3 ماهه' ,price : '96 هزارتومن' ,serve1 : 'سقف نامحدود' ,serve2 : 'میزان فعالیت مشتریان' , serve3 : 'سقف نامحدود' , serve4 : 'سقف نامحدوده' , btnlink : '' ,},
	{name : 'بسته حرفه ای 6 ماهه' ,price : '86 هزارتومن' ,serve1 : 'سقف نامحدود' ,serve2 : 'میزان فعالیت مشتریان' , serve3 : 'سقف نامحدود' , serve4 : 'سقف نامحدوده' , btnlink : '' , status : 'active' ,},
    ];	
	
	
	
	
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
	
  $scope.notificationviewby = 5;
  $scope.notificationtotalItems = $scope.notificationdata.length;
  $scope.notificationcurrentPage = 1;
  $scope.notificationitemsPerPage = $scope.notificationviewby;
  $scope.notificationmaxSize = 5;

  $scope.notificationsetPage = function (pageNo) {
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




   $scope.orderByField = '';
  $scope.reverseSort = false;
  
  $scope.servicesmanagements = [
  {id: '1' , name: 'MBTI', marketshare: '23',employers: '23',jobseeker: '120',condition:'صعودی',},
  {id: '2' , name: 'Neo-Pi', marketshare: '16',employers: '16',jobseeker: '52',condition:'صعودی',},
  {id: '3' , name: 'Microsoft Exell', marketshare: '17',employers: '17',jobseeker: '15',condition:'نزولی',},  
  {id: '4' , name: 'Neo-Pi', marketshare: '42',employers: '42',jobseeker: '64',condition:'نزولی',},
  {id: '5' , name: 'Microsoft Exell', marketshare: '12',employers: '12',jobseeker: '48',condition:'صعودی',},
  {id: '6' , name: 'Neo-Pi', marketshare: '16',employers: '16',jobseeker: '52',condition:'صعودی',},
  {id: '7' , name: 'Microsoft Exell', marketshare: '17',employers: '17',jobseeker: '15',condition:'نزولی',},  
  {id: '8' , name: 'Neo-Pi', marketshare: '42',employers: '42',jobseeker: '64',condition:'نزولی',},
  ];
	
	
	 $scope.removeservicesmanagement = function(servicesmanagement) {
		        if (confirm('آیا مطمئنی ؟')) {

var index = -1;

$scope.servicesmanagements.some(function(obj, i) {
  return obj.id == servicesmanagement.id ? index = i : false;
});

  $scope.servicesmanagements.splice($scope.servicesmanagements.indexOf(servicesmanagement), 1);
	 }
    };	
	
  $scope.expand =  function(servicesmanagement) {
		        if (confirm('آیا مطمئنی ؟')) {
				servicesmanagement.show_variables = !servicesmanagement.show_variables;

				}
  };
 
	 
  $scope.servicesmanagementsviewby = 6;
  $scope.servicesmanagementstotalItems = $scope.servicesmanagements.length;
  $scope.servicesmanagementscurrentPage = 1;
  $scope.servicesmanagementsitemsPerPage = $scope.servicesmanagementsviewby;
  $scope.servicesmanagementsmaxSize = 5;

  $scope.servicesmanagementssetPage = function (pageNo) {
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
     },];
    
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
		  'targetPath' : 'images/',
		  username: $scope.username,
		  file: file
		  },
    });
		
		    file.upload.then(function (response) {
      $timeout(function () {
		                  alert('/sadafupload/' + response.data);
		                  $scope.composeEmail.attachfile = '/sadafupload/' + response.data;
        file.result = response.data;
		               $scope.attachmailfile = null;

      });
    }, function (response) {
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

/* $scope.setItemsPerPage = function(num) {
  $scope.itemsPerPage = num;
  $scope.currentPage = 1; 
} */
	$scope.jobseekers = [       {id : "1" , picture : "https://x1.xingassets.comassets/frontend_minified/img/users/nobody_m.original.jpg" , name : "حمید محمدی", tag : "کارشناس", status : "پیام داده شد", date : "امروز", sendmass : "", viewprofile : "", downloadprofile : "", reqtype : "ارزیابی شایستگی", testtype : "بسته شایستگی عمومی",},        {id : "2" , picture : "https://x1.xingassets.comassets/frontend_minified/img/users/nobody_m.original.jpg" , name : "اصغر صفی علیشاه", tag : "کارشناس", status : "جدید", date : "امروز", sendmass : "", viewprofile : "", downloadprofile : "", reqtype : "گواهینامه", testtype : "زبان انگلیسی",},        {id : "3" , picture : "https://x1.xingassets.comassets/frontend_minified/img/users/nobody_m.original.jpg" , name : "محمدرضا تقی زاد مژگان", tag : "کارشناس", status : "جدید", date : "امروز", sendmass : "", viewprofile : "", downloadprofile : "", reqtype : "درخواست دوره", testtype : "ویژال استودیو",},        {id : "4" , picture : "https://x1.xingassets.comassets/frontend_minified/img/users/nobody_m.original.jpg" , name : "رئیس علی نادر کلابادی", tag : "کارشناس", status : "جدید", date : "امروز", sendmass : "", viewprofile : "", downloadprofile : "", reqtype : "درخواست تعﯿﯿن سطح", testtype : "زبان انگلیسی",},       ];		    $scope.jobseekersviewby = 8;  $scope.jobseekerstotalItems = $scope.jobseekers.length;  $scope.jobseekerscurrentPage = 1;  $scope.jobseekersitemsPerPage = $scope.jobseekersviewby;  $scope.jobseekersmaxSize = 5;  $scope.jobseekerssetPage = function (pageNo) {    $scope.jobseekerscurrentPage = pageNo;  };$scope.setItemsPerPage = function(num) {  $scope.itemsPerPage = num;  $scope.currentPage = 1; }

  
	
	
});




