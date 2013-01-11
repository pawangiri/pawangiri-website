/**
 * @author Pawan Giri
 */

function passgen(form){
	var upperCase = new Array("A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z");
	var lowerCase = new Array("a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z");
	var chars = new Array("`","~","@","#","%","^","&","*","(",")","-","_","=","+","[","]","{","}","\\","|",";",":","'","\"",",",".","<",">","/","?");
	
	var pass = "";
	var len = parseInt(form.passlength.value);
	var j = 0;
	var passArray = new Array();
	
	
	if(len > 0 && len <= 128){
			with(document.testing1){
				if(cb[0].checked || cb[1].checked || cb[2].checked || cb[3].checked){
					do{
						
						with(document.testing1){
							for(var i=0; i<cb.length; i++){
								if(cb[i].checked){
									
									if(cb[i].value == "upperCase"){
										var upCase = upperCase[Math.floor(Math.random()*26)];
										passArray.push(upCase);
									}else if(cb[i].value == "lowerCase"){
										var loCase = lowerCase[Math.floor(Math.random()*26)];
										passArray.push(loCase);
									}else if(cb[i].value == "num"){
										var randNum = Math.floor(Math.random()*10);
										passArray.push(randNum);
									}else if(cb[i].value == "chs"){
										var selchar = chars[Math.floor(Math.random()*31)];
										passArray.push(selchar);
									}		
								}
							}
						}
						var passrand = passArray[Math.floor(Math.random()*passArray.length)];
						
						if(passrand != undefined){
							pass += passrand;	
						}
						
						j++;
					}while(j < len);
					
					//alert(pass);
				}else{
					alert('Select something');
					var bolsel = document.getElementById("yoyo");
					yoyo.style.background = "red";
				}
			}
		}else{
			alert('Length out of range between 1 to 128');
	}
	document.getElementById('dispas').innerHTML = pass;
	return false;
}




function clearpass(){
	document.getElementById('dispas').innerHTML = "";
	
}




function numberinput(evt){
	var charCode = (evt.which) ? evt.which : event.keyCode;
	         if (charCode > 31 && (charCode < 48 || charCode > 57))
	            return false;

	         return true;
}