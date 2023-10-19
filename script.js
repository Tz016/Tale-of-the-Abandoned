// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCzDabBMOoijaRjE_IaliYYXcjImZCiK4k",
  authDomain: "questionnaire-3a4a0.firebaseapp.com",
  projectId: "questionnaire-3a4a0",
  storageBucket: "questionnaire-3a4a0.appspot.com",
  messagingSenderId: "796199687011",
  appId: "1:796199687011:web:4b36cfbdaa18e2b03ff956",
  measurementId: "G-Y8LKHVJ0ES"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

const audioElement = document.getElementById('bg-audio');
const muteButton = document.getElementById('mute-button');

// 添加按钮点击事件监听器
muteButton.addEventListener('click', () => {
  if (audioElement.muted) {
    audioElement.muted = false; // 取消静音
    muteButton.textContent = '🔊';
  } else {
    audioElement.muted = true; // 静音
    muteButton.textContent = '🔇';
  }
});
audioElement.volume = 0.5; 




var numpic=0;




// let questionTimes = [];
// recordQuestionTime(0);
// function recordQuestionTime(questionNumber) {
//   questionTimes[questionNumber+1] = new Date().getTime();
//   //console.log(questionTimes)
// }

// // Function to calculate the time spent on a question (in seconds)
// function calculateTimeSpent(questionNumber) {
//   const currentTime = new Date().getTime();
//   const startTime = questionTimes[questionNumber];
//   const timeSpent = (currentTime - startTime) / 1000;
//   console.log(timeSpent)
//   return timeSpent;
// }

// function showPage(pageId) {
//   recordQuestionTime(questionNumber);

// const pages = document.querySelectorAll('.book');

//   for (const page of pages) {
//     page.classList.remove('page-transition-in', 'page-transition-out');
//     page.style.display = 'none';
//   }

//   const nextPage = document.getElementById(pageId);
//   nextPage.style.display = 'block';
//   nextPage.classList.add('page-transition-in');

//   if (pageId === 'page5') {
//     showResult();
//   }
// }

// function showResult() {
//   // 在此添加根据问题显示分析结果的逻辑
//   // 将结果显示在页面上，例如：
//   document.getElementById('result').textContent = '这是根据您的选择生成的结果。';

//   let longestTimeQuestion = -1;
//     let longestTimeSpent = 0;
//     for (let i = 0; i < questionTimes.length; i++) {
//         if (questionTimes[i]) {
//             const timeSpent = calculateTimeSpent(i);
//             if (timeSpent > longestTimeSpent) {
//                 longestTimeQuestion = i + 1;
//                 longestTimeSpent = timeSpent;
//             }
//         }
//     }

//     if (longestTimeQuestion !== -1) {
//         document.getElementById('longestTimeQuestion').textContent = `Question ${longestTimeQuestion} had the longest time spent: ${longestTimeSpent} seconds`;
//     } else {
//         document.getElementById('longestTimeQuestion').textContent = "No questions answered yet.";
//     }
// }

// function backPage(pageId) {
//   // let pageNumber = parseInt(pageId.match(/\d+/)[0]);
//   // showPage(pageId.replace(pageNumber,pageNumber-1));
//   const currentPage = document.getElementById(pageId);
//   const pageNumber = parseInt(pageId.match(/\d+/)[0]);

//   if (pageNumber > 1) {
//     currentPage.style.display = 'none';
//     currentPage.classList.remove('page-transition-in', 'page-transition-out');

//     const previousPageId = pageId.replace(pageNumber, pageNumber - 1);
//     const previousPage = document.getElementById(previousPageId);
//     previousPage.style.display = 'block';
//     previousPage.classList.add('page-transition-in');
//   }
// }


// const coordinatesElement = document.getElementById('coordinates');


// window.addEventListener('resize',function(){
//   window.innerWidth=window.innerHeight*9/19.4;
//   window.innerHeight=window.innerHeight;
// })

// 监听窗口大小变化事件
window.addEventListener('resize', () => {
 
    window.resizeTo(500*9/19.4*3/2,500*3/2+62);
    console.log("resize")
  }
);


var anim = document.querySelector("#image7");
anim.addEventListener("animationend",function(e){
  showPage('page1',0);
},false);
var anim1 = document.querySelector("#p10");
anim1.addEventListener("animationend",function(e){
  showPage('page2',5);
},false);
var anim2 = document.querySelector("#p11");
anim2.addEventListener("animationend",function(e){
  showPage('page7',5);
},false);
var anim3 = document.querySelector("#p16");
anim3.addEventListener("animationend",function(e){
  showPage('page11',5);
},false);
var anim4 = document.querySelector("#p26");
anim4.addEventListener("animationend",function(e){
  showPage('page15',5);
},false);
var anim5 = document.querySelector("#ball");
anim5.addEventListener("animationend",function(e){
  showPage('page17',5);
},false);

// var anim3 = document.querySelector("#p19");
// anim3.addEventListener("animationend",function(e){
//   showPage('page11',5);
// },false);

let questionTimes = [];
let calculateTime=[]
function recordQuestionTime(questionNumber) {
  // const questionNumber = parseInt(pageId.match(/\d+/)[0]);
  questionTimes[questionNumber] = new Date().getTime();
  console.log(questionTimes[questionNumber])
}

// Function to calculate the time spent on a question (in seconds)
// function calculateTimeSpent(questionNumber) {
//   const currentTime = new Date().getTime();
//   const startTime = questionTimes[questionNumber];
//   const timeSpent = (currentTime - startTime) / 1000;
//   console.log(timeSpent)
//   console.log()
//   return timeSpent;
// }
let TFQuestion=[]
function getsliderValue(pageId){
  var slider=document.getElementById("next");
  nextbutton.addEventListener()
}
function showPage(pageId,TF) {

  numpic=0;
  const questionNumber = parseInt(pageId.match(/\d+/)[0])-1;
  recordQuestionTime(questionNumber);
  if(TF!=-3){
    TFQuestion[questionNumber-1]=TF
    console.log(TF)
  }

  const pages = document.querySelectorAll('.book');

  for (const page of pages) {
    page.classList.remove('page-transition-in', 'page-transition-out');
    page.style.display = 'none';
  }
  console.log(pageId)
  const nextPage = document.getElementById(pageId);
  console.log(nextPage)
  nextPage.style.display = 'block';
  if ( pageId!=='page10' && pageId!='page14' && pageId!='page16'){
    nextPage.classList.add('page-transition-in');
  }
  
  if (pageId === 'page0') {
    displayAndAnimateImages();
    
  }else if(pageId==='page16'){
    if (TF===-1){
      document.getElementById('jingyitf').textContent="Jingyi：这是弃作，可也如艺术品一般！......如果这些画也挂在博物馆里，真的能与别的艺术品区分开吗？......你就是那个要加入我们策展组的鸽子吧？"
    }else{
      document.getElementById('jingyitf').textContent="Jingyi：别动！这幅画不要拿走，是我辛辛苦苦挑出来的！！"
    }
  }else if (pageId === 'page17') {
    showResult();
  }
}

// function displayAndAnimateImages() {
//   const images = document.querySelectorAll('.book img');
//   console.log(1)
//   let currentIndex = 0;

//   function showNextImage() {
//     if (currentIndex < images.length) {
//       images[currentIndex].style.display = 'block';
//       setTimeout(() => {
//         images[currentIndex].style.transform = 'scale(1)'; // 放大图像
//         currentIndex++;
//         showNextImage();
//       }, 500); // 设置延迟以创建动画效果
//     }
//   }

//   showNextImage();
// }




function showResult() {
  // 在此添加根据问题显示分析结果的逻辑
  // 将结果显示在页面上，例如：
  document.getElementById('result').textContent = '在这次测试中，你观赏了50%的弃作，xx%的AI作品，xx%的established artist的作品。 ';
  // var longestTime=0;
  for(let i=0;i<questionTimes.length-1;i++){
    calculateTime[i]=(questionTimes[i+1]-questionTimes[i])/1000

  }
  const longestTime=Math.max.apply(null, calculateTime);
  const longestTimeQuestion=calculateTime.indexOf(longestTime)+1
  console.log(longestTimeQuestion)
  console.log(longestTime)
  console.log(calculateTime)
  if (longestTime>0.5) {
    document.getElementById('longestTimeQuestion').textContent = `你在看第${longestTimeQuestion} 道的时候犹豫了很久${longestTime}秒，是觉得它们都是很完善的作品吗？`;
  } else {
    document.getElementById('longestTimeQuestion').textContent = "No questions answered yet.";
  }
  let countTF={1:0,0:0}
  for (let i=0;i<TFQuestion.length;i++){
    countTF[TFQuestion[i]]++
  }

  document.getElementById('TFQuestions').textContent = `你识别出了${countTF[1]}个正确的弃作，正确率${countTF[1]/(countTF[1]+countTF[0])*100}%`
}

function backPage(pageId) {
  numpic=0;
  const currentPage = document.getElementById(pageId);
  const pageNumber = parseInt(pageId.match(/\d+/)[0]);
  let previousPageId;
  
  if (pageNumber > 1) {
    currentPage.style.display = 'none';
    currentPage.classList.remove('page-transition-in', 'page-transition-out');
    if(pageNumber==7){
      previousPageId = pageId.replace(pageNumber, 5);
    }else if(pageNumber==2){
      previousPageId = pageId.replace(pageNumber, 0);
    }else if(pageNumber==11){
      previousPageId = pageId.replace(pageNumber, 9);
    }else if(pageNumber==15){
      previousPageId = pageId.replace(pageNumber, 13);
    }else{
      previousPageId = pageId.replace(pageNumber, pageNumber - 1);
    }
    const previousPage = document.getElementById(previousPageId);
    previousPage.style.display = 'block';
    previousPage.classList.add('page-transition-in');
  }
}

//const coordinatesElement = document.getElementById('coordinates');

function nextpic(q){
  let pic=document.getElementById(`q31_${q}_${numpic}`);
  if(numpic==2){
    numpic=0;
  }else{
    numpic+=1;
  }
  const npic=document.getElementById(`q31_${q}_${numpic}`);
  pic.style.display="none";
  console.log(pic.style.display)
  npic.style.display="block";
  
}