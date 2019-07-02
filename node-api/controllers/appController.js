const Post = require('../models/appModels');

exports.getResponse = (req, res) => {
    res.send("API is running through controller route");
};


exports.getJSONResponse = (req, res) => {
    res.json({
        "Author" : [
            {
                "Name" : "Desh",
                "Address": "Redmond"
            }
        ]
    });
};

exports.postAuthor = (req, res) => {
   const post = new Post (req.body);
   console.log('CREATING AUTHOR', post );
   
};