var mongoose = require('mongoose');

var signUpSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    school : {
        type : String,
        required : true
    }
});

mongoose.model('SignUpUser', signUpSchema);
