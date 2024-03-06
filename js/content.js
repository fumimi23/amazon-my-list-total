function calc_total_price() {

    var $total = 0;
    $('#g-items').children('li').each(function () {
        var $this = $(this);

        // 価格
        var $priceWhole = $this.find('.a-price-whole');
        if ($priceWhole.length === 0) return;
        var $price = $priceWhole.text().replace(',', '');

        // 希望数
        var $span_itemRequested = $this.find('span[id^=itemRequested_]');

        // 所有数
        var $span_itemPurchased = $this.find('span[id^=itemPurchased_]');
        if ($span_itemRequested && $span_itemPurchased) {
            var $itemRequested = $span_itemRequested.text();
            var $itemPurchased = $span_itemPurchased.text();
            $price = $price * Math.max(($itemRequested - $itemPurchased), 0);
        }

        $total += parseFloat($price);
    })
    alert('総額: ' + $total + '円');
}