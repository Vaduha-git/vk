import React from 'react';
import ReactDOM from 'react-dom';
import fetchStream from 'fetch-readablestream';
import './index.css';


import connect from '@vkontakte/vk-connect';

const CORS_PROXY = "https://cors-anywhere.herokuapp.com/";
const APP_ID = 7245851;

function postResult(){
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "test_selected_category.php", false);
    xhr.setRequestHeader('Content-Type', "URL");
    xhr.send("photo=" + "1");
    alert("anv: " + xhr.responseText);
   
    
}


var ACCESS_TOKEN, CANVAS_SEND, PHOTO,ANSV_URL;

//connect.send('7245851'); 


connect.subscribe(async (event) =>  {

  const { type, data } = event.detail;

  
  if (type == "VKWebAppAccessTokenReceived") {
    ACCESS_TOKEN = data.access_token;
    //alert(ACCESS_TOKEN);
  }
  if (type == "VKWebAppCallAPIMethodFailed") {
    //alert(data.error_data);
    console.log(data.error_data);
  }

  
  if (type == "VKWebAppCallAPIMethodResult") {

    ANSV_URL = data; 

    console.log(1);
    console.log(data);
    console.log(1);
    if (data.request_id == "mem") {
      alert(data.response.upload_url);


      var upload_url = data.response.upload_url;


      var link = upload_url.replace("https://", "");



      
      let imageBlob = await new Promise(resolve => CANVAS_SEND.toBlob(resolve, 'image/png'));

      let formData = new FormData();
      //formData.append("firstName", "John");
      formData.append("photo", imageBlob, "image.png");

      let response = await fetch(CORS_PROXY + upload_url, {
        method: 'POST',
        body: formData
      });
      let result = await response.json();
      alert(result.message);



      
    }




    }
  

  
 
  console.log(data);
  //alert( "type: " + type);


 
 
}); 

connect.send("VKWebAppInit", {});

function Mem(id, scr, texts, color, size)
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
    <input id="dvl`+id+`" type = "submit" value="Отправить" class = "ctr_inp"></div>`; 

    var canvas = document.getElementById("cvs" + id);
    var ctx = canvas.getContext('2d');

    var img = new Image();
    img.src = scr;
    img.onload = () => {
      canvas.height = img.height;
      canvas.width = img.width;

      ctx.drawImage(img,0,0);
      for (var i in texts) {
        ctx.font = "bold  " +size +"px Verdana";
        ctx.fillStyle = color;
        ctx.textAlign = "center";
        ctx.fillText(texts[i].text, texts[i].x, texts[i].y);
      }   
    }

    this.write = function (new_texts) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img,0,0);
      for (var i in texts) {

        var lable = new_texts[i].value;
        var lll =  lable.length;

        if (lll <= texts[i].max_size) {
          ctx.font = "bold  " +size +"px Verdana";
          ctx.fillStyle = color;
          ctx.textAlign = "center";
          ctx.fillText(new_texts[i].value, texts[i].x, texts[i].y);
        }
        else {
          var nnn = lll/texts[i].max_size;
          var words = lable.split(" ");
          var n_words = words.length;
   

          var count = 0

          for (var j = 0; j < nnn; j++) {
          var new_string = "";



           for (var k = 0; k < n_words/nnn; k++) {

            if (words[count] != undefined)
            new_string+= words[count] + " ";
            //console.log (Math.floor(j*n_words/nnn) + k);
            count++;

           } 



            ctx.font = "bold  " +size +"px Verdana";
            ctx.fillStyle = color;
            ctx.textAlign = "center";
            ctx.fillText(new_string, texts[i].x, texts[i].y + size*j);           
          }
        }


      }
    }


    var  inp = [];
    for (var i in texts) {
      var ii = i - 0 + 1;
      inp[i] = document.getElementById("in" + ii + "" + id);
      inp[i].value = texts[i].text;
      inp[i].oninput = () =>{
        this.write(inp);
      }
    }

  var dvl = document.getElementById("dvl" + id);

  dvl.onclick = async ()=> {
   
   for ( var i in inp) inp[i].remove();

    canvas.style.marginTop = "20px";

    dvl.value = "Генерация мема ..."
    dvl.onclick = null;
    await publishOnWall(canvas.toDataURL(), dvl);



    dvl.value = "Отправить в диалог"

  }

  var back = document.getElementById("back" + id);
  back.onclick = () =>{
    start();
  }
}



function blobToFile(theBlob, fileName){
    //A Blob() is almost a File() - it's just missing the two properties below which we will add
    theBlob.lastModifiedDate = new Date();
    theBlob.name = fileName;
    return theBlob;
}


function load_mem(id, scr, texts, color, size){
  var img = new Image();
  img.src = scr;
  img.className = "mem_img";
  img.id = "mem_img" + id;
  document.getElementById("mem_list").append(img);
  var img =  document.getElementById("mem_img" + id);
  img.onclick = () => {
    new Mem(id, scr, texts, color, size);
  }
}

function load_line()
{
  var html = "<div class = 'line_lable' ><a  class = 'href'  href='https://vk.com/public189857738'>Go в Мемницу</a>  </div>  <div class = 'line_line' > <input type  = 'button' class = 'btn_btn' value = 'Новинки' id='kt1'> <input id='kt2' type  = 'button' class = 'btn_btn' value = 'Известные'>  <input id='kt3' type  = 'button' class = 'btn_btn' value = 'Баяны'> </div>"
  document.getElementById("root").innerHTML = html ;
  document.getElementById("kt1").onclick = ()=> {

    document.getElementById("kt1").className = "btn_select";
    document.getElementById("kt2").className = "btn_btn";
    document.getElementById("kt3").className = "btn_btn";



    document.getElementById("mem_list").innerHTML = "";
    new load_mem(5, "mem8.jpg", [{text: "Oyhh", x: 350, y:300, max_size: 20}], "#FFFFFF", 50);
    new load_mem(2, "mem5.jpg", [{text: "Oyhh", x: 350, y:300, max_size: 20}], "#FFFFFF", 50);
    new load_mem(3, "mem6.jpg", [{text: "Lapotaa", x: 350, y:300,max_size: 20}], "#FFFFFF", 50);
    new load_mem(1, "mem1.jpg", [{text: "No", x: 700, y:100, max_size: 7}, {text: "Yes", x: 700, y:600, max_size: 7}], "#000000", 50);

  }
  document.getElementById("kt2").onclick = ()=> {

    document.getElementById("kt1").className = "btn_btn";
    document.getElementById("kt2").className = "btn_select";
    document.getElementById("kt3").className = "btn_btn";

    document.getElementById("mem_list").innerHTML = "";

    
    new load_mem(5, "mem8.jpg", [{text: "Oyhh", x: 350, y:300, max_size: 20}], "#FFFFFF", 50);
    new load_mem(6, "mem9.jpg", [{text: "Oyhh", x: 350, y:300, max_size: 20}], "#000000", 50);
    new load_mem(7, "mem10.jpg", [{text: "Oyhh", x: 1000, y:1000, max_size: 20}], "#FFFFFF", 100);
    new load_mem(4, "mem7.jpg", [{text: "No", x: 150, y:60, max_size: 7}, {text: "Yes", x: 150, y:150, max_size: 7}], "#000000", 10);   
  }
  document.getElementById("kt3").onclick = ()=> {


    document.getElementById("kt1").className = "btn_btn";
    document.getElementById("kt2").className = "btn_btn";
    document.getElementById("kt3").className = "btn_select";

    document.getElementById("mem_list").innerHTML = "";
    new load_mem(2, "mem5.jpg", [{text: "Oyhh", x: 350, y:300, max_size: 20}], "#FFFFFF", 50);
    new load_mem(3, "mem6.jpg", [{text: "Lapotaa", x: 350, y:300,max_size: 20}], "#FFFFFF", 50);
 
    new load_mem(5, "mem8.jpg", [{text: "Oyhh", x: 350, y:300, max_size: 20}], "#FFFFFF", 50);
    new load_mem(6, "mem9.jpg", [{text: "Oyhh", x: 350, y:300, max_size: 20}], "#000000", 50);
    new load_mem(7, "mem10.jpg", [{text: "Oyhh", x: 1000, y:1000, max_size: 20}], "#FFFFFF", 100);  
  }
}

function load_bottom() {
   var bottom = document.createElement("input");
  bottom.className = "bottom_input";
  bottom.id = "bottom_input";
  bottom.type = "button";
  bottom.value  = "Свой шаблон"
  document.getElementById("root").append(bottom);
}

function start() {
  document.getElementById("root").innerHTML = "";



  load_line();


  var _div = document.createElement("div");
  _div.className = "mem_list";
  _div.id = "mem_list";
  document.getElementById("root").append(_div);

  load_bottom();

  
  new load_mem(2, "mem5.jpg", [{text: "Oyhh", x: 350, y:300, max_size: 20}], "#FFFFFF", 50);
  new load_mem(3, "mem6.jpg", [{text: "Lapotaa", x: 350, y:300,max_size: 20}], "#FFFFFF", 50);
  new load_mem(1, "mem1.jpg", [{text: "No", x: 700, y:100, max_size: 7}, {text: "Yes", x: 700, y:600, max_size: 7}], "#000000", 50);
  new load_mem(4, "mem7.jpg", [{text: "No", x: 150, y:60, max_size: 7}, {text: "Yes", x: 150, y:150, max_size: 7}], "#000000", 10);
  new load_mem(5, "mem8.jpg", [{text: "Oyhh", x: 350, y:300, max_size: 20}], "#FFFFFF", 50);
  new load_mem(6, "mem9.jpg", [{text: "Oyhh", x: 350, y:300, max_size: 20}], "#000000", 50);
  new load_mem(7, "mem10.jpg", [{text: "Oyhh", x: 1000, y:1000, max_size: 20}], "#FFFFFF", 100);


}




function main()
{

  start();
  connect.send("VKWebAppGetAuthToken", {"app_id": 7245851, "scope":  "friends,photos"});
}

main();





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





const readAllChunks = (readableStream) => {
    const reader = readableStream.getReader();
    const chunks = [];

    const pump = () => {
        return reader.read().then(({value, done}) => {
            if (done)
                return chunks;
            chunks.push(value);
            return pump();
        });
    }

    return pump();
}



 




async function fetchFileStream(fileAddress, filename, imgType) {
    return fetchStream(fileAddress)
        .then((response) => readAllChunks(response.body))
        .then((chunks) => new File(chunks, filename, {type: imgType}));
}

  async function publishOnWall(wallPhoto, dvl) {
        const authToken = await connect.sendPromise("VKWebAppGetAuthToken", {
            "app_id": APP_ID,
            "scope": "photos"
        })

        

        const serverToPhoto = await connect.sendPromise("VKWebAppCallAPIMethod", {
            method: "photos.getWallUploadServer",
            params: {access_token: ACCESS_TOKEN, v: "5.95"}
        });

        

        console.log("tophoto" + serverToPhoto);
        console.log(serverToPhoto);

        const uploadUrl = serverToPhoto.response.upload_url;
        const request = new FormData();

        request.append("photo", await fetchFileStream(wallPhoto, "story.png", 'image/png'));

        const {server, photo, hash} = await fetch(CORS_PROXY + uploadUrl, {
            method: "POST",
            body: request
        }).then((response) => response.json());

        console.log(photo);


        const res = await connect.sendPromise("VKWebAppCallAPIMethod", {
            method: "photos.saveWallPhoto",
            params: {
                access_token: ACCESS_TOKEN, server, photo, hash,
                v: "5.95"
            }
        })
        console.log("res: " + res);
        console.log(res);
        var {id: photo_id, owner_id} = res.response[0];




        var photo_test = await connect.sendPromise("VKWebAppShowWallPostBox", {
            message: ``,
            attachments: `photo${owner_id}_${photo_id}`
        });


        console.log("res: " + photo_test);
        console.log(photo_test);


      
           var bottom = document.createElement("input");
          bottom.className = "bottom_input";
          bottom.id = "share";
          bottom.type = "button";
          bottom.value  = "Отправить в сообщество";
          document.getElementById("root").append(bottom);


          bottom.onclick =  async() => {
              /*

            var pub = await connect.sendPromise("VKWebAppCallAPIMethod", {
               method: "groups.get",
               params: {access_token: ACCESS_TOKEN, v: "5.95"},
               user_id: owner_id,
            });

            var pub_adm_id = [];
            for (var i  in pub.response.items )  {
              if (pub.response.items[i].is_admin ==  1) {
                pub_adm_id.push(pub.response.items[i]);
              }
            }
            console.log(pub_adm_id);

            for (var i  in pub_adm_id ) {
              var bt = document.createElement("input");
              bt.className = "bottom_input";
              bt.type = "button";

               bt.value  = pub_adm_id[i].screen_name;
              document.getElementById("root").append(bt);

              bt.onclick = async()=> {
                       connect.sendPromise("VKWebAppCallAPIMethod", {
                        method: "wall.post",
                        params: {access_token: ACCESS_TOKEN, v: "5.95", owner_id: pub_adm_id[i].id, friends_only: 0, from_group: 0,  message:"", attachments: `photo${owner_id}_${photo_id}`}
                    });
                            
              }

            }
            */
              
          }




          dvl.onclick = () => {

            var rsp = res.response[0];
            console.log(rsp);
            var n_m = res.response[0].sizes[res.response[0].sizes.length-1];
            console.log(n_m);


            console.log("https://vk.com/photo" + owner_id + "_" + photo_id);

            //alert("https://vk.com/photo" + owner_id + "_" + photo_id);


              owner_id = String(owner_id);
              owner_id = owner_id.replace(" ", "");
              photo_id = String(photo_id);
              photo_id = photo_id.replace(" ", "");

             // alert(photo_id);

            connect.send("VKWebAppShare", {"link": "https://vk.com/photo" + owner_id + "_" + photo_id});
          }
           




    }