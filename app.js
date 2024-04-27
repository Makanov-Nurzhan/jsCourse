const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%'
        },
        exp: '1 month'
    },
    showAgeAndLangs: (plan) => {
        const { age } = plan;
        const { languages } = plan.skills;
        let str = `Мне ${age} и я владею языками: `
        languages.forEach((lang) => {
            str += `${lang.toUpperCase()} `
        })
        console.log(str)
    }
};

function showExperience(plan) {
    const { exp } = plan.skills;
    return exp
}

function showProgrammingLangs(plan) {
    let str = ''
    const { programmingLangs } = plan.skills;
    for (let key in programmingLangs) {
        str += `Язык ${key} изучен на ${programmingLangs[key]}\n`
    }
    return str;
}

personalPlanPeter.showAgeAndLangs(personalPlanPeter);