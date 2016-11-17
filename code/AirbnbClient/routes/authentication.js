/**
 * Created by Rentala on 09-11-2016.
 */
var express = require('express');
var router = express.Router();
var passport = require('passport');

router.post('/signInUser', function (req, res, next)  {
    var json_responses;
    passport.authenticate('login', function (err, user, info) {
        if(err){
            return next(err);
        }
        if(!user){
            json_responses={"status_code":401};
        } else{
            req.logIn(user,{session:false}, function(err) {
                if(err) {
                    return next(err);
                }
                req.session.user = user;

                json_responses = {
                    "status_code" : 200,
                    "user" : JSON.stringify(user)
                };
                //return res.redirect('/');
            })
        }
        res.send(json_responses);
        res.end();
    })(req, res, next);

});

router.get('/test', function (req, res, next)  {
    var json_responses;
    json_responses = {
        "status_code" : 200,
        "user" : "test"
    };
    //return res.redirect('/');
    res.send(json_responses);
    res.end();
});

router.post('/signUpUser', function (req, res, next)  {
    var json_responses;
    passport.authenticate('signup', function (err, user, info) {
        if(err){
        	console.log("err::" + err);
            return next(err);
        }
        if(!user){
            json_responses={"status_code":401};
        } else{
            req.logIn(user,{session:false}, function(err) {
                if(err) {
                    return next(err);
                }
                req.session.user = user;

                json_responses = {
                    "status_code" : 200,
                    "user" : JSON.stringify(user)
                };
                //return res.redirect('/');
            })
        }
        res.send(json_responses);
        res.end();
    })(req, res, next);

});

module.exports = router;
