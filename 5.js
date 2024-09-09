// 5. Создайте класс Car с конструктором, принимающим параметры make, model и year. Добавьте метод getCarInfo, который возвращает строку с информацией о машине в формате "Машина: [make] [model], год выпуска: [year]". Создайте несколько объектов этого класса и вызовите метод для каждого из них.

class Car {
    constructor (make, model, year) {
        this.make = make
        this.model = model
        this.year = year
    }
    getCarInfo = () => console.log("Машина: ${this.make} ${this.model}, год выпуска: ${this.year}")
}

const opel = new Car("make", "Astra", 2015)
opel.getCarInfo()
