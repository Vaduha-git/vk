(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{10:function(e,t,n){},3:function(e,t,n){e.exports=n(4)},4:function(e,t,n){"use strict";n.r(t);n(1),n(6),n(10);var i=n(0),a=n.n(i);function o(e,t,n,i){var o=this,c="";for(var s in n){c+='<input id="in'+(u=s-0+1)+e+'" type = "text" class = "ctr_inp">'}document.getElementById("root").innerHTML="<div class = 'mem' ><input id=\"back"+e+'" type = "submit" value="\u041d\u0430\u0437\u0430\u0434" class = "ctr_inp">'+c+'<canvas id="cvs'+e+'" class = "cvs"></canvas>\n    <input id="dvl'+e+'" type = "submit" value="\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c" class = "ctr_inp"></div> "';var m=document.getElementById("cvs"+e),r=m.getContext("2d"),d=new Image;d.src=t,d.onload=function(){for(var e in m.height=d.height,m.width=d.width,r.drawImage(d,0,0),n)r.font="50px IMPACT Sans MS",r.fillStyle=i,r.textAlign="center",r.fillText(n[e].text,n[e].x,n[e].y)},this.write=function(e){for(var t in r.clearRect(0,0,m.width,m.height),r.drawImage(d,0,0),n){var a=e[t].value,o=a.length;if(o<=n[t].max_size)r.font="50px IMPACT Sans MS",r.fillStyle=i,r.textAlign="center",r.fillText(e[t].value,n[t].x,n[t].y);else for(var c=o/n[t].max_size,l=a.split(" "),s=l.length,p=0,u=0;u<c;u++){for(var v="",x=0;x<s/c;x++)void 0!=l[p]&&(v+=l[p]+" "),p++;r.font="50px IMPACT Sans MS",r.fillStyle=i,r.textAlign="center",r.fillText(v,n[t].x,n[t].y+40*u)}}};var p=[];for(var s in n){var u=s-0+1;p[s]=document.getElementById("in"+u+e),p[s].value=n[s].text,p[s].oninput=function(){o.write(p)}}document.getElementById("dvl"+e).onclick=function(){a.a.send("VKWebAppCallAPIMethod",{method:"photos.getWallUploadServer",request_id:"32test",params:{user_ids:"1",v:"5.103",access_token:"your_token"}})},document.getElementById("back"+e).onclick=function(){l()}}function c(e,t,n,i){var a;(a=new Image).src=t,a.className="mem_img",a.id="mem_img"+e,document.getElementById("root").append(a),(a=document.getElementById("mem_img"+e)).onclick=function(){new o(e,t,n,i)}}function l(){document.getElementById("root").innerHTML="",new c(1,"mem1.jpg",[{text:"No",x:700,y:100,max_size:10},{text:"Yes",x:700,y:600,max_size:10}],"#000000"),new c(2,"mem5.jpg",[{text:"Oyhh",x:350,y:350,max_size:20}],"#FFFFFF"),new c(3,"mem6.jpg",[{text:"Lapotaa",x:350,y:350,max_size:20}],"#FFFFFF")}a.a.subscribe((function(e){var t=e.detail,n=t.type;t.data;console.log(n),alert(n)})),a.a.send("VKWebAppInit",{}),l()}},[[3,1,2]]]);
//# sourceMappingURL=main.95aebe0e.chunk.js.map