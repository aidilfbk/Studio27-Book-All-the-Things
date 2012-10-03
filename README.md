Studio27 Book All the Things!
=============

A small javascript bookmarklet to allow any Studio27 facility to be booked even when the system says it's "not yet" available. This is a proof of concept and may not be completely functional.

Installation
---
Add a bookmark of this page and modify the bookmark's location/address to the line of code below. You'll only have to do this once and it'll always be up to date. Drag this [Studio27 Book All the Things!][bookmarklet] link to your bookmarks bar.

	javascript:(function(g,c){function b(b,f){var a=c.createElement("script");a.src=b;var d=c.getElementsByTagName("head")[0],e=!1;a.onload=a.onreadystatechange=function(){if(!e&&(!this.readyState||"loaded"==this.readyState||"complete"==this.readyState))e=!0,f(),a.onload=a.onreadystatechange=null,d.removeChild(a)};d.appendChild(a)}b("//ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js",function(){b("//github.com/aidilfbk/Studio27-Book-All-the-Things/raw/master/script.js",jQuery.noop)})})(window,document);

Usage
---
Login to Studio27's booking facilities then activate the saved bookmark after the page has completely loaded. Then, make your booking as per normal, except this time, you can book on whichever date you want.

[bookmarklet]:javascript:(function(){(function(window,document){if(!window.location.host.match('mobilearn.np.edu.sg'))return;var%20script=document.createElement('script');script.src='//github.com/aidilfbk/Studio27-Book-All-the-Things/raw/master/loader.js';try{document.body.appendChild(script);}catch(e){document.getElementsByTagName('body')[0].appendChild(script);};})(window,document)})();