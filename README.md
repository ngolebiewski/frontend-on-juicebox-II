# Block 34D - Improved Juicebox

For this project, you will be recreating the Juicebox API from scratch with the new technologies you've learned. You may structure your project as you wish as long as you meet the requirements. Feel free to use one of the previous workshop solutions as reference! Before you start, make sure to read through the rubric to get a sense of what you will be required to do.

## Submission

Please submit a link to your Github repo.

# Nick Golebiewski
## The Juicebox Blog 
## Fullstack Academy Career Sim
### 12-12-2023 

## LOL, my notes will be like a stream-of-consciousness blog about making a blog API!
- 10:17am Just setting up files seems a.o.k.
-   db is titled: juiceboxblog, very creative!
- 10:19 am installing prisma, etc. with npm init -y, following along on the prisma documentation: https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch/relational-databases-node-postgresql
- 10:25am used the "install:stuff" script I wrote to install the various packages that will be needed. 
- 10:30am working on the Prisma Database Schema
- 10:35am looking up "One-to-Many" https://www.prisma.io/docs/orm/prisma-schema/data-model/relations/one-to-many-relations#overview
- 10:36am fingers crossed, about to do Prisma Migrate on this.
  -  ```npx prisma migrate dev --name init```
- 10:37am Woohoo! error free (as far as I know) Ticket #2 done.
- 10:39am Things running surpisingly smoothly so far. trying to get as much done before heading out for alternate side parking and typing in a car -- Ugh. 
- 10:40 Seed ticket #3. Psyched about using Faker -- I practiced that last night, to put in well, fake information. It's surprisingly hard to think of a bunch of fake information on your own!
- 10:42 Doing this... ```npm install @prisma/client``` ... thank you documentation!
- 10:45 looking up faker https://fakerjs.dev/guide/ for seed content
- 11:05 in car now cramped and on laptop leaning on steering wheel. First honks of the street cleaner are to be heard
- 11:27am finsihed seed.js. It's really cold in this car. Can't run heat because the battery will die since I hardly drive.
- 11:34 SERVER TIME - looking up https://expressjs.com/en/guide/routing.html to remember how to require, etc. for server.js. I think I need fingerless gloves for typing outdoors in the winter.
- 11:52 API and AUTH routes set up. Just 38 minutes to go until I can leave this car!
- 12:03 PM made first auth/register api and it returns an empty object. MIDDLEWARE time!
- 12:44 back from car and whew, NYC is the worst in that regard! I couldn't figure out why my register api wasn't working and then 15minutes later, because i had "body" and not "data" in the spot to create a user!!!! Dude!
- 12:46 Making a french press of coffee ☕️...
- 1:05pm ...The coffee's really good. Plus, the login and auth routes are all set, including bcrypt and tokens. Lunch break.

---

good soba noodles! Extended my streak on DuoLingo to 236 days en español too.
---

- 1:32 PM Now, I'm so ready to continue with making some GET posts routes
- 1:40 BAM! Get all posts API call complete. Actually, what do you call it?  a route? an API? a path? a method? a restful API?
- 1:41 PM 🎵 Listening to Leonard Cohen, would love to have on a 12" record and not just on spotify. Hmmm, OAUTH spotify later?
- 2:14 PM starting to sweat a bit, not because of over active steam heat in NYC apartments, but because of a time crunch feeling. Struggled a bit with token middleware, making token == Tolkein jokes in middleware, and forgetting to require jwt.
- 2:19PM Feeling better. OK now to post/put/delete blog posts in the API.
- 2:22 PM (All 2's!!) --> **Ask myself when something isn't working, "is everything imported via require that needs to be?"**
- 2:45 PM Embarrasingly, I jumped up and shouted with joy in my empty apartment when I got the new blog post to work in Postman! mispellings, etc. Will the next ones be easier?
- 3:00 PM PUT was only somewhat weird. I totally remember to turn the number entered via the URL (param) to a number! 














