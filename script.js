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
window.addEventListener('load', function() {
  // 加载完成后隐藏加载动画
  document.querySelector('.loader').style.display = 'none';
});

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


window.addEventListener('resize', () => {
 
    window.resizeTo(500*9/19.4*3/2,500*3/2+62);
    console.log("resize")
  }
);


var anim = document.querySelector("#image7");
anim.addEventListener("animationend",function(e){
  showPage('page1',-5);
},false);
var anim1 = document.querySelector("#p10");
anim1.addEventListener("animationend",function(e){
  showPage('page2',-5);
},false);
var anim2 = document.querySelector("#p11");
anim2.addEventListener("animationend",function(e){
  showPage('page7',-5);
},false);
var anim3 = document.querySelector("#p16");
anim3.addEventListener("animationend",function(e){
  showPage('page11',-5);
},false);
var anim4 = document.querySelector("#p26");
anim4.addEventListener("animationend",function(e){
  showPage('page15',-5);
},false);
var anim5 = document.querySelector("#ball");
anim5.addEventListener("animationend",function(e){
  showPage('page17',-5);
},false);
let questionpages=[2,3,4,5,7,8,9,11,12,13,15];
let questionTimes = [];
let calculateTime=[]

// function recordQuestionTime(questionNumber) {
//   // const questionNumber = parseInt(pageId.match(/\d+/)[0]);
//   questionTimes[questionNumber] = new Date().getTime();
//   console.log(questionTimes[questionNumber])
// }

let TFQuestion=[];
let SliderQuestion=[];
// function getsliderValue(pageId){
//   var slider=document.getElementById("next");
//   nextbutton.addEventListener()
// }
function showPage(pageId,TF) {

  numpic=0;
  const pageNumber = parseInt(pageId.match(/\d+/)[0])-1;
  // recordQuestionTime();
  if(pageNumber==2){
    TFQuestion[0]=TF;
  }else if(pageNumber==3){
    TFQuestion[1]=TF;
  }else if(pageNumber==4){
    TFQuestion[2]=TF;
  }else if(pageNumber==5){
    TFQuestion[3]=TF;
  }else if(pageNumber==7){
    SliderQuestion[0]=TF.innerText;
  }else if(pageNumber==8){
    SliderQuestion[1]=TF.innerText;
  }else if(pageNumber==9){
    SliderQuestion[2]=TF.innerText;
  }else if(pageNumber==11){
    TFQuestion[4]=TF;
  }else if(pageNumber==12){
    TFQuestion[5]=TF;
  }else if(pageNumber==13){
    TFQuestion[6]=TF;
  }else if(pageNumber==15){
    TFQuestion[7]=TF;
  }
    console.log("TF")
    console.log(TFQuestion)
    console.log("Slider")
    console.log(SliderQuestion)
  //   questionpages.includes(pageNumber) && TF!=-66){
  //   TFQuestion.push(TF);
  //   console.log(TF)
  // }else if(questionpages.includes(pageNumber)){
  //   SliderQuestion.push(TF);
  // }

  const pages = document.querySelectorAll('.book');

  for (const page of pages) {
    page.classList.remove('page-transition-in', 'page-transition-out');
    page.style.display = 'none';
  }
  // console.log(pageId)
  const nextPage = document.getElementById(pageId);
  // console.log(nextPage)
  nextPage.style.display = 'block';
  if ( pageId!=='page10' && pageId!='page14' && pageId!='page16'){
    nextPage.classList.add('page-transition-in');
  }
  
  if (pageId === 'page0') {
    displayAndAnimateImages();
    
  }else if(pageId==='page16'){
    if (TF===-2){
      document.getElementById('jingyitf').textContent="Jingyi：这是弃作，可也如艺术品一般！......如果这些画也挂在博物馆里，真的能与别的艺术品区分开吗？......你就是那个要加入我们策展组的鸽子吧？"
    }else{
      document.getElementById('jingyitf').textContent="Jingyi：别动！这幅画不要拿走，是我辛辛苦苦挑出来的！！"
    }
  }else if (pageId === 'page17') {
    showResult();
  }
}

function showResult() {
  const pages = document.querySelectorAll('.resultpage');
let currentPage = 0;
let startY = 0;
let endY = 0;
function handleSwipe() {
  const deltaY = endY - startY;

  if (deltaY > 50 && currentPage > 0) {
    // 向上滑动，显示上一页
    pages[currentPage].classList.add('hidden');
    currentPage--;
    pages[currentPage].classList.remove('hidden');
  } else if (deltaY < -50 && currentPage < pages.length - 1) {
    // 向下滑动，显示下一页
    pages[currentPage].classList.add('hidden');
    currentPage++;
    pages[currentPage].classList.remove('hidden');
  }
}
document.addEventListener('touchstart', function(event) {
  startY = event.touches[0].clientY;
});

document.addEventListener('touchend', function(event) {
  endY = event.changedTouches[0].clientY;
  handleSwipe();
});
pages[currentPage].classList.remove('hidden');

//   const pages = document.querySelectorAll('.resultpage');
//   let currentPage = 0;

//     document.addEventListener('keydown', function(event) {
//   if (event.key === 'ArrowDown' && currentPage < pages.length - 1) {
//     // 向下滚动，隐藏当前页并显示下一页
//     pages[currentPage].classList.add('hidden');
//     currentPage++;
//     pages[currentPage].classList.remove('hidden');
//   } else if (event.key === 'ArrowUp' && currentPage > 0) {
//     // 向上滚动，隐藏当前页并显示上一页
//     pages[currentPage].classList.add('hidden');
//     currentPage--;
//     pages[currentPage].classList.remove('hidden');
//   }
// });
 let correctTF=0;
 let correctslider=0;
 let sliderv=["10344","7050","0"];
 for(let i=0;i<8;i++){
  if(TFQuestion[i]==-1){
    correctTF+=1
  }
 }
 for(let i=0;i<3;i++){
  if(SliderQuestion[i]==sliderv[i]){
    correctslider+=1
  }
 }

  document.getElementById('result').textContent = '在这次测试中，你观赏了50%的弃作，xx%的AI作品，xx%的established artist的作品。 ';
  // var longestTime=0;
  // for(let i=0;i<questionTimes.length-1;i++){
  //   calculateTime[i]=(questionTimes[i+1]-questionTimes[i])/1000

  // }
  // const longestTime=Math.max.apply(null, calculateTime);
  // const longestTimeQuestion=calculateTime.indexOf(longestTime)+1
  // console.log(longestTimeQuestion)
  // console.log(longestTime)
  // console.log(calculateTime)
  // if (longestTime>0.5) {
  //   document.getElementById('longestTimeQuestion').textContent = `你在看第${longestTimeQuestion} 道的时候犹豫了很久${longestTime}秒，是觉得它们都是很完善的作品吗？`;
  // } else {
  //   document.getElementById('longestTimeQuestion').textContent = "No questions answered yet.";
  // }
  // let countTF={1:0,0:0}
  // for (let i=0;i<TFQuestion.length;i++){
  //   countTF[TFQuestion[i]]++
  // }

  document.getElementById('TFQuestions').textContent = `你识别出了${correctTF}个正确的弃作，正确率${correctTF/(countTF[1]+countTF[0])*100}%`
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

function nextpic(q){
  let pic=document.getElementById(`q31_${q}_${numpic}`);
  if(numpic==2){
    numpic=0;
  }else{
    numpic+=1;
  }
  const npic=document.getElementById(`q31_${q}_${numpic}`);
  pic.style.display="none";
  // console.log(pic.style.display)
  npic.style.display="block";
  
}