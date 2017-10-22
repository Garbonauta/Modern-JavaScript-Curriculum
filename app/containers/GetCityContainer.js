import React from 'react';
import PropTypes from 'prop-types';
import GetCity from '../components/GetCity';

class GetCityContainer extends React.Component {
	state =  {
		city: ''
	};

	static propTypes = {
		direction: PropTypes.string.isRequired,
	};

	static contextTypes = {
		router: PropTypes.object.isRequired
	};

	static defaultProps = {
			direction: 'column'
	};

	handleSubmitCity = (e) => {
		e.preventDefault();
		this.context.router.history.push(`/forecast/${this.state.city}`)
	};

	handleUpdateCity = (e) => {
		this.setState({
			city: e.target.value
		})
	};

	render() {
		return (
			<GetCity
				direction={this.props.direction}
				onSubmitCity={this.handleSubmitCity}
				onUpdateCity={this.handleUpdateCity}
				city={this.state.city}/>
		)
	}
}


export default GetCityContainer;
