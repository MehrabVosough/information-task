// Job Variables
const companyName = document.querySelector("#company");
const entering = document.querySelector(".enter-date");
const jobTitle = document.querySelector("#job-title");
const working = document.querySelector("#working");
const endOfWork = document.querySelector("#end-of-work");
const date = document.querySelector(".start-date");
const addSel = document.querySelector(".select");
const jobTableBody = document.querySelector("tbody");
// Final Form Needed
const tableAdd = JSON.parse(localStorage.getItem("job")) || [];


// Education Variables
const degreeSel = document.querySelector(".degree");
const fieldSel = document.querySelector(".field");
const branchDiv = document.querySelector(".branch");
const univercityInput = document.querySelector("#university");
const studingRadio = document.querySelector("#studing");
const endOfStudy = document.querySelector("#graduated");
const dateOfEnd = document.querySelector("#date");
const branchBox = document.querySelector("#branchBox");
const addToTable = document.querySelector("#addToTable");
const educationTableBody = document.querySelector("tbody");
// Final Form needed
const tableAddEducation = JSON.parse(localStorage.getItem("education")) || [];


// Information Variables
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
// Final Form needed
const infoLocalSaved = JSON.parse(localStorage.getItem("information")) || [];




// exports
export {
	// job
	companyName,
	entering,
	jobTitle,
	working,
	endOfWork,
	date,
	addSel,
	jobTableBody,
	tableAdd,
	// edu
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
	// info
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
};
