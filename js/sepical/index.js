$(function(){
	/* 获取tab栏 tab切换 */
	$('.tab').click(function() {
		$(this).addClass('tabafter').siblings().removeClass("tabafter")
	})
})