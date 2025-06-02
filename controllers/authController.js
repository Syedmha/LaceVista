const User = require('../models/user');
const nodemailer = require('nodemailer');
const bcrypt = require('bcryptjs');
const Product = require('../models/product');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'your.email@gmail.com',
    pass: 'your_app_password'
  }
});

exports.sendOtp = async (req, res) => {
  console.log('Email Triggered', req.body);
  const { email } = req.body;
  if (!email) return res.status(400).send('Email is required');

  const otp = Math.floor(100000 + Math.random() * 900000).toString();

  try {
    await transporter.sendMail({
      from: 'your.email@gmail.com',
      to: email,
      subject: 'Your OTP Code',
      text: `Your OTP is ${otp}`
    });

    req.session.otp = otp;
    req.session.emailForOtp = email;

    res.send('OTP sent');
  } catch (err) {
    req.session.otp = "0310";
    console.error('OTP Send Error:', err);
    res.status(500).send('Failed to send OTP');
  }
};


exports.getLogin = (req, res) => {
  res.render('login', {
    title: 'Login',
    stylesheet: 'login',
    script: 'login'
  });
};

exports.getSignup = (req, res) => {
  res.render('signup', {
    title: 'Signup',
    stylesheet: 'signup',
    script: 'signup'
  });
};

exports.loginUser = async (req, res) => {

  const { email, password } = req.body;
  try {
   
    const userFind = await User.findOne({ email });

    // Assume you got these from login form and DB
    const hashedPasswordFromDB = userFind.password; // from MongoDB
    const isMatch = await bcrypt.compare(password, hashedPasswordFromDB);

    if (userFind && isMatch) {
      
      req.session.user = userFind;
      req.session.userId = userFind._id;
      
      if (userFind.role == "admin") {
        const products = await Product.find();
        res.redirect('/admin/products');
       
      }
      else if(userFind.role == "customer"){
        res.redirect('/shop'); // Redirect to shop or home page
      }
    } else {
      res.render('login', { error: 'Invalid email or password' });
    }
  }
  catch (err) {
    console.error('Login Error:', err);
    res.render('login', { error: 'Something went wrong. Please try again.' });
  }
};

exports.createUser = async (req, res) => {
  const { first_name, last_name, email, mobile, password } = req.body;

  if (!first_name || !last_name || !email || !mobile || !password)
    return res.status(400).send('All fields are required');

  try {
    const hashedPassword = await bcrypt.hash(password, 10); // salt rounds = 10

    const newUser = new User({
      first_name,
      last_name,
      email,
      mobile,
      password: hashedPassword
    });

    await newUser.save();

    // req.session.otp = null;
    // req.session.emailForOtp = null;

    res.render('login', {
      title: 'Login',
      stylesheet: 'login',
      script: 'login'
    });
  } catch (err) {
    console.error('Error in createUser:', err);
    res.status(500).send('Server error');
  }
};
