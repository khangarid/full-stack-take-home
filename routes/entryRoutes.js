const entryController = require('../controllers/entryController');

module.exports = app => {
  //add entry
  app.post("/api/entries", async (req, res) => {
    const { flow, pressure } = req.body;

    try {
      const entry = await entryController.addEntry({ flow, pressure });
      if (entry.error) return res.status(200).send({ error: 'Invalid input' });
      res.send(entry);
    } catch(error) {
      res.status(503).send({ error: "Failed to add new entry"})
    }
  });

  //get all entries
  app.get('/api/entries', async (req, res) => {    
    try {
      res.send(await entryController.entries(req.query));
    } catch(error) {
      res.status(503).send({ error: 'Failed to fetch entries' });
    }
  });

  //get single entry
  app.get('/api/entries/:id', async (req, res) => {
    try {
      const entry = await entryController.entry(req.params.id);

      if (!entry) return res.status(404).send({ error: 'Entry not found' })

      res.send(entry);
    } catch(error) {
      res.status(503).send({ error: 'Failed to fetch entry' })
    }
  });
};
