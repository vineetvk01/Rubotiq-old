import mongoose from 'mongoose';
import validator from 'validator';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { JWT_KEY, TIMEOUT } from '../constants/token';

const userSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    trim: true,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    validate: (value) => {
      if (!validator.isEmail(value)) {
        throw new Error({ error: 'Invalid Email address', });
      }
    },
  },
  password: {
    type: String,
    required: true,
    minLength: 7,
  },
  isActive: {
    type: Boolean,
    default: false,
  },
  role: {
    type: Number,
    required: true,
  },
  phone: {
    type: String,
    trim: true,
    required: true,
  },
});

userSchema.pre('save', async function (next) {
  // Hash the password before saving the user model
  const user = this;
  if (user.isModified('password')) {
    user.password = await bcrypt.hash(user.password, 8);
  }
  next();
});

userSchema.methods.generateAuthToken = async function (req, res) {
  const user = this;
  const token = jwt.sign({ _id: user._id, }, JWT_KEY);
  return res.cookie('token', token, { maxAge: TIMEOUT, httpOnly: true, });
};

userSchema.statics.findByCredentials = async (email, password) => {
  // Search for a user by email and password.
  const user = await User.findOne({ email, });
  if (!user) {
    throw new Error({ error: 'Invalid login credentials', });
  }
  const isPasswordMatch = await bcrypt.compare(password, user.password);
  if (!isPasswordMatch) {
    throw new Error({ error: 'Invalid login credentials', });
  }
  return user;
};

const User = mongoose.model('User', userSchema);

export default User;
