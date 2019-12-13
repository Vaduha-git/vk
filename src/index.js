import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


function Mem(id, scr, texts, color)
{


    var btn ="";
    for (var i in texts) {
    var ii = i - 0 + 1;
    btn+=  `<input id="in` + (ii) + "" + (id) + `" type = "text" class = "ctr_inp">`;
  }


  document.getElementById("root").innerHTML = "<div class = 'mem' >"
    + `<input id="back` + id + `" type = "submit" value="Назад" class = "ctr_inp">`
   + btn + 

      `<canvas id="cvs`+id+`" class = "cvs"></canvas>
      <input id="dvl`+id+`" type = "submit" value="Скачать" class = "ctr_inp"></div> "`; 

  var canvas = document.getElementById("cvs" + id);
  var ctx = canvas.getContext('2d');

  var img = new Image();
  img.src = scr;
  img.onload = () => {
    canvas.height = img.height;
    canvas.width = img.width;

    ctx.drawImage(img,0,0);
    for (var i in texts) {
      ctx.font = "50px Comic Sans MS";
      ctx.fillStyle = color;
      ctx.textAlign = "center";
      ctx.fillText(texts[i].text, texts[i].x, texts[i].y);
    }   
  }

  this.write = function (new_texts) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img,0,0);
    for (var i in texts) {
      ctx.font = "50px Comic Sans MS";
      ctx.fillStyle = color;
      ctx.textAlign = "center";
      ctx.fillText(new_texts[i].value, texts[i].x, texts[i].y);
    }
  }


  var inp = [];
  for (var i in texts) {
      var ii = i - 0 + 1;
      inp[i] = document.getElementById("in" + ii + "" + id);
      inp[i].value = texts[i].text;
      inp[i].oninput = () =>{
        this.write(inp);
      }
    }
  //var inp1 = document.getElementById("in1" + id);
  //var inp2 = document.getElementById("in2" + id);
/*
  inp1.oninput = () =>{
    this.write([inp1.value, inp2.value]);
  }
  inp2.oninput = () =>{
   
    this.write([inp1.value, inp2.value]);
  }
*/

  var dvl = document.getElementById("dvl" + id);

  dvl.onclick = ()=> {
    download(canvas, 'myimage.png');
  }

  var back = document.getElementById("back" + id);
  back.onclick = () =>{
    start();
  }
}

// скаченая непонятная залупа 
function download(canvas, filename) {
  var lnk = document.createElement('a'), e;
  lnk.download = filename;
  lnk.href = canvas.toDataURL("image/png;base64");
  if (document.createEvent) {
    e = document.createEvent("MouseEvents");
    e.initMouseEvent("click", true, true, window,
                     0, 0, 0, 0, 0, false, false, false,
                     false, 0, null);

    lnk.dispatchEvent(e);
  } else if (lnk.fireEvent) {
    lnk.fireEvent("onclick");
  }
}


function load_mem(id, scr, texts, color){
  var img = new Image();
  img.src = scr;
  img.className = "mem_img";
  img.id = "mem_img" + id;


  document.getElementById("root").append(img);

  var img =  document.getElementById("mem_img" + id);
  img.onclick = () => {
    new Mem(id, scr, texts, color);
  }

}


function start() {

  document.getElementById("root").innerHTML = "";
  new load_mem(1, "mem1.jpg", [{text: "No", x: 700, y:100}, {text: "Yes", x: 700, y:600}], "#000000");
  new load_mem(2, "mem5.jpg", [{text: "Oyhh", x: 350, y:350}], "#FFFFFF");
  new load_mem(3, "mem6.jpg", [{text: "Lapotaa", x: 350, y:350}], "#FFFFFF");

}




function main()
{
  start();
}

main();
