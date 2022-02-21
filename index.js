const sliderPics=document.querySelectorAll(".pic");
const indexRadios=document.querySelectorAll(".index-radio");
const picLeft=document.getElementsByClassName("btn-left")[0];
const picRight=document.getElementsByClassName("btn-right")[0];
const picArr=["./public/slider_pic/glenn-carstens-peters-npxXWgQ33ZQ-unsplash.jpg"
                    ,"./public/slider_pic/emile-perron-xrVDYZRGdw4-unsplash.jpg"
                ,"./public/scratch.png"
                ,"./public/slider_pic/pd3.jpg"
            ,"./public/slider_pic/pd4.jpg"];
const picDes=document.getElementsByClassName("pic-description")[0];
const picDetailsName=["信息学奥赛（C++方向）","Python与IOT创造营","Scratch创意编程","智能硬件智造营","立体艺术创造营"];
const picDetailDescribe=[
    "中小学学科竞赛，培养孩子计算机思维",
    "python引导的人工智能第一课",
    "项目式的少儿编程学习",
    "创造属于青少儿的第一台机器人",
    "你能想到的，并且相信的，最终会变成现实"
]
const picLink=[
    "#","#","#","#","#"
]


let picIndex=0,picMaxIndex=picArr.length-1;

picDes.innerHTML=`<h1>${picDetailsName[picIndex]}</h1>
        <h3>${picDetailDescribe[picIndex]}</h3>
        <span class="pic-dis-more"><a href=${picLink[picIndex]}>了解更多</a></span>
        <span class="pic-dis-now"><a href="#">预约试听</a></span>
    `

picLeft.addEventListener("click",()=>{
    indexRadios[picIndex].classList.remove("radio-active");
    --picIndex;
    if(picIndex<0){
        picIndex=picMaxIndex;
    }
    indexRadios[picIndex].classList.add("radio-active");
    setTimeout(()=>{
        sliderPics[0].style.backgroundImage="url("+picArr[picIndex]+")";
        sliderPics[0].style.transform="scale(1)";
        picDes.innerHTML=`<h1>${picDetailsName[picIndex]}</h1>
        <h3>${picDetailDescribe[picIndex]}</h3>
        <span class="pic-dis-more"><a href=${picLink[picIndex]}>了解更多</a></span>
        <span class="pic-dis-now"><a href="#">预约试听</a></span>
    `

    },100);
    sliderPics[0].style.transform="scale(1.1)";
   
    // sliderPics[1].style.transform="translateX(-30%)";
})

picRight.addEventListener("click",()=>{
    indexRadios[picIndex].classList.remove("radio-active");
    ++picIndex;
    if(picIndex>picMaxIndex){
        picIndex=0;
    }
    indexRadios[picIndex].classList.add("radio-active");
    setTimeout(()=>{
        sliderPics[0].style.backgroundImage="url("+picArr[picIndex]+")";
        sliderPics[0].style.transform="scale(1)";
        picDes.innerHTML=`<h1>${picDetailsName[picIndex]}</h1>
        <h3>${picDetailDescribe[picIndex]}</h3>
        <span class="pic-dis-more"><a href=${picLink[picIndex]}>了解更多</a></span>
        <span class="pic-dis-now"><a href="#">预约试听</a></span>
    `

    },100);
    sliderPics[0].style.transform="scale(1.1)";
    
})