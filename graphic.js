let block = document.getElementsByClassName("block");
let title = document.getElementsByClassName("clickTitle");
let text = document.getElementsByClassName("text");
let height = [10,10,10,10,10,10,12,10,12,12,10,10,10,10,10,10,12,12,11,12,11,10.1,10,11,10,10,10,10,10,10,12,12,10,9,10,11,9,10,10,9,9,9];
let check = [false,false,false];
let en=document.getElementsByClassName("en-button");
let ua=document.getElementsByClassName("ukr-button");
let UA=document.getElementsByClassName("UA");
let EN=document.getElementsByClassName("EN");
let line=document.getElementsByClassName("comments-line");
let circle=document.getElementsByClassName("progress-line");
let position=0;
let program=document.getElementsByClassName("course-progress-block");
let programCount=document.getElementsByClassName("program-count");
let comment=document.getElementsByClassName("comment-text");
let video=document.getElementsByClassName("vid");
let videoNum=0;
let commentNum=0;

let checkCount=[false,false,false]
en[0].addEventListener("click", function(){
    for(let i=0;i<UA.length;i++){
        UA[i].style.display="none";
        EN[i].style.display="block";
    }
})
ua[0].addEventListener("click", function(){
    for(let i=0;i<UA.length;i++){
        UA[i].style.display="block";
        EN[i].style.display="none";
    }
})
function open(i){
  if (check[i]) {
    check[i] = false;
    for (let i = 0; i < block.length; i++) {
      if (block[i].id == event.target.id) {
        block[i].style.height = height[event.target.id] + "vw";
      }
    }
    for (let i = 0; i < text.length; i++) {
      if (text[i].id == event.target.id) {
        text[i].style.maxHeight = "500px";
      }
    }
  } else {
    check[i] = true;
    for (let i = 0; i < block.length; i++) {
      if (block[i].id == event.target.id) {
        block[i].style.height = "7.29vw";
      }
    }
    for (let i = 0; i < text.length; i++) {
      if (text[i].id == event.target.id) {
        text[i].style.maxHeight = "0px";
      }
    }
  }
}
for(let i=0;i<title.length;i++){
  title[i].textContent=title[i].textContent.toUpperCase();  
}
for (let i = 0; i < block.length; i++) {
  check.push(true);
  block[i].addEventListener("click", function () {
    open(i);
  });
}
for(let i=0; i<programCount.length;i++){
    programCount[i].addEventListener("click", function(j){
        if(checkCount[i]==false){
          if(i==0){
            program[1].style.maxHeight="0px";
            program[2].style.maxHeight="0px";
            checkCount[1]=false;
            checkCount[2]=false;
          }
          if(i==1){
            program[0].style.maxHeight="0px";
            program[2].style.maxHeight="0px";
            checkCount[2]=false;
            checkCount[0]=false;
          }
          if(i==2){
            program[1].style.maxHeight="0px";
            program[0].style.maxHeight="0px";
            checkCount[1]=false;
            checkCount[0]=false;
          }
        program[i].style.maxHeight="3000px";
        checkCount[i]=true;
        console.log(i)
        }
        else{
        program[i].style.maxHeight="0px";
            checkCount[i]=false;
        }
    })
}
for(let i=0;i<comment.length;i++){
  if(commentNum==i){
    comment[i].style.opacity="100%";
    comment[i].style.display="block";
  }
  else{
    comment[i].style.opacity="0%"
    comment[i].style.display="none";
  }
}
function right(){
  commentNum++;
  if(commentNum==3){
    commentNum=0;
  }
    for(let i=0;i<comment.length;i++){
      if(commentNum==i){
        
        setTimeout(()=>{
          comment[i].style.display="block";
          setTimeout(()=>{
            comment[i].style.opacity="100%";
            
          },100)
        },1000)
        

      }
      else{
        comment[i].style.opacity="0%"
        setTimeout(()=>{
          comment[i].style.display="none";
        },1000)
        
      }
    }

}
function left(){
  commentNum--;
  if(commentNum==-1){
    commentNum=2;
  }
    for(let i=0;i<comment.length;i++){
      if(commentNum==i){
        setTimeout(()=>{
          comment[i].style.display="block";
          setTimeout(()=>{
            comment[i].style.opacity="100%";
            
          },100)
        },1000)
      }
      else{
        comment[i].style.opacity="0%"
        setTimeout(()=>{
          comment[i].style.display="none";
        },1000)
      }
  }
}
for(let i=0;i<video.length;i++){
  video[i].style.backgroundImage=`url(./images/graphicdesign/work${i+1}.png)`;
  if(i!=videoNum){
    video[i].style.display="none";
    video[i].style.opacity="0%";
  }
}
function rightV(){
  videoNum++;
  if(videoNum==4){
    videoNum=0;
  }
    for(let i=0;i<video.length;i++){
      if(videoNum==i){
        
        setTimeout(()=>{
          video[i].style.display="block";
          setTimeout(()=>{
            video[i].style.opacity="100%";
            
          },100)
        },1000)
        

      }
      else{
        video[i].style.opacity="0%"
        setTimeout(()=>{
          video[i].style.display="none";
        },1000)
        
      }
    }

}
function leftV(){
  videoNum--;
  if(videoNum==-1){
    videoNum=3;
  }
    for(let i=0;i<video.length;i++){
      if(videoNum==i){
        setTimeout(()=>{
          video[i].style.display="block";
          setTimeout(()=>{
            video[i].style.opacity="100%";
            
          },100)
        },1000)
      }
      else{
        video[i].style.opacity="0%"
        setTimeout(()=>{
          video[i].style.display="none";
        },1000)
      }
  }
}