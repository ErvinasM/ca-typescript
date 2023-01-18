var cArray = [];
var eArray;
var aLength;
var result;

console.groupCollapsed('1. Parašykite funkciją, kuri grąžina pirmą masyvo elementą.');
{
    cArray = [50, "ironwood", 9, "testas", 22, 33, 44, "vienas"];
    function firstArrayElement(farray) 
        {
            return farray[0];
        }
    console.log(firstArrayElement(cArray));
}
console.groupEnd();

console.groupCollapsed('2. Parašykite funkciją, kuri pašalina pirmą masyvo elementą ir jį grąžina.');
{
    cArray = [50, "ironwood", 9, "testas", 22, 33, 44, "vienas"];
    function remove1ArrayElement(farray)
        {
            eArray = farray.splice(1);
            result = "Ištrinto elemento reikšmė: ("+farray+")\nNaujas suformuotas masyvas: ["+eArray+"]";
            return result;
        }
    console.log(remove1ArrayElement(cArray));
}
console.groupEnd();

console.groupCollapsed('3. Parašykite funkciją, kuri grąžina paskutinį masyvo elementą.');
{
    cArray = [50, "ironwood", 9, "testas", 22, 33, 44, "vienas"];
    function lastArrayElement(farray) 
        {
            aLength = farray.length;
            return farray[aLength-1];
        }
    console.log(lastArrayElement(cArray));
}
console.groupEnd();

console.groupCollapsed('4. Parašykite funkciją, kuri pašalina paskutinį masyvo elementą ir jį grąžina.');
{
    cArray = [50, "ironwood", 9, "testas", 22, 33, 44, "vienas"];
    function remove1ArrayElement(farray)
        {
            aLength = farray.length;
            eArray = farray.splice((aLength-1), 1);
            result = "Ištrinto elemento reikšmė: ("+eArray+")\nNaujas suformuotas masyvas: ["+farray+"]";
            return result;
        }
    console.log(remove1ArrayElement(cArray));
}
console.groupEnd();

console.groupCollapsed('5. Parašykite funkciją, kuri grąžina elementų kiekį masyve');
{
    cArray = [50, "ironwood", 9, "testas", 22, 33, 44, "vienas"];
    function arraySize(farray) 
        {
            aLength = farray.length;
            return aLength;
        }
    console.log(arraySize(cArray));
}
console.groupEnd();

console.groupCollapsed('6. Parašykite funkciją, kuri atspausdina paskutinio masyvo elemento indeksą');
{
    cArray = [50, "ironwood", 9, "testas", 22, 33, 44, "vienas"];
    function LastArrayElementIndex(farray) 
        {
            aLength = (farray.length - 1);
            return aLength;
        }
    console.log(LastArrayElementIndex(cArray));
}
console.groupEnd();

console.groupCollapsed('7. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indeksus eilutėmis');
{
    cArray = [50, "ironwood", 9, "testas", 22, 33, 44, "vienas"];
    function returnAllIndexOfArray(farray) 
        {
            aLength = (farray.length - 1);
            result = "";
            for(let i = 0; i <= aLength; i++)
                {
                    if (i == aLength)
                        {
                            result = result+i;
                        }
                    else
                        {
                            result = result+i+"\n";
                        }
                }
            return result;
        }
    console.log(returnAllIndexOfArray(cArray));
}
console.groupEnd();

console.groupCollapsed('8. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento reikšmes eilutėmis');
{
    cArray = [50, "ironwood", 9, "testas", 22, 33, 44, "vienas"];
    function returnAllElementsOfArray(farray) 
        {
            aLength = (farray.length - 1);
            result = "";
            for(let i = 0; i <= aLength; i++)
                {
                    if (i == aLength)
                        {
                            result = result+farray[i];
                        }
                    else
                        {
                            result = result+farray[i]+"\n";
                        }
                }
            return result;
        }
    console.log(returnAllElementsOfArray(cArray));
}
console.groupEnd();

console.groupCollapsed('9. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indekso ir reikšmių poras eilutėmis, tokiu formatu:  ');
// [0] => reikšmė
// [1] => reikšmė
// [2] => reikšmė
{
    cArray = [50, "ironwood", 9, "testas", 22, 33, 44, "vienas"];
    function returnFullArray(farray) 
        {
            aLength = (farray.length - 1);
            result = "";
            for(let i = 0; i <= aLength; i++)
                {
                    if (i == aLength)
                        {
                            result = result+"["+i+"] => "+farray[i];
                        }
                    else
                        {
                            result = result+"["+i+"] => "+farray[i]+"\n";
                        }
                }
            return result;
        }
    console.log(returnFullArray(cArray));
}
console.groupEnd();

console.groupCollapsed('10. Parašykite funkciją, kuri atspausdina masyvo elementus atbuline tvarka eilutėmis, iš galo.');
{
    cArray = [50, "ironwood", 9, "testas", 22, 33, 44, "vienas"];
    function returnFullArrayReverse(farray) 
        {
            aLength = (farray.length - 1);
            result = "";
            for(let i = aLength; 0 <= i; i--)
                {
                    if (i == 0)
                        {
                            result = result+"["+i+"] => "+farray[i];
                        }
                    else
                        {
                            result = result+"["+i+"] => "+farray[i]+"\n";
                        }
                }
            return result;
        }
    console.log(returnFullArrayReverse(cArray));
}
console.groupEnd();

console.groupCollapsed('11. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indeksus vienoje eilutėje: 0 1 2 3 ...');
{
    cArray = [50, "ironwood", 9, "testas", 22, 33, 44, "vienas"];
    function returnAllIndexOfArrayOneLine(farray) 
        {
            aLength = (farray.length - 1);
            result = "";
            for(let i = 0; i <= aLength; i++)
                {
                    if (i == aLength)
                        {
                            result = result+i;
                        }
                    else
                        {
                            result = result+i+" ";
                        }
                }
            return result;
        }
    console.log(returnAllIndexOfArrayOneLine(cArray));
}
console.groupEnd();

console.groupCollapsed('12. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento reikšmes vienoje eilutėje: -111 2 -9 48');
{
    cArray = [50, "ironwood", 9, "testas", 22, 33, 44, "vienas"];
    function returnAllElementsOfArrayOneLine(farray) 
        {
            aLength = (farray.length - 1);
            result = "";
            for(let i = 0; i <= aLength; i++)
                {
                    if (i == aLength)
                        {
                            result = result+farray[i];
                        }
                    else
                        {
                            result = result+farray[i]+" ";
                        }
                }
            return result;
        }
    console.log(returnAllElementsOfArrayOneLine(cArray));
}
console.groupEnd();

console.groupCollapsed('13. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indekso ir reikšmių poras vienoje eilutėje, tokiu formatu:');
//  [0]=>17 [1]=>8 [2]=>88 ..
{
    cArray = [50, "ironwood", 9, "testas", 22, 33, 44, "vienas"];
    function returnFullArrayOneLine(farray) 
        {
            aLength = (farray.length - 1);
            result = "";
            for(let i = 0; i <= aLength; i++)
                {
                    if (i == aLength)
                        {
                            result = result+"["+i+"] => "+farray[i];
                        }
                    else
                        {
                            result = result+"["+i+"] => "+farray[i]+" ";
                        }
                }
            return result;
        }
    console.log(returnFullArrayOneLine(cArray));
}
console.groupEnd();