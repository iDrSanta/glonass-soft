export const CreateCalculateTable = (data) => {
  //создаем таблицу
  const table = document.createElement('table');

  //создаем маркеры X Y
  const markerTr = document.createElement('tr');
  const markerX = document.createElement('td');
  markerX.textContent = 'X';
  const markerY = document.createElement('td');
  markerY.textContent = 'Y';
  markerTr.append(markerX, markerY);
  table.append(markerTr);

  //создаем строки таблицы
  data.forEach(
    (obj) =>
      (table.innerHTML += `<tr><td><input readonly value=${obj.x}></td><td><input readonly value=${obj.y}></td></tr>`),
  );
  return table;
};
