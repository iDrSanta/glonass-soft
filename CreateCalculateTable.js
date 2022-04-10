export const CreateCalculateTable = (data) => {
  //создаем таблицу
  const table = document.createElement('table');
  //создаем строки таблицы
  data.forEach(
    (obj) =>
      (table.innerHTML += `<tr><td><input readonly value=${obj.x}></td><td><input readonly value=${obj.y}></td></tr>`),
  );
  return table;
};
