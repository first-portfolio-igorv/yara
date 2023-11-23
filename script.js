let en=document.getElementsByClassName("en-button");
let ua=document.getElementsByClassName("ukr-button");

let UA=document.getElementsByClassName("UA");
let EN=document.getElementsByClassName("EN");
let check=false;
let line=document.getElementsByClassName("toggle");
let menu=document.getElementsByClassName("menu-mobile");
let body=document.getElementsByTagName("body");
for(let i=0; i<en.length;i++){
    en[i].addEventListener("click", function(){
    for(let i=0;i<UA.length;i++){
        UA[i].style.display="none";
        EN[i].style.display="block";
    }
})
ua[i].addEventListener("click", function(){
    for(let i=0;i<UA.length;i++){
        UA[i].style.display="block";
        EN[i].style.display="none";
    }
})
}

function toggle(){
    check=!check;
    if(check){
        line[0].classList.add("line1");
        line[0].classList.remove("line");
        menu[0].style.right="0px";
        body[0].style.position="fixed";
    }
    else{
        line[0].classList.remove("line1");
        line[0].classList.add("line");
        menu[0].style.right="-100%";
        body[0].style.position="static";

    }
}
function off(){
        line[0].classList.remove("line1");
        line[0].classList.add("line");
        body[0].style.position="static";
        menu[0].style.right="-100%";
        check=!check;
}
// $(document).ready(function() {

// 	//E-mail Ajax Send
// 	$("form").submit(function() { //Change
// 		var th = $(this);
// 		$.ajax({
// 			type: "POST",
// 			url: "send.php", //Change
// 			data: th.serialize()
// 		}).done(function() {
// 			alert("Thank you!");
// 			setTimeout(function() {
// 				// Done Functions
// 				th.trigger("reset");
// 			}, 1000);
// 		});
// 		return false;
// 	});

// });
