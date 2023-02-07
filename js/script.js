// exercitiul 1

class FermaMea {
    #locatie;
    animale = [
        {
            nume: "Porc",
            cantitate: 20
        },
        {
            nume: "Vaca",
            cantitate: 10
        },
        {
            nume: "Caine",
            cantitate: 1
        },
        {
            nume: "Oaie",
            cantitate: 50
        },
        {
            nume: "Pisica",
            cantitate: 2
        },
        {
            nume: "Rata",
            cantitate: 3
        },
        {
            nume: "Gaina",
            cantitate: 20
        }

    ];

    static numarFerme = 0;

    constructor(locatie, animale) {
        this.#locatie = locatie;
        this.animale = animale;
    }

    locatie() {
        console.log(`Locatia este ${this.#locatie}`);
    }

    numarFerme() {
        FermaMea.numarFerme++;
        if (FermaMea.numarFerme < 2) {
            console.log(`S-a creat doar ${FermaMea.numarFerme} ferma`);
        } else {
            console.log(`S-au creat ${FermaMea.numarFerme} ferme`);
        }
    }

    listAnimals() {
        console.log(this.animale.map(animal => animal.nume).join());
        const rezAnimale = this.animale.filter(animal => animal.cantitate < 5);
        console.log(rezAnimale);

        // mesaj pt mine din viitor, sa folosesc map si filter ca altfel nu pot accesa cantitate
        // si sa fac un array nou in afara classei
    }

    listRareAnimals() {
        // this.animale.forEach(animal => {
        //     if (animal.cantitate < 5) {
        //         console.log(this.animale);
        //     }
        // });
        this.animale.filter(animal => animal.cantitate < 5);
    }
}

const animales1 = [
    { nume: "Caine", cantitate: 1 },
    { nume: "Pisica", cantitate: 2 },
    { nume: "Vaca", cantitate: 12 },
    { nume: "Oaie", cantitate: 50 },
    { nume: "Caine", cantitate: 3 }
];

const fermaNoua = new FermaMea("Timisoara", animales1);
fermaNoua.locatie();
fermaNoua.listAnimals();
fermaNoua.listRareAnimals();
fermaNoua.numarFerme();

const animales2 = [
    { nume: "Caine", cantitate: 1 },
    { nume: "Miel", cantitate: 400 },
    { nume: "Vaca", cantitate: 3 },
    { nume: "Oaie", cantitate: 5000 },
];

const fermaLuiGigiBecali = new FermaMea("Bucuresti", animales2);

fermaLuiGigiBecali.locatie();
fermaLuiGigiBecali.listAnimals();
fermaLuiGigiBecali.listRareAnimals();
fermaLuiGigiBecali.numarFerme();

// exercitiul 2;

const valori = [1, 2, 3, 4, 5];

Array.prototype.max = function () {
    return Math.max.apply(null, this);
};

Array.prototype.min = function () {
    return Math.min.apply(null, this);
};

console.log(`Valoarea minima a array-ului este ${valori.min()} 
Valoarea maxima a array-ului este ${valori.max()}`);

// exercitiul extra 1

class Animal {
    name;
    age;
    race;

    setName(name) {
        this.name = name;
        return this;
    }

    setAge(age) {
        this.age = age;
        return this;
    }

    setRace(race) {
        this.race = race;
        return this;
    }
}

const myAnimal = new Animal();
myAnimal
    .setName("Matz")
    .setAge(3)
    .setRace("Albastru de Rusia");

console.log(myAnimal);

// exercitiul 2 extra

function Pointers() {
    this.observers = [];
}

Pointers.prototype = {
    subscribe: function (fn) {
        this.observers.push(fn);
    },

    unsubscribe: function (fnToRemove) {
        this.observers = this.observers.filter(fn => {
            if (fn != fnToRemove) {
                return fn;
            }
        });
    },
    click: function () {
        this.observers.forEach(fn => {
            fn.call();
        });
    }
};

function Pointer() {
    console.log("S-a facut click");
}

const pointer = new Pointers();

pointer.subscribe(Pointer);
pointer.click();
pointer.unsubscribe(Pointer);
pointer.click();

// https://www.youtube.com/watch?v=45TeJEmcqk8&ab_channel=DevSage


