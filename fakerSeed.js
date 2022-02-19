const { faker } =  require('@faker-js/faker');

const randomName = faker.name.findName(); // Rowan Nikolaus
const randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz
const randomCard = faker.helpers.createCard(); // An object representing a random contact card containing many properties
const bcrypt = require('bcryptjs');

const seedUsers = (num) => {
    let i = 0

    while (i < num) {
        const user = {
            firstName: faker.name.firstName(),
            lastName: faker.name.lastName(),
            userName: faker.internet.userName(),
            email: faker.internet.email(),
            hashedPassword: bcrypt.hashSync(faker.internet.password())
        }

        console.log(user, ',')
        i++
    }
}

seedUsers(20)