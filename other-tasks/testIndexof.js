const numbersData = [2, 4, -7, 2, 5, 6, 1, 2, 8, 4, -9, 2, 4, 5, 1];

// !!! Visas funkcijas atlikite kopijuodami orginalų masyvą, tam kad nepažeisti duomenų !!!
// !!! įterpadmi duomenis, atkreipkite dėmesį, jog keičiasi masyvo elementų ideksacija !!!

console.group('1. suraskite dvejetą ir po jo įterpkite 777');
{
  const numbers = [...numbersData];
  numindex = numbers.indexOf(2);
  numbers.splice(numindex+1, 0, 777);
  console.log(numbers);
}
console.groupEnd();

console.group('2. suraskite antrą dvejetą ir prieš jį įterpkite 777');
{
    const numbers = [...numbersData];
    numindex = numbers.indexOf(2, 1);
    numbers.splice(numindex, 0, 777);
    console.log(numbers);
}
console.groupEnd();

console.group('3. suraskite paskutinį dvejetą ir po jo įterpkite 777');
{
    const numbers = [...numbersData];
    numindex = numbers.lastIndexOf(2, -1);
    numbers.splice(numindex+1, 0, 777);
    console.log(numbers);
}
console.groupEnd();

console.group('4. suraskite prieš paskutinį dvejetą ir prieš jį įterpkite 777');
{
    const numbers = [...numbersData];
    const counts = numbers.reduce((a, v) => ({
        ...a,
        2: (2 || 0) + 1
     }), {});
     
     numindex = numbers.indexOf(2, counts[2]);
     numbers.splice(numindex, 0, 777);
     console.log(numbers);
}
console.groupEnd();

console.group('5. Sukurkite funkciją, kuri po kiekvieno dvejeto įdėtų 777');
{
  // function
  // while
  // Array.prototype.lastIndexOf
  // Array.prototype.splice
  const numbers = [...numbersData];

  function everyNumber(array)
    {
        const nlength = array.length;
        let i = nlength;
        while (i > 0)
            {
                numindex = array.lastIndexOf(2, i);
                array.splice(numindex+1, 0, 777);
                i--;
            }

        return array;
    }

    console.log(everyNumber(numbers));
}
console.groupEnd();

console.group('6. Sukurkite funkciją, kuri prieš kiekvieną dvejetą įdėtų 777');
{
  // function
  // while
  // Array.prototype.indexOf
  // Array.prototype.splice
}
console.groupEnd();

console.group('7. Sukurkite funkciją, kuri po kiekvieno nurodyto elemento įdėtų 777');
{
  // function
  // while
  // Array.prototype.lastIndexOf
  // Array.prototype.splice
}
console.groupEnd();

console.group('8. Sukurkite funkciją, kuri prieš kiekvieną nurodytą elementą įdėtų 777');
{
  // function
  // while
  // Array.prototype.indexOf
  // Array.prototype.splice
}
console.groupEnd();

console.group('9. Sukurkite funkciją, kuri po kiekvieno nurodyto elemento įdėtų naują nurodytą elementą');
{
  // function
  // while
  // Array.prototype.lastIndexOf
  // Array.prototype.splice
}
console.groupEnd();

console.group('10. Sukurkite funkciją, kuri prieš kiekvieną nurodytą elementą įdėtų naują nurodytą elementą');
{
  // function
  // while
  // Array.prototype.indexOf
  // Array.prototype.splice
}
console.groupEnd();






const flats = [{
  address: 'Vilnakiemio g. 7',
  rooms: [
    { title: 'virtuvė', area: 12 },
    { title: 'svetainė', area: 20 },
    { title: 'tualetas', area: 8 },
    { title: 'miegamasis', area: 16 },
  ],
  city: 'Vilnius',
  price: 120000
}, {
  address: 'Ruginių pr. 17',
  rooms: [
    { title: 'virtuvė', area: 18 },
    { title: 'svetainė', area: 18 },
    { title: 'tualetas', area: 8 },
    { title: 'miegamasis', area: 12 },
    { title: 'miegamasis2', area: 16 },
  ],
  city: 'Kaunas',
  price: 120000
}, {
  address: 'Valatkų pr. 17',
  rooms: [
    { title: 'virtuvė', area: 18 },
    { title: 'miegamasis', area: 12 },
    { title: 'miegamasis2', area: 16 },
    { title: 'miegamasis2', area: 19 },
  ],
  city: 'Kaunas',
  price: 120000
}, {
  address: 'Vareikų pr. 17',
  rooms: [
    { title: 'virtuvė', area: 18 },
    { title: 'svetainė', area: 18 },
    { title: 'miegamasis2', area: 16 },
  ],
  city: 'Kaunas',
  price: 90000
}, {
  address: 'Majonezo pr. 17',
  rooms: [
    { title: 'tualetas', area: 8 },
    { title: 'miegamasis', area: 12 },
    { title: 'miegamasis2', area: 16 },
  ],
  city: 'Kaunas',
  price: 50000
}, {
  address: 'Saulės g. 7',
  rooms: [
    { title: 'virtuvė', area: 12 },
    { title: 'svetainė', area: 20 },
    { title: 'tualetas', area: 8 },
  ],
  city: 'Klaipėda',
  price: 80000
}];

console.group('1. Patikrinkite, ar yra butų, su daugiau nei 5 kambariais');
{

  const test1 = flats.some(flat => flat.rooms.length > 3);
  console.log(test1);
}