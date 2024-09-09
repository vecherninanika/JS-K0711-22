// 2. Напишите программу, которая выводит все числа от 1 до 100, заменяя числа, кратные 3, на слово "Fizz", числа, кратные 5, на "Buzz", а числа, кратные и 3, и 5, на "FizzBuzz".

for (i=1; i<101; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
       console.log("FizzBuzz");
    }
    else if (i % 3 == 0) {
       console.log("Fizz");
    }
    else if (i % 5 == 0) {
       console.log("Fizz");
    }
    else {
        console.log(i);
    }
}
