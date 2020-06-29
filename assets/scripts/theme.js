let divs = [];
const rgbh1 = document.getElementById('rgbh1');


function randomBackground() {
    for (i = 1; i <= 6; i++) {
      document.getElementById("div" + i).style.backgroundColor = getRandomRgb();
    }
    rgbh1.innerText = getRandomDiv();
}



function getRandomRgb() {
    var r = Math.floor(Math.random() * 255);
    var g = Math.floor(Math.random() * 255);
    var b = Math.floor(Math.random() * 255);
    return 'rgb(' + r + ', ' + g + ', ' + b + ')';
  }


function getRandomDiv() {
    divNum = Math.floor((Math.random() * 6) + 1);
    var randomDivColor = document.getElementById("div" + divNum).style.backgroundColor;
    return randomDivColor;
}

window.onload = randomBackground();
