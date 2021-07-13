import crypto from 'crypto';
import mongoose from 'mongoose';
import { v1 as uuidv1 } from 'uuid';

const UserSchema = new mongoose.Schema({
	name: {
		type: String,
		trim: true,
		required: true,
	},
	email: {
		type: String,
		trim: true,
		required: true,
	},
	hashed_password: {
		type: String,
		required: true,
	},
	salt: String,
	created: {
		type: Date,
		default: Date.now,
	},
	updated: Date,
});

// use virtual fields
UserSchema.virtual('password').set(function(password) {
	this._password = password;
	this.salt = uuidv1();
	this.hashed_password = this.encryptPassword(password);
}).get(function() {
	return this._password;
});

// methods
UserSchema.methods = {
	encryptPassword: function(password) {
		if (!password) return '';

		try {
			return crypto.createHmac('sha1', this.salt).update(password).digest('hex');
		} catch (error) {
			return '';
		}
	}
};

export default mongoose.model('User', UserSchema);