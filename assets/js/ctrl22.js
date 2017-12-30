console.clear();

app.controller('acertificatepage', function($compile, $sce, $scope, $window, $http) {

$scope.activeTab = "tab1";
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
    ];	
	
	$scope.azmonshaksiyat = [ 
        {id : "1" , nametest : "تست MBTI", desctest : "شی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید، تا از نظر گرافیکی نشانگر چگونگی نوع و اندازه فو", morelink : "#" , "kargozarha":[ {kargozarname : "کارگزار۱" , kargozargeymat : "310000", kargozaricon : "assets/images/lk1.png" } , {kargozarname : "کارگزار2" , kargozargeymat : "320000", kargozaricon : "assets/images/lk2.png" } ,{kargozarname : "کارگزار3" , kargozargeymat : "330000", kargozaricon : "assets/images/lk3.png" } ,{kargozarname : "کارگزار4" , kargozargeymat : "340000", kargozaricon : "assets/images/lk5.png" } ,{kargozarname : "کارگزار5" , kargozargeymat : "350000", kargozaricon : "assets/images/lk5.png" } ,{kargozarname : "کارگزار6" , kargozargeymat : "360000", kargozaricon : "assets/images/lk1.png" } ,{kargozarname : "کارگزار7" , kargozargeymat : "370000", kargozaricon : "assets/images/lk2.png" } ,{kargozarname : "کارگزار 8" , kargozargeymat : "380000", kargozaricon : "assets/images/lk3.png" } ,]},
        {id : "2" , nametest : "تست Watson-Glaser", desctest : "شی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید، تا از نظر گرافیکی نشانگر چگونگی نوع و اندازه فو", morelink : "#" , "kargozarha":[ {kargozarname : "کارگزار 234" , kargozargeymat : "430000", kargozaricon : "assets/images/lk3.png" } ]},
        {id : "7" , nametest : "تست Watson-Glaser2", desctest : "شی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید، تا از نظر گرافیکی نشانگر چگونگی نوع و اندازه فو", morelink : "#" , "kargozarha":[ {kargozarname : "کارگزار 234" , kargozargeymat : "430000", kargozaricon : "assets/images/lk3.png" } ]},
		{id : "3" , nametest : "تست MBTI2", desctest : "شی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید، تا از نظر گرافیکی نشانگر چگونگی نوع و اندازه فو", morelink : "#" , "kargozarha":[ {kargozarname : "کارگزار۱" , kargozargeymat : "310000", kargozaricon : "assets/images/lk1.png" } , {kargozarname : "کارگزار2" , kargozargeymat : "320000", kargozaricon : "assets/images/lk2.png" } ,{kargozarname : "کارگزار3" , kargozargeymat : "330000", kargozaricon : "assets/images/lk3.png" } ,{kargozarname : "کارگزار4" , kargozargeymat : "340000", kargozaricon : "assets/images/lk5.png" } ,{kargozarname : "کارگزار5" , kargozargeymat : "350000", kargozaricon : "assets/images/lk5.png" } ,{kargozarname : "کارگزار6" , kargozargeymat : "360000", kargozaricon : "assets/images/lk1.png" } ,{kargozarname : "کارگزار7" , kargozargeymat : "370000", kargozaricon : "assets/images/lk2.png" } ,{kargozarname : "کارگزار 8" , kargozargeymat : "380000", kargozaricon : "assets/images/lk3.png" } ,]},
        {id : "4" , nametest : "تست Bar-on1", desctest : "شی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید، تا از نظر گرافیکی نشانگر چگونگی نوع و اندازه فو", morelink : "#" , "kargozarha":[ {kargozarname : "کارگزار 33" , kargozargeymat : "180000", kargozaricon : "assets/images/lk5.png" } ]},
        {id : "5" , nametest : "تست Bar-on3", desctest : "شی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید، تا از نظر گرافیکی نشانگر چگونگی نوع و اندازه فو", morelink : "#" , "kargozarha":[ {kargozarname : "کارگزار 33" , kargozargeymat : "180000", kargozaricon : "assets/images/lk5.png" } ]},
        {id : "6" , nametest : "تست Bar-on5", desctest : "شی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید، تا از نظر گرافیکی نشانگر چگونگی نوع و اندازه فو", morelink : "#" , "kargozarha":[ {kargozarname : "کارگزار 33" , kargozargeymat : "180000", kargozaricon : "assets/images/lk5.png" } ]},
    ];	
	
	$scope.azmonmaharat = [ 
        {id : "1" , sath : "2" , nametest : "تست مهارت 1", desctest : "شی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید، تا از نظر گرافیکی نشانگر چگونگی نوع و اندازه فو", morelink : "#" , "kargozarha":[ {kargozarname : "کارگزار۱" , kargozargeymat : "310000", kargozaricon : "assets/images/lk1.png" } , {kargozarname : "کارگزار2" , kargozargeymat : "320000", kargozaricon : "assets/images/lk2.png" } ,{kargozarname : "کارگزار3" , kargozargeymat : "330000", kargozaricon : "assets/images/lk3.png" } ,{kargozarname : "کارگزار4" , kargozargeymat : "340000", kargozaricon : "assets/images/lk5.png" } ,{kargozarname : "کارگزار5" , kargozargeymat : "350000", kargozaricon : "assets/images/lk5.png" } ,{kargozarname : "کارگزار6" , kargozargeymat : "360000", kargozaricon : "assets/images/lk1.png" } ,{kargozarname : "کارگزار7" , kargozargeymat : "370000", kargozaricon : "assets/images/lk2.png" } ,{kargozarname : "کارگزار 8" , kargozargeymat : "380000", kargozaricon : "assets/images/lk3.png" } ,]},
        {id : "2" , sath : "6"  , nametest : "تست مهارت 2", desctest : "شی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید، تا از نظر گرافیکی نشانگر چگونگی نوع و اندازه فو", morelink : "#" , "kargozarha":[ {kargozarname : "کارگزار 234" , kargozargeymat : "430000", kargozaricon : "assets/images/lk3.png" } ]},
        {id : "7" , sath : "1"  , nametest : "تست مهارت 3", desctest : "شی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید، تا از نظر گرافیکی نشانگر چگونگی نوع و اندازه فو", morelink : "#" , "kargozarha":[ {kargozarname : "کارگزار 234" , kargozargeymat : "430000", kargozaricon : "assets/images/lk3.png" } ]},
		{id : "3" , sath : "3" , nametest : "تست مهارت 4", desctest : "شی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید، تا از نظر گرافیکی نشانگر چگونگی نوع و اندازه فو", morelink : "#" , "kargozarha":[ {kargozarname : "کارگزار۱" , kargozargeymat : "310000", kargozaricon : "assets/images/lk1.png" } , {kargozarname : "کارگزار2" , kargozargeymat : "320000", kargozaricon : "assets/images/lk2.png" } ,{kargozarname : "کارگزار3" , kargozargeymat : "330000", kargozaricon : "assets/images/lk3.png" } ,{kargozarname : "کارگزار4" , kargozargeymat : "340000", kargozaricon : "assets/images/lk5.png" } ,{kargozarname : "کارگزار5" , kargozargeymat : "350000", kargozaricon : "assets/images/lk5.png" } ,{kargozarname : "کارگزار6" , kargozargeymat : "360000", kargozaricon : "assets/images/lk1.png" } ,{kargozarname : "کارگزار7" , kargozargeymat : "370000", kargozaricon : "assets/images/lk2.png" } ,{kargozarname : "کارگزار 8" , kargozargeymat : "380000", kargozaricon : "assets/images/lk3.png" } ,]},
        {id : "4" , sath : "7" , nametest : "تست مهارت 5", desctest : "شی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید، تا از نظر گرافیکی نشانگر چگونگی نوع و اندازه فو", morelink : "#" , "kargozarha":[ {kargozarname : "کارگزار 33" , kargozargeymat : "180000", kargozaricon : "assets/images/lk5.png" } ]},
        {id : "5" , sath : "2" , nametest : "تست مهارت 6", desctest : "شی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید، تا از نظر گرافیکی نشانگر چگونگی نوع و اندازه فو", morelink : "#" , "kargozarha":[ {kargozarname : "کارگزار 33" , kargozargeymat : "180000", kargozaricon : "assets/images/lk5.png" } ]},
        {id : "6" , sath : "3" , nametest : "تست مهارت 7", desctest : "شی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید، تا از نظر گرافیکی نشانگر چگونگی نوع و اندازه فو", morelink : "#" , "kargozarha":[ {kargozarname : "کارگزار 33" , kargozargeymat : "180000", kargozaricon : "assets/images/lk5.png" } ]},
    ];	
	
	$scope.azmonshyestegi = [ {
	"parts" : [
        {id : "1" , nametest : "تست شایستگی 1", desctest : "شی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید، تا از نظر گرافیکی نشانگر چگونگی نوع و اندازه فو", morelink : "#" ,},
        {id : "2" , nametest : "تست شایستگی 2", desctest : "شی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید، تا از نظر گرافیکی نشانگر چگونگی نوع و اندازه فو", morelink : "#" , "kargozarha":[ {kargozarname : "کارگزار 234" , kargozargeymat : "430000", kargozaricon : "assets/images/lk3.png" } ]},
        {id : "7" , nametest : "تست شایستگی 3", desctest : "شی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید، تا از نظر گرافیکی نشانگر چگونگی نوع و اندازه فو", morelink : "#" , "kargozarha":[ {kargozarname : "کارگزار 234" , kargozargeymat : "430000", kargozaricon : "assets/images/lk3.png" } ]},
		{id : "3" , nametest : "تست شایستگی 4", desctest : "شی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید، تا از نظر گرافیکی نشانگر چگونگی نوع و اندازه فو", morelink : "#" , "kargozarha":[ {kargozarname : "کارگزار۱" , kargozargeymat : "310000", kargozaricon : "assets/images/lk1.png" } , {kargozarname : "کارگزار2" , kargozargeymat : "320000", kargozaricon : "assets/images/lk2.png" } ,{kargozarname : "کارگزار3" , kargozargeymat : "330000", kargozaricon : "assets/images/lk3.png" } ,{kargozarname : "کارگزار4" , kargozargeymat : "340000", kargozaricon : "assets/images/lk5.png" } ,{kargozarname : "کارگزار5" , kargozargeymat : "350000", kargozaricon : "assets/images/lk5.png" } ,{kargozarname : "کارگزار6" , kargozargeymat : "360000", kargozaricon : "assets/images/lk1.png" } ,{kargozarname : "کارگزار7" , kargozargeymat : "370000", kargozaricon : "assets/images/lk2.png" } ,{kargozarname : "کارگزار 8" , kargozargeymat : "380000", kargozaricon : "assets/images/lk3.png" } ,]},
        {id : "4" , nametest : "تست شایستگی 5", desctest : "شی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید، تا از نظر گرافیکی نشانگر چگونگی نوع و اندازه فو", morelink : "#" , "kargozarha":[ {kargozarname : "کارگزار 33" , kargozargeymat : "180000", kargozaricon : "assets/images/lk5.png" } ]},
        {id : "5" , nametest : "تست شایستگی 6", desctest : "شی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید، تا از نظر گرافیکی نشانگر چگونگی نوع و اندازه فو", morelink : "#" , "kargozarha":[ {kargozarname : "کارگزار 33" , kargozargeymat : "180000", kargozaricon : "assets/images/lk5.png" } ]},
        {id : "6" , nametest : "تست شایستگی 7", desctest : "شی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید، تا از نظر گرافیکی نشانگر چگونگی نوع و اندازه فو", morelink : "#" , "kargozarha":[ {kargozarname : "کارگزار 33" , kargozargeymat : "180000", kargozaricon : "assets/images/lk5.png" } ]},
    ], partname : "گروه223 شایستگی 1:",
	},{
	"parts" : [
        {id : "12" , nametest : "تست شایستگی 1", desctest : "شی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید، تا از نظر گرافیکی نشانگر چگونگی نوع و اندازه فو", morelink : "#" ,},
        {id : "23" , nametest : "تست شایستگی 2", desctest : "شی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید، تا از نظر گرافیکی نشانگر چگونگی نوع و اندازه فو", morelink : "#" , "kargozarha":[ {kargozarname : "کارگزار 234" , kargozargeymat : "430000", kargozaricon : "assets/images/lk3.png" } ]},
        {id : "74" , nametest : "تست شایستگی 3", desctest : "شی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید، تا از نظر گرافیکی نشانگر چگونگی نوع و اندازه فو", morelink : "#" , "kargozarha":[ {kargozarname : "کارگزار 234" , kargozargeymat : "430000", kargozaricon : "assets/images/lk3.png" } ]},
		{id : "35" , nametest : "تست شایستگی 4", desctest : "شی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید، تا از نظر گرافیکی نشانگر چگونگی نوع و اندازه فو", morelink : "#" , "kargozarha":[ {kargozarname : "کارگزار۱" , kargozargeymat : "310000", kargozaricon : "assets/images/lk1.png" } , {kargozarname : "کارگزار2" , kargozargeymat : "320000", kargozaricon : "assets/images/lk2.png" } ,{kargozarname : "کارگزار3" , kargozargeymat : "330000", kargozaricon : "assets/images/lk3.png" } ,{kargozarname : "کارگزار4" , kargozargeymat : "340000", kargozaricon : "assets/images/lk5.png" } ,{kargozarname : "کارگزار5" , kargozargeymat : "350000", kargozaricon : "assets/images/lk5.png" } ,{kargozarname : "کارگزار6" , kargozargeymat : "360000", kargozaricon : "assets/images/lk1.png" } ,{kargozarname : "کارگزار7" , kargozargeymat : "370000", kargozaricon : "assets/images/lk2.png" } ,{kargozarname : "کارگزار 8" , kargozargeymat : "380000", kargozaricon : "assets/images/lk3.png" } ,]},
        {id : "46" , nametest : "تست شایستگی 5", desctest : "شی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید، تا از نظر گرافیکی نشانگر چگونگی نوع و اندازه فو", morelink : "#" , "kargozarha":[ {kargozarname : "کارگزار 33" , kargozargeymat : "180000", kargozaricon : "assets/images/lk5.png" } ]},
        {id : "57" , nametest : "تست شایستگی 6", desctest : "شی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید، تا از نظر گرافیکی نشانگر چگونگی نوع و اندازه فو", morelink : "#" , "kargozarha":[ {kargozarname : "کارگزار 33" , kargozargeymat : "180000", kargozaricon : "assets/images/lk5.png" } ]},
        {id : "68" , nametest : "تست شایستگی 7", desctest : "شی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید، تا از نظر گرافیکی نشانگر چگونگی نوع و اندازه فو", morelink : "#" , "kargozarha":[ {kargozarname : "کارگزار 33" , kargozargeymat : "180000", kargozaricon : "assets/images/lk5.png" } ]},
    ], "partname" : "گروه شایستگی 1:",
	}
	];	
	
	 $scope.kargozarhashyestegi = [{kargozarname:"کارگزار۱","kargozarpack":[{packtitle:"کانون 5 شایستگی 3 ابزاره",packprice:"310000",},{packtitle:"کانون 5 شایستگی 4 ابزاره",packprice:"310000",},],kargozaricon:"assets/images/lk1.png"},{kargozarname:"کارگزار2","kargozarpack":[{packtitle:"کانون 5 شایستگی 3 ابزاره1",packprice:"310000",},{packtitle:"کانون 5 شایستگی 4 ابزاره1",packprice:"310000",},],kargozaricon:"assets/images/lk2.png"},{kargozarname:"3ارگزار2","kargozarpack":[{packtitle:"کانون 5 شایستگی 3 ابزاره2",packprice:"310000",},{packtitle:"کانون 5 شایستگی 4 ابزاره2",packprice:"310000",},],kargozaricon:"assets/images/lk3.png"},{kargozarname:"4ارگزار2","kargozarpack":[{packtitle:"کانون 5 شایستگی 3 ابزاره3",packprice:"310000",},{packtitle:"کانون 5 شایستگی 4 ابزاره3",packprice:"310000",},],kargozaricon:"assets/images/lk5.png"},{kargozarname:"5ارگزار2","kargozarpack":[{packtitle:"کانون 5 شایستگی 3 ابزاره4",packprice:"310000",},{packtitle:"کانون 5 شایستگی 4 ابزاره4",packprice:"310000",},],kargozaricon:"assets/images/lk5.png"},{kargozarname:"6ارگزار2","kargozarpack":[{packtitle:"کانون 5 شایستگی 3 ابزاره5",packprice:"310000",},{packtitle:"کانون 5 شایستگی 4 ابزاره5",packprice:"310000",},],kargozaricon:"assets/images/lk1.png"},{kargozarname:"7ارگزار2","kargozarpack":[{packtitle:"کانون 5 شایستگی 3 ابزاره6",packprice:"310000",},{packtitle:"کانون 5 شایستگی 4 ابزاره6",packprice:"310000",},],kargozaricon:"assets/images/lk2.png"},{kargozarname:"8ارگزار2","kargozarpack":[{packtitle:"کانون 5 شایستگی 3 ابزاره7",packprice:"310000",},{packtitle:"کانون 5 شایستگی 4 ابزاره7",packprice:"310000",},],kargozaricon:"assets/images/lk3.png"}];
	 $scope.geymatkargozar = "0";
	$scope.geymatkargozarmaharat = "0";
	$scope.geymatkargozarshyestegi = "0";
	$scope.testentekhab = [];
	$scope.testentekhabmaharat = [];
	$scope.testentekhabshyestegi = [];
	
		$scope.addtestvakargo = function(x) {

if ( $scope.geymatkargozar == "0" ) {
alert("لطفا اول کارگزار را انتخاب کنید")
}
    }
		
		$scope.addtestvakargomaharat = function(x) {

if ( $scope.geymatkargozarmaharat == "0" ) {
alert("لطفا اول کارگزار را انتخاب کنید")
}
    }	

/* 	$scope.addtestvakargoshyestegi = function(x) {

if ( $scope.geymatkargozarshyestegi == "0" ) {
alert("لطفا اول کارگزار را انتخاب کنید")
}
    } */
	

 
    $scope.showgeymatkargozar = function(kargozar) {
		$scope.lotfangeymatkargozarone = true; 
		$scope.geymatkargozarone = true; 
		$scope.selected = kargozar; 
        var getnamekargozar = kargozar.kargozarname;
        var getgeymatkargozar = kargozar.kargozargeymat;
        var geticonkargozar = kargozar.kargozaricon;
		$scope.geymatkargozar = getgeymatkargozar;
	$scope.addtestvakargo = function(x) {

if ( $scope.geymatkargozar == "0" ) {
alert("لطفا اول کارگزار را انتخاب کنید")
}
else {
		var nametest = x.nametest;
		var getid = x.id;
     $scope.testentekhab.push(x);
    $scope.azmonshaksiyat.splice($scope.azmonshaksiyat.indexOf(x), 1);
  $scope.formData.testentekhab.push({
      id : getid,
      nametest : nametest,
      namekargozar : getnamekargozar,
	  geymatkargozar : getgeymatkargozar ,
	  iconkargozar : geticonkargozar ,
    });	
  	$scope.geymatkargozar = "0" ;
	$scope.selected = ""; 
		$scope.lotfangeymatkargozarone = false; 
		$scope.geymatkargozarone = false; 
  
    }
    }
	
    }  
	
	   $scope.showgeymatkargozarmaharat = function(kargozarmaharat) {
		   		$scope.lotfangeymatkargozarone = true; 
		$scope.geymatkargozarone = true; 
		$scope.selectedmaharat = kargozarmaharat; 
        var getnamekargozar = kargozarmaharat.kargozarname;
        var getgeymatkargozar = kargozarmaharat.kargozargeymat;
        var geticonkargozar = kargozarmaharat.kargozaricon;
		$scope.geymatkargozarmaharat = getgeymatkargozar;
	$scope.addtestvakargomaharat = function(x) {

if ( $scope.geymatkargozarmaharat == "0" ) {
alert("لطفا اول کارگزار را انتخاب کنید")
}
else {
		var nametest = x.nametest;
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
	$scope.lotfangeymatkargozarone = false; 
		$scope.geymatkargozarone = false; 
  
  
    }
    }
	
    }	

	$scope.showgeymatkargozarshyestegi = function(kargozarshyestegi) {
		if ($scope.formData.testentekhabshyestegi.length <= 0) {
			alert("شما ابتدا باید یک یا چند شایستگی انتخاب کنید");
		}
		
		else {
		$scope.formData.detkargozarhashyestegi = [];
		$scope.lotfangeymatkargozarone = true; 
		$scope.showgheymatkargozsp = true; 
		$scope.selectedshyestegi = kargozarshyestegi; 
        var getnamekargozar = kargozarshyestegi.kargozarpack[1].packtitle;
        var getgeymatkargozar = kargozarshyestegi.kargozargeymat;
        var geticonkargozar = kargozarshyestegi.kargozaricon;
		$scope.geymatkargozarshyestegi = getgeymatkargozar;

for(var i =0 ; i < kargozarshyestegi.kargozarpack.length ; i++){
			$scope.formData.detkargozarhashyestegi.push(kargozarshyestegi.kargozarpack[i]);
}

	 $scope.orders2 = {};
        $scope.orders2.prod2s = {};
        $scope.orders2.prod2s.prod2 = {};
        $scope.totalazmonshyestegi = function () {
            return $scope.formData.detkargozarhashyestegi.filter(function (prod2) {
                return $scope.orders2.prod2s.prod2[prod2.packtitle];
            }).reduce(function (subtotal, selectedprod2) {
                return subtotal + parseInt(selectedprod2.packprice);
            }, 0);
        };
		
		}
    }

		$scope.addtestvakargoshyestegi = function(x,outerIndex) {

		var nametest = x.nametest;
		var getid = x.id;
		var getselectimportant = x.selectimportant;
     $scope.testentekhabshyestegi.push(
	 {
		 desctest : x.desctest,
		 id : x.id,
		 morelink : x.morelink,
		 nametest : x.nametest,
		 parntid : outerIndex,
	 }
	 );

    $scope.azmonshyestegi[outerIndex].parts.splice($scope.azmonshyestegi[outerIndex].parts.indexOf(x), 1);
  $scope.formData.testentekhabshyestegi.push({
      id : getid,
      selectimportant : getselectimportant,
      nametest : nametest,
      parntid : outerIndex,
    });	
  	$scope.geymatkargozarshyestegi = "0" ;
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

	$scope.selectedshyestegi = false;
			$scope.formData.detkargozarhashyestegi = [];

	var index = -1;

	
$scope.testentekhabshyestegi.some(function(obj, i) {
  return obj.id == x.id ? index = i : false;
});
var ssss= x.parntid ;

    	$scope.detailslogt3shyestegi.shown = null;
		$scope.azmonshyestegi[ssss].parts.push($scope.testentekhabshyestegi[index]);
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
		
/* 		$scope.totalazmonshyestegi = function() {
        var totalazmonshyestegi = 0;
        angular.forEach($scope.formData.testentekhabshyestegi, function(item) {
            totalazmonshyestegi += item.geymatkargozarshyestegi * 1;
        })

        return totalazmonshyestegi;
    } */
	

 
	 $scope.detailslogt3 = {};
     $scope.toggleDetails = function(name){
 		if($scope.detailslogt3.shown === name){
    	$scope.detailslogt3.shown = null;
		  	$scope.geymatkargozar = "0" ;
				$scope.selected = ""; 
					$scope.lotfangeymatkargozarone = false; 
		$scope.geymatkargozarone = false; 
    } 
	else {
	$scope.detailslogt3.shown = name;
  	$scope.geymatkargozar = "0" ;
	$scope.selected = ""; 
		$scope.lotfangeymatkargozarone = false; 
		$scope.geymatkargozarone = false; 
	}
 }
 
 	 $scope.detailslogt3maharat = {};
     $scope.toggleDetailsmaharat = function(name){
 		if($scope.detailslogt3maharat.shown === name){
    	$scope.detailslogt3maharat.shown = null;
		  	$scope.geymatkargozarmaharat = "0" ;
				$scope.selectedmaharat = ""; 
					$scope.lotfangeymatkargozarone = false; 
		$scope.geymatkargozarone = false; 
    } 
	else {
	$scope.detailslogt3maharat.shown = name;
  	$scope.geymatkargozarmaharat = "0" ;
	$scope.selectedmaharat = ""; 
		$scope.lotfangeymatkargozarone = false; 
		$scope.geymatkargozarone = false; 
	}
 } 	

 $scope.detailslogt3shyestegi = {};
     $scope.toggleDetailsshyestegi = function(name){
		 
 		if($scope.detailslogt3shyestegi.shown === name){
    	$scope.detailslogt3shyestegi.shown = null;
		  	$scope.geymatkargozarshyestegi = "0" ;
					$scope.lotfangeymatkargozarone = false; 
		$scope.geymatkargozarone = false; 
    } 
	else {
	$scope.detailslogt3shyestegi.shown = name;
  	$scope.geymatkargozarshyestegi = "0" ;
		$scope.lotfangeymatkargozarone = false; 
		$scope.geymatkargozarone = false; 
	}
 }

	 $scope.formData = {
		  sharhevazayef : [] ,
		  teahsilat : [] ,
		  selectedItemskhas  : [] ,
		  maharatkilidi : [] ,
		  testentekhab : [] ,
		  testentekhabmaharat : [] ,
		  testentekhabshyestegi : [] ,
		  detkargozarhashyestegi : [],

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
	  

	
    $scope.formData.teahsilat.push({
      hoze: $scope.hozetakhasosi,
    });
  };
  	$scope.yourskillsandexpertises = [	{title : 'ایجاد پروفایل شغلی'},	{title : 'fdddfdfdf'},	{title : 'بلیلبیلبیل'},	];	
  
	  $scope.removemahartkilid = function(i) {
    $scope.formData.maharatkilidi.splice(i, 1);
  };

	
  $scope.addmaharatkilidi = function() {
    var getmaharatkilidi = $scope.formData.inpuvaluemaharatkilidi;
    $scope.formData.maharatkilidi.push({
      title : getmaharatkilidi,
	  name: "id " + counter++
    });
  };
		
	
  init();

    function init () {
        $scope.prodList = [
      {id : '1' , title:'فوری/امن/محرمانه', descr:'شی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید', 'price':'2500000',    selected: 'YES'},
      {id : '2' , title:'فوری', descr:'شی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید', 'price':'2500000'},
      {id : '3' , title:'امن', descr:'شی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید', 'price':'2500000'},
      {id : '4' , title:'محرمانه', descr:'شی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید', 'price':'2500000'},
     {id : '5' , title:'فوری 2', descr:'شی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید', 'price':'2500000'},
    ];
        $scope.orders = {};
        $scope.orders.prods = {};
        $scope.orders.prods.prod = {};
        $scope.totalkhaskardanagahi = function () {
            return $scope.prodList.filter(function (prod) {
                return $scope.orders.prods.prod[prod.title];
            }).reduce(function (subtotal, selectedProd) {
                return subtotal + parseInt(selectedProd.price);
            }, 0);
        };
      
    }


	$scope.pishniyaz = [
		{title : 'Computer Codes'},
		{title : 'ICDL'},
		{title : 'ICDL+'},
	];

	$scope.soon = [
		{title : 'HTML5' , img : 'assets/images/lk1.svg'},
		{title : 'HTML5' , img : 'assets/images/lk1.svg'},
		{title : 'CSS 3' , img : 'assets/images/lk2.svg'},
		{title : 'Microsoft Excel' , img : 'assets/images/lk1.svg'},
		{title : 'ICDL' , img : 'assets/images/lk1.svg'},
	];
    

});


