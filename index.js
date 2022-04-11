'use strict';
import { Chart } from './scripts/Chart.js';
import { CreateCalculateTable } from './scripts/CreateCalculateTable.js';
import { Table } from './scripts/Table.js';

const lsTestWorkd41d8cd98f00b = JSON.parse(localStorage.getItem('lsTestWorkd41d8cd98f00b'));

const clearLS = document.querySelector('#clear');
clearLS.addEventListener('click', () => localStorage.removeItem('lsTestWorkd41d8cd98f00b'));

let dataTable = lsTestWorkd41d8cd98f00b
  ? lsTestWorkd41d8cd98f00b
  : {
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

const tables = document.querySelector('#tables');

const calculateInner = document.createElement('div');
calculateInner.classList.add('calculate_inner');
const calculateBtn = document.createElement('button');
calculateBtn.classList.add('calculate_btn');
calculateBtn.textContent = 'calculate';

const charts = document.querySelector('#charts');

//добавление строки
const onAddRow = (tableName) => {
  dataTable[tableName].row.push({ x: '', y: '' });
  render();
  renderCharts();
};

//удаление строки
const onRemoveRow = (tableName, index) => {
  dataTable[tableName].row = dataTable[tableName].row.filter((obj, i) => i !== index);
  render();
  renderCharts();
};

//изменение строки
const onChangeInput = (e, tableName, index) => {
  const { name, value } = e.target;
  dataTable[tableName].row[index][name] = value;
  calculateTable();
  renderCharts();
};

//рендер таблици с средними значениями
const renderCalculateTable = () => {
  calculateInner.append(CreateCalculateTable(dataTable.table3.row));
};

// функция расчета среднего арифметического
const calculate = (x1, y1, x2, y2) => {
  return { x: (x1 + x2) / 2, y: (y1 + y2) / 2 };
};

//функция подсчета данных для третьей таблицы
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
  calculateInner.append(calculateBtn);
  localStorage.setItem('lsTestWorkd41d8cd98f00b', JSON.stringify(dataTable));
};
calculateBtn.addEventListener('click', () => calculateTable());

// функция рендера всех таблиц
const render = () => {
  tables.innerHTML = '';
  tables.append(
    Table(onAddRow, dataTable.table1, 'table1', onRemoveRow, onChangeInput, onChangeInput),
  );
  tables.append(
    Table(onAddRow, dataTable.table2, 'table2', onRemoveRow, onChangeInput, onChangeInput),
  );
  tables.append(calculateInner);
  calculateTable();
};

render();

//функция рендера графиков
const renderCharts = () => {
  charts.innerHTML = '';
  charts.append(Chart(dataTable.table1.row));
  charts.append(Chart(dataTable.table2.row));
  charts.append(Chart(dataTable.table3.row));
};
renderCharts();
