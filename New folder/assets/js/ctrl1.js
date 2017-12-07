console.clear();

app.controller('mainpage', function($compile, $sce, $scope, $window, $http , ShareData , $location ,  $localStorage , $sessionStorage) {
	    var mustafasite = "https://sadaf.systmngr.ir/api/v1";


				$scope.showalljobs = function() {
															ShareData.setPropertysermahhp("");

							$location.path("jobpostspage");
				}

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
	{title : 'ایجاد پروفایل شغلی' , img : 'assets/images/three-home1.svg' , text : 'برای اضافه نمودن یک پروفایل کافیست ابتدا اقدام به عضویت نموده و وارد حساب برای آنکه بتوانید برای یک شغل درخواست ثبت کنید می بایست تا حد مشخصی پروفایل کاملی داشته باشید' ,},
	{title : 'انجام پژوهش برای صنعت توسط شما' , img : 'assets/images/three-home2.svg' , text : 'برای اضافه نمودن یک پروفایل کافیست ابتدا اقدام به عضویت نموده و وارد حساب برای آنکه بتوانید برای یک شغل درخواست ثبت کنید می بایست تا حد مشخصی پروفایل کاملی داشته باشید' ,},
	{title : 'معرفی شما به عنوان نیروی کار' , img : 'assets/images/three-home3.svg' , text : 'برای اضافه نمودن یک پروفایل کافیست ابتدا اقدام به عضویت نموده و وارد حساب برای آنکه بتوانید برای یک شغل درخواست ثبت کنید می بایست تا حد مشخصی پروفایل کاملی داشته باشید' ,},
	];	



	      var config = {
                headers : {
                    'Content-Type': 'application/json'
                }
            }

     $http.get(mustafasite +"/job",config).then(function (response) {
        $scope.jobsdata = response.data.hits;
    });   

	$http.get(mustafasite +"/statistic",config).then(function (response) {
        $scope.statistic = response.data;
    }); 



	            $scope.add = function(item) {
                var data = {
                    id: item.id,
                };

                var config = {
                        headers: {
                            'Content-Type': 'application/json',
                            'Access-Token': $localStorage.TokenKey.access,
                        }
                 }
                $http.post(mustafasite + '/job_seeker/bookmark/job', JSON.stringify(data), config).then(function(response) {
					$scope.pindedplus = false;
					$scope.pindedcheck = true ;
				    }); 

				}	       

				$scope.remove = function(item) {
                var data =  item.id;

                var config = {
                        headers: {
                            'Access-Token': $localStorage.TokenKey.access,
                        }
                 }

                $http.delete(mustafasite + '/job_seeker/bookmark/job/' + data, config).then(function(response) {
					$scope.pindedplus = true;
					$scope.pindedcheck = false ;
				    }); 

				}

				$scope.requestjob = function(item) {
                var data = {
                    id: item.id,
                };

                var config = {
                        headers: {
                            'Content-Type': 'application/json',
                            'Access-Token': $localStorage.TokenKey.access,
                        }
                 }

                $http.post(mustafasite + '/job_seeker/request_job', JSON.stringify(data), config).then(function(response) {
					$scope.requestshow = false;
					$scope.derequestshow = true ;
				    }); 

				}	


				$scope.derequestjob = function(item) {
                var data =  item.id;

                var config = {
                        headers: {
                            'Access-Token': $localStorage.TokenKey.access,
                        }
                 }

                $http.delete(mustafasite + '/job_seeker/request_job/' + data, config).then(function(response) {
					$scope.requestshow = true;
					$scope.derequestshow = false ;
				    }); 

				}

				$scope.Searchmahratfun = function(searchmaharat) {
					ShareData.setPropertysermahhp(searchmaharat);
					$location.path("jobpostspage");
				}

				
								
				$scope.showajob = function(item) {
                    var config = {
                        headers: {
                            'Content-Type': 'application/json',
                            'Access-Token': $localStorage.TokenKey.access,
                        }
                    }
                    $http.get(mustafasite + "/job_seeker", config).then(function(response) {
					ShareData.setPropertyjobid(item.id);
					$location.path("apostpage");
                    });
				}



    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('.scrollToTop').fadeIn();
        } else {
            $('.scrollToTop').fadeOut();
        }
    });
    $('.scrollToTop').click(function() {
        $("html, body").animate({
            scrollTop: 0
        }, 1000);
        return false;
    });
				


});
