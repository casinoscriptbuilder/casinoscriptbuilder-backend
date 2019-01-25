User = require("./models");

exports.listUser = (req, res) => {
    User.get((err, users) => {
        if (err) {
            res.json({
                err: 1,
                msg: err,
            });
        }
        res.json({
            err: 0,
            msg: "success",
            data: users
        });
    });
};

exports.newUser = (req, res) => {
    let user = new User();
    user.email = req.body.email;
    user.user_name = req.body.user_name;
    user.password = req.body.password;
    user.save((err) => {
        if (err) {
            res.json({
                err: 1,
                msg: err,
            });
        }
        res.json({
            err: 0,
            msg: "success"
        });
    });
};

exports.viewUser = (req, res) => {
    User.findById(req.params.id, (err, user) => {
        if (err) {
            res.json({
                err: 1,
                msg: err,
            });
        }
        res.json({
            err: 0,
            msg: "success",
            data: user
        });
    });
};

exports.updateUser = (req, res) => {
    User.findById(req.params.id, (err, user) => {
        if (err) {
            res.json({
                err: 1,
                msg: err,
            });
        }
        user.email = req.body.email;
        user.user_name = req.body.user_name;
        user.password = req.body.password;
        user.active = req.body.active;
        user.save((err) => {
            if (err) {
                res.json({
                    err: 1,
                    msg: err,
                });
            }
            res.json({
                err: 0,
                msg: "success"
            });
        });
    });
};

exports.deleteUser = (req, res) => {
    User.remove({ _id: req.params.id }, (err) => {
        if (err) {
            res.json({
                err: 1,
                msg: err,
            });
        }
        res.json({
            err: 0,
            msg: "success"
        });
    });
};
