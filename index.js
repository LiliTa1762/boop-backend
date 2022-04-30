const Express = require('express');
const Prisma = require('prisma/prisma-client');
const cors = require('cors');

/** Initialiation and Instantiation */
const prisma = new Prisma.PrismaClient();
const app = Express();
const port = 9000;

app.use(Express.json());
app.use(Express.urlencoded({extended:false}));
app.use(cors());

/** Routes */

/** Base route */
app.get('/', (req, res) => {
  res.send('status: 200');
});

/** Get all walker */
app.get('/walkers', async (req, res) => {
  try {
    const walker = await prisma.walker.findMany();
    /** Send the Walker object as our response */
    res.status(200).json(walker);
  }
  /** When Prisma fails to read from database, catch the error and send it as our response */
  catch (err) {
    res.status(500).send(err);
  }
});

/** Get all owners */
app.get('/owners', async (req, res) => {
  try {
    const owner = await prisma.owner.findMany();
    res.status(200).json(owner);
  }
  catch (err) {
    res.status(500).send(err);
  }
});

/** Get all doggies */
app.get('/doggies', async (req, res) => {
  try {
    const doggie = await prisma.doggie.findMany();
    res.status(200).json(doggie);
  }
  catch (err) {
    res.status(500).send(err);
  }
});

/** Get all walks */
app.get('/walks', async (req, res) => {
  try {
    const walks = await prisma.walking.findMany();
    res.status(200).json(walks);
  }
  catch (err) {
    res.status(500).send(err);
  }
});

/** Get walker by id */
app.get('/walker/:id', async (req, res) => {
  try {
    const { id } = req.params;
        const walkerById = await prisma.walker.findUnique({
          where: {
            id: parseInt(id),
          }
        });
        res.status(200).json(walkerById);
  }
  catch (err) {
    res.status(500).send(err);
  }
});

/** Get doggie by id */
app.get('/doggie/:id', async (req, res) => {
  try {
    const { id } = req.params;
        const doggieById = await prisma.doggie.findUnique({
          where: {
            id: parseInt(id),
          }
        });
        res.status(200).json(doggieById);
  }
  catch (err) {
    res.status(500).send(err);
  }
});

/** Post a walker */
app.post('/walker/create', async (req, res) => {
  try {
    res.body = await prisma.walker.create({
      data: {
        name: req.body.name,
        lastname: req.body.lastname,
        email: req.body.email,
        phone: req.body.phone,
        about_me: req.body.about_me,
        price_per_walk: req.body.price_per_walk,
        city: req.body.city,
        country: req.body.country,
        photo: req.body.photo
      },
    })
    res.status(200).send({"New walker": "OK"})
  }
  catch (err) {
    res.status(500).send(err);
  }
})

/** Post a owner */
app.post('/owner/create', async (req, res) => {
  try {
    const dataForm = await prisma.owner.create({
      data: {
        name: req.body.name,
        lastname: req.body.lastname,
        email: req.body.email,
        phone: req.body.phone,
        interests: req.body.interests,
        neighborhood: req.body.neighborhood,
        city: req.body.city,
        country: req.body.country,
        photo: req.body.photo
      },
    })
    res.status(200).json({dataForm})
  }
  catch (err) {
    res.status(500).send(err);
  }
})

/** Post a doggie */
app.post('/doggie/create', async (req, res) => {
  try {
    res.body = await prisma.doggie.create({
      data: {
        name: req.body.name,
        age: req.body.age,
        breed: req.body.breed,
        interests: req.body.interests,
        number_of_child: req.body.number_of_child,
        owner_id: req.body.owner_id,
        city: req.body.city,
        country: req.body.country,
        photo: req.body.photo
      },
    })
    res.status(200).send({"New doggie": "OK"})
  }
  catch (err) {
    res.status(500).send(err);
  }
})

/** Delete a walker with a given id */
app.delete('/walker/delete/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const walker = await prisma.walker.delete({
      where: {
        id: parseInt(id),
      }
    });
    res.status(200).json({"Walker": "Deleted OK"});
  }
  catch (err) {
    res.status(500).send(err);
  }
})

/** Delete a owner with a given id */
/** Delete also all dogs with the owner id*/
app.delete('/owner/delete/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const owner = await prisma.owner.delete({
      where: {
        id: parseInt(id),
      }
    });
    res.status(200).json({"Owner": "Deleted OK"});
  }
  catch (err) {
    res.status(500).send(err);
  }
})

/** Delete a doggie with a given id */
app.delete('/doggie/delete/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const doggie = await prisma.doggie.delete({
      where: {
        id: parseInt(id),
      }
    });
    res.status(200).json({"Doggie": "Deleted OK"});
  }
  catch (err) {
    res.status(500).send(err);
  }
})

/** Server */
app.listen(port, () => {
  console.log(`API listening on localhost: ${port}`);
});
