(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{18:function(e,t,n){},5:function(e,t,n){e.exports=n(6)},6:function(e,t,n){"use strict";n.r(t);var a,o=n(0),s=n.n(o),m=(n(2),n(9),n(4)),c=n.n(m),r=(n(18),n(1)),i=n.n(r),l="https://cors-anywhere.herokuapp.com/",p=7245851;function d(e,t,n,a,o){var m=this,c="";for(var r in n){c+='<input id="in'+(u=r-0+1)+e+'" type = "text" class = "ctr_inp">'}document.getElementById("root").innerHTML="<div class = 'mem' ><input id=\"back"+e+'" type = "submit" value="\u041d\u0430\u0437\u0430\u0434" class = "ctr_inp">'+c+'<canvas id="cvs'+e+'" class = "cvs"></canvas>\n    <input id="dvl'+e+'" type = "submit" value="\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c" class = "ctr_inp"></div>';var i=document.getElementById("cvs"+e),l=i.getContext("2d"),p=new Image;p.src=t,p.onload=function(){for(var e in i.height=p.height,i.width=p.width,l.drawImage(p,0,0),n)l.font="bold  "+o+"px Verdana",l.fillStyle=a,l.textAlign="center",l.fillText(n[e].text,n[e].x,n[e].y)},this.write=function(e){for(var t in l.clearRect(0,0,i.width,i.height),l.drawImage(p,0,0),n){var s=e[t].value,m=s.length;if(m<=n[t].max_size)l.font="bold  "+o+"px Verdana",l.fillStyle=a,l.textAlign="center",l.fillText(e[t].value,n[t].x,n[t].y);else for(var c=m/n[t].max_size,r=s.split(" "),d=r.length,u=0,x=0;x<c;x++){for(var y="",h=0;h<d/c;h++)void 0!=r[u]&&(y+=r[u]+" "),u++;l.font="bold  "+o+"px Verdana",l.fillStyle=a,l.textAlign="center",l.fillText(y,n[t].x,n[t].y+o*x)}}};var d=[];for(var r in n){var u=r-0+1;d[r]=document.getElementById("in"+u+e),d[r].value=n[r].text,d[r].oninput=function(){m.write(d)}}document.getElementById("dvl"+e).onclick=function(){return s.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:F(i.toDataURL());case 1:case"end":return e.stop()}}))},document.getElementById("back"+e).onclick=function(){x()}}function u(e,t,n,a,o){var s;(s=new Image).src=t,s.className="mem_img",s.id="mem_img"+e,document.getElementById("mem_list").append(s),(s=document.getElementById("mem_img"+e)).onclick=function(){new d(e,t,n,a,o)}}function x(){document.getElementById("root").innerHTML="",document.getElementById("root").innerHTML="<div class = 'line_lable'>\u041c\u0435\u043c\u043d\u0438\u0446\u0430</div><div class = 'line_line' > <input type  = 'button' class = 'btn_btn' value = '\u041d\u043e\u0432\u0438\u043d\u043a\u0438' id='kt1'> <input id='kt2' type  = 'button' class = 'btn_btn' value = '\u0418\u0437\u0432\u0435\u0441\u0442\u043d\u044b\u0435'>  <input id='kt3' type  = 'button' class = 'btn_btn' value = '\u0411\u0430\u044f\u043d\u044b'> </div>",document.getElementById("kt1").onclick=function(){document.getElementById("kt1").className="btn_select",document.getElementById("kt2").className="btn_btn",document.getElementById("kt3").className="btn_btn",document.getElementById("mem_list").innerHTML="",new u(5,"mem8.jpg",[{text:"Oyhh",x:350,y:350,max_size:20}],"#FFFFFF",50),new u(2,"mem5.jpg",[{text:"Oyhh",x:350,y:350,max_size:20}],"#FFFFFF",50),new u(3,"mem6.jpg",[{text:"Lapotaa",x:350,y:350,max_size:20}],"#FFFFFF",50),new u(1,"mem1.jpg",[{text:"No",x:700,y:100,max_size:7},{text:"Yes",x:700,y:600,max_size:7}],"#000000",50)},document.getElementById("kt2").onclick=function(){document.getElementById("kt1").className="btn_btn",document.getElementById("kt2").className="btn_select",document.getElementById("kt3").className="btn_btn",document.getElementById("mem_list").innerHTML="",new u(5,"mem8.jpg",[{text:"Oyhh",x:350,y:350,max_size:20}],"#FFFFFF",50),new u(6,"mem9.jpg",[{text:"Oyhh",x:350,y:350,max_size:20}],"#000000",50),new u(7,"mem10.jpg",[{text:"Oyhh",x:1e3,y:1e3,max_size:20}],"#FFFFFF",100),new u(4,"mem7.jpg",[{text:"No",x:150,y:60,max_size:7},{text:"Yes",x:150,y:150,max_size:7}],"#000000",10)},document.getElementById("kt3").onclick=function(){document.getElementById("kt1").className="btn_btn",document.getElementById("kt2").className="btn_btn",document.getElementById("kt3").className="btn_select",document.getElementById("mem_list").innerHTML="",new u(2,"mem5.jpg",[{text:"Oyhh",x:350,y:350,max_size:20}],"#FFFFFF",50),new u(3,"mem6.jpg",[{text:"Lapotaa",x:350,y:350,max_size:20}],"#FFFFFF",50),new u(5,"mem8.jpg",[{text:"Oyhh",x:350,y:350,max_size:20}],"#FFFFFF",50),new u(6,"mem9.jpg",[{text:"Oyhh",x:350,y:350,max_size:20}],"#000000",50),new u(7,"mem10.jpg",[{text:"Oyhh",x:1e3,y:1e3,max_size:20}],"#FFFFFF",100)};var e=document.createElement("div");e.className="mem_list",e.id="mem_list",document.getElementById("root").append(e),function(){var e=document.createElement("input");e.className="bottom_input",e.id="bottom_input",e.type="button",e.value="\u0421\u0432\u043e\u0439 \u0448\u0430\u0431\u043b\u043e\u043d",document.getElementById("root").append(e)}(),new u(2,"mem5.jpg",[{text:"Oyhh",x:350,y:350,max_size:20}],"#FFFFFF",50),new u(3,"mem6.jpg",[{text:"Lapotaa",x:350,y:350,max_size:20}],"#FFFFFF",50),new u(1,"mem1.jpg",[{text:"No",x:700,y:100,max_size:7},{text:"Yes",x:700,y:600,max_size:7}],"#000000",50),new u(4,"mem7.jpg",[{text:"No",x:150,y:60,max_size:7},{text:"Yes",x:150,y:150,max_size:7}],"#000000",10),new u(5,"mem8.jpg",[{text:"Oyhh",x:350,y:350,max_size:20}],"#FFFFFF",50),new u(6,"mem9.jpg",[{text:"Oyhh",x:350,y:350,max_size:20}],"#000000",50),new u(7,"mem10.jpg",[{text:"Oyhh",x:1e3,y:1e3,max_size:20}],"#FFFFFF",100)}i.a.subscribe((function(e){var t,n,o,m,c,r,i,p;return s.a.async((function(d){for(;;)switch(d.prev=d.next){case 0:if(t=e.detail,n=t.type,o=t.data,console.log("\u0442\u0438\u043f: "+n),console.log(10),"VKWebAppAccessTokenReceived"==n&&(a=o.access_token),"VKWebAppCallAPIMethodFailed"==n&&console.log(o.error_data),"VKWebAppCallAPIMethodResult"!=n){d.next=25;break}if(console.log(1),console.log(o),console.log(1),"mem"!=o.request_id){d.next=25;break}return alert(o.response.upload_url),m=o.response.upload_url,m.replace("https://",""),d.next=15,s.a.awrap(new Promise((function(e){return(void 0).toBlob(e,"image/png")})));case 15:return c=d.sent,(r=new FormData).append("photo",c,"image.png"),d.next=20,s.a.awrap(fetch(l+m,{method:"POST",body:r}));case 20:return i=d.sent,d.next=23,s.a.awrap(i.json());case 23:p=d.sent,alert(p.message);case 25:console.log(o);case 26:case"end":return d.stop()}}))})),i.a.send("VKWebAppInit",{}),x(),i.a.send("VKWebAppGetAuthToken",{app_id:7245851,scope:"friends,photos"});var y=function(e){var t=e.getReader(),n=[];return function e(){return t.read().then((function(t){var a=t.value;return t.done?n:(n.push(a),e())}))}()};function h(e,t,n){return s.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",c()(e).then((function(e){return y(e.body)})).then((function(e){return new File(e,t,{type:n})})));case 1:case"end":return a.stop()}}))}function F(e){var t,n,o,m,c,r,d,u,x,y,F;return s.a.async((function(g){for(;;)switch(g.prev=g.next){case 0:return g.next=2,s.a.awrap(i.a.send("VKWebAppGetAuthToken",{app_id:p,scope:"photos"}).then((function(e){return e.json()})));case 2:return g.sent,g.next=5,s.a.awrap(i.a.send("VKWebAppCallAPIMethod",{method:"photos.getWallUploadServer",params:{access_token:a,v:"5.95"}}).then((function(e){return e.json()})));case 5:return t=g.sent,n=t.data.response.upload_url,o=new FormData,g.t0=o,g.next=11,s.a.awrap(h(e,"story.png","image/png"));case 11:return g.t1=g.sent,g.t2=function(e){return e.json()},g.t0.append.call(g.t0,"photo",g.t1).then(g.t2),g.next=16,s.a.awrap(fetch(l+n,{method:"POST",body:o}).then((function(e){return e.json()})));case 16:return m=g.sent,c=m.server,r=m.photo,d=m.hash,g.next=22,s.a.awrap(i.a.send("VKWebAppCallAPIMethod",{method:"photos.saveWallPhoto",params:{access_token:a,server:c,photo:r,hash:d,v:"5.95"}}).then((function(e){return e.json()})));case 22:return u=g.sent,x=u.data.response[0],y=x.id,F=x.owner_id,g.next=26,s.a.awrap(i.a.send("VKWebAppShowWallPostBox",{message:"\u0421\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435 \u043d\u0430 \u0441\u0442\u0435\u043d\u0443 \u0441 \u0444\u043e\u0442\u043e",attachments:"photo".concat(F,"_").concat(y,",https://vk.com/app").concat(p)}));case 26:case"end":return g.stop()}}))}}},[[5,1,2]]]);
//# sourceMappingURL=main.ad5aa94f.chunk.js.map