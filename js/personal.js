const genderSel = document.querySelector("#gender");
const military = document.querySelector(".military");

genderSel.addEventListener("change", () => {
	genderSel.value === "male"
		? (military.style.display = "block")
		: (military.style.display = "none");
});
