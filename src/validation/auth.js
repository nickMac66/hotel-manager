/**
 * Name: bookingForm.js
 * Description: JavaScript file to validate user input
 * Author: NicMac
 * Created On: October 24, 2024
 */
const {body, validationResult} = require('express-validator');
const userValidationRules = () => {
    return [
        body('*').notEmpty().withMessage('**required field'),
        body('phone').if(body('phone').notEmpty()).isMobilePhone().withMessage('invalid phone number'),
        body('email').if(body('email').notEmpty()).isEmail().withMessage('**invalid email')
    ];
};

const validate = (req, res, next) => {

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()});
    }
};

module.exports = {
    userValidationRules,
    validate
};