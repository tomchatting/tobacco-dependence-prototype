// External dependencies
const express = require('express');

const router = express.Router();

// Add your routes here - above the module.exports line

// Branching for example of patient already seen
router.post('/encounter-start', (req, res) => {
  // Make a variable and give it the value from 'encounter'
  const encounter = req.session.data.encounter.replace(/ /g, '');

  // Check whether the variable matches a condition
  if (encounter === '01/01/2024') {
    req.session.data.ongoing = 'No, is not attempting a current supported quit attempt';
    req.session.data.careplan = 'Quit attempt with behavioural intervention and licensed medication - recommended NHS INTERVENTION - 70';
    req.session.data['intended-quit-date-day'] = '10';
    req.session.data['intended-quit-date-month'] = '1';
    req.session.data['intended-quit-date-year'] = '2024';
    req.session.data.referral = 'NHS Community Pharmacy - 30';
    req.session.data['28-days'] = 'No';

    res.redirect('/check-answers');
  } else {
    // Send user to normal page
    req.session.data.ongoing = null;
    req.session.data.careplan = null;
    req.session.data['intended-quit-date-day'] = null;
    req.session.data['intended-quit-date-month'] = null;
    req.session.data['intended-quit-date-year'] = null;
    req.session.data.referral = null;
    req.session.data['28-days'] = null;

    res.redirect('/undertaking-current-supported-quit-attempt');
  }
});

module.exports = router;
