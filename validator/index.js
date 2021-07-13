export const createPostValidator = (req, res, next) => {
  // check if title content is valid
  req.check('title', 'Title is required').notEmpty();
  req.check('title', 'Title must be at between 4 to 150 characters').isLength({ min: 4, max: 150 });

  // check if body content is valid
  req.check('body', 'Body is required').notEmpty();
  req.check('body', 'Body must be at between 4 to 2000 characters').isLength({ min: 4, max: 2000 });

  // check for errors
  const errors = req.validationErrors();

  if (errors) {
    const firstError = errors[0].msg;
    return res.status(400).json({ error: firstError });
  }

  next();
}