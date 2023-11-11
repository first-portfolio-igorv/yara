let en=document.getElementsByClassName("en-button");
let ua=document.getElementsByClassName("ukr-button");

let UA=document.getElementsByClassName("UA");
let EN=document.getElementsByClassName("EN");
let check=false;
let line=document.getElementsByClassName("toggle");
let menu=document.getElementsByClassName("menu-mobile")
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
function toggle(){
    check=!check;
    if(check){
        line[0].classList.add("line1");
        line[0].classList.remove("line");
        menu[0].style.width="100vw";
    }
    else{
        line[0].classList.remove("line1");
        line[0].classList.add("line");
        menu[0].style.width="0vw";

    }
}
function off(){
        line[0].classList.remove("line1");
        line[0].classList.add("line");
        menu[0].style.width="0vw";
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
