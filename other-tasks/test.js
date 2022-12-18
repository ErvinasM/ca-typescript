/*
1. Sukurti klasę Automobilis
  - sukurti konstruktorių, su 3 argumentais:
    - marke, modelis, kaina
  - konstruktoriuje aprašyti, jog perduotus argumentus išsaugotume formuojame objekte savybėmis:
    - this.brand
    - this.model
    - this.price
2. Sukurkite 3 skirtingus objektus pagal klasę Automobilis kintamuosiuose:
  - const car1 = new Automobilis(..., ..., ...);
  - const car2 = new Automobilis(..., ..., ...);
  - const car3 = new Automobilis(..., ..., ...);
3. Atsispausdinkite car1, car2 ir car3 kintamuosius. Peržiūrėkite juos konsolėje, panagrinėkite kas yra tie objektai
4. Atspausdinkite visų kintamųjų (kurie rodo į klasės objektus):
  modelius:
    - console.log(car1.model);
    - console.log(car2.model);
    - console.log(car3.model);
  markes:
    - console.log(car1.brand);
    - console.log(car2.???);
    - console.log(???);
  kainas:
    - console.log(???);
    - console.log(???);
    - console.log(???);
5. Padidinkite Automobilis objektų kainas šimtu.
  car1.price = car1.price + 100;
  car2.price = ??? + 100;
  ???
6. Po padidinimo, vėl atsispausdinkite objektus ir pažiūrėkite pakitusias Automobilis objektų savybes*/

class Car 
  {
    constructor(brand, price, model) 
      {
        this.brand = brand;
        this.price = price;
        this.model = model;
      }
  }

  const car1 = new Car("BMW", 10, "X5");
  const car2 = new Car("Audi", 4, "A6");
  const car3 = new Car("Opel", 30, "Astra");

  console.log("\nModeliai:");

  console.log(car1.model);
  console.log(car2.model);
  console.log(car3.model);

  console.log("\u20ac");

  console.log(car1.brand);
  console.log(car2.brand);
  console.log(car3.brand);

  console.log("\nKainos:");

  console.log(car1.price);
  console.log(car2.price);
  console.log(car3.price);
