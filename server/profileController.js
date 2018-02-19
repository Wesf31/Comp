const getProfile = async (req, res) => {
  const db = req.app.get('db')
  await db.get_profile().then((response) => {
    res.status(200).send(response)
  })
}

const getSearch = async (req, res) => {
  const db = req.app.get('db')
  console.log(req.query)
  const {
    searchName,
  } = req.query
  await db.get_search([searchName]).then((response) => {
    res.status(200).send(response)
  }).catch((error) => {
    console.log(error)
    res.status(500).send(error)
  })
}

const deleteProfile = async (req, res) => {
  const db = req.app.get('db')
  const {
    name,
  } = req.params
  await db.delete_profile([name]).then((data) => {
    res.status(200).send(data)
  }).catch((error) => {
    console.log(error)
    res.status(500).send(error)
  })
}

const updateProfile = async (req, res) => {
  const db = req.app.get('db')
  const {
    profilename,
    newName,
  } = req.body

  await db.update_profile([newName, profilename]).then((data) => {
    res.status(200).send(data)
    console.log(data)
  }).catch((error) => {
    console.log(error)
    res.status(500).send(error)
  })
}

const createProfile = async (req, res) => {
  const db = req.app.get('db')
  const {
    name,
    uploadedFileCloudinayrUrl,
  } = req.body
  await db.create_profile([name, uploadedFileCloudinayrUrl]).then((data) => {
    res.status(200).send(data)
  }).catch((error) => {
    console.log(error)
    res.status(500).send(error)
  })
}

module.exports = (app) => {
  app.get('/api/profiles', getProfile)
  app.post('/api/postProfile', createProfile)
  app.delete('/api/deleteProfile/:name', deleteProfile)
  app.put('/api/updateProfile', updateProfile)
  app.get('/api/search', getSearch)
}