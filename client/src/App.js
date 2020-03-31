import React from 'react';
import './App.css';
import './Form.jsx';
import './History.jsx';

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

export default App;
