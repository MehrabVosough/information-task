const genderSel = document.querySelector("#gender");
const military = document.querySelector(".military");
const maritalStatus = document.querySelector("#maritalStatus");
const numChildren = document.querySelector(".num-children");
const numChildrenInput = document.querySelector(".numberOfChildren");
const ageDiv = document.querySelector(".ages");

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

numChildrenInput.addEventListener("change", () => {
	const childrenCounter = +numChildrenInput.value;
	console.log(childrenCounter);
	ageDiv.style.display = "inline-block";
	for (let i = 1; i <= childrenCounter; i++) {
		const div = document.createElement("div");
		const markUp = `<label for="childrenAges">سن فرزند${i}:</label>
		<input type="number" id="childrenAges" name="childrenAges" required />`;
		div.innerHTML = markUp;
		ageDiv.appendChild(div);
	}
});
