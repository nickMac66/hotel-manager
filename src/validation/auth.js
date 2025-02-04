/**
 * Name: auth.js
 * Description: JavaScript file to validate user input
 * Author: NicMac
 */

// Import express-validator functions
const { body, matchedData, validationResult } = require('express-validator');

/**
 * Validation rules for the booking form.
 * @returns {Array} - An array of validation rules.
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
            .isLength({ max: 20 })
            .withMessage('max 20 characters'),

        body('lname')
            .isLength({ max: 20 })
            .withMessage('max 20 characters'),

        // Only validate if phone is not empty
        body('phone')
            .if((value, { req }) => req.body.phone !== '')
            .isMobilePhone()
            .withMessage('not a valid phone number'),

        // Only validate if email is not empty
        body('email')
            .if((value, { req }) => req.body.email !== '')
            .isEmail()
            .normalizeEmail()
            .withMessage('not a valid e-mail address'),
    ];
};

/**
 * Handles validation result.
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express middleware function to pass control to the next handler
 */
const validate = (req, res, next) => {

    // Extract validation errors from the request
    const errors = validationResult(req);
    
    // If there are validation errors, return a 400 response
    if (!errors.isEmpty()) {
        
        return res.status(400).json({ errors: errors.array() });
    }
    next();
};

module.exports = {
    formValidationRules,
    validate
};