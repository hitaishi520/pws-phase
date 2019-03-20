function getfile(file,callback) {
  var xhr=new XMLHttpRequest();
  xhr.overrideMimeType("Application/json");
  xhr.open('GET',file,true);
  xhr.onreadystatechange=function() {
    if(xhr.readyState===4 && xhr.status=="200"){
    callback(xhr.responseText);
  }
}
xhr.send(null);
}
getfile("dynamic.json",function(text) {
  var data=JSON.parse(text);
  console.log(data);
  profile(data.basics);
  carrer(data.carrier);
  education(data.education);
  skill(data.skills);
})
var parent=document.querySelector(".parent");
var left=document.querySelector(".left");
var right=document.querySelector(".right");
function profile(pro) {
  var image=document.createElement('img');
  image.src=pro.img;
  left.appendChild(image);
  parent.appendChild(left);
  var hr=document.createElement('hr');
  left.appendChild(hr);
  var y=document.createElement('h2');
  y.textContent=pro.name;
  left.appendChild(y);
  var x=document.createElement('p');
  x.textContent=pro.Rollno;
  left.appendChild(x);
}
function carrer(p) {
  var u=document.createElement('h1');
  u.textContent="carrier objective";
  right.appendChild(u);
  parent.appendChild(right);
  var hr =document.createElement('hr');
  right.append(hr);
  var u=document.createElement('p');
  u.textContent=" my aim is to achieve goals ";
  right.appendChild(u);
  parent.appendChild(right);

}
function education (edu) {
  var h2=document.createElement('h2');
  h2.textContent="EDUCATION DETAILS";
  right.appendChild(h2);
  var hr=document.createElement('hr');
  right.append(hr);

  var table=document.createElement('table');
  table.border="3"
  let row='';
  let field="<tr>"+"<th>"+"sno"+"</th>"+"<th>"+"degree"+"</th>"+"<th>"+"institution"+"</th>"+"<th>"+"percentage"+"</th>"+"</th>";
  for(i in edu){
    row+="<tr>"+"<td>"+edu[i].sno+"</td>"+"<td>"+edu[i].degree+"</td>"+"<td>"+edu[i].institution+"</td>"+"<td>"+edu[i].percentage+"</td>"+"</tr>";
  }
  table.innerHTML=field+row;
  right.appendChild(table);
  parent.appendChild(right);
}
function skill(x) {
  var hh=document.createElement("h2");
  hh.textContent="technical skils";
  right.append(hh);
  var ul=document.createElement(ul);
  right.append(ul);
  for (i in x){
    var li=document.createElement("li");
    li.textContent=x[i].info;
    ul.append(li);


  }

}





function carrier(c) {
  var rh =document.createElement("h1");
  rh.textContent="resume";
  right.append(rh)

}
