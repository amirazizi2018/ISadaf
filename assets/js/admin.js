console.clear();

var app = angular.module('sadaf-reg-ads', ['ngAnimate', 'ui.router', 'angular-svg-round-progressbar', 'ngMaterial', 'ui.bootstrap', 'ngFileUpload', 'ngImgCrop', 'rateYo',])

app.config(function($stateProvider, $urlRouterProvider) {
  
    $stateProvider
    
        .state('form', {
            url: '/form',
            templateUrl: 'form.html',
            controller: 'formController'
        })
        
        .state('form.alert', {
            url: '/alert',
            templateUrl: 'alert.html',
            controller: 'alerttab'
        })
        
        .state('form.alert.jobseeker', {
            url: '/jobseeker',
            templateUrl: 'jobseeker.html',
			controller: 'alertjobseeker'

        })
        
        .state('form.alert.employer', {
            url: '/employer',
            templateUrl: 'employer.html',
            controller: 'alertemployer'
        })
		
       .state('form.alert.serviceprovider', {
            url: '/serviceprovider',
            templateUrl: 'serviceprovider.html',
			controller: 'alertserviceprovider'
        })
		      
		.state('form.message', {
            url: '/message',
            templateUrl: 'message.html',
			controller: 'messagetab'
        })
		
		.state('form.tab6', {
            url: '/tab6',
            templateUrl: 'tab6.html',
			controller: 'mymessagebox'
        }) 
		
		.state('form.tab7', {
            url: '/tab7',
            templateUrl: 'tab7.html',
			controller: 'myfinancialtransactions'
        })		
		
		.state('form.tab8', {
            url: '/tab8',
            templateUrl: 'tab8.html',
			controller: 'mysetting'
        });
       
   
    $urlRouterProvider.otherwise('/form/alert/jobseeker');
})


app.directive('compileHtml', ['$sce', '$parse', '$compile',
  function($sce, $parse, $compile) {
    return {
      restrict: 'A',
      compile: function ngBindHtmlCompile(tElement, tAttrs) {
        var ngBindHtmlGetter = $parse(tAttrs.compileHtml);
        var ngBindHtmlWatch = $parse(tAttrs.compileHtml, function getStringValue(value) {
          return (value || '').toString();
        });
        $compile.$$addBindingClass(tElement);

        return function ngBindHtmlLink(scope, element, attr) {
          $compile.$$addBindingInfo(element, attr.compileHtml);

          scope.$watch(ngBindHtmlWatch, function ngBindHtmlWatchAction() {

            element.html($sce.trustAsHtml(ngBindHtmlGetter(scope)) || '');
            $compile(element.contents())(scope);
          });
        };
      }
    };
  }
]);


app.directive('ngConfirmClick', [
        function(){
            return {
                link: function (scope, element, attr) {
                    var msg = attr.ngConfirmClick || "Are you sure?";
                    var clickAction = attr.confirmedClick;
                    element.bind('change',function (event) {
                        if ( window.confirm(msg) ) {
                            scope.$eval(clickAction)
                        }
                    });
                }
            };
    }])




app.filter('trustAsHtml',['$sce', function($sce) {
    return function(text) {
      return $sce.trustAsHtml(text);
};
}]);

app.service('sharedProperties', function () {
        var userid = null;

        return {
            getProperty: function () {
                return userid;
            },
            setProperty: function(value) {
                userid = value;
            }
        };
    });

app.controller('formController', function($compile, $sce, $scope, $window, $http) {
});


app.controller('alerttab', function($compile, $sce, $scope, $window, $http, Upload, $timeout,$state) {
	        $state.go('form.alert.jobseeker');
});
	

app.controller('alertjobseeker', function($compile, $sce, $scope, $window, $http,sharedProperties,$state) {
	
	    var nodes = [
        {
            name: "审批1",
            date: "01/04/2016"
        }, {
            name: "审批2",
            date: "01/06/2016"
        },
        {
            name: "审批3",
            date: "01/10/2016"
        },
        {
            name: "审批4",
            date: "01/15/2016"
        },
        {
            name: "审批5",
            date: "01/20/2016"
        }, {
            name: "审批6",
            date: "01/22/2016"
        },
        {
            name: "审批7",
            date: "01/23/2016"
        }, {
            name: "审批8",
            date: "01/25/2016"
        }];

    console.log("??");

    $scope.nodes = nodes;

    $scope.remove = function () {
        $scope.nodes.splice(0, 1);
    };
	
	    $scope.activeTab = "info";

		 $scope.orderByField = '';
  $scope.reverseSort = false;
  
  $scope.mytransactions = [
  {transactionhistory: '96/7/24',transactiontype: 'واریز',issuetracking: '45613216511632151',transactionprice: '420,000+',transactioncredit: '420,000',recivefactorlink: '',},
  {transactionhistory: '96/7/24',transactiontype: 'پرداخت',issuetracking: '45613216511632151',transactionprice: '420,000-',transactioncredit: '0',recivefactorlink: '',},
  {transactionhistory: '96/7/24',transactiontype: 'واریز ناموفق',issuetracking: '45613216511632151',transactionprice: '420,000',transactioncredit: '420,000',recivefactorlink: '',},
  ];
		
		 $scope.biselbroker = {};
     $scope.toggleDetailsbi = function(name){
 		if($scope.biselbroker.shown === name){
				    $scope.activeTab = "info";
    	$scope.biselbroker.shown = null;
		} 
	else {
	$scope.biselbroker.shown = name;
	    $scope.activeTab = "info";

	}
 }
 
 $scope.changedrdoale = function () {
	 
	if($scope.drdoale == 5){
        sharedProperties.setProperty(33);
        $state.go('form.message')
	}
	else {
        alert( $scope.drdoale);
	}
	
	}

        


});


app.controller('messagetab', function($compile, $sce, $scope, $window, $http,sharedProperties,$state) {
	
    $scope.isreceiveVisible = false;
    $scope.issentVisible = false;
    $scope.composeEmail = {};
	$scope.composeEmail.to = sharedProperties.getProperty();
	if(sharedProperties.getProperty() != null){
		    $scope.activeTab = "compose";
	}
	else {
		    $scope.activeTab = "inbox";
	}
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
		if(sharedProperties.getProperty() != null){
        $scope.activeTab = "sent";
        $scope.composeEmail.from = "me";
        $scope.composeEmail.to = $scope.composeEmail.to;
        $scope.composeEmail.subject = $scope.composeEmail.subject;        
        $scope.composeEmail.date = "96/07/24";        
        $scope.composeEmail.time = "2:30 ب.ظ";        
        $scope.sentEmails.push($scope.composeEmail);
		$scope.composeEmail = {};
        sharedProperties.setProperty();
		$state.go('form.alert.jobseeker');
		}
		else {
		$scope.activeTab = "sent";
        $scope.composeEmail.from = "me";
        $scope.composeEmail.to = $scope.composeEmail.to;
        $scope.composeEmail.subject = $scope.composeEmail.subject;        
        $scope.composeEmail.date = "96/07/24";        
        $scope.composeEmail.time = "2:30 ب.ظ";        
        $scope.sentEmails.push($scope.composeEmail);
		$scope.composeEmail = {};
        sharedProperties.setProperty();
		}


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


});


app.controller('myinformation', function($compile, $sce, $scope, $window, $http) {
	
   	$scope.yourrequestingorganizations = [ {companylogo : '/assets/images/samanlogo.png' ,companyname:'بانک سامان',companylink:'#'},{companylogo : '/assets/images/mapnalogo.png' ,companyname:'مپنا',companylink:'#'},];
    $scope.yourskill = [{skill : 'Microsoft Exell' ,persent:'70'},{skill : 'مدیریت پروژه' ,persent:'60'},{skill:'MSP' ,persent:'50'},{skill:'Comfar' ,persent:'40'},{skill:'گزارش نویسی' ,persent:'30'},];
	$scope.numberdownandrep  = [{numrepeat:'27',numdownload:'77'}];

});


app.controller('myevaluationbrokers', function($compile, $sce, $scope, $window, $http) {
	
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
	 
 	

});




app.controller('mymessagebox', function($compile, $sce, $scope, $window, $http) {
	
 	
 	
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


});


app.controller('myfinancialtransactions', function($compile, $sce, $scope, $window, $http) {
	
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
  
  $scope.viewby = 7;
  $scope.totalItems = $scope.mytransactions.length;
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
  

});


app.controller('mysetting', function($compile, $sce, $scope, $window, $http) {


});
