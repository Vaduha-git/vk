(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{10:function(e,t,n){},3:function(e,t,n){e.exports=n(4)},4:function(e,t,n){"use strict";n.r(t);n(1),n(6),n(10);var o,a,i=n(0),s=n.n(i);function l(e,t,n,i){var l=this,r="";for(var d in n){r+='<input id="in'+(f=d-0+1)+e+'" type = "text" class = "ctr_inp">'}document.getElementById("root").innerHTML="<div class = 'mem' ><input id=\"back"+e+'" type = "submit" value="\u041d\u0430\u0437\u0430\u0434" class = "ctr_inp">'+r+'<canvas id="cvs'+e+'" class = "cvs"></canvas>\n    <input id="dvl'+e+'" type = "submit" value="\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c" class = "ctr_inp"></div> "';var p=document.getElementById("cvs"+e),m=p.getContext("2d"),u=new Image;u.src=t,u.onload=function(){for(var e in p.height=u.height,p.width=u.width,m.drawImage(u,0,0),n)m.font="50px IMPACT Sans MS",m.fillStyle=i,m.textAlign="center",m.fillText(n[e].text,n[e].x,n[e].y)},this.write=function(e){for(var t in m.clearRect(0,0,p.width,p.height),m.drawImage(u,0,0),n){var o=e[t].value,a=o.length;if(a<=n[t].max_size)m.font="50px IMPACT Sans MS",m.fillStyle=i,m.textAlign="center",m.fillText(e[t].value,n[t].x,n[t].y);else for(var s=a/n[t].max_size,l=o.split(" "),r=l.length,c=0,d=0;d<s;d++){for(var g="",f=0;f<r/s;f++)void 0!=l[c]&&(g+=l[c]+" "),c++;m.font="50px IMPACT Sans MS",m.fillStyle=i,m.textAlign="center",m.fillText(g,n[t].x,n[t].y+40*d)}}};var g=[];for(var d in n){var f=d-0+1;g[d]=document.getElementById("in"+f+e),g[d].value=n[d].text,g[d].oninput=function(){l.write(g)}}document.getElementById("dvl"+e).onclick=function(){a=p;s.a.send("VKWebAppCallAPIMethod",{method:"photos.getWallUploadServer",request_id:"mem",params:{v:"5.103",access_token:o}})},document.getElementById("back"+e).onclick=function(){c()}}function r(e,t,n,o){var a;(a=new Image).src=t,a.className="mem_img",a.id="mem_img"+e,document.getElementById("root").append(a),(a=document.getElementById("mem_img"+e)).onclick=function(){new l(e,t,n,o)}}function c(){document.getElementById("root").innerHTML="",new r(1,"mem1.jpg",[{text:"No",x:700,y:100,max_size:10},{text:"Yes",x:700,y:600,max_size:10}],"#000000"),new r(2,"mem5.jpg",[{text:"Oyhh",x:350,y:350,max_size:20}],"#FFFFFF"),new r(3,"mem6.jpg",[{text:"Lapotaa",x:350,y:350,max_size:20}],"#FFFFFF")}s.a.subscribe((function(e){var t=e.detail,n=t.type,i=t.data;if(console.log("\u0442\u0438\u043f: "+n),console.log(10),"VKWebAppAccessTokenReceived"==n&&(o=i.access_token,alert(o)),"VKWebAppCallAPIMethodFailed"==n&&(alert(i.error_data),console.log(i.error_data)),"VKWebAppCallAPIMethodResult"==n&&(console.log(1),console.log(i),console.log(1),"mem"==i.request_id)){alert(i.response.upload_url);var s={photo:a.toDataURL()},l=String(Math.random()).slice(2),r="--"+l+"\r\n",c="--"+l+"--\r\n",d=["\r\n"];for(var p in s)d.push('Content-Disposition: form-data; name="'+p+'"\r\n\r\n'+s[p]+"\r\n");d=d.join(r)+c;var m=new XMLHttpRequest;m.open("POST",s.response.upload_url,!0),m.setRequestHeader("Content-Type","multipart/form-data; boundary="+l),m.onreadystatechange=function(){4==this.readyState&&alert(this.responseText)},m.send(d)}console.log(i)})),s.a.send("VKWebAppInit",{}),c(),s.a.send("VKWebAppGetAuthToken",{app_id:7245851,scope:"friends,photos"})}},[[3,1,2]]]);
//# sourceMappingURL=main.e6440b01.chunk.js.map