let router = require("express").Router();

router.get("/", function (req, res) {
    res.json({
        err: 0,
        msg: "API is working",
    });
});

var userController = require("./controllers");

router.route("/users")
    .get(userController.listUser)
    .post(userController.newUser);
router.route("/users/:id")
    .get(userController.viewUser)
    .put(userController.updateUser)
    .delete(userController.deleteUser);

module.exports = router;
