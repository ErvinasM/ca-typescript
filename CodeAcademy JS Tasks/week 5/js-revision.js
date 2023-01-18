const people = [
    {
        name: 'Patranka',
        surname: 'Klumpaitė',
        age: 47,
        height: 192,
        weight: 118,
        sex: 'female'
    },
    {
        name: 'Sumuštinis',
        surname: 'Suvoštinis',
        age: 19,
        height: 80,
        weight: 40,
        sex: 'male'
    },
    {
        name: 'Veronika',
        surname: 'Bulviakasė',
        age: 32,
        height: 174,
        weight: 64,
        sex: 'female'
    },
    {
        name: 'Kristina',
        surname: 'Beranke',
        age: 24,
        height: 172,
        weight: 54,
        sex: 'female'
    },
    {
        name: 'Bubinas',
        surname: 'Baublys',
        age: 60,
        height: 162,
        weight: 87,
        sex: 'male'
    },
    {
        name: 'Petras',
        surname: 'Ryklianosis',
        age: 33,
        height: 183,
        weight: 73,
        sex: 'male'
    },
    {
        name: 'Kęstas',
        surname: 'Juozėnas',
        age: 55,
        height: 178,
        weight: 66,
        sex: 'male'
    },
    {
        name: 'Jonas',
        surname: 'Bumblauskas',
        age: 22,
        height: 155,
        weight: 49,
        sex: 'male'
    },
  ];

console.groupCollapsed('Žmonių indeksai');
    {
        people.forEach(person => {
          console.log(`${person.name} ${person.surname}`);
          console.log((person.weight / (person.height * person.height) * 10000).toFixed(2));
        });
    }
console.groupEnd();
console.log();

console.groupCollapsed('Atrinkti išskirtiniai žmonės');
    {
        let filteredPeople = people.filter(person => person.name.length > 6 && person.weight > 80 && person.height > 185);
        filteredPeople.forEach(person => {
          console.log(`${person.name} ${person.surname}`);
        });
    }
console.groupEnd();
console.log();

