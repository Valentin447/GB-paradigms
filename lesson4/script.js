"use strict";

// Написать скрипт для расчета корреляции Пирсона между
// двумя случайными величинами (двумя массивами). Можете
// использовать любую парадигму, но рекомендую использовать
// функциональную, т.к. в этом примере она значительно
// упростит вам жизнь.

const arrX = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const arrY = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

function mean(arr) {
  return arr.reduce((a, b) => a + b) / arr.length;
}

const newArrX = arrX.map((item) => item - mean(arrX));
const newArrY = arrY.map((item) => item - mean(arrY));

const res = newArrX.reduce((a, item, index) => {
  return item * newArrY[index];
}, 0) / Math.sqrt(newArrX.reduce((a, item) => {
  return item ** 2;
}, 0) * newArrY.reduce((a, item) => {
  return item ** 2;
}, 0));

console.log(res);

// Функциональная и процедурная парадигмы

