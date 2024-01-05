// GETS
const genderSel = document.querySelector("#gender");
const militaryDev = document.querySelector(".military");
const militarySel = document.querySelector("#militaryService");
const maritalStatus = document.querySelector("#maritalStatus");
const numChildren = document.querySelector(".num-children");
const numChildrenInput = document.querySelector(".numberOfChildren");
const ageDiv = document.querySelector(".ages");
const nameInput = document.querySelector("#firstName");
const lastNameInput = document.querySelector("#lastName");
const phoneInput = document.querySelector("#phoneNumber");
const emailInput = document.querySelector("#email");
const citySel = document.querySelector("#city");
const submit = document.querySelector(".submit");

// DEPENCE
genderSel.addEventListener("change", () => {
	genderSel.value === "male"
		? (militaryDev.style.display = "block")
		: (militaryDev.style.display = "none");
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
		<input  type="text" step="1" id="childrenAges" name="childrenAges" required />`;
		div.innerHTML = markUp;
		ageDiv.appendChild(div);
	}
});

// SAVE TOO LOCAL
const saveToLocal = submit.addEventListener("click", () => {
	const saving = [
		{
			name: nameInput.value,
			lastNameInput: lastNameInput.value,
			phoneInput: phoneInput.value,
			emailInput: emailInput.value,
			maritalStatus: maritalStatus.value,
			gender: genderSel.value,
			citySel: citySel.value,
			military: militarySel.value,
			numChildrenInput: numChildrenInput.value,
		},
	];
	localStorage.setItem("information", JSON.stringify(saving));
});

const savedLocal = localStorage.getItem("information");
const pareseSaveLocal = JSON.parse(savedLocal);
console.log(pareseSaveLocal);
