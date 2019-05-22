const router = require("express").Router();
const { Party } = require("../db");

router.get("/", async (req, res, next) => {
  try {
    const party = await Party.findAll();
    res.json(party);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
