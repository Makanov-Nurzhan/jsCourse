const family = ['Peter', 'Ann', 'Alex', 'Linda'];

function showFamily(arr) {
    arr.length === 0 ? str = 'Семья пуста' : str = 'Семья состоит из: '
    for (let item of arr) {
        str += `${item} `
    }
    console.log(str)
}
showFamily(family)
const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings(arr) {
    arr.forEach(item => {
        console.log(`${item.toLowerCase()}`)
    })
}
standardizeStrings(favoriteCities)

