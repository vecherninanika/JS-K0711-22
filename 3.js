// 3. Создайте объект person с полями name, age и методом introduce, который выводит в консоль строку вида: "Привет, меня зовут [имя], мне [возраст] лет". Создайте несколько экземпляров этого объекта с разными значениями и вызовите метод introduce для каждого из них.

class Person {
    constructor (name, age) {
        this.name = name
        this.age = age
    }
    introduce = () => console.log("Привет, меня зовут ${this.name}, мне ${this.age} лет")
}

const vasya = new Person("Vasya", 15)
vasya.introduce()
