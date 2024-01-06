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

// depence
fieldSel.addEventListener("change", () => {
	if (fieldSel.value === "accounting") {
		branchDiv.style.display = "block";
		const accounting = `<option value="a">صنعتی</option>
		<option value="b">تجاری</option>
		<option value="c">بازگانی</option>`;
		branchBox.innerHTML = accounting;

	} else if (fieldSel.value === "it") {
		branchDiv.style.display = "block";
		const it = `<option value="a">مدیریت دانش</option>
        <option value="b">معماری سازمانی</option>
        <option value="c">امنیت داده</option>`;
		branchBox.innerHTML = it;
	} else if (fieldSel.value === "mba") {
		branchDiv.style.display = "block";
		const mba = `<option value="a">مالی</option>
        <option value="b">بازاریابی</option>
        <option value="c">استراتژی</option>`;
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
