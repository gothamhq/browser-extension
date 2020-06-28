var ssgUsed;

if( $( "meta[content^='Gotham ']" ).length ){
	ssgUsed = "Gotham";
}else if( $( "meta[content^='Hugo ']" ).length ){
	ssgUsed = "Hugo";
}else{
	ssgUsed = "no";
}

chrome.runtime.sendMessage({ ssgUsed: ssgUsed });
