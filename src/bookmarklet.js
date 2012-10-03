// orignal unminified bookmarklet from README.md
(function(window, document){
	if(!window.location.host.match('mobilearn.np.edu.sg')) return;
	var script = document.createElement('script');
	script.src = '//github.com/aidilfbk/Studio27-Book-All-the-Things/raw/master/loader.js';
	try{
		document.body.appendChild(script);
	} catch(e){
		document.getElementsByTagName('body')[0].appendChild(script);
	};
})(window, document)