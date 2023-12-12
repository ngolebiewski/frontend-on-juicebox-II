const { PrismaClient } = require('@prisma/client')
const { faker } = require('@faker-js/faker');
const bcrypt = require("bcrypt");

const prisma = new PrismaClient()
const saltRounds = 7; //I like prime numbers

//make a pre-hashed password via faker & bcrypt
const passwordFakerHasher = async () => {
  const password = faker.internet.password();
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    return hashedPassword};



const main = async () =>{
  console.log('Start database seeding')

  //create users
  const user1 = await prisma.user.create({
    data: {username:faker.internet.userName(), password: await passwordFakerHasher()},
  })

  const user2 = await prisma.user.create({
    data:{username:faker.internet.userName(), password: await passwordFakerHasher()},
  })

  const user3 = await prisma.user.create({
    data:{username:faker.internet.userName(), password: await passwordFakerHasher()},
  })

  //create posts
  await prisma.post.createMany({
    data: [ 
      {title:faker.lorem.lines(1) , content:faker.lorem.sentences({ min: 1, max: 3 }) , userId:user1.id},
      {title:faker.lorem.lines(1) , content:faker.lorem.sentences({ min: 1, max: 3 }) , userId:user2.id},
      {title:faker.lorem.lines(1) , content:faker.lorem.sentences({ min: 1, max: 3 }) , userId:user2.id},
      {title:faker.lorem.lines(1) , content:faker.lorem.sentences({ min: 1, max: 3 }) , userId:user3.id},
    ]
  })

  console.log('Finished seeding database')
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
