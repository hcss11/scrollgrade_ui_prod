var mongoose = require('mongoose');
var SignUpUser = mongoose.model('SignUpUser');

module.exports.addUser = function(req, res) {

    console.log(req.body.name+ " "+ req.body.email+ " "+ req.body.school);
    SignUpUser
        .create({
            name : req.body.name,
            email : req.body.email,
            school : req.body.school
        }, function(err, user){
            if (err) {
                console.log("Error creating user");
                res
                    .status(400)
                    .json(err);
            } else {
                console.log(user);
                res
                    .status(201)
                    .json("Thank you for signing up!");
            }
        });

};
