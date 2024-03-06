$(function () {
    var _tab_id;

    $(document).on("click", "#calc", function () {
        chrome.scripting.executeScript({
            target: { tabId: _tab_id },
            function: function () {
                calc_total_price();
            }
        });
    })

    chrome.tabs.query({ active: true, currentWindow: true }, function (tab) {
        _tab_id = tab[0].id;
        chrome.scripting.executeScript({
            target: { tabId: _tab_id },
            files: ["js/jquery-3.7.1.min.js", "js/content.js"]
        });
    });
})