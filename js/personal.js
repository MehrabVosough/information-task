const genderSel = document.querySelector("#gender");
const military = document.querySelector(".military");
const maritalStatus = document.querySelector("#maritalStatus");
const numChildren = document.querySelector(".num-children");

genderSel.addEventListener("change", () => {
	genderSel.value === "male"
		? (military.style.display = "block")
		: (military.style.display = "none");
});

maritalStatus.addEventListener("change", () => {
	maritalStatus.value === "married"
		? (numChildren.style.display = "block")
		: (numChildren.style.display = "none");
});


