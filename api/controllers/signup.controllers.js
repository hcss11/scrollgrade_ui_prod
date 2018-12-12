var mongoose = require('mongoose');
var SignUpUser = mongoose.model('SignUpUser');
const nodemailer = require('nodemailer');

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
                nodemailer.createTestAccount((err, account) => {
                  // create reusable transporter object using the default SMTP transport
                  let transporter = nodemailer.createTransport({
                    host: 'smtp.ethereal.email',
                    port: 587,
                    secure: false, // true for 465, false for other ports
                    auth: {
                      user: account.user, // generated ethereal user
                      pass: account.pass // generated ethereal password
                    }
                  });

                  // setup email data with unicode symbols
                  let mailOptions = {
                    from: '"Caleb Simmons" <caleb@scrollgrade.co>', // sender address
                    to: 'sb6856@nyu.edu', // list of receivers
                    subject: 'Thank you for signing up for Scrollgrade', // Subject line
                    text: 'Hello ' + user.name + ',', // plain text body
                    html: '<b>Thank you for signing up with ScrollGrade!</b>' // html body
                  };

                  // send mail with defined transport object
                  transporter.sendMail(mailOptions, (error, info) => {
                    if (error) {
                      return console.log(error);
                    }
                    console.log('Message sent: %s', info.messageId);
                    // Preview only available when sending through an Ethereal account
                    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

                    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
                    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
                  });
                });
                res
                    .status(201)
                    .json("Thank you for signing up " + user.name + "!" );
            }
        });

};
