console.clear();



app.controller('createaresearchpage', function($compile, $sce, $scope, $window, $http, ShareData, $location, $localStorage, $sessionStorage , Upload) {


  var mustafasite = "https://sadaf.systmngr.ir/api/v1";

  $scope.activeTab = "tab1";

  var counter = 0;


	$http.post(mustafasite + '/items', {

    headers: {

      "Content-Type": 'application/json',


    }

  }).then(function(response) {
    $scope.yourskillsandexpertises = response.data.data;
  });

  $scope.skillsandexpertise = [];
   $scope.OnClickSelect=function(item)
  {
   $scope.skillsandexpertise.push(item.name)
  }

  $scope.OnRemoveSelect = function(item) {
   var index = $scope.skillsandexpertise.indexOf(item.name);
   $scope.skillsandexpertise.splice(index, 1);
  }

  $scope.sanatmarbote = [

    {
      nameper: "الکترونیک و نرم افزار",
      nameeng: "software"
    },

    {
      nameper: "ارتباطات و فناوری اطلاعات ",
      nameeng: "it"
    },

    {
      nameper: "فناوری نانو ",
      nameeng: "nano"
    },

  ];

	$scope.nomasale = [
		{
			nameper: "پایان نامه",
			nameeng: "PayanName"
		},

		{
			nameper: "پژوهش",
			nameeng: "Research"
		},
	];

	$scope.hozetakhasosi = [
		{
			nameper: "مهندسی کامپیوتر",
			nameeng: "SoftwareEngine"
		},

		{
			nameper: "مهندسی فناوری اطّلاعات",
			nameeng: "IT"
		},
	];

  $scope.zamantakhmini = [

    {
      nameper: "1 تا 3 سال",
      nameeng: "1-3"
    },

    {
      nameper: "3 تا 6 سال",
      nameeng: "3-6"
    },

    {
      nameper: "6 تا 9 سال",
      nameeng: "6-9"
    },

  ];

  $scope.baravordhazine = [

    {
      nameper: "22,000,000 الی 25,000,000 ریال",
      nameeng: "22000000-25000000"
    },

    {
      nameper: "25,000,000 الی 32,000,000 ریال",
      nameeng: "25000000-32000000"
    },

  ];

  $scope.Tahsilat = [];

  $scope.testentekhab = [];

  $scope.testentekhabmaharat = [];

  $scope.testentekhabshyestegi = [];


   $scope.Addresearch = function() {

    var getzamantakhmini = $scope.SelectZamanTakhmini;
    var zamantakhmniniv = (getzamantakhmini.toString().split('-'));

    var getbarovordhazine = $scope.SelectBarovordHazineh;
    var barovordhazine = (getbarovordhazine.toString().split('-'));


     var arrayhozetakhasosi = [];
     Object.keys($scope.Tahsilat).forEach(function(key) {
       var val = $scope.Tahsilat[key]["hoze"];
       arrayhozetakhasosi.push(val);
     });

     var objhozetakhasosi = {};

     for (var i = 0; i <  arrayhozetakhasosi.length; ++i){
       objhozetakhasosi[i] =  arrayhozetakhasosi[i];
     }

    var kalamekilidiforsend = {};

    for (var i = 0; i <  $scope.skillsandexpertise.length; ++i){
      kalamekilidiforsend[i] =  $scope.skillsandexpertise[i];
    }

    $scope.advertisementtypes = [];

    angular.forEach($scope.orders.prods.prod,
      function(value, key) {
        $scope.advertisementtypes.push(key);
      });






    var config = {

      headers: {

        'Content-Type': 'application/json',

        'Access-Token': $localStorage.TokenKey.access,

      }

    }


    var getfileformat = $scope.atachresearchmodel.name.split('.').pop();
  var getfilebase64 = Upload.base64DataUrl($scope.atachresearchmodel);
  getfilebase64.then(function(value) {
    var data = {
      advertisement_types: $scope.advertisementtypes, // Array []
      problem_type: $scope.SelectNomasale,  // String
      description: $scope.ResearchSharhMasale, // String
      max_payment: parseInt(barovordhazine[1]), // Int
      min_payment: parseInt(barovordhazine[0]), // Int
      requirements: kalamekilidiforsend, // Object
      skills: objhozetakhasosi,  // Object
      title: $scope.ResearchTitle, // String
      marriage_status:"both",
      approach: $scope.RavashTahghigh, // String
      output_type: $scope.NoeKhoroji, // String
      type: $scope.SelectSanaat, // String
      work_hour_from: parseInt(zamantakhmniniv[0]), // Int
      work_hour_to: parseInt(zamantakhmniniv[1]), // Int
      duration: 36000, // Int
      file_format : getfileformat,
      file : value.split(',')[1],
    }

        console.log(data);
        // console.log(JSON.stringify(data));
        console.log($scope.orders);
  $http.post(mustafasite + '/employer/job', JSON.stringify(data), config).then(function(response) {
    console.log(response);
    var paydata = {
      id: parseInt(response.data.data.id), // Int
    }

    $http.post(mustafasite + '/employer/pay/job', JSON.stringify(paydata), config).then(function(response) {

      alert("پژوهش با موفیقت درج شد شما به طور خودکار به صفحه اصلی برمیگردید.");
      $location.path("companymainpage");

    });

  });
});





  }



  // $scope.totalazmonravan = function() {
  //
  //   var totalazmonravan = 0;
  //
  //   angular.forEach($scope.formData.testentekhab, function(item) {
  //
  //     totalazmonravan += item.geymatkargozar * 1;
  //
  //   })
  //
  //
  //
  //   return totalazmonravan;
  //
  // }



  // $scope.totalazmonmaharat = function() {
  //
  //   var totalazmonmaharat = 0;
  //
  //   angular.forEach($scope.formData.testentekhabmaharat, function(item) {
  //
  //     totalazmonmaharat += item.geymatkargozarmaharat * 1;
  //
  //   })
  //
  //
  //
  //   return totalazmonmaharat;
  //
  // }
  //

  // $scope.formData = {
  //
  //   sharhevazayef: [],
  //
  //   teahsilat: [],
  //
  //   selectedItemskhas: [],
  //
  //   maharatkilidi: [],
  //
  //   testentekhab: [],
  //
  //   testentekhabmaharat: [],
  //
  //   testentekhabshyestegi: [],
  //
  //   detkargozarhashyestegi: [],
  //
  // };




  $scope.removettahsilat = function(i) {

    $scope.Tahsilat.splice(i, 1);

  };





  $scope.addtahsilat = function() {

    $scope.Tahsilat.push({
      hoze: $scope.SelectHozeTakhasosi,
    });

    $scope.SelectHozeTakhasosi = null;

  };




   init();



  function init() {

    $http.get(mustafasite + '/job/advertisement_types', {

      headers: {

        "Content-Type": 'application/json',


      }

    }).then(function(response) {

      $scope.prodList = response.data.advertisement_types;
    });

    $scope.orders = {};

    $scope.orders.prods = {};

    $scope.orders.prods.prod = {};

    $scope.totalkhaskardanagahi = function() {

      return $scope.prodList.filter(function(prod) {

        return $scope.orders.prods.prod[prod.id];

      }).reduce(function(subtotal, selectedProd) {

        return subtotal + parseInt(selectedProd.gift_count);

      }, 0);

    };



  }


});
