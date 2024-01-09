import {
	degreeSel,
	fieldSel,
	branchDiv,
	univercityInput,
	studingRadio,
	endOfStudy,
	dateOfEnd,
	branchBox,
	addToTable,
	educationTableBody,
	tableAddEducation,
} from "./variables.js";

// depence
fieldSel.addEventListener("change", () => {
	const fields = {
		حسابداری: ["صنعتی", "تجاری", "بازگانی"],
		IT: ["مدیریت دانش", "معماری سازمانی", "امنیت داده"],
		MBA: ["مالی", "بازاریابی", "استراتژی"],
	};

	branchDiv.style.display = "none";
	const selectedField = fieldSel.value;
	if (fields[selectedField]) {
		branchDiv.style.display = "block";
		branchBox.innerHTML = fields[selectedField]
			.map((option) => `<option>${option}</option>`)
			.join("");
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
	localStorage.setItem("education", JSON.stringify(tableAddEducation));
};

const displayTable = () => {
	educationTableBody.innerHTML = "";
	if (!tableAddEducation.length) {
		educationTableBody.innerHTML = `<tr> <td colspan="5"> مدرکی وارد نشده </td> </tr>`;
		return;
	}

	tableAddEducation.forEach((Element) => {
		educationTableBody.innerHTML += `
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
		degree,
		field,
		branch,
		uni,
		date,
	};
	if (uni && field && branch) {
		tableAddEducation.push(tableItems);
		saveToLocal();
		displayTable();
		degreeSel.value = "none";
		fieldSel.value = "none";
		branchDiv.style.display = "none";
		univercityInput.value = "";
		dateOfEnd.value = "";
		studingRadio.checked = true;
		dateOfEnd.style.display = "none";
	} else {
		alert("فیلد ها نباید خالی باشه!");
		return;
	}
};

addToTable.addEventListener("click", addHandler);
displayTable();
