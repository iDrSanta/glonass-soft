'use strict';
import { CreateCalculateTable } from './scripts/CreateCalculateTable.js';
import { Table } from './scripts/Table.js';

let dataTable = {
  table1: {
    row: [],
  },
  table2: {
    row: [],
  },
  table3: {
    row: [],
  },
};

const root = document.querySelector('#root');
const calculateInner = document.createElement('div');

//добавление строки
const onAddRow = (tableName) => {
  dataTable[tableName].row.push({ x: '', y: '' });
  render();
};

//удаление строки
const onRemoveRow = (tableName, index) => {
  dataTable[tableName].row = dataTable[tableName].row.filter((obj, i) => i !== index);
  render();
};

//изменение строки
const onChangeInput = (e, tableName, index) => {
  const { name, value } = e.target;
  dataTable[tableName].row[index][name] = value;
  calculateTable();
};

const renderCalculateTable = () => {
  calculateInner.append(CreateCalculateTable(dataTable.table3.row));
};

const calculate = (x1, y1, x2, y2) => {
  return { x: (x1 + x2) / 2, y: (y1 + y2) / 2 };
};

const calculateTable = () => {
  calculateInner.innerHTML = '';
  dataTable.table3.row = [];
  const lengthTable1 = dataTable.table1.row.length;
  const lengthTable2 = dataTable.table2.row.length;
  const row1 = dataTable.table1.row;
  const row2 = dataTable.table2.row;
  let minLength;

  if (lengthTable1 > lengthTable2) {
    minLength = lengthTable2;
  } else {
    minLength = lengthTable1;
  }

  for (let i = 0; i < minLength; i++) {
    if (row1[i].x && row1[i].y && row2[i].x && row2[i].y) {
      dataTable.table3.row[i] = calculate(
        Number(row1[i].x),
        Number(row1[i].y),
        Number(row2[i].x),
        Number(row2[i].y),
      );
    }
  }
  renderCalculateTable();
};

const render = () => {
  root.innerHTML = '';
  root.append(
    Table(onAddRow, dataTable.table1, 'table1', onRemoveRow, onChangeInput, onChangeInput),
  );
  root.append(
    Table(onAddRow, dataTable.table2, 'table2', onRemoveRow, onChangeInput, onChangeInput),
  );
  root.append(calculateInner);
  calculateTable();
};

render();
