console.groupCollapsed('31. Atspausdinkite <numbers> masyvo kas antrą elementą iš dešinės, pradedant prieš paskutiniu');
{ const numbers = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144];
  let i = numbers.lenght - 2;
  while ( i>= 0) {
    console.log(numbers[i]); 
  i = i-2;
  }
}
console.groupEnd();