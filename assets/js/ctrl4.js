console.clear();





app.controller('apostpage', function($compile, $sce, $scope, $window, $http, Upload, $timeout, ShareData, $location, $localStorage, $sessionStorage) {



  var mustafasite = "https://sadaf.systmngr.ir/api/v1";



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









  $scope.showonestarrating1 = 4 / 5;

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



  $scope.showonestarrating2 = 4 / 5;

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



  $scope.showonestarrating3 = 4 / 5;

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



  $scope.showonestarrating4 = 4 / 5;

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



  $scope.showonestarrating5 = 4 / 5;

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



  $scope.showonestarrating6 = 4 / 5;

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



    "starSvg": '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="-316 235.7 6.1 11.3" style="enable-background:new -316 235.7 6.1 11.3;" xml:space="preserve">' +

      '<path id="XMLID_1775_" class="st0" d="M-310.9,247h-4.1c-0.6,0-1-0.4-1-1v-9.3c0-0.6,0.4-1,1-1h4.1c0.6,0,1,0.4,1,1v9.3  C-309.9,246.6-310.4,247-310.9,247z"/>' +

      '</svg>'
  };



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



    "starSvg": '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="-316 235.7 6.1 11.3" style="enable-background:new -316 235.7 6.1 11.3;" xml:space="preserve">' +

      '<path id="XMLID_1775_" class="st0" d="M-310.9,247h-4.1c-0.6,0-1-0.4-1-1v-9.3c0-0.6,0.4-1,1-1h4.1c0.6,0,1,0.4,1,1v9.3  C-309.9,246.6-310.4,247-310.9,247z"/>' +

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



    "starSvg": '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="-316 235.7 6.1 11.3" style="enable-background:new -316 235.7 6.1 11.3;" xml:space="preserve">' +

      '<path id="XMLID_1775_" class="st0" d="M-310.9,247h-4.1c-0.6,0-1-0.4-1-1v-9.3c0-0.6,0.4-1,1-1h4.1c0.6,0,1,0.4,1,1v9.3  C-309.9,246.6-310.4,247-310.9,247z"/>' +

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



    "starSvg": '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="-316 235.7 6.1 11.3" style="enable-background:new -316 235.7 6.1 11.3;" xml:space="preserve">' +

      '<path id="XMLID_1775_" class="st0" d="M-310.9,247h-4.1c-0.6,0-1-0.4-1-1v-9.3c0-0.6,0.4-1,1-1h4.1c0.6,0,1,0.4,1,1v9.3  C-309.9,246.6-310.4,247-310.9,247z"/>' +

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



    "starSvg": '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="-316 235.7 6.1 11.3" style="enable-background:new -316 235.7 6.1 11.3;" xml:space="preserve">' +

      '<path id="XMLID_1775_" class="st0" d="M-310.9,247h-4.1c-0.6,0-1-0.4-1-1v-9.3c0-0.6,0.4-1,1-1h4.1c0.6,0,1,0.4,1,1v9.3  C-309.9,246.6-310.4,247-310.9,247z"/>' +

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



    "starSvg": '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="-316 235.7 6.1 11.3" style="enable-background:new -316 235.7 6.1 11.3;" xml:space="preserve">' +

      '<path id="XMLID_1775_" class="st0" d="M-310.9,247h-4.1c-0.6,0-1-0.4-1-1v-9.3c0-0.6,0.4-1,1-1h4.1c0.6,0,1,0.4,1,1v9.3  C-309.9,246.6-310.4,247-310.9,247z"/>' +

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



    "starSvg": '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="-316 235.7 6.1 11.3" style="enable-background:new -316 235.7 6.1 11.3;" xml:space="preserve">' +

      '<path id="XMLID_1775_" class="st0" d="M-310.9,247h-4.1c-0.6,0-1-0.4-1-1v-9.3c0-0.6,0.4-1,1-1h4.1c0.6,0,1,0.4,1,1v9.3  C-309.9,246.6-310.4,247-310.9,247z"/>' +

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



    "starSvg": '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="-316 235.7 6.1 11.3" style="enable-background:new -316 235.7 6.1 11.3;" xml:space="preserve">' +

      '<path id="XMLID_1775_" class="st0" d="M-310.9,247h-4.1c-0.6,0-1-0.4-1-1v-9.3c0-0.6,0.4-1,1-1h4.1c0.6,0,1,0.4,1,1v9.3  C-309.9,246.6-310.4,247-310.9,247z"/>' +

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



    "starSvg": '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="-316 235.7 6.1 11.3" style="enable-background:new -316 235.7 6.1 11.3;" xml:space="preserve">' +

      '<path id="XMLID_1775_" class="st0" d="M-310.9,247h-4.1c-0.6,0-1-0.4-1-1v-9.3c0-0.6,0.4-1,1-1h4.1c0.6,0,1,0.4,1,1v9.3  C-309.9,246.6-310.4,247-310.9,247z"/>' +

      '</svg>'

  };







  var config = {

    headers: {

      'Content-Type': 'application/json'

    }

  }

  var getjobid = ShareData.getPropertyjobid();



  $http.get(mustafasite + "/job/" + getjobid, config).then(function(response) {

    $scope.ajob = response.data.job;
    $scope.advertisementtypes = response.data.job.advertisement_types;

    $scope.examshayeteghi = response.data.job.exam_sp;

    $scope.jobsdata = response.data.like;
    $scope.totalItems = $scope.jobsdata.length;

    var input = response.data.job.requirements;

    $scope.jobdescription = [];
    Object.keys(input).forEach(function(key) {
      console.log(key);
      console.log(input);
      var obj = {};
      obj["line"] = input[key];
      $scope.jobdescription.push(obj);
      console.log($scope.jobdescription);
    });

  });






  $scope.viewby = 3;

  $scope.currentPage = 1;

  $scope.itemsPerPage = $scope.viewby;

  $scope.maxSize = 5;



  $scope.setPage = function(pageNo) {

    $scope.currentPage = pageNo;

  };



  $scope.setItemsPerPage = function(num) {

    $scope.itemsPerPage = num;

    $scope.currentPage = 1;

  }

  $scope.requestshowpage = true;
  $scope.pindedplusonej = true;






  $scope.assmereq = [

    {
      name: 'ارزیابی کلی:',

      "row": [

        {
          title: 'روزمه شخصی',
          img: 'assets/images/lk1.png',
          link: '',
          level: '',
        },

      ]

    },



    {
      name: 'ارزیابی شخصیت:',

      "row": [

        {
          title: 'تست MBTI',
          img: 'assets/images/lk1.png',
          link: '',
          level: '',
        },

        {
          title: 'تست Watson-Glaser',
          img: 'assets/images/lk1.png',
          link: '',
          level: '',
        },

      ]

    },



    {
      name: 'ارزیابی مهارتی:',

      "row": [

        {
          title: 'گزارش نویسی',
          img: 'assets/images/lk2.png',
          link: '',
          level: 'سطح 1',
        },

        {
          title: 'Microsoft Exell',
          img: 'assets/images/lk2.png',
          link: '',
          level: 'سطح 1',
        },

        {
          title: 'Microsoft Project',
          img: 'assets/images/lk2.png',
          link: '',
          level: 'سطح 1',
        },

        {
          title: 'Comfar',
          img: 'assets/images/lk2.png',
          link: '',
          level: 'سطح 1',
        },

        {
          title: 'بازرسی فنی',
          img: 'assets/images/lk2.png',
          link: '',
          level: 'سطح 1',
        },

      ]

    },



    {
      name: 'ارزیابی شایستگی:',

      "row": [

        {
          title: 'تفکر تحلیلی',
          img: 'assets/images/lk3.png',
          link: '',
          level: '',
        },

      ]

    },



  ];








  $scope.addone = function() {

    var data = {

      id: getjobid,

    };



    var config = {

      headers: {

        'Content-Type': 'application/json',

        'Access-Token': $localStorage.TokenKey.access,

      }

    }

    $http.post(mustafasite + '/job_seeker/bookmark/job', JSON.stringify(data), config).then(function(response) {

      $scope.pindedplusonej = false;
      $scope.pindedcheckonej = true;


    });



  }



  $scope.removeone = function() {

    var config = {

      headers: {

        'Access-Token': $localStorage.TokenKey.access,

      }

    }



    $http.delete(mustafasite + '/job_seeker/bookmark/job/' + getjobid, config).then(function(response) {

      $scope.pindedplusonej = true;
      $scope.pindedcheckonej = false;


    });



  }

  $scope.requestjobpage = function() {

    var data = {

      id: getjobid,

    };



    var config = {

      headers: {

        'Content-Type': 'application/json',

        'Access-Token': $localStorage.TokenKey.access,

      }

    }



    $http.post(mustafasite + '/job_seeker/request_job', JSON.stringify(data), config).then(function(response) {

      $scope.derequestshowpage = true;
      $scope.requestshowpage = false;


    });



  }





  $scope.derequestjobpage = function() {


    var config = {

      headers: {

        'Access-Token': $localStorage.TokenKey.access,

      }

    }



    $http.delete(mustafasite + '/job_seeker/request_job/' + getjobid, config).then(function(response) {

      $scope.derequestshowpage = false;
      $scope.requestshowpage = true;


    });



  }







  $scope.pindedplus = [];
  $scope.pindedcheck = [];
  $scope.pindedplusshow = [];
  $scope.pindedcheckhide = [];
  $scope.requestshow = [];
  $scope.requestshowshow = [];
  $scope.derequestshow = [];
  $scope.derequestshowhide = [];




  $scope.add = function(item, $index) {

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

      $scope.pindedplusshow[$index] = false;
      $scope.pindedcheckhide[$index] = false;
      $scope.pindedplus[$index] = true;
      $scope.pindedcheck[$index] = true;


    });



  }



  $scope.remove = function(item, $index) {

    var data = item.id;



    var config = {

      headers: {

        'Access-Token': $localStorage.TokenKey.access,

      }

    }



    $http.delete(mustafasite + '/job_seeker/bookmark/job/' + data, config).then(function(response) {

      $scope.pindedplus[$index] = false;
      $scope.pindedcheck[$index] = false;
      $scope.pindedplusshow[$index] = true;
      $scope.pindedcheckhide[$index] = true;

    });



  }



  $scope.requestjob = function(item, $index) {

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

      $scope.requestshowshow[$index] = true;
      $scope.requestshow[$index] = false;
      $scope.derequestshowhide[$index] = false;
      $scope.derequestshow[$index] = true;

    });



  }





  $scope.derequestjob = function(item, $index) {

    var data = item.id;



    var config = {

      headers: {

        'Access-Token': $localStorage.TokenKey.access,

      }

    }



    $http.delete(mustafasite + '/job_seeker/request_job/' + data, config).then(function(response) {

      $scope.requestshowshow[$index] = false;
      $scope.requestshow[$index] = true;
      $scope.derequestshowhide[$index] = true;
      $scope.derequestshow[$index] = false;

    });



  }





  $scope.showpagestarratingj = 4;

  $scope.showpagestaroptionsj = {

    ratedFill: '#FFD24D',

    normalFill: '#fff',

    rtl: false,

    readOnly: true,

    maxValue: 5,

    numStars: 5,

    spacing: "5px",

    starWidth: "16px"

  };

  $scope.showpagerectanratingj = 7.2;

  $scope.showpagerectanoptionsj = {

    ratedFill: '#3DC474',

    normalFill: '#E6E6E6',

  rtl: false,

    readOnly: true,

    maxValue: 10,

    numStars: 10,

    starWidth: "12px",

    spacing: "-2px",



    "starSvg": '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="-316 235.7 6.1 11.3" style="enable-background:new -316 235.7 6.1 11.3;" xml:space="preserve">' +

      '<path id="XMLID_1775_" class="st0" d="M-310.9,247h-4.1c-0.6,0-1-0.4-1-1v-9.3c0-0.6,0.4-1,1-1h4.1c0.6,0,1,0.4,1,1v9.3  C-309.9,246.6-310.4,247-310.9,247z"/>' +

      '</svg>'

  };




  $scope.showaemp = function() {
    var getcompanyid = $scope.ajob.employer.id;
    ShareData.setPropertyempid(getcompanyid);
    $location.path("acompanypage");

  }




});
