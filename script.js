const canvasElement = document.querySelector('canvas');

const context = canvasElement.getContext('2d');

context.fillStyle = 'coral';

context.fillRect(0, 0, canvasElement.width, canvasElement.height);

// console.log(context);

const mario = new Image();
mario.src = 'mario.png';

mario.addEventListener('load', () => {
  // context.drawImage(mario, 50, 100);
  // context.drawImage(mario, 50, 100, 300, 300);
  // Paint portion of image
  // context.drawImage(mario, 300, 200, 600, 600, 50, 100, 300, 300);
});

// mario.addEventListener('load', () => {
//   const width = mario.width;
//   const height = mario.height;
//   const ratio = width / height;
//   context.drawImage(mario, 50, 100, 300, 300 / ratio);
// });

// context.fillStyle = 'yellowgreen';
// context.fillRect(20, 20, 100, 100);

const background = new Image();
background.src =
  'https://media.prod.mdn.mozit.cloud/attachments/2012/07/09/222/bcf90d24adf679755d47e6e2adf31afa/Canvas_createpattern.png';

background.addEventListener('load', () => {
  const backgroundPattern = context.createPattern(background, 'repeat');

  context.fillStyle = backgroundPattern;
  // context.fillRect(0, 0, 400, 400);
});

/* 
background.addEventListener('load', () => {
  context.drawImage(background, 0, 0, 100, 100);
});
*/

// Create gradient
const blueGradient = context.createLinearGradient(0, 200, 200, 200);

blueGradient.addColorStop(0, 'aqua');
blueGradient.addColorStop(1, 'darkblue');

context.fillStyle = blueGradient;

context.fillRect(0, 0, 200, 200);

// Write text

context.fillStyle = 'yellowgreen';

context.font = '64px sans-serif';

context.fillText('Hello World', 50, 300);
