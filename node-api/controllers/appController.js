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