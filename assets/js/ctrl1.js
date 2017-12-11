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
	{title : 'ایجاد پروفایل شغلی' , img : 'assets/images/three-home1.svg' , text : 'پروفایل شغلی نخستین تصویر از شما در دیدگان کارفرماست. با ایجاد یک پروفایل شغلی هدفمند، جامع و شفاف تصویری جذاب از خود در ذهن کارفرما ایجاد نمائید. صدف برای آن انواع امکانات را در اختیار شما قرارداده است.' ,},
	{title : 'انجام پژوهش برای صنعت توسط شما' , img : 'assets/images/three-home2.svg' , text : 'مسائل بسیار زیادی در صنابع مختلف، در انتظار راه حل های شما هستند. شما می تواند با دانش، مهارت و تجربه خود با حل مسائل بیان شده در صدف همکاری خود را با انواع صنایع آغاز نمائید.' ,},
	{title : 'معرفی شما به عنوان نیروی کار' , img : 'assets/images/three-home3.svg' , text : 'بهترین نیروی کار برای بهترین جایگاه شغلی. این شعار صدف در معرفی سرمایه انسانی به صنعت است. در سامانه صدف مجموعه ای از بهترین ابزارها برای بهترین انتخاب ها در اختیار شما قرار دارد.' ,},
	];	



	      var config = {
                headers : {
                    'Content-Type': 'application/json',					                            'Access-Token': $localStorage.TokenKey.access,
                }
            }

     $http.get(mustafasite +"/job",config).then(function (response) {
        $scope.jobsdata = response.data.hits;
    });   
	      var confignt = {                headers : {                    'Content-Type': 'application/json',                }            }
	$http.get(mustafasite +"/statistic",confignt).then(function (response) {
        $scope.statistic = response.data;
    }); 
$scope.pindedplus = [];$scope.pindedcheck = [];$scope.pindedplusshow = [];$scope.pindedcheckhide = [];$scope.requestshow = [];$scope.requestshowshow = [];$scope.derequestshow = [];$scope.derequestshowhide = [];


	            $scope.add = function(item,$index) {
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
			$scope.pindedplusshow[$index] = false;					$scope.pindedcheckhide[$index] = false ;					$scope.pindedplus[$index] = true;					$scope.pindedcheck[$index] = true ;					
				    }); 

				}	       

				$scope.remove = function(item,$index) {
                var data =  item.id;

                var config = {
                        headers: {
                            'Access-Token': $localStorage.TokenKey.access,
                        }
                 }

                $http.delete(mustafasite + '/job_seeker/bookmark/job/' + data, config).then(function(response) {
			$scope.pindedplus[$index] = false;					$scope.pindedcheck[$index] = false ;					$scope.pindedplusshow[$index] = true;					$scope.pindedcheckhide[$index] = true ;
				    }); 

				}

				$scope.requestjob = function(item,$index) {
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
		$scope.requestshowshow[$index] = true;					$scope.requestshow[$index] = false ;					$scope.derequestshowhide[$index] = false;					$scope.derequestshow[$index] = true ;
				    }); 

				}	


				$scope.derequestjob = function(item,$index) {
                var data =  item.id;

                var config = {
                        headers: {
                            'Access-Token': $localStorage.TokenKey.access,
                        }
                 }

                $http.delete(mustafasite + '/job_seeker/request_job/' + data, config).then(function(response) {
				$scope.requestshowshow[$index] = false;					$scope.requestshow[$index] = true ;					$scope.derequestshowhide[$index] = true;					$scope.derequestshow[$index] = false ;
				    }); 

				}
	$scope.showajob = function(item) {                    var config = {                        headers: {                            'Content-Type': 'application/json',                            'Access-Token': $localStorage.TokenKey.access,                        }                    }                    $http.get(mustafasite + "/job_seeker", config).then(function(response) {					ShareData.setPropertyjobid(item.id);					$location.path("apostpage");                    });				}
						$scope.Searchmahratfun = function(searchmaharat) {
					ShareData.setPropertysermahhp(searchmaharat);
					$location.path("jobpostspage");
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
