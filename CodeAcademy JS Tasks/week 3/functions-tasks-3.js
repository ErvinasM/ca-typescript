console.group("1. Sukurkite funkciją, kuri atspausdiną tekstą didžiosiomis raidėmis");
{
    function printCapital(str) 
        {
            const capitalized = str.toUpperCase();
            console.log(capitalized);
        }

    printCapital("abcd");
    printCapital("tEStas");
}
console.groupEnd();
console.log();

console.group("2. Sukurkite funkciją, kuri atspausdina tekstą mažosiomis raidėmis");
{
    function printLower(str) 
        {
            const lower = str.toLowerCase();
            console.log(lower);
        }

    printLower("ABCD");
    printLower("tEStas");
}
console.groupEnd();
console.log();

console.group("3. Sukurkite funkciją, kuri atspausdina pirmojo parametro pirmają raidę");
{
  function printFirstLetter(str) 
    {
        console.log(str[0]);
    }

    printFirstLetter("testas");
    printFirstLetter("vienas");

}
console.groupEnd();
console.log();

console.group("4. Sukurkite funkciją, kuri atspausdina pirmojo parametro paskutinę raidę");
{
    function printLastLetter(str) 
    {
        console.log(str[str.length-1]);
    }

    printLastLetter("testas");
    printLastLetter("du");
}
console.groupEnd();
console.log();

console.group("5. Sukurkite funkciją, kuri atspausdina pirmojo parametro viduriniają raidę");
{

    function printMiddleLetter(str) 
        {
            const middleindex = Math.round((str.length-1) / 2);
            console.log(str[middleindex]);
        }

    printMiddleLetter("Labas");
    printMiddleLetter("---");
    printMiddleLetter("Testas");
}
console.groupEnd();
console.log();

console.group("6. Sukurkite funkciją, kuri grąžina simbolių darinio raidžių skaičių");
{
    function getDoubleLetterCount(str) 
        {
            let count = 0;

            const letters = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L',
            'M', 'N', 'O', 'P', 'Q', 'R',  'S', 'T', 'U', 'V', 'W', 'X',
            'Y', 'Z', 'Ą', 'Č', 'Ę', 'Ė', 'Į', 'Š', 'Ų', 'Ū', 'Ž' ]
      
            for (let i = 0; i < str.length; i++) 
                {
                    if (letters.includes(str[i].toUpperCase())) 
                        {
                            count++;
                        }
                }
            console.log(count);
        }

    getDoubleLetterCount("Kebabas");
    getDoubleLetterCount("la##bas");
    getDoubleLetterCount("du!");
}
console.groupEnd();
console.log();

console.group("7. Sukurkite funkciją, kuri grąžina simbolių darinio raidžių skaičių padaugintą iš dviejų");
{
    function getDoubleLetterCount(str) 
    {
        let count = 0;

        const letters = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L',
        'M', 'N', 'O', 'P', 'Q', 'R',  'S', 'T', 'U', 'V', 'W', 'X',
        'Y', 'Z', 'Ą', 'Č', 'Ę', 'Ė', 'Į', 'Š', 'Ų', 'Ū', 'Ž' ]
  
        for (let i = 0; i < str.length; i++) 
            {
                if (letters.includes(str[i].toUpperCase())) 
                    {
                        count++;
                    }
            }
        console.log(count*2);
    }

    getDoubleLetterCount("Kebabas");
    getDoubleLetterCount("la##bas");
    getDoubleLetterCount("du!");
}
console.groupEnd();
console.log();

console.group("8. Sukurkite funkciją, kuri grąžina pirmo ir antro parametro bendrą simbolių skaičių");
{
    function getArgsLetterSum(a, b) 
        {
            console.log("1: "+a.length+"\n2: "+b.length+"\n");
        }

    getArgsLetterSum('labas', 'abc');
    getArgsLetterSum('kranas', 'jonas');
    getArgsLetterSum('kebabas', 'kefyras');
}
console.groupEnd();
console.log();

console.group("9. Sukurkite funkciją, kuri grąžina <true>, jeigu žodyje yra 'a' raidė, priešingu atveju <false>");
{
    function containsLetterA(str) 
        {
            console.log(str.indexOf('a') !== -1);
        }

    containsLetterA('finakole');
    containsLetterA('zuvis');
    containsLetterA('abcdef');
}
console.groupEnd();
console.log();

console.group("10. Sukurkite funkciją, kuri grąžina <true>, jeigu žodyje yra 2 parametru perduoda raidė, priešingu atveju false");
{
    function containsLetterA(str, letter) 
    {
        console.log(str.indexOf(letter) !== -1);
    }

    containsLetterA('finakole', 'u');
    containsLetterA('zuvis', 'i');
    containsLetterA('abcdef', 'a');
}
console.groupEnd();
console.log();

console.group("11. Sukurkite funkciją, kuri grąžina <true>, jeigu žodyje yra lyginis skaičius simbolių");
{
    function isEvenNumberOfLetters(str) 
        {
            console.log(str.length % 2 === 0);
        }

  isEvenNumberOfLetters('labas');
  isEvenNumberOfLetters('kempės');
  isEvenNumberOfLetters('123123');

}
console.groupEnd();
console.log();

console.group("12. Sukurkite funkciją, kuri grąžina balsių kiekį žodyje");
{
    function getNumberOfVowels(str) 
        {
            const vowels = ['a', 'e', 'i', 'o', 'u'];
            let count = 0;
        
            for (const letter of str) 
                {
                    if (vowels.includes(letter.toLowerCase())) 
                        {
                            count++;
                        }
                }
        
            console.log(count);
        }

    getNumberOfVowels('aaaaa');
    getNumberOfVowels('sasasasa');
    getNumberOfVowels('aeyuioąčė');
}
console.groupEnd();
console.log();

console.group("13. Sukurkite funkciją, kuri grąžina priebalsių kiekį žodyje");
{
    function getNumberOfConsonants(str) 
        {
            const consonants = ['p', 't', 'k', 's', 'š', 'c', 'č', 'f', 'b', 'd', 'g', 'z', 'ž', 'h', 'l', 'v', 'j', 'r', 'm', 'n'];
            let count = 0;
        
            for (const letter of str) 
                {
                    if (consonants.includes(letter.toLowerCase())) 
                        {
                            count++;
                        }
                }
        
            console.log(count);
        }
    
    getNumberOfConsonants('aaaaa');
    getNumberOfConsonants('sasasasa');
    getNumberOfConsonants('aeyuioąčė');

}
console.groupEnd();
console.log();

console.group("14. Sukurkite funkciją, kuri grąžina <true>, jeigu NĖRA skaičių");
{
    function isOnlyLetters(str) 
        {
            const numbers = '1234567890';
        
            for (const char of str) 
                {
                    if (numbers.includes(char)) 
                        {
                            console.log("false");
                            return false;
                        }
                }

            console.log("true");
            return true;
        }

    isOnlyLetters('labas');
    isOnlyLetters('kempės');
    isOnlyLetters('123123');

}
console.groupEnd();
console.log();

console.group("15. Sukurkite funkciją, kuri grąžina 'a' raidžių kiekį žodyje");
{
    function letterACount(str) 
        {
            let count = 0;
        
            for (const letter of str) 
                {
                    if (letter.toLowerCase() === 'a') 
                        {
                            count++;
                        }
                }
        
            console.log(count);
        }

    letterACount('labas');
    letterACount('kempės');
    letterACount('123123');

}
console.groupEnd();
console.log();

console.group("16. Sukurkite funkciją, kuri grąžina bet kokios raidės kiekį žodyje");
{
    function letterCount(str, ltr) 
        {
            let count = 0;
        
            for (const letter of str) 
                {
                    if (letter.toLowerCase() === ltr) 
                        {
                            count++;
                        }
                }
        
            console.log(count);
        }

    letterCount('labas', 'a');
    letterCount('kempės', 'e');
    letterCount('123123', 'o');
}
console.groupEnd();
console.log();

console.group("17. Sukurkite funkciją, kuri grąžina pirmos (nuo kairės pusės) 'a' raidės vietą žodyje");
{
    function lastIndexOfLetterA(str) 
        {
            if(str.lastIndexOf('a') !== -1)
                {
                    console.log(str.lastIndexOf('a'));
                }
            else
                {
                    console.log("Nėra");
                }
        }

    lastIndexOfLetterA('labas');
    lastIndexOfLetterA('kempės');
    lastIndexOfLetterA('123123');

}
console.groupEnd();
console.log();

console.group("18. Sukurkite funkciją, kuri grąžina pirmos (nuo kairės pusės) vartotojo perduotos raidės vietą žodyje");
{
    function lastIndexOfLetter(str, letter) 
        {
            if(str.lastIndexOf(letter) !== -1)
                {
                    console.log(str.lastIndexOf(letter));
                }
            else
                {
                    console.log("Nėra");
                }
        }

    lastIndexOfLetter('labas', 'a');
    lastIndexOfLetter('kempės', 's');
    lastIndexOfLetter('123123', 'o');
}
console.groupEnd();
console.log();

console.group("19. Sukurkite funkciją, kuri grąžina indeksų masyvą su visais 'a' raidės pasikartojimais žodyje");
{
    function indexesOfLetterA(str) 
        {
            const indexes = [];
        
            for (let i = 0; i < str.length; i++) {
            if (str[i].toLowerCase() === 'a') {
                indexes.push(i);
            }
            }
        
            console.log(indexes);
        }

    indexesOfLetterA('labas');
    indexesOfLetterA('kempės');
    indexesOfLetterA('123123');

}
console.groupEnd();
console.log();

console.group("20. Sukurkite funkciją, kuri grąžina indeksų masyvą su visais vartotojo įvestos raidės pasikartojimais žodyje");
{
    function indexesOfLetter(str, letter) 
    {
        const indexes = [];
    
        for (let i = 0; i < str.length; i++) {
        if (str[i].toLowerCase() === letter) {
            indexes.push(i);
        }
        }
    
        console.log(indexes);
    }

    indexesOfLetter('labas', 'a');
    indexesOfLetter('kempės', 'p');
    indexesOfLetter('123123', '2');
}
console.groupEnd();
console.log();

console.group("21. Sukurkite funkciją, kuri ištrintų pirmą surastą 'a' raidę žodyje ir grąžintų pakeistą žodį");
{
    function removeFirstLetterA(str) 
        {
            const index = str.toLowerCase().indexOf('a');
        
            if (index === -1) {
            console.log(str);
            return true;
            }
        
            console.log(str.substring(0, index) + str.substring(index + 1));
        }

    removeFirstLetterA('labas');
    removeFirstLetterA('kempiniukas');
    removeFirstLetterA('123123');

}
console.groupEnd();
console.log();

console.group("22. Sukurkite funkciją, kuri ištrintų paskutinę surastą 'a' raidę žodyje ir grąžintų pakeistą žodį");
{
    function removeLastLetterA(str) 
        {
            const index = str.toLowerCase().lastIndexOf('a');
        
            if (index === -1) {
            console.log(str);
            return true;
            }
        
            console.log(str.substring(0, index) + str.substring(index + 1));
        }

    removeLastLetterA('labas');
    removeLastLetterA('kempiniukas');
    removeLastLetterA('123123');
}
console.groupEnd();
console.log();

console.group("23. Sukurkite funkciją, kuri ištrintų visus 'a' raidės pasikartojimus žodyje");
{

  function removeAllOccurrencesOfLetterA(str) 
    {
        let result = "";
  
        for (const ch of str) 
            {
                if (ch !== "a") 
                    {
                        result += ch;
                    }
            }
  
        console.log(result);
    }

    removeAllOccurrencesOfLetterA('labas');
    removeAllOccurrencesOfLetterA('kempiniukas');
    removeAllOccurrencesOfLetterA('bananas');
}
console.groupEnd();
console.log();

console.group("24. Sukurkite funkciją, kuri ištrintų visus, vartotojo įvestos raidės pasikartojimus žodyje");
{

    function removeAllOccurrencesOfLetter(str, letter) 
      {
          let result = "";
    
          for (const ch of str) 
              {
                  if (ch !== letter) 
                      {
                          result += ch;
                      }
              }
    
          console.log(result);
      }
  
      removeAllOccurrencesOfLetter('labas', 'l');
      removeAllOccurrencesOfLetter('kempiniukas', 's');
      removeAllOccurrencesOfLetter('bananas', 'n');
  }
console.groupEnd();
console.log();

// 25. Sukurkite funkciją, kuri pirmu parametru priimtų žodį, o antruoju - masyvą su raidėmis.
//  Ši funkcija turi žodyje ištrinti visas raides, kurios perduotos antruoju parametru.
//  Atlikus veiksmus, grąžinti pakeistą žodį
console.group("25. Sukurkite funkciją, kuri pirmu parametru priimtų žodį, o antruoju - masyvą su raidėmis.");
{
    function filterLetters(str, lettersToRemove) 
        {
            let result = "";
        
            for (const ch of str) 
                {

                    if (!lettersToRemove.includes(ch)) 
                        {
                            result += ch;
                        }
                }
        
            console.log(result);
        }

    filterLetters('Brangakmienio paveikslas', ['a', 'i']);

}
console.groupEnd();
console.log();

console.group("26. Sukurkite funkciją, kuri pirmu parametrų priimą sakinį, kiekvieną tarpą pakeičia brūkšneliu ir grąžina pakeistą sakinį");
{
    function replaceSpaceWithDash(str) 
        {
            let newStr = "";

            for (let i = 0; i < str.length; i++) 
                {
                    if (str[i] === " ") 
                        {
                            newStr += "-";
                        } 
                    else 
                        {
                            newStr += str[i];
                        }
                }

            console.log(newStr);
        }

    replaceSpaceWithDash('viens du trys');
    replaceSpaceWithDash('as tave myliu');
    replaceSpaceWithDash('Bairis seniuk');

}
console.groupEnd();
console.log();

console.group("27. Sukurkite funkciją, kuri pirmu parametru priima sakinį, ir kiekvieno žodžio pirmają raidę padaro didžiąja");
{
    function capitalize(str) 
        {
            const words = str.split(' ');
            const capitalizedWords = [];
        
            for (let i = 0; i < words.length; i++) 
                {
                    const word = words[i];
                    const capitalizedWord = word[0].toUpperCase() + word.slice(1);
                    capitalizedWords.push(capitalizedWord);
                }
      
            console.log(capitalizedWords.join(' ')); 
        }

    capitalize('viens du trys');
    capitalize('as tave myliu');
    capitalize('Bairis seniuk');
}
console.groupEnd();
console.log();

console.group("28. Sukurkite funkciją, kuri atspausdina žodį atvirkščiai 'abc' -> 'cba'");
{
    function strReverse(str) 
        {
            console.log(str.split('').reverse().join(''));
        }

    strReverse('viens du trys');
    strReverse('as tave myliu');
    strReverse('Bairis seniuk');
}
console.groupEnd();
console.log();


// 29. Sukurkite funkciją, kuri grąžina <true>, jeigu žodis yra palindromas (taip pat skaitosi iš abiejų pusių)
//  mama -> false
//  mamam -> true
//  123321 -> true
//  123456 -> false
console.group("29. Sukurkite funkciją, kuri grąžina <true>, jeigu žodis yra palindromas (taip pat skaitosi iš abiejų pusių)");
{
    function isPalyndrome(str) 
        {
            const reversed = str.split('').reverse().join('');
            console.log(reversed === str);
        }
        
    isPalyndrome('mama');
    isPalyndrome('mamam');
    isPalyndrome('123321');
    isPalyndrome('123456');
}
console.groupEnd();
console.log();

// 30. Sukurkite funkciją, kuri taiso pastraipos klaidas:
//  Pirma sakinio raidė didžioji
//  Po skiriamojo ženklo tarpas, o prieš skiriamajį ženklą nėra tarpo (skiriamieji ženklai: .,!?)
//  Bet kokį kiekį tapų pakeičia vienu tarpu
//    mėgstu pieną , bet medų nelabai.labanakt. -> Mėgstu pieną, bet medų nelabai. Labanakt.
console.group("30. Sukurkite funkciją, kuri taiso pastraipos klaidas");
{

  function capitalizeFirstLetter(str) {
    // code ...
  }

  function splitIntoSentences(paragraph) {
    /*
      2.1 Atskirti pagal sakinio baigimo ženklus ir juos įsiminti
      2.2 Pašalinti tuščius tarpus iš kairės ir dešinės
      2.3 grąžinti objektą su dviem masyvais:
      {
        sentences: [sentence1, sentence2, ... , sentenceN],
        separator: [ '.', '?', ... , '!'],
      }
    */
  }

  function reduceEmptySpaces(str) {
    // Jūsų sugalvota logika, kaip šalinti tarpus prieš kablelį ir kelis tarpus iš eilės
  }

  // 1.
  function fixParagraph(paragraph) {
    /*
      2. Pirmiausiai suskirstome į sakinius, naudojant splitIntoSentences: 
            string  ->  {
                          sentences: [sentence1, sentence2, ... , sentenceN],
                          separator: [ '.', '?', ... , '!'],
                        }
      3. Redaguoti kiekvieną sakinį, naudojant funkciją reduceEmptySpaces
      4. Redaguoti kiekvieną sakinį, naudojant funkciją capitalizeFirstLetter
      5. Sujungti sakinius su atitinkamais sakinių skiriamaisiais/baigiamaisiais ženklais
      6. Grąžinti rezultatą.
    */
  }

  // const paragraph = '    labas , as jonas . Tave      vadina Kęstu? Taip ir žinojau  !    ';
  // const fixedParagraph = fixParagraph(paragraph);
  // console.log(paragraph);
  // console.log(fixedParagraph);
  // console.log('---');
}
console.groupEnd();
console.log();

// 31. Sukurkite funkciją, kuri pirmu parametru priima sakinį ir sudeda atskirus sakinio žodžius į masyvą:
//  labas, aš esu grybas -> ['labas', 'aš', 'esu', 'grybas']
console.group("31. Sukurkite funkciją, kuri pirmu parametru priima sakinį ir sudeda atskirus sakinio žodžius į masyvą");
{
  function splitSentence(sentence) {
    // code ...
  }
  // console.log('---');
  // console.log({
  //   'Labas aš Jonas': splitSentence('Labas aš Jonas'),
  //   'Kėgliai yra gerai': splitSentence('Kėgliai yra gerai'),
  // })
  // console.log('---');
}
console.groupEnd();
console.log();


// 32. Sukurkite funkciją, kuri pirmu parametru priimą <string>'ą, o antruoju skiriklį
//  Ši funkcija turi grąžinti masyvą sudarytą iš atskirtų dalių:
//  explode('Man patinka sniegas', ' ');  -> ['man', 'patinka', 'sniegas'];  
//  explode('home/about/13', '/');        -> ['home', 'about', '13'];  
console.group("32. Sukurkite funkciją, kuri pirmu parametru priimą <string>'ą, o antruoju skiriklį");
{
  function explode(str, separator) {
    // code ...
  }
  // console.log('---');
  // console.log({
  //   "'Man patinka sniegas', ' '": explode('Man patinka sniegas', ' '),
  //   "'home/about/13', '/'": explode('home/about/13', '/'),
  // })
  // console.log('---');
}
console.groupEnd();
console.log();