const friends = [
  {
    name: "Anna",
    books: ["Bible", "Harry Potter"],
    age: 21,
  },
  {
    name: "Bob",
    books: ["War and peace", "Romeo and Juliet"],
    age: 26,
  },
  {
    name: "Alice",
    books: ["The Lord of the Rings", "The Shining"],
    age: 18,
  },
];


const allbooks = friends.reduce(
  (accumulator, currentValue) => [accumulator, currentValue.age],
);
console.table(allbooks);


const people = [
    {
      name: 'Jonas',
      surname: 'Jonaitis',
      sex: 'male',
      age: 26,
      income: 1200,
      married: false,
      hasCar: false
    },
    {
      name: 'Severija',
      surname: 'Piktutytė',
      sex: 'female',
      age: 26,
      income: 1300,
      married: false,
      hasCar: true
    },
    {
      name: 'Valdas',
      surname: 'Vilktorinas',
      sex: 'male',
      age: 16,
      income: 0,
      married: false,
      hasCar: false
    },
    {
      name: 'Virginijus',
      surname: 'Uostauskas',
      sex: 'male',
      age: 32,
      income: 2400,
      married: true,
      hasCar: true
    },
    {
      name: 'Samanta',
      surname: 'Uostauskienė',
      sex: 'female',
      age: 28,
      income: 1200,
      married: true,
      hasCar: true
    },
    {
      name: 'Janina',
      surname: 'Stalautinskienė',
      sex: 'female',
      age: 72,
      income: 364,
      married: false,
      hasCar: false
    }
  ];
  console.groupCollapsed('1. Atspausdinkite visus žmones eilutėmis');
  {
    function printAllLine(array)
        {
            array.forEach(element => {
                console.log(element.name);
            });
        }

    printAllLine(people);
  }
  console.groupEnd();
  
  console.groupCollapsed('2. Atpausdinkite visus žmonių varus ir pavardes, atskirtus brūkšneliu');
  {
    function printAllNames(array) {
      array.forEach(element => {
        console.log(element.name+"-"+element.surname);
      });
    }
    
    printAllNames(people);
  }
  console.groupEnd();
  
  console.groupCollapsed('3. Atspausdinkite visų žmonių vardus ir pavardes bei santuokos statusą');
  {
    function printNSM(array) {
      array.forEach(element => {
        console.log(`${element.name} ${element.surname} (${element.married ? 'married' : 'single'})`);
      });
    }
    
    printNSM(people);
  }
  console.groupEnd();
  
  console.groupCollapsed('4. Sukurtite masyvą su lytimis ir uždirbamu pinigų kiekiu, pagal pradinį žmonių masyvą');
  {
    const incomeByGender = people.reduce((acc, person) => {
      if (!acc[person.sex]) {
        acc[person.sex] = 0;
      }
      acc[person.sex] += person.income;
      return acc;
    }, {});
    
    console.log(incomeByGender);
  }
  console.groupEnd();
  
  console.groupCollapsed('5. Sukurtite masyvą su vardais, pavardėmis ir lytimi, pagal pradinį žmonių masyvą');
  {
    const namesByGender = people.map(person => {
      return {
        name: person.name,
        surname: person.surname,
        sex: person.sex
      };
    });
    
    console.log(namesByGender);
  }
  console.groupEnd();
  
  console.groupCollapsed('6. Atspausdinkite visus vyrus');
  {
    function printAllMales(array) {
      array.forEach(element => {
        if (element.sex === 'male') {
          console.log(element.name+" "+element.surname);
        }
      });
    }
    
    printAllMales(people);
  }
  console.groupEnd();
  
  console.groupCollapsed('7. Atspausdinkite visas moteris');
  {
    function printAllFemales(array) {
      array.forEach(element => {
        if (element.sex === 'female') {
          console.log(element.name+" "+element.surname);
        }
      });
    }
    
    printAllFemale(people);
  }
  console.groupEnd();
  
  console.groupCollapsed('8. Atspausdinkite žmonių vardus ir pavardes, kurie turi mašinas');
  {
    function hasCar(array)
      {
        array.filter(person => person.hasCar).map(person => `${person.name} ${person.surname}`).forEach(name => console.log(name));
      }
    
    hasCar(people);
  }
  console.groupEnd();
  
  console.groupCollapsed('9. Atspausdinkite žmones kurie yra susituokę');
  {

    function areMarried(array)
      {
        array.filter(person => person.married).map(person => `${person.name} ${person.surname}`).forEach(name => console.log(name));
      }
    
      areMarried(people);
  }
  console.groupEnd();
  
  console.groupCollapsed('10. Sukurkite objektą, kuriame būtų apskaičiuotas vairuojančių žmonių kiekis pagal lytį');
  {
    const drivingByGender = people.reduce((acc, person) => {
      if (person.hasCar) {
        if (person.sex in acc) {
          acc[person.sex]++;
        } else {
          acc[person.sex] = 1;
        }
      }
      return acc;
    }, {});
    
    console.log(drivingByGender);
  }
  console.groupEnd();
  
  console.groupCollapsed('11. Performuokite žmonių masyvą, jog kiekvieno žmogaus savybė "income", taptų "salary"');
  {
    const updatedPeople = people.map(person => {
      const updatedPerson = {...person};
      updatedPerson.salary = updatedPerson.income;
      delete updatedPerson.income;
      return updatedPerson;
    });
    
    console.log(updatedPeople);
  }
  console.groupEnd();
  
  console.groupCollapsed('12. Suformuokite žmonių masyvą iš objektų, kuriuose nebūtų lyties, vardo ir pavardės');
  {
    const noInfoPeople = people.map(person => {
      const noInfoPeople = {...person};
      delete noInfoPeople.sex;
      delete noInfoPeople.name;
      delete noInfoPeople.surname;
      return noInfoPeople;
    });
    
    console.log(noInfoPeople);
  }
  console.groupEnd();
  
  console.groupCollapsed('13. Suformuokite žmonių masyvą  iš objektų, kuriuose "name" ir "surname" savybės, būtų pakeistos "fullname" savybe');
  {
    const peopleWithFullName = people.map(person => {
      const updatedPerson = {...person};
      updatedPerson.fullname = `${person.name} ${person.surname}`;
      delete updatedPerson.name;
      delete updatedPerson.surname;
      return updatedPerson;
    });
    
    console.log(peopleWithFullName);
  }
  console.groupEnd();