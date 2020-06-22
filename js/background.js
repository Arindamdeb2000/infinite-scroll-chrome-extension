var contextMenus = {};

contextMenus.createInfiniteScroll =
    chrome.contextMenus.create(
        {
            "title": "Start Infinite Scroll"
        },
        function () {
            if (chrome.runtime.lastError) {
                console.error(chrome.runtime.lastError.message);
            }
        }
    );

chrome.contextMenus.onClicked.addListener(contextMenuHandler);


function contextMenuHandler(info, tab) {

    if (info.menuItemId === contextMenus.createInfiniteScroll) {
        chrome.tabs.executeScript({
            file: 'js/infiniteScroll.js'
        });
    }
}