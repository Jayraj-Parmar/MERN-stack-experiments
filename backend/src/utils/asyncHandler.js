const asyncHandler = (fn) => async (req, res, next) => {
  try {
    fn(req, res, next);
  } catch (error) {
    res.status(error.status || 500).json({ msg: error.message });
  }
};

export { asyncHandler };
