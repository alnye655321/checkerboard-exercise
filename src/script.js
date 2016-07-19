// Your JS goes here
// add names to file, only turn one in, add names to Readname

//var divRow = document.createElement('div');
//document.body.appendChild(divRow);
//divRow.setAttribute("id", "main");
//var mainDiv = document.getElementById('main');
//document.getElementById("main").style.width = "100%";


for (var i = 1; i < 64; i++) { //64 is total
  if (i % 2 === 0) { //even
    var divEven = document.createElement('div');
    divEven.className = 'Even';
    document.body.appendChild(divEven);
  }
  else { //odd
    var divOdd = document.createElement('div');
    divOdd.className = 'Odd';
    document.body.appendChild(divOdd);
  }
}

function changeOddCSS() {
  var cols = document.getElementsByClassName('Odd');
  for (i = 0; i < cols.length; i++) {
    cols[i].style.backgroundColor = 'black';
    cols[i].style.float = 'left';
    cols[i].style.width = '11%';
    cols[i].style.height = '50px';
  }
}

function changeEvenCSS() {
  var cols = document.getElementsByClassName('Even');
  for (i = 0; i < cols.length; i++) {
    cols[i].style.backgroundColor = 'red';
    cols[i].style.float = 'left';
    cols[i].style.width = '11%';
    cols[i].style.height = '50px';
  }
}

changeOddCSS();

changeEvenCSS();






//var div = document.getElementById('main');

//div.innerHTML = div.innerHTML + 'Extra stuff';
