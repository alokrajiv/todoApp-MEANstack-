var express = require('express'),
	router = express.Router(),
	db = require('../db')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendfile('./public/index.html')
})

router.get('/api/todos', function(req, res) {

    // use mongoose to get all todos in the database
    db.todoModel.find(function(err, todos) {

        // if there is an error retrieving, send the error. nothing after res.send(err) will execute
        if (err)
            res.send(err)
        console.log(todos)
        res.json(todos) // return all todos in JSON format
    })
})

// create todo and send back all todos after creation
router.post('/api/todos', function(req, res) {

    // create a todo, information comes from AJAX request from Angular
    db.todoModel.create({
        text : req.body.text,
        done : false
    }, function(err, todo) {
        if (err)
            res.send(err)

        // get and return all the todos after you create another
        db.todoModel.find(function(err, todos) {
            if (err)
                res.send(err)
            res.json(todos)
        })
    })

})

// delete a todo
router.delete('/api/todos/:todo_id', function(req, res) {
    db.todoModel.remove({
        _id : req.params.todo_id
    }, function(err, todo) {
        if (err)
            res.send(err)

        // get and return all the todos after you create another
        db.todoModel.find(function(err, todos) {
            if (err)
                res.send(err)
            res.json(todos)
        })
    })
})


module.exports = router