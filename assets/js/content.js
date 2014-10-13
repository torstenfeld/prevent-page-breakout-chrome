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


$(document).ready(function() {
    console.log('document ready');
});