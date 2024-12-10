require('dotenv').config()

//const dbConnect = require('./src/db/db.js')
const dbConnect = require('./src/db/db.js');
const BlogModel = require('./src/models/blog.js');
const ExperienceModel = require('./src/models/experience.js');
const IntroductionModel = require('./src/models/introduction.js');
const ServiceModel = require('./src/models/service.js');
const SkillModel = require('./src/models/skill.js');




const { faker } = require('@faker-js/faker');


dbConnect().catch((err) => {
    console.log(err)
})

const numberOfExperience = 5;
const numberOfBlog = 5;
const numberOfService = 5;
const numberOfSkill = 5;
const numberOfIntroduction = 5;

const generate = async () =>{
    for(i = 0; i<numberOfExperience; i ++ ){
        const newExperience = ExperienceModel({
            title: faker.lorem.sentence(5),
            type: faker.lorem.sentence(5),
            origanization: faker.lorem.sentence(5),
            description: faker.lorem.sentence(5),
            fromDate: faker.date.anytime(),
            toDate: faker.date.anytime()
        })
        const result = await newExperience.save();
        console.log(`${i} - Experience with id: ${result._id} generated`)
    }

    
    for(i = 0; i<numberOfBlog; i++){
        const newBlog = new BlogModel({  
            title: faker.lorem.sentence(5),
            description: faker.lorem.paragraph(),
        })
        const result = await newBlog.save()
        console.log(`${i} - Blog with id: ${result._id} generated`)
    }

    for(i = 0; i<numberOfService; i++){
        const newService = new ServiceModel({
            name: faker.lorem.sentence({ min: 3, max: 5 }),
            description: faker.lorem.paragraph(),
            detail: faker.lorem.paragraph(),
        })
        const result = await newService.save()
        console.log(`${i} - Service with id: ${result._id} generated`)
    }

    for(i = 0; i<numberOfSkill; i++){
        const newSkill = new SkillModel({
            name: faker.lorem.sentence({ min: 3, max: 5 }),
            percent: faker.number.int({ max: 100 }),
            type: faker.lorem.sentence({ min: 5, max: 10 }),
        })
        const result = await newSkill.save()
        console.log(`${i} - Skill with id: ${result._id} generated`)
    }

    for(i = 0; i<numberOfIntroduction; i++){
        const newIntroduction = new IntroductionModel({
            name: faker.lorem.sentence({ min: 3, max: 5 }),
            phone: faker.number.int(),
            email: faker.internet.email(),
            bod: faker.date.anytime(),
            yearOfProfession: faker.number.int({ max: 100 }),
        })
        const result = await newIntroduction.save()
        console.log(`${i} - Introduction with id: ${result._id} generated`)
    }

}


generate()