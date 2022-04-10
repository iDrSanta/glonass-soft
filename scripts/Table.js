import { TableRow } from './TableRow.js';

export const Table = (onAddRow, tableData, tableName, removeRow, onChangeInput) => {
  const tableWrapper = document.createElement('div');
  const table = document.createElement('table');
  tableData.row.forEach((obj, i) =>
    table.append(TableRow(obj, i, tableName, removeRow, onChangeInput)),
  );
  const addBtn = document.createElement('button');
  addBtn.addEventListener('click', () => onAddRow(tableName));
  addBtn.textContent = 'ADD';
  tableWrapper.append(table);
  tableWrapper.append(addBtn);
  return tableWrapper;
};
