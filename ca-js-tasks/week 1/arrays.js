let numbers = [46, 1, 4, 78, 9, 5, 1, 4, 5, 5];
// indeksai:    0  1  2   3  4  5  6  7  8  9
let nouns = ['apple', 'sister', 'hammer', 'sun', 'table', 'sky', 'lake', 'rainbow', 'there', 'ragnarok', 'god', 'war', 'thor', 'beat'];
// indeksai:    0       1         2        3       4        5       6       7          8         9         10    11      12
let helpers = ['in', 'with', 'on', 'my', 'is', 'a', 'the', ' ', 'over', 'coming', 'of'];
// indeksai:    0       1     2      3     4    5     6     7      8       9       10

let sentence1 = helpers[3] + helpers[7] + nouns[1] + helpers[7] + helpers[4] + helpers[7] + helpers[0] + helpers[7] + helpers[6] + helpers[7] + nouns[6];
console.log(sentence1);

let sentence2 = nouns[2] + helpers[7] + helpers[4] + helpers[7] + helpers[2] + helpers[7] + helpers[6] + helpers[7] + nouns[4];
let sentence3 = nouns[3] + helpers[7] + helpers[4] + helpers[7] + helpers[0] + helpers[7] + helpers[6] + helpers[7] + nouns[5];
let sentence4 = nouns[0] + helpers[7] + helpers[4] + helpers[7] + helpers[1] + helpers[7] + helpers[3] + helpers[7] + nouns[1];
console.log(sentence2);
console.log(sentence3);
console.log(sentence4);

let sentence5 = nouns[8] + helpers[7] + helpers[4] + helpers[7] + nouns[7] + helpers[7] + helpers[8] + helpers[7] + helpers[6] + helpers[7] + nouns[6];
let sentence6 = helpers[6] + helpers[7] + nouns[9] + helpers[7] + helpers[4] + helpers[7] + helpers[9];
let sentence7 = nouns[10] + helpers[7] + helpers[10] + helpers[7] + nouns[11] + helpers[7] + nouns[13] + helpers[7] + nouns[12] + helpers[7] + helpers[1] + helpers[7] + nouns[2];
console.log(sentence5);
console.log(sentence6);
console.log(sentence7);