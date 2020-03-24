import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
			<Page 
				wealcomePrompt='Entre números e nós calcularemos seus divisores! :D' 
				historyPrompt='Gostaria de ver o histórico?'
			/>
    </div>
  );
}

class Page extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			wealcomePrompt: this.props.wealcomePrompt,
			historyPrompt: this.props.historyPrompt,
			history: [],
		};
		this.loadHistory = this.loadHistory.bind(this);
	}

	loadHistory() {
		fetch('api/historico')
			.then( data => data.json())
			.then( history => this.setState({history}));
	}

	render() {
		return (
			<div className='page'>
				<h1>{this.state.wealcomePrompt}</h1>
				<hr />	
				<Form loadHistory={this.loadHistory}/>
				<h2>{this.state.historyPrompt}</h2>
				<History history={this.state.history} loadHistory={this.loadHistory}/>		
			</div>			
		);
	}
}

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

class History extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			historyShown: false,
		}
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		this.setState(state => ({historyShown: !state.historyShown}));
		
	}



	renderHistory() {
		return (
			<span>{this.state.history.map((element, i) => {
				return <li key={i}>{element.number}: {element.divisors}</li>
			})}</span>
		);
	}

	showhideHistory() {
		if (this.state.historyShown) {
			if (this.props.history.length === 0) {
				return <p>Nenhum histórico :P</p>;
			} else {
				this.props.loadHistory();
				return (
					<ul>
						{this.renderHistory()}
					</ul>
				);
			}
		} else {
			return <p>...</p>;
		}	
	}

	render() {
		return (
			<div id='history'>
				<button onClick={this.handleClick}>
					{this.state.historyShown ? 'Esconder Histórico' : 'Mostrar Histórico'}
				</button>
				<br />
				<div id='history-list'>		
					{this.showhideHistory()}		
				</div>		
			</div>
		);
	}
}

export default App;
