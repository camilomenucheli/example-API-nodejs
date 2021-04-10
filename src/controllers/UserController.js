const mongoose = require('mongoose')

const User = mongoose.model('User')

module.exports = {
  async index(req, res) {
    const { page = 1, limit = 10 } = req.query
    const users = await User.paginate({}, { page, limit: Number(limit) })

    return res.json(users)
  },

  async show(req, res) {
    const user = await User.findById(req.params.id)

    return res.json(user)
  },

  async create(req, res) {
    const { name } = req.body
    console.log(typeof name)
    if (typeof name === 'string') {
      const user = await User.create(req.body)
      
      return res.json(user)
    } else {
      return res.json({error: 'nome tem que ser string'})
    }
  },

  async update(req, res) {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true })

    return res.json(user)
  },

  async destroy(req, res) {
    await User.findByIdAndRemove(req.params.id)

    return res.send()
  }
}