const tabs = document.querySelectorAll(".tabs ul li");
const tab_wraps = document.querySelectorAll(".tab_wrap");

tabs.forEach(function(tab, tab_index){
	tab.addEventListener("click", function(){
		tabs.forEach(function(tab){
			tab.classList.remove("active");
		})
		tab.classList.add("active");

		tab_wraps.forEach(function(content, content_index){
			if(tab_index == 4){
				openModal();
			}
            else if(content_index == tab_index){
				content.style.display = "block";
			}
			else{
				content.style.display = "none";
			}
		})

	})
})


const inputs = document.querySelectorAll(".input");


function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});


const overlay = document.getElementById('overlay')
const modal = document.getElementById("form");

function openModal() {
	if (modal == null) return;
	modal.classList.add('active');
	overlay.classList.add('active');
	document.body.style.overflowY = "hidden";
}

function closeModal() {
	if (modal == null) return
	modal.classList.remove('active')
	overlay.classList.remove('active');
	document.body.style.overflowY = "auto";
}