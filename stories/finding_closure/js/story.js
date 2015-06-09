$(document).ready(function(){
	var vivus = new Vivus('houses', {type: 'oneByOne', duration: 125, file: 'img/houses.svg'}, onSVGFinish);
	function onSVGFinish() {
	
		var childURL = 'http://duner.me/nu/medill/390/dist/index.html';
		var pymParent = new pym.Parent('pym-parent', childURL, {});
	}

});
