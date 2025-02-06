/**
 * @file bookingRoutes.js
 * @description Route handlers for displaying and submitting booking forms
 * @author NicMac
 */

const express = require('express');
const bodyParser = require('body-parser');
const { URL } = require('url');
const Booking = require('../models/booking');
const { buildForm } = require('../models/bookingForm');
const { formValidationRules, validate } = require('../validation/auth');

const router = express.Router();
const baseURL = "http://localhost:3000";

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

/**
 * GET /
 * Renders the main page of the application 
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
router.get('/', (req, res) => {
    const header = "hotel booking form";
    const bookingForm = buildForm({}, '/booking');
    res.render("index", { header, html: bookingForm });
});

/**
 * POST /booking
 * Handles the submission of the hotel booking form and inserts the data into the database.
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
router.post('/booking', formValidationRules(), validate, async (req, res) => {
    const booking = new Booking();
    const { submitButton, ...bookingObject } = req.body;
    booking.insert(bookingObject);
    const { header, bookingDetails } = await booking.getDetails(req);
    res.render("index", { header: header, html: bookingDetails });
});

/**
 * GET /update
 * Renders the booking update page with the existing booking data.
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
router.get('/update', async (req, res) => {
    const header = "update booking";
    const id = req.query.id;

    const booking = new Booking();
    const bookingDetails = await booking.getDetailsById(id);

    const updateForm = buildForm(bookingDetails, "update");
    res.render("index", { header, html: updateForm });
});

/**
 * POST /update
 * Handles the submission of the update booking form and updates the booking in the database.
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
router.post('/update', formValidationRules(), validate, async (req, res) => {
    const booking = new Booking();
    
    const {submitButton, ...bookingObject} = req.body;        
    await booking.update(bookingObject);

    const { header, bookingDetails } = await booking.getDetails(bookingObject);
    res.render("index", { header: header, html: bookingDetails });
});

/**
 * GET /bookingList
 * Renders the booking list page with a list of all bookings in the database.
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
router.get('/bookingList', async (req, res) => {
    const booking = new Booking();
    const { header, bookingList } = await booking.getList(req);
    res.render("index", { header, html: bookingList });
});

module.exports = router;