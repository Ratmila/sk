const personGenerator = {
    surnameJson: `{  
        "count": 15,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Морозов"
        }
    }`,
    firstNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Олег",
            "id_6": "Марк",
            "id_7": "Ахмед",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Кирилл"
        }
    }`,
    firstNameFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Елена",
            "id_2": "Надежда",
            "id_3": "Нина",
            "id_4": "Алина",
            "id_5": "Арина",
            "id_6": "Алиса",
            "id_7": "Вера",
            "id_8": "Ирина",
            "id_9": "Ольга",
            "id_10": "Карина"
        }
    }`,

    randomDate: `{
        "count": 3,
        "list": {
            "id_1": {
                "days": "28",
                "months": [
                    "февраля"
                ]
            },
            "id_2": {
                "days": "30",
                "months": [
                    "апреля",
                    "июня",
                    "сентября",
                    "ноября"
                ]
            },
            "id_3": {
                "days": "31",
                "months": [
                    "января",
                    "марта",
                    "мая",
                    "июля",
                    "августа",
                    "октября",
                    "декабря"
                ]
            }
        }
    }`,

    GENDER_MALE: 'Мужчина',
    GENDER_FEMALE: 'Женщина',

    randomIntNumber: (max = 1, min = 0) =>
        Math.floor(Math.random() * (max - min + 1) + min),

    randomValue: function (json) {
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`; // this = personGenerator
        return obj.list[prop];
    },

    dateGenerate: function () {
        let birthDate = [],
            data,
            date,
            month,
            monthNamber,
            year;
        data = this.randomValue(this.randomDate);
        date = this.randomIntNumber(data.days, 1);
        monthNamber = this.randomIntNumber(data.months.length - 1, 0);
        month = data.months[monthNamber];
        year = this.randomIntNumber(2000, 1950);
        birthDate.push(date, month, year);
        return birthDate;
    },

    getPerson: function () {
        this.person = {};
        this.person.gender = Math.floor(Math.random()*2) == 1 ? this.GENDER_MALE : this.GENDER_FEMALE;
        let date = this.dateGenerate();
        if (this.person.gender == 'Мужчина') {
            this.person.img = 'male.png';
            this.person.firstName = this.randomValue(this.firstNameMaleJson);
            this.person.surname = this.randomValue(this.surnameJson);
            this.person.patronymic = this.randomValue(this.firstNameMaleJson) + 'ович';
            this.person.date = date[0] + ' ' + date[1] + ' ' + date[2] + ' г.р.';
        } else {
            this.person.img = 'female.png';
            this.person.firstName = this.randomValue(this.firstNameFemaleJson);
            this.person.surname = this.randomValue(this.surnameJson) + 'a';
            this.person.patronymic = this.randomValue(this.firstNameMaleJson) + 'овна';
            this.person.date = date[0] + ' ' + date[1] + ' ' + date[2] + ' г.р.';
        }
        return this.person;
    },
};