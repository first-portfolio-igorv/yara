let block = document.getElementsByClassName("block");
let title = document.getElementsByClassName("clickTitle");
let text = document.getElementsByClassName("text");
let height = [14.72,11.66,14.51,15.76,16.11,13.95,15.69,12.84,19.09,15.97,12.56,11.11,10.41,11.66,10.41];
let maxHeight=[];
let check = [];
let en=document.getElementsByClassName("en-button");
let ua=document.getElementsByClassName("ukr-button");
let UA=document.getElementsByClassName("UA");
let EN=document.getElementsByClassName("EN");
let line=document.getElementsByClassName("comments-line");
let circle=document.getElementsByClassName("progress-line");
let position=0;
for(let i=0;i<height.length;i++){
  maxHeight.push(height[i]+8)
}
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
        if(window.innerWidth<500){
          block[i].style.height = maxHeight[event.target.id] + "vw";
        }
        else{
        block[i].style.height = height[event.target.id] + "vw";

        }
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
        if(window.innerWidth<500){
        block[i].style.height = "10vw";
        }
        else{
          block[i].style.height = "7.29vw";
        }
      }
    }
    for (let i = 0; i < text.length; i++) {
      if (text[i].id == event.target.id) {
        text[i].style.maxHeight = "0px";
      }
    }
  }
}
for (let i = 0; i < block.length; i++) {
  check.push(true);
  block[i].addEventListener("click", function () {
    open(i);
  });
}
function right(){
  if(position==-150){
    position=0;
  }
  else{
    position-=50;
  }
  
  line[0].style.left=position+"vw";

}
function left(){
  if(position==0){
    position=0;
  }
  else{
    position+=50;
  }

  line[0].style.left=position+"vw";
}