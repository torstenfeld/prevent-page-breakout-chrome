/**
 * Created by torsten.feld on 13.10.2014.
 */

//jq211 = jQuery.noConflict(true);
//$ = jQuery.noConflict(true);


function showNotification() {
    var notification = new Notification(
        'BOS Notification',
        {
            "body": 'this is a notification'
        }
    );
    return notification;
}

function outputConsoleHelp() {
    console.log('BreakoutStop loaded');
//    var notification = showNotification();
//    notification.show();
}

outputConsoleHelp();

function findScriptTags() {
    $('script').each(function(index, script) {
        var html = script.outerHTML;
        if (html.indexOf('top.location.href') > -1) {
            console.log(script.outerHTML);
            var text = script.outerHTML;
            var lines = text.split('\n');
            var linesLength = lines.length;
            for(var i = 0; i < linesLength; i++) {
                if (lines[i].indexOf('top.location.href') > -1) {
                    lines[i] = '';
                }
            }
//            script.outerHTML = lines
            console.log(lines);
            script.outerHTML = lines.join('\n');
        }
    });
}


//chrome.webRequest.onBeforeRequest.addListener(function(details) {
//    console.log('onBeforeRequest');
//    console.log(details);
//});


$(document).ready(function() {
    console.log('document ready');
//    findScriptTags();
    console.log('findScriptTags executed');
});