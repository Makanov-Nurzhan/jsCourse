const shoppingMallData = {
    shops: [
        {
            width: 10,
            length: 5
        },
        {
            width: 15,
            length: 7
        },
        {
            width: 20,
            length: 5
        },
        {
            width: 8,
            length: 10
        }
    ],
    height: 5,
    moneyPer1m3: 30,
    budget: 50000
}

function isBudgetEnough(data) {
    let s = 0;
    let v = 0;
    data.shops.forEach(shop => {
        s += shop.width * shop.length;
    });

    v = data.height * s;
    if (data.budget - v * data.moneyPer1m3 >= 0) {
        return 'Бюджета достаточно';
    }
    else {
        return 'Бюджета недостаточно';
    }

}

const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam', 'Somebody'];

function sortStudentsByGroups(arr) {
    arr.sort();
    let a = [], b = [], c = [], d = [];
    for (let i = 0; i < arr.length; i++) {
        if (i < 3) {
            a.push(arr[i]);
        }
        else if (i >= 3 && i < 6) {
            b.push(arr[i])
        }
        else if (i >= 6 && i < 9) {
            c.push(arr[i])
        }
        else {
            d.push(arr[i])
        }
    }

    return [a, b, c, `Оставшиеся студенты: ${d.length === 0 ? '-' : d.join(', ')}`]
}
console.log(students.sort())
console.log(sortStudentsByGroups(students));