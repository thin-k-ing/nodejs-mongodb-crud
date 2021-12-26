import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

const UserTableRow = (props) => {
	const { _id, name, subscribed, date } = props.obj;

	const deleteUser = () => {
		axios
			.delete("http://localhost:3000/users/" + _id)
			.then((res) => {
				if (res.status === 200) {
					alert("User successfully deleted");
					window.location.reload();
				} else Promise.reject();
			})
			.catch((err) => alert("Something went wrong"));
	};

	return (
		<tr>
			<td>{name}</td>
			<td>{subscribed}</td>
			<td>{date}</td>
			<td>
				<Link className="edit-link" to={"/edit-user/" + _id}>
					Edit
				</Link>
				<Button onClick={deleteUser} size="sm" variant="danger">
					Delete
				</Button>
			</td>
		</tr>
	);
};

export default UserTableRow;
