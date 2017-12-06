console.clear();

app.controller('jobsalbum', function($compile, $sce, $scope, $window, $http) {
	
	$scope.highdemandjobs = [
	{name : 'مدیر بازرگانی' , link : '',},
	{name : 'مدیر بازرگانی' , link : '',},
	{name : 'مدیر بازرگانی' , link : '',},
	{name : 'مدیر بازرگانی' , link : '',},
	{name : 'مدیر بازرگانی' , link : '',},
	{name : 'مدیر بازرگانی' , link : '',},
	{name : 'مدیر بازرگانی' , link : '',},
	{name : 'مدیر بازرگانی' , link : '',},
	{name : 'مدیر بازرگانی' , link : '',},
	];		
	
	$scope.popularjobs = [
	{name : 'مهندس ناظر' , link : '',},
	{name : 'مهندس ناظر' , link : '',},
	{name : 'مهندس ناظر' , link : '',},
	{name : 'مهندس ناظر' , link : '',},
	{name : 'مهندس ناظر' , link : '',},
	{name : 'مهندس ناظر' , link : '',},
	{name : 'مهندس ناظر' , link : '',},
	{name : 'مهندس ناظر' , link : '',},
	{name : 'مهندس ناظر' , link : '',},
	{name : 'مهندس ناظر' , link : '',},
	{name : 'مهندس ناظر' , link : '',},
	];	
	
		 $scope.detailslogt3 = {};
     $scope.toggleDetails = function(namecat){
 		if($scope.detailslogt3.shown === namecat){
    	$scope.detailslogt3.shown = null;
    } 
	else {
	$scope.detailslogt3.shown = namecat;
	}
 }
 
	
		$scope.jobcategories = [ 
      { namecat : "بازاریاب", "subjobcategories":[
	{name : 'مهندس ناظر' , link : '',},
	{name : 'مهندس ناظر' , link : '',},
	{name : 'مهندس ناظر' , link : '',},
	{name : 'مهندس ناظر' , link : '',},
	{name : 'مهندس ناظر' , link : '',},
	{name : 'مهندس ناظر' , link : '',},
	{name : 'مهندس ناظر' , link : '',},
	{name : 'مهندس ناظر' , link : '',},
	{name : 'مهندس ناظر' , link : '',},
	{name : 'مهندس ناظر' , link : '',},
	{name : 'مهندس ناظر' , link : '',},
		]
		},  
		{ namecat : "مدیر فناوری اطلاعات", "subjobcategories":[
	{name : 'مهندس ناظر' , link : '',},
	{name : 'مهندس ناظر' , link : '',},
	{name : 'مهندس ناظر' , link : '',},
	{name : 'مهندس ناظر' , link : '',},
	{name : 'مهندس ناظر' , link : '',},
	{name : 'مهندس ناظر' , link : '',},
	{name : 'مهندس ناظر' , link : '',},
	{name : 'مهندس ناظر' , link : '',},
	{name : 'مهندس ناظر' , link : '',},
	{name : 'مهندس ناظر' , link : '',},
	{name : 'مهندس ناظر' , link : '',},
		]
		},  
		{ namecat : "مدیر بازرگانی", "subjobcategories":[
	{name : 'مهندس ناظر' , link : '',},
	{name : 'مهندس ناظر' , link : '',},
	{name : 'مهندس ناظر' , link : '',},
	{name : 'مهندس ناظر' , link : '',},
	{name : 'مهندس ناظر' , link : '',},
	{name : 'مهندس ناظر' , link : '',},
	{name : 'مهندس ناظر' , link : '',},
	{name : 'مهندس ناظر' , link : '',},
	{name : 'مهندس ناظر' , link : '',},
	{name : 'مهندس ناظر' , link : '',},
	{name : 'مهندس ناظر' , link : '',},
		]
		},   
		{ namecat : "کارشناس بورس", "subjobcategories":[
	{name : 'مهندس ناظر' , link : '',},
	{name : 'مهندس ناظر' , link : '',},
	{name : 'مهندس ناظر' , link : '',},
	{name : 'مهندس ناظر' , link : '',},
	{name : 'مهندس ناظر' , link : '',},
	{name : 'مهندس ناظر' , link : '',},
	{name : 'مهندس ناظر' , link : '',},
	{name : 'مهندس ناظر' , link : '',},
	{name : 'مهندس ناظر' , link : '',},
	{name : 'مهندس ناظر' , link : '',},
	{name : 'مهندس ناظر' , link : '',},
		]
		},  
		{ namecat : "کارشناس سئو", "subjobcategories":[
	{name : 'مهندس ناظر' , link : '',},
	{name : 'مهندس ناظر' , link : '',},
	{name : 'مهندس ناظر' , link : '',},
	{name : 'مهندس ناظر' , link : '',},
	{name : 'مهندس ناظر' , link : '',},
	{name : 'مهندس ناظر' , link : '',},
	{name : 'مهندس ناظر' , link : '',},
	{name : 'مهندس ناظر' , link : '',},
	{name : 'مهندس ناظر' , link : '',},
	{name : 'مهندس ناظر' , link : '',},
	{name : 'مهندس ناظر' , link : '',},
		]
		},   
		{ namecat : "مهندس نرم افزار", "subjobcategories":[
	{name : 'Ui کار که شیرینی نمیده' , link : '',},
	{name : 'مهندس ناظر' , link : '',},
	{name : 'مهندس ناظر' , link : '',},
	{name : 'مهندس ناظر' , link : '',},
	{name : 'مهندس ناظر' , link : '',},
	{name : 'مهندس ناظر' , link : '',},
	{name : 'مهندس ناظر' , link : '',},
	{name : 'مهندس ناظر' , link : '',},
	{name : 'مهندس ناظر' , link : '',},
	{name : 'مهندس ناظر' , link : '',},
	{name : 'مهندس ناظر' , link : '',},
		]
		},    
		{ namecat : "2مدیر فناوری اطلاعات", "subjobcategories":[
	{name : 'مهندس ناظر' , link : '',},
	{name : 'مهندس ناظر' , link : '',},
	{name : 'مهندس ناظر' , link : '',},
	{name : 'مهندس ناظر' , link : '',},
	{name : 'مهندس ناظر' , link : '',},
	{name : 'مهندس ناظر' , link : '',},
	{name : 'مهندس ناظر' , link : '',},
	{name : 'مهندس ناظر' , link : '',},
	{name : 'مهندس ناظر' , link : '',},
	{name : 'مهندس ناظر' , link : '',},
	{name : 'مهندس ناظر' , link : '',},
		]
		},    
		{ namecat : "2مهندس نرم افزار", "subjobcategories":[
	{name : 'مهندس ناظر' , link : '',},
	{name : 'مهندس ناظر' , link : '',},
	{name : 'مهندس ناظر' , link : '',},
	{name : 'مهندس ناظر' , link : '',},
	{name : 'مهندس ناظر' , link : '',},
	{name : 'مهندس ناظر' , link : '',},
	{name : 'مهندس ناظر' , link : '',},
	{name : 'مهندس ناظر' , link : '',},
	{name : 'مهندس ناظر' , link : '',},
	{name : 'مهندس ناظر' , link : '',},
	{name : 'مهندس ناظر' , link : '',},
		]
		},
    ];	


});
