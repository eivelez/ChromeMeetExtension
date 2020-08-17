var imageURL = "https://upload.wikimedia.org/wikipedia/commons/3/3f/Mute_Icon.svg"
var diceURL = "https://www.svgrepo.com/show/198053/dice.svg"
const htmlBtnMuteAll = '<div title="MuteAll" tabindex="0"> <img src="' + imageURL + '" width="22"> </div>';
const htmlBtnDice = '<div title="Dice" tabindex="0"> <img src="' + diceURL + '" width="22"> </div>';

const interval = setInterval(() => {
	const header = document.querySelector(".NzPR9b");

	if(header){
		console.log(header);
		clearInterval(interval);
		const btnMuteAll = document.createElement("button");
		const btnDice = document.createElement("button");
		btnMuteAll.style.background = "red";
		btnDice.style.background = "gray";
		btnMuteAll.innerHTML = htmlBtnMuteAll;
		btnDice.innerHTML = htmlBtnDice;
		btnMuteAll.classList.add("btnMuteAll");
		btnDice.classList.add("btnDice");
		btnMuteAll.addEventListener("click", () => {
			start();
		});
		btnDice.addEventListener("click", () => {
			startDice();
		});

		header.insertBefore(btnDice, header.childNodes[0]);
		header.insertBefore(btnMuteAll, header.childNodes[0]);
		
	}
}, 1000);

let allUsers, allUsersLength;

function start(){
	allUsers = document.querySelectorAll('.uArJ5e.Y5FYJe.cjq2Db.HZJnJ.RfqEId');
	allUsersLength = allUsers.length - 1;

	var myInterval = setInterval( function() {
		if(allUsersLength >= 0){
			muteUser(allUsersLength);
		}
		else{
			clearMyInterval(myInterval);
		}
	}, 800);
}

function startDice(){
	allUsers = document.querySelectorAll('.uArJ5e.Y5FYJe.cjq2Db.HZJnJ.RfqEId');
	allUsersLength = allUsers.length;
	var rand = Math.floor(Math.random() * allUsersLength);
	muteUser2(rand)
	
	
}

function muteUser(index) {
	allUsers[index].click();

	setTimeout( function() {
		confirm();
	}, 100);

	allUsersLength--;
}

function muteUser2(index) {
	allUsers[index].click();

	setTimeout( function() {
		confirm();
	}, 100);
}

function clearMyInterval(interval){
	clearInterval(interval);
}

function confirm(){
	var confirm = document.querySelector(".U26fgb.O0WRkf.oG5Srb.HQ8yf.C0oVfc.kHssdc");
	if(confirm)
		confirm.click();
}

chrome.runtime.onMessage.addListener(msgObj => {
	start();
});