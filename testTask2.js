function showPercentInfo() {
    const percentContainer = document.querySelector('radio-ctrl[name="paymentMode"] a');
    let price = document.querySelector('.total').innerText;
    if (!percentContainer || !price) return;
    price = price.replace(/[^0-9]/g, '');
    let newInfo = document.createElement('div');
    if (price < 30000) {
        newInfo.innerText = `2 недели: ${price / 4}, 4 недели: ${price / 4}, 6 недель: ${price / 4}, 8 недель: ${price / 4}`;
    } else {
        newInfo.innerText = "2 недели: 25 % 4 недели: 25 % 6 недель: 25 % 8 недель: 25 %";
    }
    percentContainer.before(newInfo);
}
const radios = document.querySelectorAll('radio-ctrl[name="paymentMode"] [type="radio"]');
if (radios[radios.length - 1].matches(':checked')) showPercentInfo();