import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Button, Form, Col, Row } from 'react-bootstrap';

const AddressForm = () => {
	return (
		<Formdiv>
			<Form>
				<Row className="mb-3">
					<Form.Group as={Col} controlId="formGridEmail">
						<Form.Label>First Name</Form.Label>
						<Form.Control type="email" placeholder="Enter email" />
					</Form.Group>

					<Form.Group as={Col} controlId="formGridPassword">
						<Form.Label>Last Name</Form.Label>
						<Form.Control type="password" placeholder="Password" />
					</Form.Group>
				</Row>

				<Form.Group className="mb-3" controlId="formGridAddress1">
					<Form.Label>Address</Form.Label>
					<Form.Control placeholder="1234 Main St" />
				</Form.Group>

				<Form.Group className="mb-3" controlId="formGridAddress2">
					<Form.Label>Address 2</Form.Label>
					<Form.Control placeholder="Apartment, studio, or floor" />
				</Form.Group>

				<Row className="mb-3">
					<Form.Group as={Col} controlId="formGridCity">
						<Form.Label>City</Form.Label>
						<Form.Control />
					</Form.Group>

					<Form.Group as={Col} controlId="formGridState">
						<Form.Label>State</Form.Label>
						<Form.Select defaultValue="Choose...">
							<option>Choose...</option>
							<option>...</option>
						</Form.Select>
					</Form.Group>

					<Form.Group as={Col} controlId="formGridZip">
						<Form.Label>Zip</Form.Label>
						<Form.Control />
					</Form.Group>
				</Row>

				<Form.Group className="mb-3" id="formGridCheckbox">
					<Form.Check type="checkbox" label="Check me out" />
				</Form.Group>

				<Button variant="primary" type="submit">
					Submit
				</Button>
			</Form>
		</Formdiv>
	);
};

export default AddressForm;

const Formdiv = styled.div`
	padding: 20px;
	margin: 30px 20px;
	@media (max-width: 500px) {
		margin: 30px 5px;
		padding: 5px;
	}
`;
