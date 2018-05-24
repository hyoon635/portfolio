$(function() {
	//화면 불투명
	function overlay(){
		$('#site-overlay').toggleClass('active');
	}

	//slider
	$('.slide').slide({
		'slideSpeed': 4000,
		'isShowArrow': true,
		'dotsEvent': 'click',
		'isLoadAllImgs': true
	});

	// full screen menu
	$('.menu').on('click', function(e) {
		e.preventDefault();
		overlay();
		$(this).toggleClass('x')
		$("#primary-nav").toggleClass('active');
	});

	//typing
	$('.typeit-box').typeIt({
  // 타이핑 내용
  strings: 'Hello World!<br>web developer 윤희영입니다.<br>방문을 환영합니다.',
  // 타이핑 속도
  speed: 120,
  // delete 속도
  callback: function(){}
  
});
	AOS.init();
});

//Goggle Map API
function myMap() {
	var mapCanvas = document.getElementById("map");
	var myCenter = new google.maps.LatLng(37.595373,127.085877); 
	var mapOptions = {center: myCenter, zoom: 12};
	var map = new google.maps.Map(mapCanvas,mapOptions);
	var marker = new google.maps.Marker({
		position: myCenter,
		animation: google.maps.Animation.BOUNCE
	});
	marker.setMap(map);
}

var app = angular.module("myApp", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        template : "<div>안녕하세요.<em>Yoon Heeyoung</em> 사이트 방문을 환영합니다.<br>사이트 제작자 윤희영입니다.<br>이 사이트는 <mark><b>HTML, CSS, jQuery, JSON, AngularJS</b></mark> 가 사용되었고,<mark> <b>Google Map, Instagram API</b></mark>를 사용하였습니다.<br><mark><b>웹표준 문법(W3C Markup Validation)</b></mark>을 준수하여 구축하였고, <mark><b>크로스 브라우징(Cross Browsing)</b></mark>을 지원합니다.<hr class='about-hr'>제 스킬은 아래와 같습니다.<br><mark><b>HTML, CSS, Javascript(jQuery, JSON, AngularJS), Bootstrap</b></mark><br>Googling을 통한 문제 해결 및 오픈소스를 찾고 읽는데 문제없습니다.<br>감사합니다:D</div>"
    })
    .when("/eng", {
        template : "<div>Hello. Welcome to all who visit <em>Yoon Heeyoung</em> site.<br>Site creator Heeyoung.<br>This site was created using <mark><b>HTML, CSS, jQuery, JSON and AngularJS Google Map, Instagram API</b></mark><br>And this site has been built in compliance with the <mark><b>Web standard grammar (W3C Markup Validation)</b> and <b>supports Cross Browsing.</b></mark><hr class='about-hr'>My skills are as following.<br><mark><b>HTML, CSS, Javascript(jQuery, JSON, AngularJS), Bootstrap</b></mark><br>I can solve problems with Googling, and I have no problem finding and reading open source<br>Thank you:D</div>"
    });
});

var project = [
{"pjimg" : "css/img/woven.png", "pjalt" : "Woven_img", "pjname" : "Woven", "pjtype" : "Clone Page", "pji1" : "fab fa-html5", "pji2" : "fab fa-css3-alt",  "pji3" : "fab fa-js-square", "pjspan" : "+ Bootstrap", "pjurl": "projects/woven/index.html" },
{"pjimg" : "css/img/ottogi.png", "pjalt" : "ottogi_img", "pjname" : "Ottogi", "pjtype" : "Clone + renewer", "pji1" : "fab fa-html5", "pji2" : "fab fa-css3-alt",  "pji3" : "fab fa-js-square", "pji4": "fab fa-php", "pjspan" : "+ JSON", "pjurl": "projects/ottogi/index.php" },
{"pjimg" : "css/img/daum-join.png", "pjalt" : "daum-join_img", "pjname" : "Daum Join", "pjtype" : "Clone page", "pji1" : "fab fa-html5", "pji2" : "fab fa-css3-alt",  "pji3" : "fab fa-js-square", "pjspan" : "+ Validate(Plug)", "pjurl": "projects/Daum_join/daum-terms.html" }
];

var pjList = "";
for (var i=0; i<project.length; i++) {
	pjList += '<div class="p-grid"><figure class="effect-goliath"><img src="'+ project[i].pjimg +'" alt="'+ project[i].pjalt +'"/><figcaption><h2>'+ project[i].pjname +' <span>'+ project[i].pjtype +'</span></h2><p><i class="'+ project[i].pji1 +'"></i><i class="'+ project[i].pji2 +'"></i><i class="'+ project[i].pji3 +'"></i><i class="'+ project[i].pji4 +'"></i><span>'+ project[i].pjspan +'</span></p><a href="'+ project[i].pjurl +'" target="_blank">View more</a></figcaption></figure></div>';
}
$('#project-list').html(pjList);
