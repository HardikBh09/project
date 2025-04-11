const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/auth');
const User = require('../models/User');

// @desc    Add symptoms
// @route   POST /api/health/symptoms
// @access  Private
router.post('/symptoms', protect, async (req, res) => {
  try {
    const { description, severity } = req.body;

    const user = await User.findById(req.user.id);
    user.healthData.symptoms.push({
      description,
      severity,
      date: Date.now()
    });

    await user.save();

    res.status(200).json({
      success: true,
      data: user.healthData.symptoms
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
});

// @desc    Add lifestyle data
// @route   POST /api/health/lifestyle
// @access  Private
router.post('/lifestyle', protect, async (req, res) => {
  try {
    const { type, data } = req.body;
    const user = await User.findById(req.user.id);

    switch (type) {
      case 'sleep':
        user.healthData.lifestyle.sleep.push({
          hours: data.hours,
          date: Date.now()
        });
        break;
      case 'water':
        user.healthData.lifestyle.water.push({
          amount: data.amount,
          date: Date.now()
        });
        break;
      case 'exercise':
        user.healthData.lifestyle.exercise.push({
          minutes: data.minutes,
          type: data.exerciseType,
          date: Date.now()
        });
        break;
      case 'stress':
        user.healthData.lifestyle.stress.push({
          level: data.level,
          date: Date.now()
        });
        break;
      default:
        return res.status(400).json({
          success: false,
          message: 'Invalid lifestyle type'
        });
    }

    await user.save();

    res.status(200).json({
      success: true,
      data: user.healthData.lifestyle
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
});

// @desc    Get health data
// @route   GET /api/health/data
// @access  Private
router.get('/data', protect, async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    res.status(200).json({
      success: true,
      data: user.healthData
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
});

module.exports = router; 