var mongoose = require ('mongoose'),
	exports = module.exports = {};
mongoose.connect('mongodb://localhost/aloktodoapp')

exports.todoModel = mongoose.model('Todo', {
    text : String,
    done : Boolean
})
