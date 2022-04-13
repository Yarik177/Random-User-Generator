const personGenerator = {
	surnameJson: `{  
        "count": 16,
        "list": {
			"id_1": "Ivanov",
			"id_2": "Smirnov",
			"id_3": "Cuznetsov",
			"id_4": "Vasilev",
			"id_5": "Petrov",
			"id_6": "Mikhailov",
			"id_7": "Novikov",
			"id_8": "Fedorov",
			"id_9": "Cravtsov",
			"id_10": "Nikolaev",
			"id_11": "Semenov",
			"id_12": "Slavin",
			"id_13": "Stepanov",
			"id_14": "Pavlov",
			"id_15": "Alexandrov",
			"id_16": "Morozov"
        }
    }`,

	firstNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Alexander",
			"id_2": "Maxim",
			"id_3": "Ivan",
			"id_4": "Artem",
			"id_5": "Dmitry",
			"id_6": "Nikita",
			"id_7": "Michael",
			"id_8": "Daniel",
			"id_9": "Egor",
			"id_10": "Andrey"
        }
	}`,
	
	firstNameFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Nadezhda",
			"id_2": "Antonina",
			"id_3": "Marina",
			"id_4": "Karina",
			"id_5": "Galina",
			"id_6": "Rimma",
			"id_7": "Agatha",
			"id_8": "Sofia",
			"id_9": "Olesya",
			"id_10": "Maria"
        }
    }`,

	patronymicMaleJson: `{
	"count": 10,
	"list": {
		"id_1": "Vladimirovich",
		"id_2": "Dmitrievich",
		"id_3": "Sergeevich",
		"id_4": "Ivanovich",
		"id_5": "Andreevich",
		"id_6": "Yurievich",
		"id_7": "Anatolyevich",
		"id_8": "Valentinovich",
		"id_9": "Mikhailovich",
		"id_10": "Alexandrovich"
}
}`,
	patronymicFemaleJson: `{
	"count": 10,
	"list": {     
		"id_1": "Vladimirovna",
		"id_2": "Dmitrievna",
		"id_3": "Sergeevna",
		"id_4": "Ivanovna",
		"id_5": "Andreevna",
		"id_6": "Yuryevna",
		"id_7": "Anatolyevna",
		"id_8": "Valentinovna",
		"id_9": "Mikhailovna",
		"id_10": "Alexandrovna"
}
}`,

	professionMaleJson: `{
	"count": 11,
	"list": {
		"id_1": "fitter",
		"id_2": "locksmith",
		"id_3": "taxi driver",
		"id_4": "driller",
		"id_5": "pilot",
		"id_6": "handyman",
		"id_7": "military",
		"id_8": "CMD adjuster",
		"id_9": "director",
		"id_10": "builder",
		"id_11": "miner"
}
}`,
	professionFemaleJson: `{
    "count": 11,
    "list": {
        "id_1": "accountant",
		"id_2": "salesman",
		"id_3": "taxi driver",
		"id_4": "cashier",
		"id_5": "economist",
		"id_6": "nurse",
		"id_7": "housewife",
		"id_8": "judge",
		"id_9": "director",
		"id_10": "analyst",
		"id_11": "waiter"
}
}`,

	birthMonth: `{
	"count": 12,
	"list": {     
		"id_1": "january",
		"id_2": "february",
		"id_3": "march",
		"id_4": "april",
		"id_5": "may",
		"id_6": "june",
		"id_7": "july",
		"id_8": "august",
		"id_9": "september",
		"id_10": "october",
		"id_11": "november",
		"id_12": "december"
}
}`,

	GENDER_MALE: 'man',
	GENDER_FEMALE: 'woman',

	randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),

	randomValue(json) {
		const obj = JSON.parse(json);
		const prop = `id_${this.randomIntNumber(obj.count, 1)}`; // this = personGenerator
		return obj.list[prop];
	},

	randomFirstName() {

		if (this.person.gender === 'man') {
			return this.randomValue(this.firstNameMaleJson);
		}
		return this.randomValue(this.firstNameFemaleJson);

	},

	randomSurname() {

		if (this.person.gender === 'man') {
			return this.randomValue(this.surnameJson);
		}
		return this.randomValue(this.surnameJson) + 'a';

	},

	randomPatronymic() {

		if (this.person.gender === 'man') {
			return this.randomValue(this.patronymicMaleJson);
		}
		return this.randomValue(this.patronymicFemaleJson);

	},

	randomProfession() {

		if (this.person.gender === 'man') {
			return this.randomValue(this.professionMaleJson);
		}
		return this.randomValue(this.professionFemaleJson);

	},

	randomGender() {

		return (this.randomIntNumber(1, 0) === 0) ? this.GENDER_MALE : this.GENDER_FEMALE;

	},

	randomBirth() {

		return this.randomIntNumber(1970, 2004);

	},

	randomBirthMonth() {

		return this.randomValue(this.birthMonth);

	},

	randomBirthDay() {

		if (this.person.birthMonth === "april" || this.person.birthMonth === "june" || this.person.birthMonth === "september" || this.person.birthMonth === "november") {
			return this.randomIntNumber(1, 30);
		} 
			else if (this.person.birthMonth === "february") {
			return this.randomIntNumber(1, 28);
		} 
			else {
			return this.randomIntNumber(1, 31);
		}

	},

	getPerson() {
		this.person = {};
		this.person.gender = this.randomGender();
		this.person.firstName = this.randomFirstName();
		this.person.surname = this.randomSurname();
		this.person.patronymic = this.randomPatronymic();
		this.person.profession = this.randomProfession();
		this.person.birth = this.randomBirth();
		this.person.birthMonth = this.randomBirthMonth();
		this.person.birthDay = this.randomBirthDay();
		return this.person;
	}
};