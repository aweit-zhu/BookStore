function slide(/** @type {HTMLImageElement} */ img, milliseconds) {
    var src = img.src;
    setInterval(() => {
        img.src = src + '?random=' + rand(1, 50);
    }, milliseconds);
}

function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function printProtoTypes(object) {
    console.log(object);
    do {
        object = Object.getPrototypeOf(object);
        console.log(object);
    } while (object);
}

const locale = 'zh-TW';
const currencyCode = 'TWD';
const currency = new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currencyCode,
});

export function toggleModal() {
    $('#close').parent().toggleClass('hidden');
    $('#overlay').toggleClass('modal-open');
}

export { slide, rand, printProtoTypes, currency };