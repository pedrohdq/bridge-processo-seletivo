import React from 'react';

class Form extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			value: '',
			res: {
				number: 0,
				divisors: [],
				isPrime: false,
			},
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		this.setState({value: event.target.value});
	}

	handleSubmit(event) {
		if (isNaN(this.state.value)) {
			alert('O input precisa ser um número!');
		} else {
			fetch('api/divisores?number=' + parseInt(this.state.value))
				.then( data => data.json())
				.then( res  => {
					console.log(res);
					this.setState({res})
				});
			this.props.loadHistory();
			event.preventDefault();
		}	
	}

	renderResponse() {
		if (this.state.res.divisors.length > 0) {
			return (
				<p>
					Esse número {
						this.state.res.isPrime
							? <span>é</span>
							: <span>não é</span>
					} primo! Seus divisores são {
						JSON.stringify(this.state.res.divisors)
					}
				</p>
			);
		}
	}

	render() {
		return (
			<div id='form'>
				<form onSubmit={this.handleSubmit}>
					<label>
						Número:  
						<input type='text' value={this.state.value} onChange={this.handleChange} />
					</label>
						<input type='submit' value='Vai!' />
				</form>
				{this.renderResponse()}
			</div>
		);
	}
}

export default Form;
