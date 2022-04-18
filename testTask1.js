function addNewPrice() {
    const priceNodes = document.querySelectorAll('.product-page-wrapper .product-grid .item > .price');
    let priceValue = priceNodes[priceNodes.length - 1].innerText;
    priceValue = priceValue.replace(/[^0-9]/g, '');
    if (priceValue < 30000) {
        let newPrice = document.createElement('div');
        newPrice.innerText = `${priceValue / 4} ₽`;
        priceNodes[priceNodes.length - 1].before(newPrice);
    } else {
        return false;
    }
}