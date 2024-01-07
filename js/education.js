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
const tableBody = document.querySelector("tbody");
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
		const it = `<option >مدیریت دانش</option>
        <option >معماری سازمانی</option>
        <option >امنیت داده</option>`;
		branchBox.innerHTML = it;
	} else if (fieldSel.value === "MBA") {
		branchDiv.style.display = "block";
		const mba = `<option >مالی</option>
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
	localStorage.setItem("education", JSON.stringify(tableAdd));
};
const tableAdd = JSON.parse(localStorage.getItem("education")) || [];

const displayTable = () => {
	tableBody.innerHTML = "";
	if (!tableAdd.length) {
		tableBody.innerHTML = `<tr> <td colspan="5"> مدرکی وارد نشده </td> </tr>`;
		return;
	}

	tableAdd.forEach((Element) => {
		tableBody.innerHTML += `
        <tr>
            <td>${Element.degree}</td>
            <td>${Element.field}</td>
            <td>${Element.branch}</td>
            <td>${Element.uni}</td>
            <td>${Element.date ? Element.date : "درحال تحصیل"}</td>
        </tr>
        
        `;
	});
};

const addHandler = (e) => {
	e.preventDefault();
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
		displayTable();
		degreeSel.value = "none";
		fieldSel.value = "none";
		branchDiv.style.display = "none";
		univercityInput.value = "";
		dateOfEnd.value = "";
		studingRadio.innerHTML += `checked`;
	} else {
		alert("فیلد ها نباید خالی باشه!");
		return;
	}
};

saveToTable.addEventListener("click", addHandler);
displayTable();
