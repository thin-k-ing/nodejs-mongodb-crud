import React from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FormGroup, FormControl, Button } from "react-bootstrap";

const UserForm = (props) => {
	const validationSchema = Yup.object().shape({
		name: Yup.string().required("Rquired"),
		subscribed: Yup.boolean()
			.required("Rquired"),
		date: Yup.date()
	});
	console.log(props);
	return (
		<div className="form-wrapper">
			<Formik {...props} validationSchema={validationSchema}>
				<Form>
					<FormGroup>
						<Field
							name="name"
							type="text"
							className="form-control"
						/>
						<ErrorMessage
							name="name"
							className="d-block invalid-feedback"
							component="span"
						/>
					</FormGroup>
					<FormGroup>
						<Field
							name="subscribed"
							type="boolean"
							className="form-control"
						/>
						<ErrorMessage
							name="subscribed"
							className="d-block invalid-feedback"
							component="span"
						/>
					</FormGroup>
					<FormGroup>
						<Field
							name="date"
							type="date"
							className="form-control"
						/>
						<ErrorMessage
							name="date"
							className="d-block invalid-feedback"
							component="span"
						/>
					</FormGroup>
					<Button
						variant="danger"
						size="lg"
						block="block"
						type="submit"
					>
						{props.children}
					</Button>
				</Form>
			</Formik>
		</div>
	);
};

export default UserForm;
