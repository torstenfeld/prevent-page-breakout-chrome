/**
 * Created by torsten.feld on 13.10.2014.
 */

function outputConsoleHelp() {
    console.log('help');
};

function resetDefaultSuggestion() {
    chrome.omnibox.setDefaultSuggestion({
        description: 'bos: Search the BOS for %s'
    });
}


outputConsoleHelp();
resetDefaultSuggestion();

//chrome.webRequest.onBeforeRequest.addListener(function(details) {
//    console.log('onBeforeRequest');
//    console.log(details);
//});

chrome.webRequest.onBeforeRequest.addListener(function(details) {
  var responseData = "<div>Some text</div>"
  return {redirectUrl: "data:text/html," + encodeURIComponent(responseData)};
}, {urls: ["https://betacenter.avira.com/"]}, ["blocking"]);