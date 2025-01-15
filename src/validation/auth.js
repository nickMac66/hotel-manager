/**
 * Name: bookingForm.js
 * Description: JavaScript file to validate user input
 * Author: NicMac
 * Created On: October 24, 2024
 */
const {body, validationResult} = require('express-validator');
const userValidationRules = () => {
    return [
        body('*').notEmpty(),
        body('phone').isMobilePhone(),
        // username must be an email
        body('email').isEmail()
    ];
};

const validate = (req, res, next) => {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
        return next();
    }
    const extractedErrors = [];
    errors.array().map(err => extractedErrors.push({[err.param]: err.msg}));

    return res.status(422).json({
        errors: extractedErrors
    });
};

module.exports = {
    userValidationRules,
    validate
};