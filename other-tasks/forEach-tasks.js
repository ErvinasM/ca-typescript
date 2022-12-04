const flats = [
    {
      address: 'Vilnakiemio g. 7',
      rooms: [
        { title: 'virtuvė', area: 12 },
        { title: 'svetainė', area: 20 },
        { title: 'tualetas', area: 8 },
        { title: 'miegamasis', area: 16 },
      ],
      city: 'Vilnius',
      price: 120000
    },
  
    {
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
    },
  
    {
      address: 'Saulės g. 7',
      rooms: [
        { title: 'virtuvė', area: 12 },
        { title: 'svetainė', area: 20 },
        { title: 'tualetas', area: 8 },
      ],
      city: 'Klaipėda',
      price: 80000
    },
  ];
  
  // Kiekvienai užduočiai padeklaruokite funkciją, kurią panaudosite kviesdami metodą Array.prototype.forEach
  
  console.group('1. Atspausdinkite kiekvieno buto adresą su miestu');
  // <address>, <city>.
  {
    function addressCity(array)
        {
            array.forEach((item) => {
                console.log("Butas: "+item.address+" Miestas: "+item.city);
            });
        }

    addressCity(flats);
  }
  console.groupEnd();
  
  console.group('2. Atspausdinkite kiekvieno buto kambarių skaičių');
  {
    function flatNumbers(array)
        {
            let arFlatSize = 0;
            array.forEach((item) => {
                arFlatSize = item.rooms.length;
                console.log("Butas: "+item.address+" Kambarių skaičius: "+arFlatSize);
            });
        }

    flatNumbers(flats);
  }
  console.groupEnd();
  
  console.group('3. Atspausdinkite kiekvieno buto bendrą plotą');
  // Reikės susumuoti naudojant kaupimo algoritmą
  {
    function flatSize(array)
        {
            array.forEach((item) => {
                const oneRoom = item.rooms.reduce( ( sum, { area } ) => sum + area , 0);
                console.log(oneRoom);
            });
        }

        flatSize(flats);
  }
  console.groupEnd();