import React from 'react';
import GetCityContainer from './GetCityContainer';

const styles = {
	container: {
		width: '100%',
		height: '92%'
	},
	header: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		background: 'rgba(252, 90, 44, 0.89)',
		color: '#fff',
		padding: 5,
	}
}

class Main extends React.Component {
	render() {
		const { container, header} = styles;

		return (
			<div style={container}>
				<div style={header}>
					<h2 style={{margin: 0}}>Clever Title</h2>
					<GetCityContainer direction='row'/>
				</div>
				{this.props.children}
			</div>
		)
	}
}

export default Main;
