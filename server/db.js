const mongoose = require('mongoose')
mongoose.connect('mongodb://database:27017/users', { useNewUrlParser: true })

const userSchema = new mongoose.Schema({
  name: String
})

module.exports = {
  Users: mongoose.model('Users', userSchema)
}