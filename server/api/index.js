// Milestone 2: Routes
const router = require('express').Router()

// connect your API routes here!
router.use('/albums', require('./albums'));
// router.use('/artists', require('./artists'));
// router.use('/songs', require('./songs'));

router.use((req, res, next) => {
  const error = new Error('Not Found');
  error.status = 404;
  next(error);
});

module.exports = router
