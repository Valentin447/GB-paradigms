"use strict";

// Написать программу на любом языке в любой парадигме для
// бинарного поиска. На вход подаётся целочисленный массив и
// число. На выходе - индекс элемента или -1, в случае если искомого
// элемента нет в массиве.

function binarySearch(value, list) {
  let first = 0;
  let last = list.length - 1;
  let position = -1;
  let found = false;
  let middle;
  while (found === false && first <= last) {
    middle = Math.floor((first + last) / 2);
    if (list[middle] == value) {
      found = true;
      position = middle;
    } else if (list[middle] > value) {
      last = middle - 1;
    } else {
      first = middle + 1;
    }
  }
  return position;
}

console.log(binarySearch(10, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]));

// Парадигмы:
// 1) Процедурная. Есть binarySearch(value, list);
// 2) Структурная. Есть while() и if() нет goto
