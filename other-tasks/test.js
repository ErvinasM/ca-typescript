console.group('1. Sukurkite funkciją, kuri priima spalvą ir grąžina funkciją, kuri spausdins tekstą išorinei funkcijai perduota spalva');
{
  const createColorfulPrintingFunction = (color) => {
    return (text) => {
      console.log(`%c${text}`, `color: ${color}`);
    }
  }

  const printRed = createColorfulPrintingFunction('red');
  const printBlue = createColorfulPrintingFunction('blue');

  printRed('tekstas'); 
  printBlue('tekstas'); 

}
console.groupEnd();

console.group('2. Sukurkite funkciją, kuri priima simbolių masyvą ir grąžina funkciją, kuri tikrins ar tekste yra išorinės funkcijos kvietimo metu perduotų simbolių');
{
  function characterChecker(characters) {
    return function(text) {
      return [...text].some(c => characters.includes(c));
    }
  }

  const checkForSymbols = characterChecker(['a', '3', 'G']);
  console.log(checkForSymbols('Ta3'));
  console.log(checkForSymbols('Ner44'));
}
console.groupEnd();

console.group('3. Sukurkite funkciją kuri grąžina funkciją atspausdinančią tekstą apgaubus šauktukais');
{
  function createPrintWithBangs() {
    return function(text) {
      console.log(`!${text}!`);
    }
  }

  const printWithBangs = createPrintWithBangs();
  printWithBangs('tekstas');
  printWithBangs('labas'); 
}
console.groupEnd();


console.group('4. Sukurkite funkciją kuri grąžina funkciją atspausdinančią tekstą apgaubus išorinės funkcijos parametru');
  {
    function createPrintBetween(wrapString) {
      return function(text) {
        console.log(`${wrapString}${text}${wrapString}`);
      }
    }

    const printWithBangs = createPrintBetween('!');
    const printWithDashes = createPrintBetween('---');

    printWithBangs('tekstas');
    printWithDashes('tekstas'); 
  }
console.groupEnd();


console.group('5. Sukurkite funkciją, kuri priima funkciją priimančią 2 parametrus ir grąžiną perduotą funkciją iškviečiamą su dviem invokacijom');
  {
    function convertBinaryFunctionToUnaryInvocationQueue(binaryFunction) {
      return function(x, y) {
          return binaryFunction(x, y);
      }
    }

    const add = (a, b) => a + b;
    const multiply = (a, b) => a * b;

    const addUnaryQueue = convertBinaryFunctionToUnaryInvocationQueue(add);
    const multiplyUnaryQueue = convertBinaryFunctionToUnaryInvocationQueue(multiply);
    console.log(addUnaryQueue(7,6)); 
    console.log(multiplyUnaryQueue(7,6)); 
  }
console.groupEnd();

console.group('6. Sukurkite funkciją<A> kuri priima funkciją<B> ir parametrą<D>, ir grąžina funkciją<C>. \nFunkcija<B> tai vieną parametrą priimanti funkciją, kuri grąžina parametro transformaciją. \n Funkcija<C> turi grąžinti Funkcijos<B> rezultatą apgaubiant jį parametru<D>');
  {
    const createWrapper = (functionB, parameterD) => (parameterX) => `${parameterD}${functionB(parameterX)}${parameterD}`;
    const double = (a) => typeof a === 'number' ? a * 2 : a + a;

    const doubleWithBangs = createWrapper(double, '!');
    console.log(doubleWithBangs('labas'));
    console.log(doubleWithBangs(8));
  }
console.groupEnd();


console.group('6. antras variantas');
  {
    function createWrapper(functionB, parameterD) {
      return function(parameterX) {
        return `${parameterD}${functionB(parameterX)}${parameterD}`;
      }
    }
    
    const double = (a) => typeof a === 'number' ? a * 2 : a + a;
    
    const doubleWithBangs = createWrapper(double, '!');
    console.log(doubleWithBangs('labas')); 
    console.log(doubleWithBangs(8)); 
  }
console.groupEnd();