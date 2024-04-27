// Функция для генерации последовательности чисел Фибоначчи в виде строки
function fibonacciString(length) {
    let fibonacciSequence = [0, 1]; // Начальные значения последовательности
    for (let i = 2; i < length; i++) {
        fibonacciSequence.push(fibonacciSequence[i - 1] + fibonacciSequence[i - 2]); // Генерируем последовательность
    }
    // Преобразуем массив чисел в строку, разделяя элементы пробелами
    return fibonacciSequence.join(" ");
}

// Длина последовательности, которую вы хотите сгенерировать
let length = 5; // Например, 10 элементов

// Вызываем функцию и выводим результат
console.log(fibonacciString(length));
