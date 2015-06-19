require([
		'plugins/jquery.radioClass',
		'plugins/jquery.redify',
],function () {
	'use strict';

	console.log('radioClass');

	$('ul li').on('click',function(){
		$(this).radioClass('selected').redify();
	});
})