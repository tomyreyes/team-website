const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
  try {
    const decoded = jwt.verify(
      req.headers.authorization.split(' ')[1],
      process.env.JWT_KEY
    )
    req.userData = decoded
    next()
  } catch (err) {
    res.status(401).json({ message: 'Failed to Authorize.' })
  }
}

//client needs to send token as part of header. IE Authorization: Bear 12fnesreg
