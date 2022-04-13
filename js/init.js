window.onload = function () {
	const initPerson = personGenerator.getPerson();
	document.getElementById('firstNameOutput').innerText = initPerson.firstName;
	document.getElementById('surnameOutput').innerText = initPerson.surname;
	document.getElementById('genderOutput').innerText = initPerson.gender;
	document.getElementById('birthYearOutput').innerText = initPerson.birth;
	document.getElementById('birthMonthOutput').innerText = initPerson.birthMonth;
	document.getElementById('birthDayOutput').innerText = initPerson.birthDay;
	document.getElementById('patronymicOutput').innerText = initPerson.patronymic;
	document.getElementById('professionOutput').innerText = initPerson.profession;	
};

document.querySelector('#btnRetry').addEventListener('click', function () {
	window.onload();
});

document.querySelector('#btnClear').addEventListener('click', function () {
	document.getElementById('firstNameOutput').innerText = " ";
	document.getElementById('surnameOutput').innerText = " ";
	document.getElementById('genderOutput').innerText = " ";
	document.getElementById('birthYearOutput').innerText = " ";
	document.getElementById('birthMonthOutput').innerText = " ";
	document.getElementById('birthDayOutput').innerText = " ";
	document.getElementById('patronymicOutput').innerText = " ";
	document.getElementById('professionOutput').innerText = " ";
});