const companyName = document.querySelector("#company");
const entering = document.querySelector(".enter-date");
const working = document.querySelector("#working");
const endOfWork = document.querySelector("#end-of-work");
const date = document.querySelector(".start-date");
const jobTitle = document.querySelector("#job-title");
const addSel = document.querySelector(".select");
const tableBody = document.querySelector("tbody");

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
const tableAdd = JSON.parse(localStorage.getItem("job")) || [];

const displayTable = () => {
	tableBody.innerHTML = "";
	if (!tableAdd.length) {
		tableBody.innerHTML = `<tr> <td colspan="5"> سابقه وارد نشده </td> </tr>`;
		return;
	}

	tableAdd.forEach((Element) => {
		tableBody.innerHTML += `
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
		company.value = "none";
		jobTitle.value = "none";
		date.style.display = "none";
		enterig.value = "";
	} else {
		alert("فیلد ها نباید خالی باشه!");
		return;
	}
};

addSel.addEventListener("click", addHandler);
displayTable();
