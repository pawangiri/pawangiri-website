/**
 * @author Pawan Giri
 */


function main(){
	alert('I am working');
}



// For highlighting link based on page

function pageread(){
	var link = document.title;	
	
	if(link == 'Home'){
		var home = document.getElementById('homeimg');
		home.style.background = "url(./images/spritesheet1.png) no-repeat -1px -1px";	
	}else if(link == 'Bio'){
		var bio = document.getElementById('bioimg');
		bio.style.background = "url(./images/spritesheet1.png) no-repeat -1px -39px";
	}else if(link == 'Work'){
		var work = document.getElementById('workimg');
		work.style.background = "url(./images/spritesheet1.png) no-repeat -8px -77px";
	}else if(link == 'Hobbies'){
		var hobby = document.getElementById('hobbiesimg');
		hobby.style.background = "url(./images/spritesheet1.png) no-repeat  -1px -118px";
	}else if(link == 'Contact'){
		var cont = document.getElementById('contactimg');
		cont.style.background = "url(./images/spritesheet1.png) no-repeat -3px -154px";
	}

}


