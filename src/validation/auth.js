/**
 * Name: bookingForm.js
 * Description: JavaScript file to validate user input
 * Author: NicMac
 * Created On: October 24, 2024
 */

// Import express-validator functions
const {body, matchedData, validationResult} = require('express-validator');

/**
 * Function to define validation rules for the form.
 * @returns {Array} Array of validation chain middleware for form fields 
 */
const formValidationRules = () => {
    return [
        // Sanitize and ensure all fields are not empty
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

        // Only validate if phone is not empty
        body('phone')
                .if((value, {req}) => req.body.phone.trim() !== '')
                .isMobilePhone()
                .withMessage('not a valid phone number'),

        // Only validate if email is not empty
        body('email')
                .if((value, {req}) => req.body.email.trim() !== '')
                .isEmail()
                .normalizeEmail()
                .withMessage('not a valid e-mail address'),

        // Ensure a room type is selected
        // body('roomType')
        //         .custom(async value => {
        //             if (!value) {
        //                 throw new Error('required field');
        //             }
        //             return true;
        //         })
    ];
};

/**
 * Function to handle validation result.
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express middleware function to pass control to the next handler
 */
const validate = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()});
    }
    next();
};
module.exports = {
    formValidationRules,
    validate
};