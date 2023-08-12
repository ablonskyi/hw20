class Person {
    constructor(name, gender) {
        this.name = name;
        this.gender = gender;
    }
}

class Apartment {
    constructor() {
        this.residents = [];
    }

    addResident(person) {
        this.residents.push(person);
    }
}

class House {
    constructor(maxApartments) {
        this.apartments = [];
        this.maxApartments = maxApartments;
    }

    addApartment(apartment) {
        if (this.apartments.length < this.maxApartments) {
            this.apartments.push(apartment);
        } else {
            console.log("Неможливо додати квартиру. У будиннку досягнуто максимальну килькість квартир.");
        }
    }
}

const person1 = new Person("Антон", "М");
const person2 = new Person("Вика", "Ж");
const person3 = new Person("Кристина", "Ж");
const person4 = new Person("Артем", "М");
const person5 = new Person("Дима", "М");
const person6 = new Person("Полина", "Ж");
const person7 = new Person("Никита", "М");
const person8 = new Person("Лена", "Ж");
const person9 = new Person("Денис", "М");
const person10 = new Person("Маша", "Ж");



const apartment1 = new Apartment();
const apartment2 = new Apartment();
const apartment3 = new Apartment();
const apartment4 = new Apartment();

apartment1.addResident(person1);
apartment1.addResident(person5);
apartment1.addResident(person6);
apartment1.addResident(person9);
apartment2.addResident(person2);
apartment2.addResident(person3);
apartment3.addResident(person4);
apartment3.addResident(person7);
apartment4.addResident(person8);


const house = new House(3);

house.addApartment(apartment1);
house.addApartment(apartment2);
house.addApartment(apartment3);
house.addApartment(apartment4);