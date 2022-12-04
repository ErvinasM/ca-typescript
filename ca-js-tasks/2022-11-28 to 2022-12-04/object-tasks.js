console.groupCollapsed('1 - https://edabit.com/challenge/nuXdWHAoHv9y38sn7');
{
    const drinks = [
        {name: "lemonade", price: 50},
        {name: "lime", price: 10},
        {name: "soda", price: 25},
        {name: "beverage", price: 18}
      ]

    function sortDrinksByPrice(aDrinks) 
        {
            aDrinks.sort((a,b) => a.price - b.price);
            return aDrinks;
        }
    
    console.table(sortDrinksByPrice(drinks));
}
console.groupEnd();

console.groupCollapsed('2 - https://edabit.com/challenge/9KEKJG5PZTFmG3Zau');
{
    function newName (key, name, value) 
        {
            key[name] = value;
            return key;
        };
    
    console.log(newName("1", "Dog", "test"));
}
console.groupEnd();

console.groupCollapsed('3 - https://edabit.com/challenge/48EJWLhF224na8po3');
{  
    const generations = [
        {generation: -3, m: "great grandfather", f: "great grandmother"},
        {generation: -2, m: "grandfather", f: "grandmother"},
        {generation: -1, m: "father", f: "mother"},
        {generation: 0, m: "me!", f: "me!"},
        {generation: 1, m: "son", f: "daughter"},
        {generation: 2, m: "grandson", f: "granddaughter"},
        {generation: 3, m: "great grandson", f: "great granddaughter"},
      ]

    function getGen(array, number, gender)
        {
            var arLength = array.length
            for(let i = 0; i < arLength; i++)
                {
                    if (array[i].generation == number && gender == "m")
                        {
                            return array[i].m;
                        }
                    else if (array[i].generation == number && gender == "f")
                        {
                            return array[i].f;
                        }
                }
            return "Non existent";
        }
    
    console.log(getGen(generations, -2, "m"))
}
console.groupEnd();

console.groupCollapsed('4 - https://edabit.com/challenge/i6YqzHcSiPiEQKjeX');
{
    const handPoints = [
        { tile: "N", score: 1 },
        { tile: "K", score: 5 },
        { tile: "Z", score: 10 },
        { tile: "X", score: 8 },
        { tile: "D", score: 2 },
        { tile: "A", score: 1 },
        { tile: "E", score: 1 }
      ]

    function maximumScore(array)
        {
            var arLength = array.length;
            let totalSum = 0;
            for (let i = 0; i < arLength; i++)
                {
                    totalSum = totalSum + array[i].score;
                }
            
            return totalSum;
        }

    console.log(maximumScore(handPoints));

}
console.groupEnd();

console.groupCollapsed('5 - https://edabit.com/challenge/8s2jy9hR2TAeQinKD');
{
    const sItems = {skate: 200, painting: 200, shoes: 1};

    function calculateDifference(array, limit)
        {
            let totalSum = 0;
            let resultSum = 0;

            for (const item in array) 
                {
                    totalSum = totalSum + array[item];
                }
            
            resultSum = limit - totalSum;
            return resultSum;
        }

    console.log(calculateDifference(sItems, 600));
}
console.groupEnd();

console.groupCollapsed('6 - https://edabit.com/challenge/pPNAs5PvB3WvnDwDM');
{
    const tbCon = {skate: 200, painting: 200, shoes: 1};
    function convertObjToArray(tbCon) 
    {
        return Object.entries(tbCon);
    }

    console.table(convertObjToArray(tbCon));
}
console.groupEnd();

console.groupCollapsed('7 - https://edabit.com/challenge/QXWM2oo7rQNiyDsip');
{
    const inks = {"cyan": 23, "magenta": 12, "yellow": 10};

    function inkLevels(array)
        {
            let maxSum = 10000;

            for (const ink in array) 
                {
                    if (array[ink] < maxSum)
                        {
                            maxSum = array[ink];
                        }
                }
            return maxSum;
        }

    console.log(inkLevels(inks));
      
}
console.groupEnd();

console.groupCollapsed('8 - https://edabit.com/challenge/pLNavsePxJ87t9Nak');
{
    const stolenItems = {
        tv: 30,
        skate: 20,
        stereo: 50,
      }

    function calculateStolenItems(array)
        {
            let itemSum = 0;

            for (const stolenItem in array) 
                {
                    itemSum = itemSum + array[stolenItem];
                }

            if (itemSum == 0)
                {
                    itemSum = "Lucky you!";
                }

            return itemSum;
        }

    console.log(calculateStolenItems(stolenItems));
}
console.groupEnd();
