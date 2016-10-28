import * as express from "express";

var router = express.Router();

router.get('/', (req, res) => {
  res.render('index', {})
});

export var Index = router;