import User from '../models/user.js';

export const signup = async (req, res) => {
	const userExists = await User.findOne({email: req.user.email});
	if (userExists) {
		res.status(403).json({error: 'Email is taken'});
	}

	const user = new User(req.body);
	await user.save();
	res.status(201).json({user});
};

