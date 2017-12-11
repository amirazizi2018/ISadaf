console.clear();

app.controller('searchdatabasepage', function($compile, $sce, $scope, $window, $http) {
					$scope.searchbtnjp = function () {			      var config = {                headers : {                    'Content-Type': 'application/json',					'Access-Token': $localStorage.TokenKey.access,                }            }						if($scope.FULL_TIME == true ){				var sfulltime = "FULL_TIME";			}			else {				var sfulltime = " ";			}				if($scope.PART_TIME == true ){				var sparttime = "PART_TIME";			}			else {				var sparttime = " ";			}				if($scope.KAR_AMUZI == true ){				var skaramuzi = "KAR_AMUZI";			}			else {				var skaramuzi = " ";			}			if($scope.KARVARZI == true ){				var sKARVARZI = "KARVARZI";			}			else {				var sKARVARZI = " ";			}									}							$http.get(mustafasite +"/job_seeker/all?and_keywords=" + $scope.onvanjayghahshoghl + " " + sfulltime + " " + sparttime + " " + skaramuzi + " " +  sKARVARZI + " " + $scope.sexvalue + " " ,config).then(function (response) {        $scope.shearchdbres = response.data.hits;  $scope.totalItems = $scope.shearchdbres.length;    }); 	 $scope.viewby = 7;  $scope.currentPage = 1;  $scope.itemsPerPage = $scope.viewby;  $scope.maxSize = 5;  $scope.setPage = function (pageNo) {    $scope.currentPage = pageNo;  };$scope.setItemsPerPage = function(num) {  $scope.itemsPerPage = num;  $scope.currentPage = 1; }    
		  var counter = 0;

	$scope.sanatmarbote = [
        {nameper : "شیمیایی", nameeng : "shimiaii"},
        {nameper : "فناوری", nameeng : "fanavari"},
        {nameper : "فیزیکی", nameeng : "fiziki"},
    ];
	

	   
	$scope.satkari = [
        {nameper : "روز های عادی", nameeng : "rozhayeadi"},
        {nameper : "جمعه ها", nameeng : "jomeha"},
        {nameper : "دوشنبه ها", nameeng : "doshanbeha"},
    ];		
	
	
	$scope.times = [
        {time : 8},
        {time : 9},
        {time : 10},
        {time : 11},
        {time : 12},
        {time : 13},
        {time : 14},
        {time : 15},
        {time : 16},
        {time : 17},
        {time : 18},
       ];
	   
	$scope.sabeghekari = [
        {nameper : "1 تا 3 سال", nameeng : "1-3sal"},
        {nameper : "3 تا 6 سال", nameeng : "3-6sal"},
        {nameper : "6 تا 9 سال", nameeng : "6-9sal"},
    ];		
	
	$scope.hozedaraysabeghe = [
        {nameper : "عملیاتی", nameeng : "amaliati"},
        {nameper : "فرهنگی", nameeng : "farhangi"},
    ];

	$scope.mogeatdarjayghah = [
        {nameper : "مدیر مبانی", nameeng : "modirmabani"},
		{nameper : "مدیر فنی", nameeng : "modirfani"},
    ];	
	
	$scope.vahedsazmani = [
        {nameper : "معاونت اجرایی", nameeng : "moavenatejraii"},
		{nameper : "معاونت علمی", nameeng : "moavenatelmi"},
    ];	
	
	$scope.shahr = [
        {nameper : "شهریار", nameeng : "shariyar"},
		{nameper : "تهران", nameeng : "tehran"},
		{nameper : "رباط کریم", nameeng : "robatkarim"},
		{nameper : "کرج", nameeng : "karaj"},
    ];		
	
	$scope.mahalfaliat = [
        {nameper : "دفتر مرکزی", nameeng : "daftarmarkazi"},
		{nameper : "دفتر قم", nameeng : "daftarqom"},
    ];	

	$scope.noemahalfaliat = [
        {nameper : "اداری", nameeng : "edari"},
		{nameper : "غیر اداری", nameeng : "geiredari"},
    ];	
	
	$scope.hoghogpayeh = [
        {nameper : "22,000,000 الی 25,000,000 ریا", nameeng : "2.2-2.5"},
		{nameper : "25,000,000 الی 32,000,000 ریا", nameeng : "2.5-3.2"},
    ];	
	
	$scope.daradyanadarad = [
        {nameper : "دارد", nameeng : "true"},
		{nameper : "ندارد", nameeng : "false"},
    ];	

	$scope.jensiat = [
        {nameper : "مرد", nameeng : "mard"},
		{nameper : "زن", nameeng : "zan"},
    ];
	
	$scope.vaziatnezamvazife = [
        {nameper : "دارای کارت پایان خدمت", nameeng : "darayekart"},
		{nameper : "معاف", nameeng : "moaf"},
    ];	

	$scope.sen = [
        {nameper : "20 تا 30 سال", nameeng : "20-30"},
		{nameper : "30 تا 40 سال", nameeng : "30-40"},
		{nameper : "40 تا 50 سال", nameeng : "40-50"},
    ];	
	
	$scope.vaziattahol = [
        {nameper : "متاهل", nameeng : "motahel"},
		{nameper : "مجرد", nameeng : "mojarad"},
    ];		
	
	$scope.vaziateghamati = [
        {nameper : "بومی", nameeng : "bomi"},
		{nameper : "مقیم", nameeng : "moghim"},
    ];			$scope.tahsilat = [
        {nameper : "کامپیوتر", nameeng : "comp"},
    ];	
	$scope.sex = [        {nameper : "مرد", nameeng : "male"},		{nameper : "زن", nameeng : "female"},    ];			$scope.sexvalue = "male";
	$scope.maharatkilidi = [];	



  $scope.removemahartkilid = function(i) {
    $scope.maharatkilidi.splice(i, 1);
  };
  
	
  $scope.addmaharatkilidi = function() {
    var getmaharatkilidi = $scope.formdate.inpuvaluemaharatkilidi;
    $scope.maharatkilidi.push({
      title : getmaharatkilidi,
	  name: "id " + counter++
    });
$scope.formdate.inpuvaluemaharatkilidi = "";

  };
	
	$scope.searchdet = [
        {title : "تعداد نتایج یافت شده:", nubmer : "343", classa : "greencolor",},
        {title : "امکان مشاهده اطلاعات تماس:", nubmer : "ندارد", classa : "redcolor",},
        {title : "تعداد نتایج قابل مشاهده:", nubmer : "10", classa : "",},
        {title : "تعداد نتایج قابل مشاهده پس از ارتقا:", nubmer : "343", classa : "greencolor",},
    ];		


 $scope.orderByField = '';
  $scope.reverseSort = false;
  
/*   $scope.shearchdbres = [
  {id: '1' , name: 'اکبر همتی کمانچه',age: '28',sex: 'مرد',job: 'مهندس برق',education: 'مهندسی برق',profilelink: '',},
  {id: '2' , name: 'مریم اکبری کمانچه',age: '25',sex: 'زن',job: 'پزشک',education: 'پزشکی',profilelink: '',},
  {id: '3' , name: 'همت اکبری کمانچه',age: '33',sex: 'مرد',job: 'برنامه نویس',education: 'نرم افزار',profilelink: '',},

  ];
  
  $scope.viewby = 7;
  $scope.totalItems = $scope.shearchdbres.length;
  $scope.currentPage = 1;
  $scope.itemsPerPage = $scope.viewby;
  $scope.maxSize = 5;

  $scope.setPage = function (pageNo) {
    $scope.currentPage = pageNo;
  };

$scope.setItemsPerPage = function(num) {
  $scope.itemsPerPage = num;
  $scope.currentPage = 1; 
} */

 //$scope.pageChanged = function() {
  //  console.log('Page changed to: ' + $scope.currentPage);
  //};

  
    

});


