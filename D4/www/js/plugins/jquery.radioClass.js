define(['jquery'],function($){
	'use strict';
	if( !$.fn.radioClass ) {
		$.fn.radioClass = function(name) {
			this.addClass(name);
			var $siblings =this.siblings();
			$.each($siblings, function(index,item){
				var $item = $siblings.eq(index);
				if($item.hasClass(name)){
					$item.removeClass(name);
				}

			});
			return this;
		}
	}
	// console.log('radioClass');

	// $('ul li').on('click',function(){
	// 	$(this).radioClass('selected');
	// });
});


