console.clear();

app.controller('spmainpage', function($compile, $sce, $scope, $window, $http, ShareData , $location ,  $localStorage , $sessionStorage) {
    var mustafasite = "https://sadaf.systmngr.ir/api/v1";


    $scope.showpagestarrating = 4;
        $scope.showpagestaroptions = {
            ratedFill: '#FFD24D',
            normalFill: '#fff',
            rtl: false,
            readOnly: true,
			maxValue: 5,
            numStars: 5,
			spacing: "5px",
            starWidth: "16px"
        }; 

			$scope.showpagerectanrating = 7.2;
        $scope.showpagerectanoptions = {
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
'</svg>'
        };	
	$scope.banners = [
	{title : 'ارزیابی از کارجویان' , img : 'assets/images/sptopb3.svg' , text : 'برای اضافه نمودن یک پروفایل کافیست ابتدا اقدام به عضویت نموده و وارد حساب برای آنکه بتوانید برای یک شغل درخواست ثبت کنید می بایست تا حد مشخصی پروفایل کاملی داشته باشید' ,},
	{title : 'نمایش خدمات و محصولات' , img : 'assets/images/sptopb2.svg' , text : 'برای اضافه نمودن یک پروفایل کافیست ابتدا اقدام به عضویت نموده و وارد حساب برای آنکه بتوانید برای یک شغل درخواست ثبت کنید می بایست تا حد مشخصی پروفایل کاملی داشته باشید' ,},
	{title : 'مشاوره به کارفرمایان' , img : 'assets/images/sptopb1.svg' , text : 'برای اضافه نمودن یک پروفایل کافیست ابتدا اقدام به عضویت نموده و وارد حساب برای آنکه بتوانید برای یک شغل درخواست ثبت کنید می بایست تا حد مشخصی پروفایل کاملی داشته باشید' ,},
	];	

	      var config = {
                headers : {
                    'Content-Type': 'application/json'
                }
            }

     $http.get(mustafasite +"/service_provider?per_page=12",config).then(function (response) {
        $scope.serviceproviders = response.data.hits;
    }); 



				$scope.showasp = function(serviceprovider) {
					ShareData.setPropertyspid(serviceprovider.id);
					$location.path("spprofilepage"); 
				 }	

					$scope.RegSp = function(directphone,organemail) {
     var data = {
                    phone: directphone,
                    email: organemail
                };

                var config = {
                        headers: {
                            'Content-Type': 'application/json'
                        }
                 }

                $http.post(mustafasite + '/service_provider/request', JSON.stringify(data), config).then(function(response) {										alert("درخواست شما با موفقیت ارسال شد.");				        $scope.directphone = null        $scope.organemail = null;				}); 

				 }	


});
