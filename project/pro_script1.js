<!-- 날짜 -->
var d=new Date();
var year=d.getFullYear();
var month=d.getMonth();
var day=d.getDate();
var date=document.querySelector("h1");
date.innerHTML+=(year+"년 "+(month+1)+"월 "+day+"일 ");


<!-- N일차 -->
var a=1;
var N=document.querySelector('h2');
N.innerHTML+= (a+"일차");


<!-- 이미지 업로드 -->

var submit = document.getElementById('submitButton');
submit.onclick = showImage;

function showImage() {
  var newImage = document.getElementById('image-show').lastElementChild;
  newImage.style.visibility = "visible";

};

function loadFile(input) {
  var file = input.files[0];

  var name = document.getElementById('fileName');
  name.textContent = file.name;

  var newImage = document.createElement("img");
  newImage.setAttribute("class", 'img');

  newImage.src = URL.createObjectURL(file);   

  newImage.style.width = "350px";
  newImage.style.visibility = "hidden";
  newImage.style.objectFit = "contain";

  var container = document.getElementById('image-show');
  container.appendChild(newImage);
  
  suc++;
};


<!-- 완료 현황 -->
var suc=0;
var per=document.querySelector('h3');
per.innerHTML +=("완료 현황 : " + ((suc*100/a)+"%"));


<!-- prev, next버튼 기능구현 -->
var pre =document.getElementById('pre');
var next =document.getElementById('next');

pre.addEventListener("click", function() {
  if (a==1) {
    alert("이전 페이지가 존재하지 않습니다.");
  }
  
  else {
    a--;
    
    if(day==1) {
    
      if(month==0) {
        day=31;
        month=11;
        year=year-1;
      }
      
      else {
        day=32-new Date(year, (month-1), 32).getDate();
        month=month-1;
      }
    }
    
    else day--;
  }
  
  date.innerHTML=(year+"년 "+(month+1)+"월 "+day+"일 ");
  N.innerHTML= (a+"일차");
  per.innerHTML =("완료 현황 : " + ((suc*100/a)+"%"));


  
  document.getElementById('fileName').textContent = null;
  document.createElement("img").removeAttribute('class');
  document.getElementById('image-show').lastElementChild.style.visibility = "hidden";
  document.createElement("img").src='null';
  
})


next.addEventListener("click", function() {
  a++;
  
  if(day==32-new Date(year, month, 32).getDate()) {
    if(month==11) {
      year++;
      month=0;
      day=1;
    }
    
    else {
      month++;
      day=1;
    }
  }
  else day++;
  
  
  date.innerHTML=(year+"년 "+(month+1)+"월 "+day+"일 ");
  N.innerHTML= (a+"일차");
  per.innerHTML =("완료 현황 : " + ((suc*100/a)+"%"));


  document.getElementById('fileName').textContent = null;
  document.createElement("img").removeAttribute('class');
  document.getElementById('image-show').lastElementChild.style.visibility = "hidden";
  document.createElement("img").src='null';

  
})


<!-- 운동하기 script -->

var txtBox=document.getElementById("inputbox");
var lines = txtBox.value.split("\n");

var resultString="<p>";
var blk = document.getElementById("result");

document.getElementById("preview").onclick = function() {
  
  for(var i = 0; i < lines.length; i++) {
    resultString += lines[i] + "<br/>";
  }
  resultString+="</p>";
  
  blk.innerHTML=resultString;

}


alert("a");
<!-- 기상하기 script -->
var wakeTime = document.getElementById('wake');
var waT;


pre.addEventListener("click", function() {
  wakeTime.innerHTML="기상 시간 : 여기를 클릭해 기상 시간을 입력하세요!"
})

next.addEventListener("click", function() {
  wakeTime.innerHTML="기상 시간 : 여기를 클릭해 기상 시간을 입력하세요!"
})


<!-- 공부하기 script -->

var sT=0

var plusMin = document.getElementsByClass('plusmin');
var minusMin = document.getElementsByClass('minusmin');
var sTalert = document.getElementById("totalst");

plusMin.addEventListener("click", function() {
  sT=sT+30;
  sTalert.innerHTML ="총 공부시간 : "+sT+"분입니다.";
})

minusMin.addEventListener("click", function() {
  sT=sT-30;
  sTalert.innerHTML ="총 공부시간 : "+sT+"분입니다.";
})



<!-- error -->
wakeTime.addEventListener("click", function() {
  waT=prompt("기상시간을 입력하세요");
  wakeTime.innerHTML="기상시간 : "+ waT;
  
})