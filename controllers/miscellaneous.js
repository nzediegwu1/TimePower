// es6 method definition
const sendMessage = (schoolName, message) => {
    const sms = `${schoolName} hereby wishes to welcome you to a new semester: ${message}`;
};

const db = {
    Anaeze: {
        sex: 'male',
        profession: 'programmer',
        briefDetail: 'Has talent in music, argument, finearts, and imagination',
    },
    Ugochi: {
        sex: 'female',
        profession: 'undecided',
        briefDetail: 'Has talent in education, speech, religion, and coordination',
    },
    Jetron: {
        sex: 'male',
        profession: 'graphic designer',
        briefDetail: 'Has talent in computer, electronics, software, and coordination',
    },
};

// old way of defining class/object
// to be used when you dont want to instantiate object and pass global parameter to it
// each method has its own instance parameter
const Biographer = {
    Anaeze: 'The software dreamer!',
    // method shorthand similar to Dayveedo method below
    Winner() {
        return 'Fire runs in his blood';
    },
    Dayveedo: (career) => `The versatile man whose career is ${career}`,
    // An asynchronous function declaration
    // that has error parameter in callback function
    FindBio(name, callback) {
        let result = '';
        let errorMessage = false;
        for (const person in db) {
            if (name === person) {
                result = `name: ${person}
                        sex: ${person.sex}
                        profession: ${person.profession}
                        bio: ${person.briefDetail}`;
                break;
            }
        }
        if (result === '') {
            errorMessage = true;
        } else {
            console.log(`member details is as follows: ${result}`);
        }
        if (typeof callback === 'function') {
            callback(errorMessage);
        }
    },
};

// new way of defining class/object
// to be used when you want to have class/global parameter
// across all methods in the class
class BasicCalculator {
    constructor(firstVal, secondVal) {
        this.firstVal = firstVal;
        this.secondVal = secondVal;
    }
    sum() {
        return this.firstVal + this.secondVal;
    }
    difference() {
        return this.firstVal - this.secondVal;
    }
    product() {
        return this.firstVal * this.secondVal;
    }
    quotient() {
        return this.firstVal / this.secondVal;
    }
}
