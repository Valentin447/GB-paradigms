"use strict";

// Задача №1
// Дан список целых чисел numbers. Необходимо написать в императивном стиле процедуру для
// сортировки числа в списке в порядке убывания. Можно использовать любой алгоритм сортировки.

const numbers = [5, 2, 13, 10, 3, 6, 1, 11, 9];

function sortListImperative(numbers) {
  for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = 0; j < numbers.length - 1 - i; j++) {
      if (numbers[j] < numbers[j + 1]) {
        const temp = numbers[j];
        numbers[j] = numbers[j + 1];
        numbers[j + 1] = temp;
      }
    }
  }
  return numbers;
}

console.log(sortListImperative(numbers));

// Задача №2
// Написать точно такую же процедуру, но в декларативном стиле

function sortListDeclarative(numbers) {
  return numbers.sort((a, b) => b - a);
}

console.log(sortListDeclarative(numbers));
