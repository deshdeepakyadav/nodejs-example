const Author = require('../models/appModels');

exports.getResponse = (req, res) => {
    res.send("API is running through controller route");
};


exports.getJSONResponse = (req, res) => {
    const authors = Author.find().select("_id name address").
                            then((authors) => {
                                res.status(200).json({'Authors' : authors})
                            }).catch( err => console.log(err));
    // res.json({
    //     "Author" : [
    //         {
    //             "Name" : "Desh",
    //             "Address": "Redmond"
    //         }
    //     ]
    // });
};

exports.postAuthor = (req, res) => {
   const post = new Author (req.body);
   console.log('CREATING AUTHOR', req.body );
//    post.save().then(result => {
//        res.status(200).json({
//            post: result
//        });
//    });
   post.save( (err, result) => {

    if(err){
        return res.status(400).json({
            error: err
        });
    }

    res.status(200).json({
        post: result
    })
   });
   
};