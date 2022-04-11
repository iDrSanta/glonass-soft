import { TableRow } from './TableRow.js';

export const Table = (onAddRow, tableData, tableName, removeRow, onChangeInput) => {
  //создаем обертку
  const tableWrapper = document.createElement('div');
  tableWrapper.classList.add('table_wrapper');

  //создаем маркеры X Y
  const markerTr = document.createElement('tr');
  const markerX = document.createElement('td');
  markerX.textContent = 'X';
  const markerY = document.createElement('td');
  markerY.textContent = 'Y';
  markerTr.append(markerX, markerY);

  //создаем таблицу
  const table = document.createElement('table');
  table.append(markerTr);
  tableData.row.forEach((obj, i) =>
    table.append(TableRow(obj, i, tableName, removeRow, onChangeInput)),
  );
  const addBtn = document.createElement('button');
  addBtn.addEventListener('click', () => onAddRow(tableName));
  addBtn.classList.add('add_btn');
  addBtn.textContent = 'ADD';
  tableWrapper.append(table);
  tableWrapper.append(addBtn);
  return tableWrapper;
};
