// 'use strict';
// import { CreateCalculateTable } from './scripts/CreateCalculateTable.js';
// import { Table } from './scripts/Table.js';

// let dataTable = {
//   table1: {
//     row: [],
//   },
//   table2: {
//     row: [],
//   },
//   table3: {
//     row: [],
//   },
// };

// const root = document.querySelector('#root');
// const calculateInner = document.createElement('div');

// //добавление строки
// const onAddRow = (tableName) => {
//   dataTable[tableName].row.push({ x: '', y: '' });
//   render();
// };

// //удаление строки
// const onRemoveRow = (tableName, index) => {
//   dataTable[tableName].row = dataTable[tableName].row.filter((obj, i) => i !== index);
//   render();
// };

// //изменение строки
// const onChangeInput = (e, tableName, index) => {
//   const { name, value } = e.target;
//   dataTable[tableName].row[index][name] = value;
//   calculateTable();
// };

// const renderCalculateTable = () => {
//   calculateInner.append(CreateCalculateTable(dataTable.table3.row));
// };

// const calculate = (x1, y1, x2, y2) => {
//   return { x: (x1 + x2) / 2, y: (y1 + y2) / 2 };
// };

// const calculateTable = () => {
//   calculateInner.innerHTML = '';
//   dataTable.table3.row = [];
//   const lengthTable1 = dataTable.table1.row.length;
//   const lengthTable2 = dataTable.table2.row.length;
//   const row1 = dataTable.table1.row;
//   const row2 = dataTable.table2.row;
//   let minLength;

//   if (lengthTable1 > lengthTable2) {
//     minLength = lengthTable2;
//   } else {
//     minLength = lengthTable1;
//   }

//   for (let i = 0; i < minLength; i++) {
//     if (row1[i].x && row1[i].y && row2[i].x && row2[i].y) {
//       dataTable.table3.row[i] = calculate(
//         Number(row1[i].x),
//         Number(row1[i].y),
//         Number(row2[i].x),
//         Number(row2[i].y),
//       );
//     }
//   }
//   renderCalculateTable();
// };

// const render = () => {
//   root.innerHTML = '';
//   root.append(
//     Table(onAddRow, dataTable.table1, 'table1', onRemoveRow, onChangeInput, onChangeInput),
//   );
//   root.append(
//     Table(onAddRow, dataTable.table2, 'table2', onRemoveRow, onChangeInput, onChangeInput),
//   );
//   root.append(calculateInner);
//   calculateTable();
// };

// render();

const canvas = document.querySelector('#canvas');
canvas.setAttribute('width', 500);
canvas.setAttribute('height', 500);
let ctx = canvas.getContext('2d');
ctx.fillStyle = 'black';
ctx.font = '30px Arial';
ctx.lineWidth = 2.0;
const widthCanvas = 500;
const heightCanvas = 500;

ctx.beginPath();
ctx.moveTo(0, 0);
ctx.lineTo(0, heightCanvas);
ctx.lineTo(widthCanvas, heightCanvas);
ctx.fillText('Y', 20, 20);
ctx.fillText('X', widthCanvas - 20, heightCanvas - 20);
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.font = '10px Arial';
for (let i = 0; i < 500; i += 20) {
  ctx.fillText(500 - i, 10, 0 + i);
  ctx.moveTo(0, 0 + i);
  ctx.lineTo(5, 0 + i);
  ctx.stroke();
}
for (let i = 0; i < 500; i += 20) {
  ctx.fillText(i, i - 5, 495);
  ctx.moveTo(0 + i, 500);
  ctx.lineTo(i, 495);
  ctx.stroke();
}
ctx.stroke();
ctx.closePath();

const obj = [
  { x: 100, y: 100 },
  { x: 160, y: 60 },
  { x: 180, y: 400 },
  { x: 190, y: 160 },
];
ctx.beginPath();
const coordinate = (coordinate) => {
  let start = { x: 0, y: 500 };
  coordinate.forEach((obj) => {
    ctx.moveTo(start.x, start.y);
    ctx.lineTo(obj.x, heightCanvas - obj.y);
    start = { x: obj.x, y: heightCanvas - obj.y };
  });
  ctx.stroke();
};
coordinate(obj);
ctx.closePath();
