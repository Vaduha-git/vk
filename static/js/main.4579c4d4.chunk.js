(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{10:function(e,t,n){},3:function(e,t,n){e.exports=n(4)},4:function(e,t,n){"use strict";n.r(t);n(1),n(6),n(10);var o,a=n(0),i=n.n(a);function l(e,t,n,a){var l=this,s="";for(var r in n){s+='<input id="in'+(g=r-0+1)+e+'" type = "text" class = "ctr_inp">'}document.getElementById("root").innerHTML="<div class = 'mem' ><input id=\"back"+e+'" type = "submit" value="\u041d\u0430\u0437\u0430\u0434" class = "ctr_inp">'+s+'<canvas id="cvs'+e+'" class = "cvs"></canvas>\n    <input id="dvl'+e+'" type = "submit" value="\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c" class = "ctr_inp"></div> "';var d=document.getElementById("cvs"+e),m=d.getContext("2d"),p=new Image;p.src=t,p.onload=function(){for(var e in d.height=p.height,d.width=p.width,m.drawImage(p,0,0),n)m.font="50px IMPACT Sans MS",m.fillStyle=a,m.textAlign="center",m.fillText(n[e].text,n[e].x,n[e].y)},this.write=function(e){for(var t in m.clearRect(0,0,d.width,d.height),m.drawImage(p,0,0),n){var o=e[t].value,i=o.length;if(i<=n[t].max_size)m.font="50px IMPACT Sans MS",m.fillStyle=a,m.textAlign="center",m.fillText(e[t].value,n[t].x,n[t].y);else for(var l=i/n[t].max_size,s=o.split(" "),c=s.length,r=0,u=0;u<l;u++){for(var g="",v=0;v<c/l;v++)void 0!=s[r]&&(g+=s[r]+" "),r++;m.font="50px IMPACT Sans MS",m.fillStyle=a,m.textAlign="center",m.fillText(g,n[t].x,n[t].y+40*u)}}};var u=[];for(var r in n){var g=r-0+1;u[r]=document.getElementById("in"+g+e),u[r].value=n[r].text,u[r].oninput=function(){l.write(u)}}document.getElementById("dvl"+e).onclick=function(){i.a.send("VKWebAppCallAPIMethod",{method:"photos.getWallUploadServer",request_id:"mem",params:{v:"5.103",access_token:o}})},document.getElementById("back"+e).onclick=function(){c()}}function s(e,t,n,o){var a;(a=new Image).src=t,a.className="mem_img",a.id="mem_img"+e,document.getElementById("root").append(a),(a=document.getElementById("mem_img"+e)).onclick=function(){new l(e,t,n,o)}}function c(){document.getElementById("root").innerHTML="",new s(1,"mem1.jpg",[{text:"No",x:700,y:100,max_size:10},{text:"Yes",x:700,y:600,max_size:10}],"#000000"),new s(2,"mem5.jpg",[{text:"Oyhh",x:350,y:350,max_size:20}],"#FFFFFF"),new s(3,"mem6.jpg",[{text:"Lapotaa",x:350,y:350,max_size:20}],"#FFFFFF")}i.a.subscribe((function(e){var t=e.detail,n=t.type,a=t.data;console.log("\u0442\u0438\u043f: "+n),console.log(10),"VKWebAppAccessTokenReceived"==n&&(o=a.access_token,alert(o)),"VKWebAppCallAPIMethodFailed"==n&&(alert(a.error_data),console.log(a.error_data)),"VKWebAppCallAPIMethodResult"==n&&(console.log(1),console.log(a),console.log(1),"mem"==a.request_id&&alert(e.detail.response.upload_url)),console.log(a)})),i.a.send("VKWebAppInit",{}),c(),i.a.send("VKWebAppGetAuthToken",{app_id:7245851,scope:"friends,photos"})}},[[3,1,2]]]);
//# sourceMappingURL=main.4579c4d4.chunk.js.map