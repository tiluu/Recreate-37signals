$(document).ready(function() {
	$('div.products a').hover(function(){
			$(this).toggleClass('hidden');
			$('a.apps p, a.apps a').toggleClass('hidden');
			
		});
});