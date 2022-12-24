console.groupCollapsed('1. Parašykite rekursinę funkciją, kuri suskaičiuotų "string"o ilgį.');
    {
        function countLength(str) 
            {
                if (str.length === 0) 
                    {
                        return 0;
                    } 
                else 
                    {
                        return 1 + countLength(str.substring(1));
                    }   
            }

          console.log(countLength("testas")); // turėtų atspausdinti 6
    }
console.groupEnd();
console.groupCollapsed('2. Parašykite rekursinę funkciją, kuri grąžina string žodį atvirkščia tvarka.');
{
    function reverseString(str) 
        {
            if (str.length === 0) 
                {
                    return "";
                } 
            else 
                {
                    return reverseString(str.substring(1)) + str.charAt(0);
                }
        }

    console.log(reverseString("programavimas"));
}
console.groupEnd();

console.groupCollapsed('3. Atspausdinti failu struktūrą naudojant rekursiją')
{
  const myFolder = {
    type: 'folder',
    name: 'Javascript kursai',
    files: [
      {
        type: 'file',
        name: 'komandos.txt'
      },
      {
        type: 'folder',
        name: '1 savaitė',
        files: [
          {
            type: 'folder',
            name: '1 pamoka',
            files: [
              {
                type: 'file',
                name: 'index.html'
              },
              {
                type: 'file',
                name: 'main.css'
              },
            ]
          },
          {
            type: 'folder',
            name: '2 pamoka',
            files: [
              {
                type: 'file',
                name: 'index.html'
              }
            ]
          }
        ]
      }
    ]
  }
 
 
}
console.groupEnd();

console.groupCollapsed('4. Parašyti funkciją, kuri surastų objektuose arba masyvuose visas skaitines reikšmes, ir jas sudėtų');
{
  const data1 = [
    1,
    5,
    [
      4,
      5,
      9,
      {
        q: 7,
        z: [4, 8, 9]
      }
    ],
    8,
    {
      a: 7,
      b: 9,
      h: [
        4,
        5,
        {
          j: 7,
          p: 8,
          z: [7, 7, 7]
        }
      ]
    }
  ];
  function sumNumbers(data) {
    // ... code
  }
  // console.log(sumNumbers(data1)) // 121
}
