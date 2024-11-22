require('dotenv').config()

//const dbConnect = require('./src/db/db.js')
const dbConnect = require('./src/db/db.js')
const CourseModel = require('./src/models/course.js')
const UserModel = require('./src/models/user.js');
const BookModel = require('./src/models/book.js')

const { faker } = require('@faker-js/faker');


dbConnect().catch((err) => {
    console.log(err)
})

const numberOfCourse = 5;
const numberOfUser = 5;
const numberOfBook = 5;

const generate = async () =>{
    for(i = 0; i<numberOfCourse; i ++ ){
        const newCourse = CourseModel({
            price: faker.commerce.price(),
            title: faker.lorem.sentence(5),
            category: faker.music.genre(),
            author: faker.person.fullName()
        })
        const result = await newCourse.save();
        console.log(`${i} - Course with id: ${result._id} generated`)
    }

    let usersList = [];

    for(i = 0; i<numberOfUser; i++){
        const newUser = UserModel({
            username: faker.internet.userName(),
            firstname: faker.person.firstName(),
            lastname: faker.person.lastName(),
            dateOfBirth: faker.date.birthdate(),
            email: faker.internet.email()
        })
        const result = await newUser.save()
        usersList.push(result._id)
        console.log(`${i} - User with id: ${result._id} generated`)
    }


    for(i = 0; i<numberOfBook; i++){
        const randomId = usersList[Math.floor(Math.random() * usersList.length)]
        const newBook = new BookModel({
            author: randomId,
            page: faker.number.int({ max: 500 }),
            description: faker.lorem.paragraph(),
            genre: faker.lorem.word(),
            title: faker.lorem.sentence({ min: 3, max: 5 })
        })
        const result = await newBook.save()
        console.log(`${i} - Book with id: ${result._id} generated`)
    }

}


generate()