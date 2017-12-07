console.clear();

app.controller('jobseekerprofilepage' ,function($compile, $sce, $scope, $window, $http, Upload, $timeout , ShareData , $location ,  $localStorage , $sessionStorage) {
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


    $scope.max =            100;


	    $http.get(mustafasite +'/job_seeker', {
    headers: {
        "Content-Type": 'application/json',
                'Access-Token': $localStorage.TokenKey.access,
    }
  }).then(function (response) {
		    $scope.current = response.data.null_percent;
		    $scope.logopic = response.data.avatar;
		    $scope.fullname = response.data.fullname;
		    $scope.position = response.data.position;
		    $scope.email = response.data.email;
		    $scope.phone = response.data.phone;
		    $scope.phonefix = response.data.fixed_phone;
		    $scope.address = response.data.address;
		    $scope.mybio = response.data.bio;

			  $scope.editorEnabledposition = false;

  $scope.enableEditorposition = function() {
    $scope.editorEnabledposition = true;
    $scope.editableTitleposition = $scope.position;
  };

  $scope.disableEditorposition = function() {
    $scope.editorEnabledposition = false;
  };

  $scope.saveeditposition = function() {
	          var data = {
                    position: $scope.editableTitleposition,
                };

	          var config = {
            headers: {
                'Content-Type': 'application/json',
                'Access-Token': $localStorage.TokenKey.access,
            }
        }
        $http.put(mustafasite + "/job_seeker", JSON.stringify(data), config).then(function(response) {
		    $scope.position = $scope.editableTitleposition;
    $scope.disableEditorposition();
        });
		
		};
					  $scope.editorEnabledbio = false;

  $scope.enableEditorbio = function() {
    $scope.editorEnabledbio = true;
    $scope.editableTitlebio = $scope.mybio;
  };

  $scope.disableEditorbio = function() {
    $scope.editorEnabledbio = false;
  };
     

  $scope.saveeditbio = function() {
	          var data = {
                    bio: $scope.editableTitlebio,
                };

	          var config = {
            headers: {
                'Content-Type': 'application/json',
                'Access-Token': $localStorage.TokenKey.access,
            }
        }
        $http.put(mustafasite + "/job_seeker", JSON.stringify(data), config).then(function(response) {
		    $scope.mybio = $scope.editableTitlebio;
    $scope.disableEditorbio();
        });
		
  }; 


  $scope.TamasFormJS = function() {
	          var data = {
                    fixed_phone: $scope.phonefix,
                    address: $scope.address,
                };

	          var config = {
            headers: {
                'Content-Type': 'application/json',
                'Access-Token': $localStorage.TokenKey.access,
            }
        }
        $http.put(mustafasite + "/job_seeker", JSON.stringify(data), config).then(function(response) {
		    $scope.phonefix = $scope.phonefix;
		    $scope.address = $scope.address;
		  $('#ShowPopupEditTamas').modal('hide');
        });
		
  };
    }); 




	$scope.savelogo = function(dataUrl, name){
			dataUrl2 = dataUrl.replace("data:image/png;base64,", "");
				var data = {
            "image" : dataUrl2,
			}

        var config = {
            headers: {
                'Content-Type': 'application/json',
                'Access-Token': $localStorage.TokenKey.access,
            }
        }


        $http.put(mustafasite + '/job_seeker/avatar64', JSON.stringify(data), config).then(function(response) {
			        $timeout(function () {
                $scope.logopic =  response.data;
		  $('#ShowPopupUploadLogo').modal('hide');
          $scope.logopicfile = null;

            });
        });

  } 


	$http.get(mustafasite +'/job_seeker/notification', {
    headers: {
        "Content-Type": 'application/json',
        'Access-Token': $localStorage.TokenKey.access,
    }
  }).then(function (response) {
		    $scope.notifications = response.data.notification;
    }); 

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
	{textbtn:'کاروندی'},
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




	$scope.assmereq = [
	{name : 'ارزیابی کلی:' , 
	"row" : [
	{title : 'روزمه شخصی' , img : 'assets/images/lk1' , link : '' , level : '' ,},
	{title : 'اضافه نمودن رزومه' , img : '' , link : '' , level : '' , classes : 'addbtnpgjp',},
   ]
	},

	{name : 'ارزیابی شخصیت:' , 
	"row" : [
	{title : 'تست MBTI' , img : 'assets/images/lk1' , link : '' , level : '' ,},
	{title : 'تست Watson-Glaser' , img : 'assets/images/lk1' , link : '' , level : '' ,},
	{title : 'اضافه نمودن آزمون شخصیت' , img : '' , link : '' , level : '' , classes : 'addbtnpgjp',},
   ]
	},	

	{name : 'ارزیابی مهارتی:' , 
	"row" : [
	{title : 'گزارش نویسی' , img : 'assets/images/lk2' , link : '' , level : 'سطح 1' ,},
	{title : 'Microsoft Exell' , img : 'assets/images/lk2' , link : '' , level : 'سطح 1' ,},
	{title : 'Microsoft Project' , img : 'assets/images/lk2' , link : '' , level : 'سطح 1' ,},
	{title : 'Comfar' , img : 'assets/images/lk2' , link : '' , level : 'سطح 1' ,},
	{title : 'اضافه نمودن مهارت' , img : '' , link : '' , level : '' , classes : 'addbtnpgjp',},

   ]
	},	

	{name : 'ارزیابی شایستگی:' , 
	"row" : [
	{title : 'تفکر تحلیلی' , img : 'assets/images/lk3' , link : '' , level : '' ,},
	{title : 'اضافه نمودن شایستگی' , img : '' , link : '' , level : '' , classes : 'addbtnpgjp',},

   ]
	},

	];


/* 	$scope.notifications = [
      {description:'شی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی <a href>طرح سفارش</a> گرفته شده استفاده می نماید'},
      {description:'شی و بی&zwnj;معنی در صنعت چاپ، صفحه&zwnj;آرایی و طراحی گرافیک گفته می&zwnj;شود. طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح <button type="button" class="btn btn-info btn-sm">ورود سازمان ها</button>  شی و بی&zwnj;معنی در صنعت چاپ '},
         ];

	 */

	      var config = {
                headers : {
                    'Content-Type': 'application/json'
                }
            }

     $http.get(mustafasite +"/job",config).then(function (response) {
        $scope.data = response.data.hits;
		  $scope.totalItems = $scope.data.length;

							$scope.pindedplus = true;
					$scope.requestshow = true;

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


});
