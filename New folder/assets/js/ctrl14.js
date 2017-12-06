console.clear();

app.controller('companydashboardpage', function($compile, $sce, $scope, $window, $http, Upload, $timeout) {

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
	
	$scope.packagesstatus = [
	{packagename : 'بسته آگهی شغلی حرفه ای' ,packagestatus : 'فعال' ,packagedet : '12 عدد آگهی شغلی' ,packageremaining : '4 عدد باقیمانده' ,},
	{packagename : 'بسته جستجوی دیتابیس حرفه ای' ,packagestatus : 'فعال' ,packagedet : 'یک ماهه' ,packageremaining : '11 روز باقیمانده' ,},
    ];	
	
	
	
	
	
	
	
	$scope.notificationdata = [
      {newnotificationclass : 'newnotification' ,description:'شی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی <a href>طرح سفارش</a> گرفته شده استفاده می نماید'},
      {newnotificationclass : 'newnotification' ,description:'شی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی <a href>طرح سفارش</a> گرفته شده استفاده می نماید<br><br><button type="button" class="btn bluebtnreverse">ارتقای پروفایل</button>'},
      {description:'شی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح '},
      {description:'شی و بی&zwnj;معنی در صنعت چاپ، صفحه&zwnj;آرایی و طراحی گرافیک گفته می&zwnj;شود. طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح <br><div class="brokersem ng-scope" ng-repeat="broker in brokers"><img class="img brokericonimg" ng-class="{active: broker == selectpebroker}" src="/assets/images/lk2.png" ng-click="selectpebrokerfun(broker)" role="button" tabindex="0"></div><div class="brokersem ng-scope" ng-repeat="broker in brokers"><img class="img brokericonimg" ng-class="{active: broker == selectpebroker}" src="/assets/images/lk1.png" ng-click="selectpebrokerfun(broker)" role="button" tabindex="0"></div><div class="brokersem ng-scope" ng-repeat="broker in brokers"><img class="img brokericonimg" ng-class="{active: broker == selectpebroker}" src="/assets/images/lk3.png" ng-click="selectpebrokerfun(broker)" role="button" tabindex="0"></div>'},
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

		  $scope.jobsaveddata = [
         {id:'1', companyname:'بانک سامان',companylogo:'/assets/images/samanlogo.png',jobname:'مدیر تولید ',joblocations:'تهران',jobfield:'مهندسی صنایع/ مهندسی مکانیک/ مدیریت صنعتی',typeofcooperation: [{activeclass : 'active' ,textbtn:'تمام وقت'},{textbtn:'پاره وقت'},{textbtn:'کارآموزی'},{textbtn:'کاروندی'},],requestforcooperationjoblink : '#' ,readmorejoblink : '#' ,jobdate : '7 / تیر / 96' ,jobrateuser : '3' ,jobratesystem : '7'},
         {id:'2', companyname:'شرکت مپنا',companylogo:'/assets/images/mapnalogo.png',jobname:'مدیر تولید ',joblocations:'تهران',jobfield:'مهندسی صنایع/ مهندسی مکانیک/ مدیریت صنعتی',typeofcooperation: [{activeclass : 'active' ,textbtn:'تمام وقت'},{textbtn:'پاره وقت'},{textbtn:'کارآموزی'},{textbtn:'کاروندی'},],requestforcooperationjoblink : '#' ,readmorejoblink : '#' ,jobdate : '5 / تیر / 96' ,jobrateuser : '3' ,jobratesystem : '7'},
         {id:'3', companyname:'بانک سامان',companylogo:'/assets/images/samanlogo.png',jobname:'مدیر تولید ',joblocations:'تهران',jobfield:'مهندسی صنایع/ مهندسی مکانیک/ مدیریت صنعتی',typeofcooperation: [{activeclass : 'active' ,textbtn:'تمام وقت'},{textbtn:'پاره وقت'},{textbtn:'کارآموزی'},{textbtn:'کاروندی'},],requestforcooperationjoblink : '#' ,readmorejoblink : '#' ,jobdate : '7 / تیر / 96' ,jobrateuser : '3' ,jobratesystem : '7'},
         {id:'4', companyname:'شرکت مپنا',companylogo:'/assets/images/mapnalogo.png',jobname:'مدیر تولید ',joblocations:'تهران',jobfield:'مهندسی صنایع/ مهندسی مکانیک/ مدیریت صنعتی',typeofcooperation: [{activeclass : 'active' ,textbtn:'تمام وقت'},{textbtn:'پاره وقت'},{textbtn:'کارآموزی'},{textbtn:'کاروندی'},],requestforcooperationjoblink : '#' ,readmorejoblink : '#' ,jobdate : '5 / تیر / 96' ,jobrateuser : '3' ,jobratesystem : '7'},
         {id:'5', companyname:'بانک سامان',companylogo:'/assets/images/samanlogo.png',jobname:'مدیر تولید ',joblocations:'تهران',jobfield:'مهندسی صنایع/ مهندسی مکانیک/ مدیریت صنعتی',typeofcooperation: [{activeclass : 'active' ,textbtn:'تمام وقت'},{textbtn:'پاره وقت'},{textbtn:'کارآموزی'},{textbtn:'کاروندی'},],requestforcooperationjoblink : '#' ,readmorejoblink : '#' ,jobdate : '7 / تیر / 96' ,jobrateuser : '3' ,jobratesystem : '7'},
         {id:'6', companyname:'شرکت مپنا',companylogo:'/assets/images/mapnalogo.png',jobname:'مدیر تولید ',joblocations:'تهران',jobfield:'مهندسی صنایع/ مهندسی مکانیک/ مدیریت صنعتی',typeofcooperation: [{activeclass : 'active' ,textbtn:'تمام وقت'},{textbtn:'پاره وقت'},{textbtn:'کارآموزی'},{textbtn:'کاروندی'},],requestforcooperationjoblink : '#' ,readmorejoblink : '#' ,jobdate : '5 / تیر / 96' ,jobrateuser : '3' ,jobratesystem : '7'},
   ];


	 
  $scope.jobsavedviewby = 6;
  $scope.jobsavedtotalItems = $scope.jobsaveddata.length;
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
    $scope.data.splice(item, 1);
  };
  

  
  
  
  
  
  
  
	$scope.filterdatejosdata = [
         {"name":"کارشناس فروش","date":"96/01/24",},
    ];
		   
	$scope.jobseekers = [ 
      {id : "1" , picture : "https://x1.xingassets.com/assets/frontend_minified/img/users/nobody_m.original.jpg" , name : "حمید محمدی", tag : "ک2ارشناس فروش", status : "پیام داده شد", date : "4/4/96", sendmass : "", viewprofile : "", downloadprofile : "",},
        {id : "1" , picture : "https://x1.xingassets.com/assets/frontend_minified/img/users/nobody_m.original.jpg" , name : "حمید محمدی", tag : "ک2ارشناس فروش", status : "پیام داده شد", date : "4/4/96", sendmass : "", viewprofile : "", downloadprofile : "",},
        {id : "1" , picture : "https://x1.xingassets.com/assets/frontend_minified/img/users/nobody_m.original.jpg" , name : "حمید محمدی", tag : "ک2ارشناس فروش", status : "پیام داده شد", date : "4/4/96", sendmass : "", viewprofile : "", downloadprofile : "",},
        {id : "1" , picture : "https://x1.xingassets.com/assets/frontend_minified/img/users/nobody_m.original.jpg" , name : "حمید محمدی", tag : "ک2ارشناس فروش", status : "پیام داده شد", date : "4/4/96", sendmass : "", viewprofile : "", downloadprofile : "",},      
	  {id : "1" , picture : "https://x1.xingassets.com/assets/frontend_minified/img/users/nobody_m.original.jpg" , name : "حمید محمدی", tag : "کارشناس فروش", status : "جدید", date : "امروز", sendmass : "", viewprofile : "", downloadprofile : "",},
        {id : "1" , picture : "https://x1.xingassets.com/assets/frontend_minified/img/users/nobody_m.original.jpg" , name : "حمید محمدی", tag : "کارشناس فروش", status : "جدید", date : "امروز", sendmass : "", viewprofile : "", downloadprofile : "",},
        {id : "1" , picture : "https://x1.xingassets.com/assets/frontend_minified/img/users/nobody_m.original.jpg" , name : "حمید محمدی", tag : "کارشناس فروش", status : "جدید", date : "امروز", sendmass : "", viewprofile : "", downloadprofile : "",},
        {id : "1" , picture : "https://x1.xingassets.com/assets/frontend_minified/img/users/nobody_m.original.jpg" , name : "حمید محمدی", tag : "ک2ارشناس فروش", status : "پیام داده شد", date : "4/4/96", sendmass : "", viewprofile : "", downloadprofile : "",},
        {id : "1" , picture : "https://x1.xingassets.com/assets/frontend_minified/img/users/nobody_m.original.jpg" , name : "حمید محمدی", tag : "ک2ارشناس فروش", status : "پیام داده شد", date : "4/4/96", sendmass : "", viewprofile : "", downloadprofile : "",},
 ];	
	
  
  $scope.jobseekersviewby = 8;
  $scope.jobseekerstotalItems = $scope.jobseekers.length;
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



   
	$scope.jobseekersaved = [ 
      {id : "1" , picture : "https://x1.xingassets.com/assets/frontend_minified/img/users/nobody_m.original.jpg" , name : "حمید محمدی", tag : "ک2ارشناس فروش", status : "پیام داده شد", date : "4/4/96", sendmass : "", viewprofile : "", downloadprofile : "", searchlog : "",},
        {id : "1" , picture : "https://x1.xingassets.com/assets/frontend_minified/img/users/nobody_m.original.jpg" , name : "حمید محمدی", tag : "ک2ارشناس فروش", status : "پیام داده شد", date : "4/4/96", sendmass : "", viewprofile : "", downloadprofile : "", searchlog : "",},
        {id : "1" , picture : "https://x1.xingassets.com/assets/frontend_minified/img/users/nobody_m.original.jpg" , name : "حمید محمدی", tag : "ک2ارشناس فروش", status : "پیام داده شد", date : "4/4/96", sendmass : "", viewprofile : "", downloadprofile : "", searchlog : "",},
        {id : "1" , picture : "https://x1.xingassets.com/assets/frontend_minified/img/users/nobody_m.original.jpg" , name : "حمید محمدی", tag : "ک2ارشناس فروش", status : "پیام داده شد", date : "4/4/96", sendmass : "", viewprofile : "", downloadprofile : "", searchlog : "",},      
	  {id : "1" , picture : "https://x1.xingassets.com/assets/frontend_minified/img/users/nobody_m.original.jpg" , name : "حمید محمدی", tag : "کارشناس فروش", status : "جدید", date : "امروز", sendmass : "", viewprofile : "", downloadprofile : "", searchlog : "",},
        {id : "1" , picture : "https://x1.xingassets.com/assets/frontend_minified/img/users/nobody_m.original.jpg" , name : "حمید محمدی", tag : "کارشناس فروش", status : "جدید", date : "امروز", sendmass : "", viewprofile : "", downloadprofile : "", searchlog : "",},
        {id : "1" , picture : "https://x1.xingassets.com/assets/frontend_minified/img/users/nobody_m.original.jpg" , name : "حمید محمدی", tag : "کارشناس فروش", status : "جدید", date : "امروز", sendmass : "", viewprofile : "", downloadprofile : "", searchlog : "",},
        {id : "1" , picture : "https://x1.xingassets.com/assets/frontend_minified/img/users/nobody_m.original.jpg" , name : "حمید محمدی", tag : "ک2ارشناس فروش", status : "پیام داده شد", date : "4/4/96", sendmass : "", viewprofile : "", downloadprofile : "", searchlog : "",},
        {id : "1" , picture : "https://x1.xingassets.com/assets/frontend_minified/img/users/nobody_m.original.jpg" , name : "حمید محمدی", tag : "ک2ارشناس فروش", status : "پیام داده شد", date : "4/4/96", sendmass : "", viewprofile : "", downloadprofile : "", searchlog : "",},
 ];	
 
			$scope.sendsearchinjobse  = function() {
$scope.jobseekersaved = [ 
      {id : "1" , picture : "https://x1.xingassets.com/assets/frontend_minified/img/users/nobody_m.original.jpg" , name : "حمید محمدی", tag : "ک2ارشناس فروش", status : "پیام داده شد", date : "4/4/96", sendmass : "", viewprofile : "", downloadprofile : "", searchlog : "",},
        {id : "1" , picture : "https://x1.xingassets.com/assets/frontend_minified/img/users/nobody_m.original.jpg" , name : "حمید محمدی", tag : "ک2ارشناس فروش", status : "پیام داده شد", date : "4/4/96", sendmass : "", viewprofile : "", downloadprofile : "", searchlog : "",},
       {id : "1" , picture : "https://x1.xingassets.com/assets/frontend_minified/img/users/nobody_m.original.jpg" , name : "حمید محمدی", tag : "ک2ارشناس فروش", status : "پیام داده شد", date : "4/4/96", sendmass : "", viewprofile : "", downloadprofile : "", searchlog : "",},
        {id : "1" , picture : "https://x1.xingassets.com/assets/frontend_minified/img/users/nobody_m.original.jpg" , name : "حمید محمدی", tag : "ک2ارشناس فروش", status : "پیام داده شد", date : "4/4/96", sendmass : "", viewprofile : "", downloadprofile : "", searchlog : "",},
 ];	
     }
  
  $scope.jobseekersavedviewby = 8;
  $scope.jobseekersavedtotalItems = $scope.jobseekersaved.length;
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













	$scope.brokers = [ {kargozarname : "کارگزار۱" , kargozargeymat : "310000", kargozaricon : "/assets/images/lk1.png" } , {kargozarname : "کارگزار2" , kargozargeymat : "320000", kargozaricon : "/assets/images/lk2.png" } ,{kargozarname : "کارگزار3" , kargozargeymat : "330000", kargozaricon : "/assets/images/lk3.png" } ,{kargozarname : "کارگزار4" , kargozargeymat : "340000", kargozaricon : "/assets/images/lk5.png" } ,{kargozarname : "کارگزار5" , kargozargeymat : "350000", kargozaricon : "/assets/images/lk5.png" } ,{kargozarname : "کارگزار6" , kargozargeymat : "360000", kargozaricon : "/assets/images/lk1.png" } ,{kargozarname : "کارگزار7" , kargozargeymat : "370000", kargozaricon : "/assets/images/lk2.png" } ,{kargozarname : "کارگزار 8" , kargozargeymat : "380000", kargozaricon : "/assets/images/lk3.png" } ,];
	
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





