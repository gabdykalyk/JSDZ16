// TASK1
for (let i = 1; i <= 5; i++) {
    document.write(i)
}

// TASK2
document.write("<br>")
for (let i = 5; i >= 1; i--) {
    document.write(i)
}

// TASK3
for (let i = 1; i <= 10; i++) {
    document.write(`<br> 3 * ${i} = ${3 * i}`)
}

// TASK4
function sum() {
    let number = +prompt("Введите число")
    let sum = 0;
    for (; number > 0; number--) {
        sum = sum + number;
    }
    document.write("<br>", sum)
}

sum()

// TASK5
function factorial() {
    let number = +prompt("Введите число")
    let sum = 1;
    for (; number > 0; number--) {
        sum = sum * number;
    }
    document.write("<br>", sum)
}

factorial()
document.write("<br>")
// // TASK6
function star() {
    let s = "*";
    let h = +prompt("Введите высоту треугольника")
    for (let i = 1; i <= h; i++) {
        for (let j = 0; j < i; j++) {
            document.write(s)
        }
        document.write("<br>")
    }
}
star()

// TASK7
function rectangle() {
    let s = prompt("Введите символ");
    let a = +prompt("Введите высоту прямоугольника")
    let b = +prompt("Введите ширину прямоугольника")
    for (let i = 0; i < a; i++) {
        for (let j = 0; j < b; j++) {
            document.write(s)
        }
        document.write("<br>")
    }
}
rectangle()

// TASK8
function EqualTriangle() {
    let h = +prompt("Введите высоту треугольника");
    let s = prompt("Введите символ");
    let space = '&nbsp;&nbsp;';

    for (let i = 0; i < h; i++) {
        for (let j = 0; j < h - i; j++) {
            document.write(space);
        }

        const stars = i * 2 + 1;

        for (let j = 0; j < stars; j++) {
            document.write(s);
        }

        document.write('<br>');
    }
}

EqualTriangle();

// TASK9 
function guessNumber() {
    const start = 0;
    const end = 100;

    const n = start + Math.floor(Math.random() * (end - start));

    let userTries = 10;
    let userWon = false;

    while (userTries > 0 && !userWon) {
        const userInput = +prompt('Угадай число!');

        if (userInput === n) {
            userWon = true;
        } else if (userInput > n) {
            console.log(`Загаданное число меньше, вы ввели ${userInput}`);
        } else if (userInput < n) {
            console.log(`Загаданное число больше, вы ввели ${userInput}`);
        } else {
            console.error('Число не распознано');
        }

        userTries--;
    }

    if (userWon) {
        alert(`Вы угадали число ${n} :)`);
    } else {
        alert('Вы проиграли :(');
    }
}

guessNumber()