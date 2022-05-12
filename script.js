



const toggleButton = document.getElementById("bt");
const menu = document.getElementById('sub');

const showList = ()=> {
	const showBtn = menu;



	
	showBtn.classList.toggle("visible");




}


toggleButton.addEventListener("click", showList);