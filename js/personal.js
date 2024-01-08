// GETS
const genderSel = document.querySelector("#gender");
const militaryDev = document.querySelector(".military");
const militarySel = document.querySelector("#militaryService");
const maritalStatus = document.querySelector("#maritalStatus");
const numChildren = document.querySelector(".num-children");
const numChildrenInput = document.querySelector(".numberOfChildren");
const childrenAges = document.querySelector(".childrenAges");
const ageDiv = document.querySelector(".ages");
const nameInput = document.querySelector("#firstName");
const lastNameInput = document.querySelector("#lastName");
const phoneInput = document.querySelector("#phoneNumber");
const emailInput = document.querySelector("#email");
const citySel = document.querySelector("#city");
const submit = document.querySelector(".submit");

// DEPENCE
document.addEventListener("change", (e) => {
	const target = e.target;

	if (target === genderSel) {
		militaryDev.style.display = target.value === "male" ? "block" : "none";
	} else if (target === maritalStatus) {
		numChildren.style.display = target.value === "married" ? "block" : "none";
	} else if (target === numChildrenInput) {
		const childrenCounter = +numChildrenInput.value;
		ageDiv.innerHTML = "";
		for (let i = 1; i <= childrenCounter; i++) {
			const markUp = `<label for="childrenAges">سن فرزند${i}:</label>
		<input  type="text" step="1" class="childrenAges" name="childrenAges" required />`;
			ageDiv.innerHTML += markUp;
		}
	}
});
// SAVE TO LOCAL
submit.addEventListener("click", () => {
	const saving = {
		name: nameInput.value,
		lastName: lastNameInput.value,
		phone: phoneInput.value,
		email: emailInput.value,
		maritalStatus: maritalStatus.value,
		gender: genderSel.value,
		city: citySel.value,
		military: militarySel.value,
		numChildren: numChildrenInput.value,
	};
	localStorage.setItem("information", JSON.stringify(saving));
});
//destructure for keep data
const savedLocal = localStorage.getItem("information");
if (savedLocal) {
	const parsedSaveLocal = JSON.parse(savedLocal);
	nameInput.value = parsedSaveLocal.name;
	lastNameInput.value = parsedSaveLocal.lastName;
	phoneInput.value = parsedSaveLocal.phone;
	emailInput.value = parsedSaveLocal.email;
	maritalStatus.value = parsedSaveLocal.maritalStatus;
	genderSel.value = parsedSaveLocal.gender;
	citySel.value = parsedSaveLocal.city;
	militarySel.value = parsedSaveLocal.military;
	numChildrenInput.value = parsedSaveLocal.numChildren;
}
genderSel.value === "male"
	? (militaryDev.style.display = "block")
	: (militaryDev.style.display = "none");
maritalStatus.value === "married"
	? (numChildren.style.display = "block")
	: (numChildren.style.display = "none");
