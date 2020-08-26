// import React from 'react';
// import { render } from '@testing-library/react';
// import App from './App';
import { checkLine, getResult, tictactoe } from './App';


// test('renders learn react link', () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

//test cases for the checkLine, getResult and tictactoe functions
test('check function checkLine returns "true" if there is a line or "false" if there is no line', () => {
  const fakeValues: number[][] = [
    [1, 0, 0],
    [0, 1, 0],
    [0, 0, 1]
  ];
  const fakePlayer: number = 1

  expect(checkLine(0, 0, 0, 1, fakeValues, fakePlayer)).toBe(false)
  expect(checkLine(0, 0, 1, 0, fakeValues, fakePlayer)).toBe(false)
  expect(checkLine(1, 0, 0, 1, fakeValues, fakePlayer)).toBe(false)
  expect(checkLine(2, 0, 0, 1, fakeValues, fakePlayer)).toBe(false)
  expect(checkLine(0, 1, 1, 0, fakeValues, fakePlayer)).toBe(false)
  expect(checkLine(0, 2, 1, 0, fakeValues, fakePlayer)).toBe(false)
  expect(checkLine(2, 0, -1, 1, fakeValues, fakePlayer)).toBe(false)
  expect(checkLine(0, 0, 1, 1, fakeValues, fakePlayer)).toBe(true)
});


test('check function getResult returns "draw": true if all field in value are not 0 ', () => {
  const fakeValues: number[][] = [
    [1, -1, -1],
    [-1, 1, 1],
    [1, -1, -1]
  ];

  expect(getResult(fakeValues)).toStrictEqual({ "draw": true })
});


test('check function tictactoe returns "true" if there is a line with same player', () => {
  const fakeValues: number[][] = [
    [1, 0, 0],
    [0, 1, 0],
    [0, 0, 1]
  ];

  expect(tictactoe(fakeValues, 1)).toBe(true)
  expect(tictactoe(fakeValues, -1)).toBe(false)
});

