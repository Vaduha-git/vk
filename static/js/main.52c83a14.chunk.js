(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{18:function(e,t,n){},5:function(e,t,n){e.exports=n(6)},6:function(e,t,n){"use strict";n.r(t);var a=n(0),m=n.n(a),o=(n(2),n(9),n(4),n(18),n(1)),s=n.n(o),i="https://cors-anywhere.herokuapp.com/";function c(e,t,n,a,o){var i=this,c="";for(var l in n){c+='<input id="in'+(y=l-0+1)+e+'" type = "text" class = "ctr_inp">'}document.getElementById("root").innerHTML="<div class = 'mem' ><input id=\"back"+e+'" type = "submit" value="\u041d\u0430\u0437\u0430\u0434" class = "ctr_inp">'+c+'<canvas id="cvs'+e+'" class = "cvs"></canvas>\n    <input id="dvl'+e+'" type = "submit" value="\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c" class = "ctr_inp"></div>';var p=document.getElementById("cvs"+e),x=p.getContext("2d"),u=new Image;u.src=t,u.onload=function(){for(var e in p.height=u.height,p.width=u.width,x.drawImage(u,0,0),n)x.font="bold  "+o+"px Verdana",x.fillStyle=a,x.textAlign="center",x.fillText(n[e].text,n[e].x,n[e].y)},this.write=function(e){for(var t in x.clearRect(0,0,p.width,p.height),x.drawImage(u,0,0),n){var m=e[t].value,s=m.length;if(s<=n[t].max_size)x.font="bold  "+o+"px Verdana",x.fillStyle=a,x.textAlign="center",x.fillText(e[t].value,n[t].x,n[t].y);else for(var i=s/n[t].max_size,c=m.split(" "),l=c.length,d=0,r=0;r<i;r++){for(var y="",F=0;F<l/i;F++)void 0!=c[d]&&(y+=c[d]+" "),d++;x.font="bold  "+o+"px Verdana",x.fillStyle=a,x.textAlign="center",x.fillText(y,n[t].x,n[t].y+o*r)}}};var r=[];for(var l in n){var y=l-0+1;r[l]=document.getElementById("in"+y+e),r[l].value=n[l].text,r[l].oninput=function(){i.write(r)}}document.getElementById("dvl"+e).onclick=function(){return m.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:s.a.send("VKWebAppShowImages",{images:['canvas.toDataURL("image/png;base64")']});case 1:case"end":return e.stop()}}))},document.getElementById("back"+e).onclick=function(){d()}}function l(e,t,n,a,m){var o;(o=new Image).src=t,o.className="mem_img",o.id="mem_img"+e,document.getElementById("mem_list").append(o),(o=document.getElementById("mem_img"+e)).onclick=function(){new c(e,t,n,a,m)}}function d(){document.getElementById("root").innerHTML="",document.getElementById("root").innerHTML="<div class = 'line_lable'>\u041c\u0435\u043c\u043d\u0438\u0446\u0430</div><div class = 'line_line' > <input type  = 'button' class = 'btn_btn' value = '\u041d\u043e\u0432\u0438\u043d\u043a\u0438' id='kt1'> <input id='kt2' type  = 'button' class = 'btn_btn' value = '\u0418\u0437\u0432\u0435\u0441\u0442\u043d\u044b\u0435'>  <input id='kt3' type  = 'button' class = 'btn_btn' value = '\u0411\u0430\u044f\u043d\u044b'> </div>",document.getElementById("kt1").onclick=function(){document.getElementById("kt1").className="btn_select",document.getElementById("kt2").className="btn_btn",document.getElementById("kt3").className="btn_btn",document.getElementById("mem_list").innerHTML="",new l(5,"mem8.jpg",[{text:"Oyhh",x:350,y:350,max_size:20}],"#FFFFFF",50),new l(2,"mem5.jpg",[{text:"Oyhh",x:350,y:350,max_size:20}],"#FFFFFF",50),new l(3,"mem6.jpg",[{text:"Lapotaa",x:350,y:350,max_size:20}],"#FFFFFF",50),new l(1,"mem1.jpg",[{text:"No",x:700,y:100,max_size:7},{text:"Yes",x:700,y:600,max_size:7}],"#000000",50)},document.getElementById("kt2").onclick=function(){document.getElementById("kt1").className="btn_btn",document.getElementById("kt2").className="btn_select",document.getElementById("kt3").className="btn_btn",document.getElementById("mem_list").innerHTML="",new l(5,"mem8.jpg",[{text:"Oyhh",x:350,y:350,max_size:20}],"#FFFFFF",50),new l(6,"mem9.jpg",[{text:"Oyhh",x:350,y:350,max_size:20}],"#000000",50),new l(7,"mem10.jpg",[{text:"Oyhh",x:1e3,y:1e3,max_size:20}],"#FFFFFF",100),new l(4,"mem7.jpg",[{text:"No",x:150,y:60,max_size:7},{text:"Yes",x:150,y:150,max_size:7}],"#000000",10)},document.getElementById("kt3").onclick=function(){document.getElementById("kt1").className="btn_btn",document.getElementById("kt2").className="btn_btn",document.getElementById("kt3").className="btn_select",document.getElementById("mem_list").innerHTML="",new l(2,"mem5.jpg",[{text:"Oyhh",x:350,y:350,max_size:20}],"#FFFFFF",50),new l(3,"mem6.jpg",[{text:"Lapotaa",x:350,y:350,max_size:20}],"#FFFFFF",50),new l(5,"mem8.jpg",[{text:"Oyhh",x:350,y:350,max_size:20}],"#FFFFFF",50),new l(6,"mem9.jpg",[{text:"Oyhh",x:350,y:350,max_size:20}],"#000000",50),new l(7,"mem10.jpg",[{text:"Oyhh",x:1e3,y:1e3,max_size:20}],"#FFFFFF",100)};var e=document.createElement("div");e.className="mem_list",e.id="mem_list",document.getElementById("root").append(e),function(){var e=document.createElement("input");e.className="bottom_input",e.id="bottom_input",e.type="button",e.value="\u0421\u0432\u043e\u0439 \u0448\u0430\u0431\u043b\u043e\u043d",document.getElementById("root").append(e)}(),new l(2,"mem5.jpg",[{text:"Oyhh",x:350,y:350,max_size:20}],"#FFFFFF",50),new l(3,"mem6.jpg",[{text:"Lapotaa",x:350,y:350,max_size:20}],"#FFFFFF",50),new l(1,"mem1.jpg",[{text:"No",x:700,y:100,max_size:7},{text:"Yes",x:700,y:600,max_size:7}],"#000000",50),new l(4,"mem7.jpg",[{text:"No",x:150,y:60,max_size:7},{text:"Yes",x:150,y:150,max_size:7}],"#000000",10),new l(5,"mem8.jpg",[{text:"Oyhh",x:350,y:350,max_size:20}],"#FFFFFF",50),new l(6,"mem9.jpg",[{text:"Oyhh",x:350,y:350,max_size:20}],"#000000",50),new l(7,"mem10.jpg",[{text:"Oyhh",x:1e3,y:1e3,max_size:20}],"#FFFFFF",100)}s.a.subscribe((function(e){var t,n,a,o,s,c,l;return m.a.async((function(d){for(;;)switch(d.prev=d.next){case 0:if(t=e.detail,n=t.type,a=t.data,console.log("\u0442\u0438\u043f: "+n),console.log(10),"VKWebAppAccessTokenReceived"==n&&a.access_token,"VKWebAppCallAPIMethodFailed"==n&&console.log(a.error_data),"VKWebAppCallAPIMethodResult"!=n){d.next=21;break}if(console.log(1),console.log(a),console.log(1),"mem"!=a.request_id){d.next=21;break}return alert(a.response.upload_url),o=a.response.upload_url,s=o.replace("https://",""),alert(s),(void 0).toDataURL(),(c=new FormData).append("photo",void 0),d.next=19,m.a.awrap(fetch(i+s,{method:"POST",body:c}).then((function(e){e.json()})));case 19:l=d.sent,console.log(l);case 21:console.log(a);case 22:case"end":return d.stop()}}))})),s.a.send("VKWebAppInit",{}),d(),s.a.send("VKWebAppGetAuthToken",{app_id:7245851,scope:"friends,photos"})}},[[5,1,2]]]);
//# sourceMappingURL=main.52c83a14.chunk.js.map