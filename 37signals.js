$(document).ready(function() {
	$('div#apps-center a').hover(
		function(){
			hover= "div."+$(this).attr('class')
			$('hgroup.headline').toggleClass('hidden');
			$('p', this).toggleClass('hidden');
			$(hover).toggleClass('hidden');
		},
		function(){
			hover= "div."+$(this).attr('class')
			$('hgroup.headline').toggleClass('hidden');
			$('p', this).toggleClass('hidden');
			$(hover).toggleClass('hidden');
		});

});