// EditUser Component for update user data

// Import Modules
import React, { useState, useEffect } from "react";
import axios from "axios";
import UserForm from "./UserForm";

// EditUser Component
const EditUser = (props) => {
const [formValues, setFormValues] = useState({
	name: "",
	subscribed: false,
	date: Date.now,
});
	
//onSubmit handler
const onSubmit = (userObject) => {
	axios
	.put(
		"http://localhost:3000/users/" +
		props.match.params.id,
		userObject
	)
	.then((res) => {
		if (res.status === 200) {
		alert("User successfully updated");
		props.history.push("/user-list");
		} else Promise.reject();
	})
	.catch((err) => alert("Something went wrong"));
};

// Load data from server and reinitialize user form
useEffect(() => {
	axios
	.get(
		"http://localhost:3000/users/"
		+ props.match.params.id
	)
	.then((res) => {
		const { name, subscribed, date } = res.data;
		setFormValues({ name, subscribed, date });
	})
	.catch((err) => console.log(err));
}, []);

// Return user form
return (
	<UserForm
	initialValues={formValues}
	onSubmit={onSubmit}
	enableReinitialize
	>
	Update User
	</UserForm>
);
};

// Export EditUser Component
export default EditUser;
