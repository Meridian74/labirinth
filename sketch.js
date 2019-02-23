var x = 0;
var y = 0;
var spacing = 20;
var halfSp = parseInt(spacing / 2);
var drawType = 0;
var wallType = 0;

function setup() {
  createCanvas(1400, 800);
  background(255);

}

function draw() {
  stroke(0);

  drawType = random(1);
  if (drawType < 0.445) {
    wallType5();
  } 
  else if (drawType > 0.555) {
    wallType6();
  } 
  else {
    complexWall();
  }

  x = x + spacing;
  if (x > width - spacing) {
    x = 0;
    y = y + spacing;
  }

  if (y > height - spacing) {
    throw new Error('vége a rajzolásnak...!');
  }


  // elágazást biztosító faltípus rajzolása
  function complexWall() {
    wallType = parseInt(random(14));
    console.log(wallType);
    switch (wallType) {
      case 1:
        wallType1(); break;
      
      case 2:
        wallType2(); break;
      
      case 3:
        wallType3(); break;
      
      case 4:
        wallType4(); break;
      
      case 5:
        wallType1();
        wallType3(); break;
      
      case 6:
        wallType1();
        wallType2(); break;
      
      case 7:
        wallType2();
        wallType4(); break;
      
      case 8:
        wallType3();
        wallType4(); break;
      
      case 9:
        wallType5();
        wallType3(); break;
      
      case 10:
        wallType5();
        wallType2(); break;

      case 11:
        wallType6();
        wallType1(); break;

      case 12:
        wallType6();
        wallType4(); break;

      case 13:
        wallType5();
        wallType6(); break;

      default:
        break;
    }
  }

  // falak vonalainak típusai
  function wallType1() {
    line(x + halfSp, y + halfSp, x, y);
  }

  function wallType2() {
    line(x + halfSp, y + halfSp, x + spacing, y);
  }

  function wallType3() {
    line(x + halfSp, y + halfSp, x, y + spacing);
  }

  function wallType4() {
    line(x + halfSp, y + halfSp, x + spacing, y + spacing);
  }

  function wallType5() {
    line(x, y, x + spacing, y + spacing); 
  }

  function wallType6() {
    line(x, y + spacing, x + spacing, y);
  }

}
