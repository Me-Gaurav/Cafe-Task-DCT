const express = require("express");
const router = express.Router();
const menuItemsController = require("../app/controllers/menuItemsController");

//tasks
router.get("/api/menuItems", menuItemsController.list);
router.post("/api/menuItems", menuItemsController.create);
router.delete("/api/menuItems/:id", menuItemsController.destroy);
router.get("/api/menuItems/:key", menuItemsController.show);

module.exports = router;
