const carsData = [{
    brand: 'Tesla',
    model: 'Model S',
    year: 2012,
    color: 'red',
    fuelTypes: ['electric'],
    price: 45000,
  }, {
    brand: 'Audi',
    model: 'A6',
    year: 2014,
    color: 'black',
    fuelTypes: ['dysel', 'electric'],
    price: 16000,
  }, {
    brand: 'audi',
    model: 'A5',
    year: 2014,
    color: 'black',
    fuelTypes: ['petrol'],
    price: 16000,
  }, {
    brand: 'BMW',
    model: 'X5',
    year: 2017,
    color: 'black',
    fuelTypes: ['electric', 'petrol'],
    price: 16000,
  }, {
    brand: 'Subaru',
    model: 'Impreza',
    year: 2019,
    color: 'black',
    fuelTypes: ['petrol'],
    price: 16000,
  }, {
    brand: 'Audi',
    model: 'A7',
    year: 2015,
    color: 'black',
    fuelTypes: ['petrol'],
    price: 12000,
  }, {
    brand: 'BMW',
    model: 'X5',
    year: 2017,
    color: 'black',
    fuelTypes: ['dysel'],
    price: 16000,
  }, {
    brand: 'Toyota',
    model: 'Prius',
    year: 2008,
    color: 'grey',
    fuelTypes: ['gas', 'petrol', 'electric'],
    price: 5000,
  }];
  
  let arrayToClass;

  console.log('1. Sukurkite klasę Car, kuri turėtų savybes ir priskirtų jas naudojant konstruktorių.');
  
    class Car {
        constructor({brand, model, year, color, fuelTypes, price}) {
          this.brand = brand;
          this.model = model;
          this.year = year;
          this.color = color;
          this.fuelTypes = fuelTypes;
          this.price = price;
        }
        getFuelType()
        {
            return this.fuelTypes.join(", ");
        }
      }   
  
  
  console.group('2. Sukurkite masyvą sudarytą iš 8 Car klasės mašinų');
  {
    arrayToClass = carsData.map(info => new Car(info));
    console.table(arrayToClass);
  }
  console.groupEnd();
  
  console.group('3. Klasėje Car sukurkite metodą getFuelType, kuris grąžintų mašinos kurų tipus (fuelTypes)');
  {
    arrayToClass.forEach(carinfo => {
        console.log(carinfo.getFuelType());
    });
  }
  console.groupEnd();
  
  console.group('4. Atspausdinkite kiekvieno automobilio pavadinimą ir 3 punktu sukurto metodo rezultatą, pvz:');
  {
    arrayToClass.forEach(carinfo => {
        console.log(carinfo.brand+" "+carinfo.model+" "+carinfo.year+": ("+carinfo.getFuelType()+")");
    });
  }
  console.groupEnd();
  
  console.group('5. Atrinkite tik elektrinius automobilius');
  {
    const electricCars = arrayToClass.filter(carinfo => carinfo.fuelTypes.includes('electric'));
    console.table(electricCars);
  }
  console.groupEnd();
  
  console.group('6. Atrinkite tik benzininius automobilius, naujesnius nei 2016 metai');
  {
    const petrolNewCars = arrayToClass.filter(carinfo => carinfo.fuelTypes.includes('petrol') && carinfo.year > 2016);
    console.table(petrolNewCars);
  }
  console.groupEnd();
  
  console.group('7. Atrinkite audi tipo automobilius nuo 2012 iki 2016, kurie nėra dyzeliniai');
  {
    const audiNoDyselFrom2012to2016 = arrayToClass.filter(carinfo => carinfo.brand == 'Audi' && !carinfo.fuelTypes.includes('dysel') && carinfo.year >= 2012 && carinfo.year <= 2016);
    console.table(audiNoDyselFrom2012to2016);
  }
  console.groupEnd();
  
  console.group('8. Suskaičiuokite 5 punkte gautų automobilių kainos vidurkį');
  {
    const electricCars = arrayToClass.filter(carinfo => carinfo.fuelTypes.includes('electric'));

    let electricCarsPriceSum = electricCars.reduce((ac, v) => ac + v.price, 0);
    console.log(electricCarsPriceSum/electricCars.length);
  }
  console.groupEnd();
  
  console.group('9. Suskaičiuokite 6 punkte gautų automobilių bendrą vertę');
  {
    const petrolNewCars = arrayToClass.filter(carinfo => carinfo.fuelTypes.includes('petrol') && carinfo.year >= 2016);
    let petrolNewCarsPriceSum = petrolNewCars.reduce((ac, v) => ac + v.price, 0);
    console.log(petrolNewCarsPriceSum);
  }
  console.groupEnd();
  
  console.group('10. Panaudokite pradinį Car objektų masyvą performuoti duomenis į tokių objektų masyvą:');
  {
    const newCars = arrayToClass.map((carinfo) => ({
        brand: carinfo.brand,
        model: carinfo.model,
        price: 1.06 * carinfo.price,
        fuelType: carinfo.getFuelType()
      }));
      console.table(newCars);
  }
  console.groupEnd();