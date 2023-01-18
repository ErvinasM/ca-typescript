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

console.group("30. Sukurkite funkciją, kuri taiso pastraipos klaidas");
  {
    function removeSpaces(p) 
      {
        p = p.replace(/ \./g, '. ');
        p = p.replace(/ ,/g, ', ');
        p = p.replace(/ \?/g, '? ');
        p = p.replace(/ !/g, '! ');
        p = p.replace(/\s+/g, ' ');
      
        return p;
      }

      function capitalizeSentences(p) 
        {
          let sentences = p.split(/[.!?]/g);
          let formatedSentences = [];
          let i = 0;
          let result = '';

          sentences.map(sentence => {formatedSentences.push(sentence.trim().charAt(0).toUpperCase() + sentence.trim().slice(1).toLowerCase());});
    
          while (i < sentences.length) 
            {
              result += formatedSentences[i];

              if (i < sentences.length - 1) 
                {
                  result += p[p.indexOf(sentences[i]) + sentences[i].length]+" ";
                }
              i++;
            }
      
        return result;
      }

      function fixParagraph(p)
        {
          let r1 = removeSpaces(p);
          let r2 = capitalizeSentences(r1);

          console.log(r2);
        }

        fixParagraph("čia yra     pirmas testas . ANTRAS testas vienas , keturi. Trecias");
        fixParagraph("this is the first sentence . this is the second sentence ? this is the third sentence!");
  }
console.groupEnd();
console.log();

// 31. Sukurkite funkciją, kuri pirmu parametru priima sakinį ir sudeda atskirus sakinio žodžius į masyvą:
//  labas, aš esu grybas -> ['labas', 'aš', 'esu', 'grybas']
console.group("31. Sukurkite funkciją, kuri pirmu parametru priima sakinį ir sudeda atskirus sakinio žodžius į masyvą");
{
  function splitSentence(sentence) 
  {
    let splitSentence1 = sentence.split(/[,.?! ]/g);
    let result1 = splitSentence1.filter(a => a != '');
    console.log(result1);
  }

  splitSentence('Labas, aš Jonas.');
  splitSentence('Kėgliai yra gerai');
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
    let resultOut = str.split(separator);
    console.log(resultOut);
  }

  explode('Man patinka sniegas', ' ');
  explode('home/about/13', '/');

}
console.groupEnd();
console.log();