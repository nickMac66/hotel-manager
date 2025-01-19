/**
 * Name: bookingForm.js
 * Description: JavaScript file to validate user input
 * Author: NicMac
 * Created On: October 24, 2024
 */
const {body, matchedData, validationResult} = require('express-validator');

const formValidationRules = () => {
    return [
        body('*')
                .trim()
                .escape()
                .notEmpty()
                .withMessage('required field'),
        body('fname')
                .isLength({max: 20})
                .withMessage('max 30 characters'),
        body('lname')
                .isLength({max: 20})
                .withMessage('max 30 characters'),
        body('phone')
                .isMobilePhone()
                .withMessage('not a valid phone number'),
        body('email')
                .isEmail()
                .normalizeEmail()
                .withMessage('not a valid e-mail address'),
        body('roomType')
                .custom(async value => {
                    if (!value) {
                        throw new Error('Room type not selected');
                    }
                    return true;
                })
    ];
};

const validate = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()});
    }
};

module.exports = {
    formValidationRules,
    validate
};