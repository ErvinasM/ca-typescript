function stutter(word)
    {
        const stut = word.slice(0, 2);
        return stut+"... "+stut+"... "+word+"?";
    }

console.log(stutter("incredible"));
console.log(stutter("enthusiastic"));
console.log(stutter("outstanding"));