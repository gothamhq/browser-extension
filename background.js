/*-----------------------------------------------------------------------------
 * Main
 *---------------------------------------------------------------------------*/

chrome.runtime.onMessage.addListener(function(request, sender){

	var tabId = sender.tab.id;

	if( request.ssgUsed != "no" ){

		chrome.pageAction.show( tabId );
		chrome.pageAction.setIcon( {tabId, path: "icon-x48.png"} );
		chrome.pageAction.setTitle({
			tabId,
			title: "This website is built with " + request.ssgUsed + "!"
		});
	}else{

		chrome.pageAction.hide( tabId );
		chrome.pageAction.setIcon( {tabId, path: "icon-gray-x48.png"} );
		chrome.pageAction.setTitle( {
			tabId,
			title: "This website isn't built with Gotham."
		});
	}
});
