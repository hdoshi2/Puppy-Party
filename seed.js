const { Puppy, Party, db } = require("./server/db");
const { green, red } = require("chalk");


const yesterday = new Date(Date.now() - 24 * 60 * (60 * 1000));
const nextWeek = new Date(Date.now() + 7 * 24 * 60 * (60 * 1000));

const seedPuppy = [
  {
    name: "Nayna",
    parties: [
      {
        date: yesterday,
        place: "Home"
      },
      {
        date: nextWeek,
        place: "NYC"
      }
    ]
  },
  {
    name: "Atticus",
    parties: [
      {
        date: yesterday,
        place: "Garden"
      },
      {
        date: nextWeek,
        place: "Beach"
      }
    ]
  }
];

const seed = async () => {
  await db.sync({ force: true });

  await Puppy.create(seedPuppy[0], {
    include: [Party]
  });

  await Puppy.create(seedPuppy[1], {
    include: [Party]
  });
  console.log(green("Seeding success!"));
  db.close();
};

seed().catch(err => {
  console.error(red("Oh noes! Something went wrong!"));
  console.error(err);
  db.close();
});
