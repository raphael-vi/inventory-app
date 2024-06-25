const Item = require("../models/item");

exports.getItemById  = async (req,res)=>{
    try {
        const item = await Item.findById(req.params.id);
        res.render('items/edit',{item});
        
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.getAllItems = async (req, res) => {
  try {
    const items = await Item.find();
    res.render("items/index", { items });
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.createNewItem = async (req,res) => {
    try {
        const {name, quantity, price} = req.body;
        const newItem = new Item ({name, quantity, price});
        await newItem.save();
        res.redirect('/items');
        
    } catch (error) {
        res.status(500).send(error);
        
    }
};

exports.updateItem = async (req,res)=>{
    try {
        const {name, price, quantity} = req.body;
        const item = await Item.findByIdAndUpdate(req.params.id, {name, price,quantity}, {new: true});
        if(!item){
            res.status(404).send('Item not found!');
        }
        res.redirect('/items') // might be wrong
    } catch (error) {
        res.status(500).send(error);
        
    }
};

exports.deleteItem = async (req,res) =>{
    try{
        await Item.findByIdAndDelete(req.params.id);
        res.redirect('/items');
    }catch(error){
        res.status(500).send(error);
    }
};


