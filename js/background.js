var contextMenus = {};

contextMenus.createInfiniteScroll = chrome.contextMenus.create(
    {
        "title": "Start Infinite Scroll"
    },
    function () {
        if (chrome.runtime.lastError) {
            console.log(chrome.runtime.lastError.message);
        }
    }
)