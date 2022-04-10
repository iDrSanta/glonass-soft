export const TableRow = (obj, index, tableName, removeRow, onChangeInput) => {
  const { x, y } = obj;
  //создаем строку таблицы
  const row = document.createElement('tr');

  //создаем ячейку для X
  const cellX = document.createElement('td');
  const inputX = document.createElement('input');
  inputX.setAttribute('name', 'x');
  inputX.setAttribute('type', 'number');
  inputX.addEventListener('input', (e) => onChangeInput(e, tableName, index));
  inputX.value = x;
  cellX.append(inputX);

  //создаем ячейку для Y
  const cellY = document.createElement('td');
  const inputY = document.createElement('input');
  inputY.setAttribute('name', 'y');
  inputY.setAttribute('type', 'number');
  inputY.addEventListener('input', (e) => onChangeInput(e, tableName, index));
  inputY.value = y;
  cellY.append(inputY);

  //создаем кнопку удаления строки
  const cellBtn = document.createElement('td');
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'delete';
  deleteBtn.addEventListener('click', () => removeRow(tableName, index));
  cellBtn.append(deleteBtn);

  row.append(cellX, cellY, cellBtn);
  return row;
};
