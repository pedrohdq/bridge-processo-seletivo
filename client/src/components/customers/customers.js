import React, { Component } from 'react';
import './customers.css';

class Customers extends Component {
	constructor(props) {
		super(props);
		
		this.state = {
			customers: [],
		};

		fetch('http://localhost:5000/api/customers')
			.then(res => {
				if (res.ok) {
					return res.json();
				} else {
					throw new Error(res.statusText);
				}
			})
			.then(customers => {
				console.log('fetched: ' + JSON.stringify(customers));
				this.state.customers = customers;
			})
			.catch((error) => {
				console.error(error);
			})
	}

	render() {
		return (
			<div className="cust">
				<h2>Customers</h2>
				<ul>
					{this.state.customers.map(customer =>
						<li key={customer._id}>
							{customer.firstName} {customer.lastName} 
						</li>
					)}
				</ul>		
			</div>
		);
	}
}

export default Customers;
