(function(window, document){
    function getScript(url,success){
      var script=document.createElement('script');
      script.src=url;
      var head=document.getElementsByTagName('head')[0],
          done=false;
      // Attach handlers for all browsers
      script.onload=script.onreadystatechange = function(){
        if ( !done && (!this.readyState
             || this.readyState == 'loaded'
             || this.readyState == 'complete') ) {
          done=true;
          success();
          script.onload = script.onreadystatechange = null;
          head.removeChild(script);
        }
      };
      head.appendChild(script);
    }
	getScript('//ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js', function(){
		getScript('//github.com/aidilfbk/Studio27-Book-All-the-Things/raw/master/src/script.js', jQuery.noop)
	});
})(window, document)