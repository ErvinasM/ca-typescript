console.groupCollapsed('1. Two Makes Ten - https://edabit.com/challenge/5erCDJ8eJDrXkmwTK');
{
    function isTen(a,b)
        {
            if (a+b == 10 || a == 10 || b == 10)
                {
                    return true;
                }
            else
                {
                    return false;
                }
        }
    
    console.log(isTen(7,3));
}
console.groupEnd();

console.groupCollapsed('2. Lets Fuel Up! - https://edabit.com/challenge/YMWDcSuYwYvve3HZj');
{
    function calculateFuel(a) 
        {
            if (a <= 10)
                {
                    return 100;
                }
            else
                {
                    return a*10;
                }
        }
    
    console.log(calculateFuel(17.3));
}
console.groupEnd();

console.groupCollapsed('3. Multiple of 100 - https://edabit.com/challenge/qMr6wYGr6NaXAPQGF');
{
    function dividible(a) 
        {
            if (a % 100 == 0)
                {
                    return true
                }
            else
                {
                    return false;
                }
        }
    
    console.log(dividible(101));
}
console.groupEnd();

console.groupCollapsed('4. Return Negative - https://edabit.com/challenge/iDxwkarcJcmkDA8tq');
{
    function convertNegative(a)
        {
            if(a>0)
                {
                    return a*-1
                }
            else
                {
                    return a;
                }
        }
    
    console.log(convertNegative(2));
}
console.groupEnd();

console.groupCollapsed('5. Movie Theatre Admittance - https://edabit.com/challenge/fP7gFvDaBymoZrXFx');
{
    function acceptIntoMovie(age, isSupervised) 
        {
        if (age>=15 || isSupervised)
            {
                return true
            } 
        else  
            {
                return false
            }
      }
    
    console.log(acceptIntoMovie(14, true));
}
console.groupEnd();

console.groupCollapsed('6. Century Crisis- https://edabit.com/challenge/DcmB9Ycm58FdkPe7k');
{
    function futurePeople(a,b)
        {
            return (b*30*12) + a;
        }
    
    console.log(futurePeople(256,2));
}
console.groupEnd();

console.groupCollapsed('7. Fix the Bug: Simple Array Manipulation - https://edabit.com/challenge/jipHTDkabftop5irE');
{
    function incrementArray(a) 
        {
            for (let i = 0; i < a.length; i++)
                {
                    a[i]++;
                }
            return a;
        }
    console.log(incrementArray([0, 1, 2, 3]));
}
console.groupEnd();

console.groupCollapsed('8. Largest Swap - https://edabit.com/challenge/hD3euqPHM82Cbr7R8');
{
    function largestSwap(a) 
        {
            return a / 10 > a % 10;
        }
    
    console.log(largestSwap(57));
}
console.groupEnd();

console.groupCollapsed('9. Convenience Store - https://edabit.com/challenge/erFxBbqzZPSegMwnc');
{
    function changeEnough(array, toPay) 
        {
            let q = array[0]*0.25;
            let d = array[1]*0.1;
            let n = array[2]*0.05;
            let p = array[3]*0.01;

            return (q+d+n+p >= toPay);
        }
    
    console.log(changeEnough([2, 100, 0, 0], 14.11));
}
console.groupEnd();

console.groupCollapsed('10. Maximum Edge of a Triangle - https://edabit.com/challenge/nhXofMMyrowMyr9Nv');
{
    function thirdEdge(a, b) 
        {
            return (a + b)-1;
        }
    
    console.log(thirdEdge(9,2));
}
console.groupEnd();

console.groupCollapsed('11. Add up the Numbers from a Single Number - https://edabit.com/challenge/4gzDuDkompAqujpRi');
{
    function addUp(a) 
        {
            let sum = 0;
            for (let i = 0; i <= a; i++) 
                {
                    sum += i;
                }
            return sum;
        }
    
    console.log(addUp(13));
}
console.groupEnd();

console.groupCollapsed('12. Sort the Unsortable - https://edabit.com/challenge/zemLfbNWaKuhrbJPt');
{
    function sortA(ar) 
        {
            return	ar.sort((a, b) => a - b);
        }
    
    console.log(sortA([4, 1, 3]));
}
console.groupEnd();

console.groupCollapsed('13. Returning an "Add" Function - https://edabit.com/challenge/xtv5ZT7xDsHyrshTq');
{
    function add(a) 
        {
            return b => a+b;
        }
    
    console.log(add(10)(20));
}
console.groupEnd();

console.groupCollapsed('14. Square Every Digit - https://edabit.com/challenge/Tnjbf6pdFsCjmaF8p');
{
    function digitSquare(a)
        {
            const arrOfStrs = Array.from(String(a));
            const dArray = arrOfStrs.map((a) => Number(a));
            let ns = '';
            dArray.forEach(dig => {
                ns = ns+(dig*dig);
            });

            return ns;
        }
    
    console.log(digitSquare(9119));
}
console.groupEnd();

console.groupCollapsed('15. Is it Time for Milk and Cookies? - https://edabit.com/challenge/hPWnaSckJke5FXNEH');
{
    function timeForMilkAndCookies(d)
        {
            const date2 = new Date(2000, 11, 24);
            if (d.getMonth() === date2.getMonth() && d.getDate() === date2.getDate())
                {
                    return true;
                }
            else
                {
                    return false;
                }
        }
    
    console.log(timeForMilkAndCookies(new Date(2013, 11, 24)));
}
console.groupEnd();