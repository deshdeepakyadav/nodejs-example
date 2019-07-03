exports.postAuthorValidator = (req, res, next) =>{

    // Name Validation
    req.check('name', 'Name Required').notEmpty();
    req.check('name', 'Name must be between to 150 chanrs').isLength({
        min: 3,
        max: 150
    });

    //Address Validation
    req.check('address', 'Address Required').notEmpty();
    req.check('address', 'Address must be between to 500 chanrs').isLength({
        min: 3,
        max: 500
    });

    //check for errors
    const errors = req.validationErrors();

    //If error occurs then
    if(errors){
        const firstError = errors.map((error)=> error.msg)[0];
        return res.status(400).json({error : firstError});
    }

    //Proceed to next
    next();
};