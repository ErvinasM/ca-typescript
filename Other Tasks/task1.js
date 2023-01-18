console.group('1. Sukurti 5 kintamuosius, kurie apibūdintu jus. Kintamuosius atspausdinkite įvardindami kintamųjų pavadinimus.');

const vardas = "Ervinas";
const miestas = "Utena";
const amzius = "19";
const savybe = "introvertas";
const salis = "Ispanija";

const busena = "miegantis";

const planas1 = "Kadangi esu mieguistas tai išgersiu kavos";
const planas2 = "Kadangi esu atsikėlęs tai nieko nedarysiu";
const planas3 = "Kadangi jaučiuosi pavargęs tai eisiu miegoti";

console.table({vardas, miestas, amzius, savybe, salis});

console.groupEnd();


console.group('2. Parašykite salyginį sakinį, kuris pagal jūsų 5 kintamuosius (kuriuos pakeitinėsite) atspausdintų skirtingą tekstą');

let variable = "salis";
let sentence = "";

if (variable == "vardas")
    {
        sentence = "Mano vardas yra "+vardas;
    }
else if (variable == "miestas")
    {
        sentence = "Aš esu iš miesto pavadinumu "+miestas;
    }
else if (variable == "amzius")
    {
        sentence = "Man yra "+amzius+" metų";
    }
else if (variable == "savybe")
    {
        sentence = "Aš esu "+savybe;
    }
else if (variable == "salis")
    {
        sentence = "Aš gimiau šalyje pavadinimu "+salis;
    }

console.log(sentence);
console.groupEnd();


console.group('3. Parašykite switch salyginį sakinį patikrinti jūsų būseną ("atsikėlęs" | "miegantis" | "pavargęs") ir pagal tai priskirkite 6 kintamojo (planas) reikšmę');
switch (busena) 
    {
        case 'miegantis':
        console.log(planas1);
        break;

        case 'atsikėlęs':
        console.log(planas2);
        break;

        case 'pavargęs':
        console.log(planas3);
        break;

        default:
        console.log("Tokios būsenos nėra");
        break;
    }

console.groupEnd();