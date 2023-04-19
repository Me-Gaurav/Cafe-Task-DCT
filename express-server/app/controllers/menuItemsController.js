const MenuItem = require("../models/menuItems");
const menuItemsController = {};

//Reading all tasks
menuItemsController.list = (req, res) => {
  MenuItem.find()
    .then((task) => {
      res.json(task);
    })
    .catch((err) => {
      res.json(err);
    });
};

menuItemsController.create = (req, res) => {
  const body = req.body;
  const Item = new MenuItem(body);
  Item.save()
    .then((item) => {
      res.json(item);
    })
    .catch((err) => {
      res.json(err);
    });
};

menuItemsController.destroy = (req, res) => {
  const id = req.params.id;
  MenuItem.findByIdAndDelete(id)
    .then((menuItem) => {
      res.json(menuItem);
    })
    .catch((err) => {
      res.json(err);
    });
};

menuItemsController.show = (req, res) => {
  MenuItem.find({
    $or: [{ name: { $regex: req.params.key } }],
  })
    .then((item) => {
      res.json(item);
    })
    .catch((err) => {
      res.json(err);
    });
};

module.exports = menuItemsController;
