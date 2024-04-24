const someString = 'This is some strange string';

function reverse(str) {
    if (typeof (str) !== 'string') {
        return "Ошибка!"
    }
    //const revStr =  str.split('').reverse().join('');
    let revStr = ''
    let i = str.length - 1;
    while (i >= 0) {
        revStr += str.substring(i, i + 1);
        i--;
    }
    console.log(revStr)
}


const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

function availableCurr(arr, missingCurr) {
    let str = '';
    arr.length === 0 ? str = 'Нет доступных валют' : str = 'Доступные валюты:\n';

    arr.forEach((curr) => {
        if (curr !== missingCurr) {
            str += `${curr}\n`
        }
    })

    console.log(str);
}
availableCurr([...baseCurrencies, ...additionalCurrencies], 'CNY')