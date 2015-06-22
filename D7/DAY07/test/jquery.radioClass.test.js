(function(Q, $){
	'use strict';



	// Qunit 모듈 정의
	Q.module('jquery.radioClass', {
		beforeEach: function() {
			this.name = 'demo';
			this.$test = $('.test').radioClass(this.name);
		}
	});

	Q.test('jQuery 사용준비?',function (A) {
		// body...
		A.ok($ === window.jQuery,'jQuery 사용 준비 완료!');
	});

	Q.test('사용하는 jQuery 버전은?',function (A) {
		// body...
		A.ok($.fn.jquery[0] === '1','jQuery 1.x 버전대 사용!');
	});


	Q.test('$.fn은 jQuery.prototype인가?',function (A){
		A.strictEqual($.fn, jQuery.prototype);
	});
	
	Q.test('$fn.radioClass가 존재하는가?', function(A){
		A.ok($.fn.radioClass);
	});

	Q.test('$(".test")에 class 속성 "its-me"가 추가되었는가?', function(A) {
		//A.ok($('.test').radioClass().hasClass('its-me'));
		A.ok($('.test').radioClass().hasClass(this.name));
	});

	Q.test('jQuery 플러그인 체이닝이 되는가?', function(A) {
		A.strictEqual(this.$test, this.$test.radioClass());
	})

	Q.test('name 전달인자 값을 정상적으로 처리?', function(A){
		//this.$test.hasClass()
		A.ok(this.$test.hasClass(this.name));

	});




})(window.QUnit, window.jQuery)

