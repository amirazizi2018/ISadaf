console.clear();



app.controller('chooseatestpage', function($compile, $sce, $scope, $window, $http, Upload, $timeout, ShareData, $location, $localStorage, $sessionStorage) {


  var mustafasite = "https://sadaf.systmngr.ir/api/v1";

  $scope.activeTab = "tab1";



  var counter = 0;





  $http.get(mustafasite + '/exam?per_page=1000').then(function(response) {

    $scope.allexam = response.data.exams;

  });

  $scope.addjobfil = function() {
  $location.path("jobseekerprofilepage");
  $localStorage.LocationUser = "jobseekerprofilepage";
}

  $scope.azmonmaharat = [

    {
      name: "تست مهارت",
      "test": [

        {
          id: "1",
          nametest: "تست شایستگی 1",
          desctest: "شی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید، تا از نظر گرافیکی نشانگر چگونگی نوع و اندازه فو",
          morelink: "#",
          "kargozarha": [{
            kargozarname: "کارگزار۱",
            kargozargeymat: "310000",
            kargozartime: "50",
            kargozaricon: "assets/images/lk1.png"
          }, {
            kargozarname: "کارگزار2",
            kargozargeymat: "320000",
            kargozaricon: "assets/images/lk2.png"
          }, {
            kargozarname: "کارگزار3",
            kargozargeymat: "330000",
            kargozaricon: "assets/images/lk3.png"
          }, {
            kargozarname: "کارگزار4",
            kargozargeymat: "340000",
            kargozaricon: "assets/images/lk5.png"
          }, {
            kargozarname: "کارگزار5",
            kargozargeymat: "350000",
            kargozaricon: "assets/images/lk5.png"
          }, {
            kargozarname: "کارگزار6",
            kargozargeymat: "360000",
            kargozaricon: "assets/images/lk1.png"
          }, {
            kargozarname: "کارگزار7",
            kargozargeymat: "370000",
            kargozaricon: "assets/images/lk2.png"
          }, {
            kargozarname: "کارگزار 8",
            kargozargeymat: "380000",
            kargozaricon: "assets/images/lk3.png"
          }, ]
        },

        {
          id: "2",
          nametest: "تست شایستگی 2",
          desctest: "شی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید، تا از نظر گرافیکی نشانگر چگونگی نوع و اندازه فو",
          morelink: "#",
          "kargozarha": [{
            kargozarname: "کارگزار 234",
            kargozargeymat: "430000",
            kargozaricon: "assets/images/lk3.png"
          }]
        },

        {
          id: "7",
          nametest: "تست شایستگی 3",
          desctest: "شی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید، تا از نظر گرافیکی نشانگر چگونگی نوع و اندازه فو",
          morelink: "#",
          "kargozarha": [{
            kargozarname: "کارگزار 234",
            kargozargeymat: "430000",
            kargozaricon: "assets/images/lk3.png"
          }]
        },

        {
          id: "3",
          nametest: "تست شایستگی 4",
          desctest: "شی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید، تا از نظر گرافیکی نشانگر چگونگی نوع و اندازه فو",
          morelink: "#",
          "kargozarha": [{
            kargozarname: "کارگزار۱",
            kargozargeymat: "310000",
            kargozaricon: "assets/images/lk1.png"
          }, {
            kargozarname: "کارگزار2",
            kargozargeymat: "320000",
            kargozaricon: "assets/images/lk2.png"
          }, {
            kargozarname: "کارگزار3",
            kargozargeymat: "330000",
            kargozaricon: "assets/images/lk3.png"
          }, {
            kargozarname: "کارگزار4",
            kargozargeymat: "340000",
            kargozaricon: "assets/images/lk5.png"
          }, {
            kargozarname: "کارگزار5",
            kargozargeymat: "350000",
            kargozaricon: "assets/images/lk5.png"
          }, {
            kargozarname: "کارگزار6",
            kargozargeymat: "360000",
            kargozaricon: "assets/images/lk1.png"
          }, {
            kargozarname: "کارگزار7",
            kargozargeymat: "370000",
            kargozaricon: "assets/images/lk2.png"
          }, {
            kargozarname: "کارگزار 8",
            kargozargeymat: "380000",
            kargozaricon: "assets/images/lk3.png"
          }, ]
        },

        {
          id: "4",
          nametest: "تست شایستگی 5",
          desctest: "شی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید، تا از نظر گرافیکی نشانگر چگونگی نوع و اندازه فو",
          morelink: "#",
          "kargozarha": [{
            kargozarname: "کارگزار 33",
            kargozargeymat: "180000",
            kargozaricon: "assets/images/lk5.png"
          }]
        },

        {
          id: "5",
          nametest: "تست شایستگی 6",
          desctest: "شی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید، تا از نظر گرافیکی نشانگر چگونگی نوع و اندازه فو",
          morelink: "#",
          "kargozarha": [{
            kargozarname: "کارگزار 33",
            kargozargeymat: "180000",
            kargozaricon: "assets/images/lk5.png"
          }]
        },

        {
          id: "6",
          nametest: "تست شایستگی 7",
          desctest: "شی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید، تا از نظر گرافیکی نشانگر چگونگی نوع و اندازه فو",
          morelink: "#",
          "kargozarha": [{
            kargozarname: "کارگزار 33",
            kargozargeymat: "180000",
            kargozaricon: "assets/images/lk5.png"
          }]
        },

      ]

    }

  ];



  $scope.azmonshyestegi = [

    {
      name: "تست شایستگی",
      "test": [

        {
          id: "1",
          nametest: "تست شایستگی 1",
          desctest: "شی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید، تا از نظر گرافیکی نشانگر چگونگی نوع و اندازه فو",
          morelink: "#",
          "kargozarha": [{
            kargozarname: "کارگزار۱",
            kargozargeymat: "310000",
            kargozaricon: "assets/images/lk1.png"
          }, {
            kargozarname: "کارگزار2",
            kargozargeymat: "320000",
            kargozaricon: "assets/images/lk2.png"
          }, {
            kargozarname: "کارگزار3",
            kargozargeymat: "330000",
            kargozaricon: "assets/images/lk3.png"
          }, {
            kargozarname: "کارگزار4",
            kargozargeymat: "340000",
            kargozaricon: "assets/images/lk5.png"
          }, {
            kargozarname: "کارگزار5",
            kargozargeymat: "350000",
            kargozaricon: "assets/images/lk5.png"
          }, {
            kargozarname: "کارگزار6",
            kargozargeymat: "360000",
            kargozaricon: "assets/images/lk1.png"
          }, {
            kargozarname: "کارگزار7",
            kargozargeymat: "370000",
            kargozaricon: "assets/images/lk2.png"
          }, {
            kargozarname: "کارگزار 8",
            kargozargeymat: "380000",
            kargozaricon: "assets/images/lk3.png"
          }, ]
        },

        {
          id: "2",
          nametest: "تست شایستگی 2",
          desctest: "شی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید، تا از نظر گرافیکی نشانگر چگونگی نوع و اندازه فو",
          morelink: "#",
          "kargozarha": [{
            kargozarname: "کارگزار 234",
            kargozargeymat: "430000",
            kargozaricon: "assets/images/lk3.png"
          }]
        },

        {
          id: "7",
          nametest: "تست شایستگی 3",
          desctest: "شی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید، تا از نظر گرافیکی نشانگر چگونگی نوع و اندازه فو",
          morelink: "#",
          "kargozarha": [{
            kargozarname: "کارگزار 234",
            kargozargeymat: "430000",
            kargozaricon: "assets/images/lk3.png"
          }]
        },

        {
          id: "3",
          nametest: "تست شایستگی 4",
          desctest: "شی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید، تا از نظر گرافیکی نشانگر چگونگی نوع و اندازه فو",
          morelink: "#",
          "kargozarha": [{
            kargozarname: "کارگزار۱",
            kargozargeymat: "310000",
            kargozaricon: "assets/images/lk1.png"
          }, {
            kargozarname: "کارگزار2",
            kargozargeymat: "320000",
            kargozaricon: "assets/images/lk2.png"
          }, {
            kargozarname: "کارگزار3",
            kargozargeymat: "330000",
            kargozaricon: "assets/images/lk3.png"
          }, {
            kargozarname: "کارگزار4",
            kargozargeymat: "340000",
            kargozaricon: "assets/images/lk5.png"
          }, {
            kargozarname: "کارگزار5",
            kargozargeymat: "350000",
            kargozaricon: "assets/images/lk5.png"
          }, {
            kargozarname: "کارگزار6",
            kargozargeymat: "360000",
            kargozaricon: "assets/images/lk1.png"
          }, {
            kargozarname: "کارگزار7",
            kargozargeymat: "370000",
            kargozaricon: "assets/images/lk2.png"
          }, {
            kargozarname: "کارگزار 8",
            kargozargeymat: "380000",
            kargozaricon: "assets/images/lk3.png"
          }, ]
        },

        {
          id: "4",
          nametest: "تست شایستگی 5",
          desctest: "شی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید، تا از نظر گرافیکی نشانگر چگونگی نوع و اندازه فو",
          morelink: "#",
          "kargozarha": [{
            kargozarname: "کارگزار 33",
            kargozargeymat: "180000",
            kargozaricon: "assets/images/lk5.png"
          }]
        },

        {
          id: "5",
          nametest: "تست شایستگی 6",
          desctest: "شی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید، تا از نظر گرافیکی نشانگر چگونگی نوع و اندازه فو",
          morelink: "#",
          "kargozarha": [{
            kargozarname: "کارگزار 33",
            kargozargeymat: "180000",
            kargozaricon: "assets/images/lk5.png"
          }]
        },

        {
          id: "6",
          nametest: "تست شایستگی 7",
          desctest: "شی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید، تا از نظر گرافیکی نشانگر چگونگی نوع و اندازه فو",
          morelink: "#",
          "kargozarha": [{
            kargozarname: "کارگزار 33",
            kargozargeymat: "180000",
            kargozaricon: "assets/images/lk5.png"
          }]
        },

      ]

    }

  ];



  $scope.geymatkargozar = "0";

  $scope.geymatkargozarmaharat = "0";

  $scope.geymatkargozarshyestegi = "0";

  $scope.timekargozarmaharat = "0";

  $scope.testentekhab = [];

  $scope.testentekhabmaharat = [];

  $scope.testentekhabshyestegi = [];



  $scope.addtestvakargo = function(x) {



    if ($scope.geymatkargozar == "0") {

      alert("لطفا اول کارگزار را انتخاب کنید")

    }

  }



  $scope.addtestvakargomaharat = function(x) {



    if ($scope.geymatkargozarmaharat == "0") {

      alert("لطفا اول کارگزار را انتخاب کنید")

    }

  }

  $scope.readmore = function(x) {

    if ($scope.geymatkargozarmaharat == "0") {

      alert("لطفا اول کارگزار را انتخاب کنید")

    }

  }



  $scope.addtestvakargoshyestegi = function(x) {



    if ($scope.geymatkargozarshyestegi == "0") {

      alert("لطفا اول کارگزار را انتخاب کنید")

    }

  }







  $scope.showgeymatkargozar = function(kargozar) {

    $scope.selected = kargozar;

    var getnamekargozar = kargozar.kargozarname;

    var getgeymatkargozar = kargozar.kargozargeymat;

    var geticonkargozar = kargozar.kargozaricon;


    $scope.geymatkargozar = getgeymatkargozar;

    $scope.addtestvakargo = function(x) {



      if ($scope.geymatkargozar == "0") {

        alert("لطفا اول کارگزار را انتخاب کنید")

      } else {

        var nametest = x.nametest;

        var getid = x.id;

        $scope.testentekhab.push(x);

        $scope.azmonshaksiyat.splice($scope.azmonshaksiyat.indexOf(x), 1);

        $scope.formData.testentekhab.push({

          id: getid,

          nametest: nametest,

          namekargozar: getnamekargozar,

          geymatkargozar: getgeymatkargozar,

          iconkargozar: geticonkargozar,

        });

        $scope.geymatkargozar = "0";

        $scope.selected = "";

        $scope.timekargozarmaharat = "0";





      }

    }



  }



  $scope.showgeymatkargozarmaharat = function(kargozarmaharat) {

    $scope.selectedmaharat = kargozarmaharat;

    var getidexam = kargozarmaharat.id;

    var getgeymatkargozar = kargozarmaharat.price;

    var gettimekargozar = kargozarmaharat.duration;

    var geturlkargozar = kargozarmaharat.url;

    var getidkargozar = kargozarmaharat.service_provider.id;


    // var geticonkargozar = kargozarmaharat.kargozaricon;

    $scope.geymatkargozarmaharat = getgeymatkargozar;

    $scope.timekargozarmaharat = gettimekargozar;

    $scope.addtestvakargomaharat = function(x) {
      //
      // var getnametest = x.name;
      // var getidtest = x.id;



      // if ($scope.geymatkargozarmaharat != "0") {
      //
      //   alert("لطفا اول کارگزار را انتخاب کنید")
      //
      // } else {

        /* 		var nametest = x.nametest;

        		var getid = x.id;

        		var getsathmahart = x.sath;

             $scope.testentekhabmaharat.push(x);

            $scope.azmonmaharat.splice($scope.azmonmaharat.indexOf(x), 1);

          $scope.formData.testentekhabmaharat.push({

              id : getid,

              nametest : nametest,

              namekargozar : getnamekargozar,

        	  geymatkargozarmaharat : getgeymatkargozar ,

        	  iconkargozar : geticonkargozar ,

        	  sathazmon : getsathmahart ,

            });

          	$scope.geymatkargozarmaharat = "0" ;

        	$scope.selectedmaharat = "";

        	$scope.timekargozarmaharat = "0"; */





        // var data = {
        //   "jsId": $localStorage.UserId,
        //   "FullName": ,
        //   "ExamId": getidexam
        // };

         var data = {};



        var config = {

          headers: {

            'Content-Type': 'application/json',
            'Access-Token': $localStorage.TokenKey.access

          }

        }

        $http.post('https://sadaf.systmngr.ir/api/v1/exam/' + getidexam +'/pay', JSON.stringify(data) ,config).then(function(response) {


          var urlforgotosite = geturlkargozar + "?JsId=" + $localStorage.UserId + "&Exam_id=" + getidexam + "&Fullname=" + $localStorage.UserFaName;

          window.open(urlforgotosite, '_self', '');


        });





      //
      // }

    }

    $scope.readmore = function() {
        ShareData.setPropertyspid(getidkargozar);
        $location.path("spprofilepage");
    }

  }



  $scope.showgeymatkargozarmaharat2 = function(kargozarmaharat) {

    $scope.selectedmaharat2 = kargozarmaharat;

    // var getnamekargozar = kargozarmaharat.kargozarname;

    var getgeymatkargozar = kargozarmaharat.price;

    var gettimekargozar = kargozarmaharat.duration;

    var geturlkargozar = kargozarmaharat.url;


    // var geticonkargozar = kargozarmaharat.kargozaricon;

    $scope.geymatkargozarmaharat2 = getgeymatkargozar;

    $scope.timekargozarmaharat2 = gettimekargozar;

    $scope.addtestvakargomaharat2 = function(x) {

      var getnametest = x.name;
      var getidtest = x.id;



      if ($scope.geymatkargozarmaharat2 == "0") {

        alert("لطفا اول کارگزار را انتخاب کنید")

      } else {

        /* 		var nametest = x.nametest;

        		var getid = x.id;

        		var getsathmahart = x.sath;

             $scope.testentekhabmaharat.push(x);

            $scope.azmonmaharat.splice($scope.azmonmaharat.indexOf(x), 1);

          $scope.formData.testentekhabmaharat.push({

              id : getid,

              nametest : nametest,

              namekargozar : getnamekargozar,

        	  geymatkargozarmaharat : getgeymatkargozar ,

        	  iconkargozar : geticonkargozar ,

        	  sathazmon : getsathmahart ,

            });

          	$scope.geymatkargozarmaharat = "0" ;

        	$scope.selectedmaharat = "";

        	$scope.timekargozarmaharat = "0"; */





        var data = {
          "jsId": $localStorage.UserId,
          "FullName": $localStorage.UserFaName,
          "TestType": getnametest,
          "ExamId": getidtest
        };



        var config = {

          headers: {

            'Content-Type': 'application/json',

          }

        }

        $http.post('http://www.ishaygan.ir/Account/login', JSON.stringify(data), config).then(function(response) {

          var tokenddd = response.token;

          var examurl = "http://www.ishaygan.ir/SadafMbti/index.html?token=";

          var urlforgotosite = tokenddd + examurl;

          window.open(urlforgotosite, '_self', '');


        });






      }

    }



  }




  $scope.showgeymatkargozarshyestegi = function(kargozarshyestegi) {

    $scope.selectedshyestegi = kargozarshyestegi;

    var getnamekargozar = kargozarshyestegi.kargozarname;

    var getgeymatkargozar = kargozarshyestegi.kargozargeymat;

    var geticonkargozar = kargozarshyestegi.kargozaricon;

    $scope.geymatkargozarshyestegi = getgeymatkargozar;

    $scope.addtestvakargoshyestegi = function(x) {



      if ($scope.geymatkargozarshyestegi == "0") {

        alert("لطفا اول کارگزار را انتخاب کنید")

      } else {

        var nametest = x.nametest;

        var getid = x.id;

        $scope.testentekhabshyestegi.push(x);

        $scope.azmonshyestegi.splice($scope.azmonshyestegi.indexOf(x), 1);

        $scope.formData.testentekhabshyestegi.push({

          id: getid,

          nametest: nametest,

          namekargozar: getnamekargozar,

          geymatkargozarshyestegi: getgeymatkargozar,

          iconkargozar: geticonkargozar,

        });

        $scope.geymatkargozarshyestegi = "0";

        $scope.selectedshyestegi = "";

        $scope.timekargozarmaharat = "0";





      }

    }



  }







  $scope.removetestvakargo = function(x) {





    var index = -1;





    $scope.testentekhab.some(function(obj, i) {

      return obj.id == x.id ? index = i : false;

    });

    $scope.detailslogt3.shown = null;

    $scope.azmonshaksiyat.push($scope.testentekhab[index]);

    $scope.formData.testentekhab.splice($scope.formData.testentekhab.indexOf(x), 1);



  }



  $scope.removetestvakargomaharat = function(x) {





    var index = -1;





    $scope.testentekhabmaharat.some(function(obj, i) {

      return obj.id == x.id ? index = i : false;

    });

    $scope.detailslogt3maharat.shown = null;

    $scope.azmonmaharat.push($scope.testentekhabmaharat[index]);

    $scope.formData.testentekhabmaharat.splice($scope.formData.testentekhabmaharat.indexOf(x), 1);



  }



  $scope.removetestvakargoshyestegi = function(x) {





    var index = -1;





    $scope.testentekhabshyestegi.some(function(obj, i) {

      return obj.id == x.id ? index = i : false;

    });

    $scope.detailslogt3shyestegi.shown = null;

    $scope.azmonshyestegi.push($scope.testentekhabshyestegi[index]);

    $scope.formData.testentekhabshyestegi.splice($scope.formData.testentekhabshyestegi.indexOf(x), 1);



  }



  $scope.totalazmonravan = function() {

    var totalazmonravan = 0;

    angular.forEach($scope.formData.testentekhab, function(item) {

      totalazmonravan += item.geymatkargozar * 1;

    })



    return totalazmonravan;

  }



  $scope.totalazmonmaharat = function() {

    var totalazmonmaharat = 0;

    angular.forEach($scope.formData.testentekhabmaharat, function(item) {

      totalazmonmaharat += item.geymatkargozarmaharat * 1;

    })



    return totalazmonmaharat;

  }



  $scope.totalazmonshyestegi = function() {

    var totalazmonshyestegi = 0;

    angular.forEach($scope.formData.testentekhabshyestegi, function(item) {

      totalazmonshyestegi += item.geymatkargozarshyestegi * 1;

    })



    return totalazmonshyestegi;

  }







  $scope.detailslogt3 = {};

  $scope.toggleDetails = function(name) {

    if ($scope.detailslogt3.shown === name) {

      $scope.detailslogt3.shown = null;

      $scope.geymatkargozar = "0";

      $scope.selected = "";

      $scope.timekargozarmaharat = "0";



    } else {

      $scope.detailslogt3.shown = name;

      $scope.geymatkargozar = "0";

      $scope.selected = "";

      $scope.timekargozarmaharat = "0";



    }

  }



  $scope.detailslogt3maharat = {};

  $scope.toggleDetailsmaharat = function(name) {

    if ($scope.detailslogt3maharat.shown === name) {

      $scope.detailslogt3maharat.shown = null;

      $scope.geymatkargozarmaharat = "0";

      $scope.selectedmaharat = "";

      $scope.timekargozarmaharat = "0";



    } else {

      $scope.detailslogt3maharat.shown = name;

      $scope.geymatkargozarmaharat = "0";

      $scope.selectedmaharat = "";

      $scope.timekargozarmaharat = "0";



    }

  }



  $scope.detailslogt3shyestegi = {};

  $scope.toggleDetailsshyestegi = function(name) {



    if ($scope.detailslogt3shyestegi.shown === name) {

      $scope.detailslogt3shyestegi.shown = null;

      $scope.geymatkargozarshyestegi = "0";

      $scope.lotfangeymatkargozarone = false;

      $scope.geymatkargozarone = false;

    } else {

      $scope.detailslogt3shyestegi.shown = name;

      $scope.geymatkargozarshyestegi = "0";

      $scope.lotfangeymatkargozarone = false;

      $scope.geymatkargozarone = false;

    }

  }



  $scope.formData = {

    sharhevazayef: [],

    teahsilat: [],

    selectedItemskhas: [],

    maharatkilidi: [],

    testentekhab: [],

    testentekhabmaharat: [],

    testentekhabshyestegi: [],

  };





  $scope.removesharhevazayef = function(i) {

    $scope.formData.sharhevazayef.splice(i, 1);

  };







  $scope.addsharhvazayef = function() {

    var title = $scope.formData.inpuvaluemaharatkild;

    $scope.formData.sharhevazayef.push({

      title: title,

      name: "id " + counter++

    });

  };







  $scope.removettahsilat = function(i) {

    $scope.formData.teahsilat.splice(i, 1);

  };





  $scope.addtahsilat = function() {



    var reshteload = $scope.formData.reshteselec;

    var grayeshload = $scope.formData.grayeshselec;

    var magtaload = $scope.formData.maghtaselec;



    $scope.formData.teahsilat.push({

      reshte: reshteload,

      grayesh: grayeshload,

      magta: magtaload,

    });

  };





  $scope.removemahartkilid = function(i) {

    $scope.formData.maharatkilidi.splice(i, 1);

  };





  $scope.addmaharatkilidi = function() {

    var getmaharatkilidi = $scope.formData.inpuvaluemaharatkilidi;

    $scope.formData.maharatkilidi.push({

      title: getmaharatkilidi,

      name: "id " + counter++

    });

  };





  init();



  function init() {

    $scope.prodList = [

      {
        id: '1',
        title: 'فوری/امن/محرمانه',
        descr: 'شی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید',
        'price': '2500000',
        selected: 'YES'
      },

      {
        id: '2',
        title: 'فوری',
        descr: 'شی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید',
        'price': '2500000'
      },

      {
        id: '3',
        title: 'امن',
        descr: 'شی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید',
        'price': '2500000'
      },

      {
        id: '4',
        title: 'محرمانه',
        descr: 'شی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید',
        'price': '2500000'
      },

      {
        id: '5',
        title: 'فوری 2',
        descr: 'شی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید',
        'price': '2500000'
      },

    ];

    $scope.orders = {};

    $scope.orders.prods = {};

    $scope.orders.prods.prod = {};

    $scope.totalkhaskardanagahi = function() {

      return $scope.prodList.filter(function(prod) {

        return $scope.orders.prods.prod[prod.title];

      }).reduce(function(subtotal, selectedProd) {

        return subtotal + parseInt(selectedProd.price);

      }, 0);

    };



  }







  $scope.azmonshyestegi = [{

      "parts": [

        {
          id: "1",
          name: "تست شایستگی 1",
          description: "شی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید، تا از نظر گرافیکی نشانگر چگونگی نوع و اندازه فو",
          morelink: "#",
        },

        {
          id: "2",
          name: "تست شایستگی 2",
          description: "شی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید، تا از نظر گرافیکی نشانگر چگونگی نوع و اندازه فو",
          morelink: "#",
          "kargozarha": [{
            kargozarname: "کارگزار 234",
            kargozargeymat: "430000",
            kargozaricon: "assets/images/lk3.png"
          }]
        },

        {
          id: "7",
          name: "تست شایستگی 3",
          description: "شی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید، تا از نظر گرافیکی نشانگر چگونگی نوع و اندازه فو",
          morelink: "#",
          "kargozarha": [{
            kargozarname: "کارگزار 234",
            kargozargeymat: "430000",
            kargozaricon: "assets/images/lk3.png"
          }]
        },

        {
          id: "3",
          name: "تست شایستگی 4",
          description: "شی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید، تا از نظر گرافیکی نشانگر چگونگی نوع و اندازه فو",
          morelink: "#",
          "kargozarha": [{
            kargozarname: "کارگزار۱",
            kargozargeymat: "310000",
            kargozaricon: "assets/images/lk1.png"
          }, {
            kargozarname: "کارگزار2",
            kargozargeymat: "320000",
            kargozaricon: "assets/images/lk2.png"
          }, {
            kargozarname: "کارگزار3",
            kargozargeymat: "330000",
            kargozaricon: "assets/images/lk3.png"
          }, {
            kargozarname: "کارگزار4",
            kargozargeymat: "340000",
            kargozaricon: "assets/images/lk5.png"
          }, {
            kargozarname: "کارگزار5",
            kargozargeymat: "350000",
            kargozaricon: "assets/images/lk5.png"
          }, {
            kargozarname: "کارگزار6",
            kargozargeymat: "360000",
            kargozaricon: "assets/images/lk1.png"
          }, {
            kargozarname: "کارگزار7",
            kargozargeymat: "370000",
            kargozaricon: "assets/images/lk2.png"
          }, {
            kargozarname: "کارگزار 8",
            kargozargeymat: "380000",
            kargozaricon: "assets/images/lk3.png"
          }, ]
        },

        {
          id: "4",
          name: "تست شایستگی 5",
          description: "شی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید، تا از نظر گرافیکی نشانگر چگونگی نوع و اندازه فو",
          morelink: "#",
          "kargozarha": [{
            kargozarname: "کارگزار 33",
            kargozargeymat: "180000",
            kargozaricon: "assets/images/lk5.png"
          }]
        },

        {
          id: "5",
          name: "تست شایستگی 6",
          description: "شی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید، تا از نظر گرافیکی نشانگر چگونگی نوع و اندازه فو",
          morelink: "#",
          "kargozarha": [{
            kargozarname: "کارگزار 33",
            kargozargeymat: "180000",
            kargozaricon: "assets/images/lk5.png"
          }]
        },

        {
          id: "6",
          name: "تست شایستگی 7",
          description: "شی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید، تا از نظر گرافیکی نشانگر چگونگی نوع و اندازه فو",
          morelink: "#",
          "kargozarha": [{
            kargozarname: "کارگزار 33",
            kargozargeymat: "180000",
            kargozaricon: "assets/images/lk5.png"
          }]
        },

      ],
      partname: "گروه223 شایستگی 1:",

    }, {

      "parts": [

        {
          id: "12",
          name: "تست شایستگی 1",
          description: "شی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید، تا از نظر گرافیکی نشانگر چگونگی نوع و اندازه فو",
          morelink: "#",
        },

        {
          id: "23",
          name: "تست شایستگی 2",
          description: "شی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید، تا از نظر گرافیکی نشانگر چگونگی نوع و اندازه فو",
          morelink: "#",
          "kargozarha": [{
            kargozarname: "کارگزار 234",
            kargozargeymat: "430000",
            kargozaricon: "assets/images/lk3.png"
          }]
        },

        {
          id: "74",
          name: "تست شایستگی 3",
          description: "شی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید، تا از نظر گرافیکی نشانگر چگونگی نوع و اندازه فو",
          morelink: "#",
          "kargozarha": [{
            kargozarname: "کارگزار 234",
            kargozargeymat: "430000",
            kargozaricon: "assets/images/lk3.png"
          }]
        },

        {
          id: "35",
          name: "تست شایستگی 4",
          description: "شی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید، تا از نظر گرافیکی نشانگر چگونگی نوع و اندازه فو",
          morelink: "#",
          "kargozarha": [{
            kargozarname: "کارگزار۱",
            kargozargeymat: "310000",
            kargozaricon: "assets/images/lk1.png"
          }, {
            kargozarname: "کارگزار2",
            kargozargeymat: "320000",
            kargozaricon: "assets/images/lk2.png"
          }, {
            kargozarname: "کارگزار3",
            kargozargeymat: "330000",
            kargozaricon: "assets/images/lk3.png"
          }, {
            kargozarname: "کارگزار4",
            kargozargeymat: "340000",
            kargozaricon: "assets/images/lk5.png"
          }, {
            kargozarname: "کارگزار5",
            kargozargeymat: "350000",
            kargozaricon: "assets/images/lk5.png"
          }, {
            kargozarname: "کارگزار6",
            kargozargeymat: "360000",
            kargozaricon: "assets/images/lk1.png"
          }, {
            kargozarname: "کارگزار7",
            kargozargeymat: "370000",
            kargozaricon: "assets/images/lk2.png"
          }, {
            kargozarname: "کارگزار 8",
            kargozargeymat: "380000",
            kargozaricon: "assets/images/lk3.png"
          }, ]
        },

        {
          id: "46",
          name: "تست شایستگی 5",
          description: "شی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید، تا از نظر گرافیکی نشانگر چگونگی نوع و اندازه فو",
          morelink: "#",
          "kargozarha": [{
            kargozarname: "کارگزار 33",
            kargozargeymat: "180000",
            kargozaricon: "assets/images/lk5.png"
          }]
        },

        {
          id: "57",
          name: "تست شایستگی 6",
          description: "شی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید، تا از نظر گرافیکی نشانگر چگونگی نوع و اندازه فو",
          morelink: "#",
          "kargozarha": [{
            kargozarname: "کارگزار 33",
            kargozargeymat: "180000",
            kargozaricon: "assets/images/lk5.png"
          }]
        },

        {
          id: "68",
          name: "تست شایستگی 7",
          description: "شی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید، تا از نظر گرافیکی نشانگر چگونگی نوع و اندازه فو",
          morelink: "#",
          "kargozarha": [{
            kargozarname: "کارگزار 33",
            kargozargeymat: "180000",
            kargozaricon: "assets/images/lk5.png"
          }]
        },

      ],
      "partname": "گروه شایستگی 1:",

    }

  ];



  $scope.kargozarhashyestegi = [{
    kargozarname: "کارگزار۱",
    "kargozarpack": [{
      packtitle: "کانون 5 شایستگی 3 ابزاره",
      packprice: "310000",
    }, {
      packtitle: "کانون 5 شایستگی 4 ابزاره",
      packprice: "310000",
    }, ],
    kargozaricon: "assets/images/lk1.png"
  }, {
    kargozarname: "کارگزار2",
    "kargozarpack": [{
      packtitle: "کانون 5 شایستگی 3 ابزاره1",
      packprice: "310000",
    }, {
      packtitle: "کانون 5 شایستگی 4 ابزاره1",
      packprice: "310000",
    }, ],
    kargozaricon: "assets/images/lk2.png"
  }, {
    kargozarname: "3ارگزار2",
    "kargozarpack": [{
      packtitle: "کانون 5 شایستگی 3 ابزاره2",
      packprice: "310000",
    }, {
      packtitle: "کانون 5 شایستگی 4 ابزاره2",
      packprice: "310000",
    }, ],
    kargozaricon: "assets/images/lk3.png"
  }, {
    kargozarname: "4ارگزار2",
    "kargozarpack": [{
      packtitle: "کانون 5 شایستگی 3 ابزاره3",
      packprice: "310000",
    }, {
      packtitle: "کانون 5 شایستگی 4 ابزاره3",
      packprice: "310000",
    }, ],
    kargozaricon: "assets/images/lk5.png"
  }, {
    kargozarname: "5ارگزار2",
    "kargozarpack": [{
      packtitle: "کانون 5 شایستگی 3 ابزاره4",
      packprice: "310000",
    }, {
      packtitle: "کانون 5 شایستگی 4 ابزاره4",
      packprice: "310000",
    }, ],
    kargozaricon: "assets/images/lk5.png"
  }, {
    kargozarname: "6ارگزار2",
    "kargozarpack": [{
      packtitle: "کانون 5 شایستگی 3 ابزاره5",
      packprice: "310000",
    }, {
      packtitle: "کانون 5 شایستگی 4 ابزاره5",
      packprice: "310000",
    }, ],
    kargozaricon: "assets/images/lk1.png"
  }, {
    kargozarname: "7ارگزار2",
    "kargozarpack": [{
      packtitle: "کانون 5 شایستگی 3 ابزاره6",
      packprice: "310000",
    }, {
      packtitle: "کانون 5 شایستگی 4 ابزاره6",
      packprice: "310000",
    }, ],
    kargozaricon: "assets/images/lk2.png"
  }, {
    kargozarname: "8ارگزار2",
    "kargozarpack": [{
      packtitle: "کانون 5 شایستگی 3 ابزاره7",
      packprice: "310000",
    }, {
      packtitle: "کانون 5 شایستگی 4 ابزاره7",
      packprice: "310000",
    }, ],
    kargozaricon: "assets/images/lk3.png"
  }];

  $scope.geymatkargozar = "0";

  $scope.geymatkargozarmaharat = "0";

  $scope.geymatkargozarshyestegi = "0";

  $scope.testentekhab = [];

  $scope.testentekhabmaharat = [];

  $scope.testentekhabshyestegi = [];



  $scope.showgeymatkargozarshyestegi = function(kargozarshyestegi) {

    if ($scope.formData.testentekhabshyestegi.length <= 0) {

      alert("شما ابتدا باید یک یا چند شایستگی انتخاب کنید");

    } else {

      $scope.formData.detkargozarhashyestegi = [];

      $scope.lotfangeymatkargozarone = true;

      $scope.showgheymatkargozsp = true;

      $scope.selectedshyestegi = kargozarshyestegi;

      var getnamekargozar = kargozarshyestegi.kargozarpack[1].packtitle;

      var getgeymatkargozar = kargozarshyestegi.kargozargeymat;

      var geticonkargozar = kargozarshyestegi.kargozaricon;

      $scope.geymatkargozarshyestegi = getgeymatkargozar;



      for (var i = 0; i < kargozarshyestegi.kargozarpack.length; i++) {

        $scope.formData.detkargozarhashyestegi.push(kargozarshyestegi.kargozarpack[i]);

      }



      $scope.orders2 = {};

      $scope.orders2.prod2s = {};

      $scope.orders2.prod2s.prod2 = {};

      $scope.totalazmonshyestegi = function() {

        return $scope.formData.detkargozarhashyestegi.filter(function(prod2) {

          return $scope.orders2.prod2s.prod2[prod2.packtitle];

        }).reduce(function(subtotal, selectedprod2) {

          return subtotal + parseInt(selectedprod2.packprice);

        }, 0);

      };



    }

  }



  $scope.addtestvakargoshyestegi = function(x, outerIndex) {



    var nametest = x.nametest;

    var getid = x.id;

    var getselectimportant = x.selectimportant;

    $scope.testentekhabshyestegi.push(

      {

        desctest: x.desctest,

        id: x.id,

        morelink: x.morelink,

        nametest: x.nametest,

        parntid: outerIndex,

      }

    );



    $scope.azmonshyestegi[outerIndex].parts.splice($scope.azmonshyestegi[outerIndex].parts.indexOf(x), 1);

    $scope.formData.testentekhabshyestegi.push({

      id: getid,

      selectimportant: getselectimportant,

      nametest: nametest,

      parntid: outerIndex,

    });

    $scope.geymatkargozarshyestegi = "0";

    $scope.lotfangeymatkargozarone = false;

    $scope.geymatkargozarone = false;





    /* } */

  }



  $scope.removetestvakargo = function(x) {





    var index = -1;





    $scope.testentekhab.some(function(obj, i) {

      return obj.id == x.id ? index = i : false;

    });

    $scope.detailslogt3.shown = null;

    $scope.azmonshaksiyat.push($scope.testentekhab[index]);

    $scope.formData.testentekhab.splice($scope.formData.testentekhab.indexOf(x), 1);



  }

  $scope.removetestvakargoshyestegi = function(x) {



    $scope.selectedshyestegi = false;

    $scope.formData.detkargozarhashyestegi = [];



    var index = -1;





    $scope.testentekhabshyestegi.some(function(obj, i) {

      return obj.id == x.id ? index = i : false;

    });

    var ssss = x.parntid;



    $scope.detailslogt3shyestegi.shown = null;

    $scope.azmonshyestegi[ssss].parts.push($scope.testentekhabshyestegi[index]);

    $scope.formData.testentekhabshyestegi.splice($scope.formData.testentekhabshyestegi.indexOf(x), 1);



  }






});
