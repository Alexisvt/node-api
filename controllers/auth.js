import User from '../models/user.js';

export const signup = async (req, res) => {
	const userExists = await User.findOne({email: req.body.email});
	if (userExists) {
		return res.status(403).json({error: 'Email is taken'});
	}

	const user = new User(req.body);
	try {
		await user.save();
		res.status(201).json({message: 'signup success!'});
	} catch (err) {
		res.status(400).json({error: err});
	}
};

