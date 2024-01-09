import {
	companyName,
	entering,
	jobTitle,
	working,
	endOfWork,
	date,
	addSel,
	jobTableBody,
	tableAdd,
} from "./variables.js";
// radio date
working.addEventListener("change", () => {
	date.style.display = "none";
});

endOfWork.addEventListener("change", () => {
	date.style.display = "block";
});

// save to local then add table
const saveToLocal = () => {
	localStorage.setItem("job", JSON.stringify(tableAdd));
};

const displayTable = () => {
	jobTableBody.innerHTML = "";
	if (!tableAdd.length) {
		jobTableBody.innerHTML = `<tr> <td colspan="5"> سابقه وارد نشده </td> </tr>`;
		return;
	}

	tableAdd.forEach((Element) => {
		jobTableBody.innerHTML += `
        <tr>
            <td>${Element.company}</td>
            <td>${Element.jobTitle}</td>
            <td>${Element.entering}</td>
            <td>${Element.date || "درحال همکاری"} </td>
        </tr>
        
        `;
	});
};

const addHandler = (e) => {
	e.preventDefault();
	const company = companyName.value;
	const jobtitle = jobTitle.value;
	const enterig = entering.value;
	const dateEnd = date.value;
	const tableItems = {
		company: company,
		jobTitle: jobtitle,
		entering: enterig,
		date: dateEnd,
	};
	if (company && jobTitle && enterig) {
		tableAdd.push(tableItems);
		saveToLocal();
		displayTable();
		companyName.value = "";
		jobTitle.value = "";
		entering.value = "";
		date.value = "";
	} else {
		alert("فیلد ها نباید خالی باشه!");
		return;
	}
};

addSel.addEventListener("click", addHandler);
displayTable();
