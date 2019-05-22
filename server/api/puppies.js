const router = require("express").Router();
const { Puppy } = require("../db");

router.get("/", async (req, res, next) => {
  try {
    const puppy = await Puppy.findAll();
    res.json(puppy);
  } catch (err) {
    next(err);
  }
});

module.exports = router
