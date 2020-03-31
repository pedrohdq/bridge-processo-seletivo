import React from 'react';

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

export default History;
