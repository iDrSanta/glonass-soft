export const Chart = (coordinates) => {
  //создаем холст
  const canvas = document.createElement('canvas');
  canvas.setAttribute('width', 500);
  canvas.setAttribute('height', 500);

  //   задаем тип
  let ctx = canvas.getContext('2d');
  ctx.fillStyle = 'black';
  ctx.font = '30px Arial';
  ctx.lineWidth = 2.0;
  const widthCanvas = canvas.getAttribute('width');
  const heightCanvas = canvas.getAttribute('height');

  // рисуем ординаты и риски
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

  // рисуем графики
  ctx.beginPath();
  const coordinate = (coordinates) => {
    let start = { x: 0, y: 500 };
    coordinates.forEach((obj) => {
      if (obj.x && obj.y) {
        ctx.moveTo(start.x, start.y);
        ctx.lineTo(obj.x, heightCanvas - obj.y);
        start = { x: obj.x, y: heightCanvas - obj.y };
      }
    });
    ctx.stroke();
  };
  coordinate(coordinates);
  ctx.closePath();
  //

  return canvas;
};
