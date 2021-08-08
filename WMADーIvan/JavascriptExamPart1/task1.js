// You have n tiles, where each tile has one letter tiles[i] printed on it.
// Return the number of possible non-empty sequences of letters you can make using the letters printed on those tiles.

// 1 <= tiles.length <= 7
// tiles consists of uppercase English letters.

let tiles = "AAB";
tiles = "AAABBC";
tiles = "V";

let count;
if (tiles == 1) {
  count = 1;
}
console.log(count);

// 