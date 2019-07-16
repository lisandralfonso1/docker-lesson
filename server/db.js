const mongoose = require('mongoose')
// Change the following connection url to refer to the docker database container
mongoose.connect('mongodb://database:27017/users', { useNewUrlParser: true })

const userSchema = new mongoose.Schema({
  name: String
})

module.exports = {
  Users: mongoose.model('Users', userSchema)
}