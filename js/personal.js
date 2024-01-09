import {
	genderSel,
	militaryDev,
	militarySel,
	maritalStatus,
	numChildren,
	numChildrenInput,
	childrenAges,
	ageDiv,
	nameInput,
	lastNameInput,
	phoneInput,
	emailInput,
	citySel,
	submit,
	infoLocalSaved,
} from "./variables.js";
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

const localItems = () => {
	localStorage.setItem("information", JSON.stringify(infoLocalSaved));
};

const saveHandeler = () => {
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
	if (nameInput.value && lastNameInput.value && phoneInput.value) {
		infoLocalSaved.push(saving);
		localItems();
	} else {
		alert("فیلد ها نباید خالی باشد");
	}
};
submit.addEventListener("click", saveHandeler);

