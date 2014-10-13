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