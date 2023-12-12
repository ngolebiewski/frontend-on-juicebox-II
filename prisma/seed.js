const { PrismaClient } = require('@prisma/client')
const { faker } = require('@faker-js/faker');
const bcrypt = require("bcrypt");

const prisma = new PrismaClient()
const saltRounds = 7;

//make a pre-hashed password via faker & bcrypt
const passwordFakerHasher = async () => {
  const password = faker.internet.password();
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    return hashedPassword};


const main = async () =>{
  console.log('Start database seeding')
  await prisma.user.createMany({
    data: [ 
      {username:faker.internet.userName(), password: await passwordFakerHasher()},
      {username:faker.internet.userName(), password: await passwordFakerHasher()},
      {username:faker.internet.userName(), password: await passwordFakerHasher()},
    ]
  })

  // ... you will write your Prisma Client queries here
}

//Don't mess with this --> Perfect and from Prisma
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
