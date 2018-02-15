const getProfile = async (req, res) => {
  const db = req.app.get('db')
  await db.get_profile().then((response) => {
    res.status(200).send(response)
  })
}

module.exports = (app) => {
  app.get('/api/profiles', getProfile)
}