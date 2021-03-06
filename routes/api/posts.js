const router = require("express").Router();
const postsController = require("../../controllers/postsController");

// Matches with "/api/books"
router.route("/")
  .get(postsController.findAll)
  .post(postsController.create);

router.route("/newest")
  .get(postsController.findNewest);

router.route("/byUser/:userId")
  .get(postsController.findUserPosts);

// Matches with "/api/posts/:id"
router.route("/:id")
  .get(postsController.findById)
  .post(postsController.update)
  .delete(postsController.remove);

module.exports = router;
