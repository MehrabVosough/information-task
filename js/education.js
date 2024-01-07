// GETS
const degreeSel = document.querySelector(".degree");
const fieldSel = document.querySelector(".field");
const branchDiv = document.querySelector(".branch");
const branchSel = document.querySelector("#branchsel");
const univercityInput = document.querySelector("#university");
const studingRadio = document.querySelector("#studing");
const endOfStudy = document.querySelector("#graduated");
const dateOfEnd = document.querySelector("#date");
const branchBox = document.querySelector("#branchBox");
const addToTable = document.querySelector("#addToTable");
const saveToTable = document.querySelector(".select");
const hi = document.querySelector("#hi");

// depence
fieldSel.addEventListener("change", () => {
	if (fieldSel.value === "حسابداری") {
		branchDiv.style.display = "block";
		const accounting = `<option>صنعتی</option>
		<option >تجاری</option>
		<option >بازگانی</option>`;
		branchBox.innerHTML = accounting;
	} else if (fieldSel.value === "IT") {
		branchDiv.style.display = "block";
		const it = `<option value="a">مدیریت دانش</option>
        <option >معماری سازمانی</option>
        <option >امنیت داده</option>`;
		branchBox.innerHTML = it;
	} else if (fieldSel.value === "MBA") {
		branchDiv.style.display = "block";
		const mba = `<option value="a">مالی</option>
        <option >بازاریابی</option>
        <option >استراتژی</option>`;
		branchBox.innerHTML = mba;
	} else {
		branchDiv.style.display = "none";
	}
});

// for radio select
studingRadio.addEventListener("change", () => {
	dateOfEnd.style.display = "none";
});

endOfStudy.addEventListener("change", () => {
	dateOfEnd.style.display = "block";
});

// save to table

const saveToLocal = () => {
	localStorage.setItem("table", JSON.stringify(tableAdd));
};

const tableAdd = [];
const addHandler = (e) => {
	// e.preventDefault();
	const degree = degreeSel.value;
	const field = fieldSel.value;
	const branch = branchBox.value;
	const uni = univercityInput.value;
	const date = dateOfEnd.value;
	const tableItems = {
		degree: degree,
		field: field,
		branch: branch,
		uni: uni,
		date: date,
	};
	if (uni && field && branch) {
		tableAdd.push(tableItems);
		saveToLocal();
	} else {
		alert("فیلد ها نباید خالی باشه!");
		return;
	}
};

saveToTable.addEventListener("click", addHandler);
