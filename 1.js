//Напишите функцию, которая принимает строку и возвращает эту строку, написанную в обратном порядке. Например: "JavaScript" → "tpircSavaJ"

const rev = function (str) { return str.split("").reverse().join("") };

console.log(rev("Javascript"));
