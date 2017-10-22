import React from 'react';
import PropTypes from 'prop-types';
import Forecast from '../components/Forecast';
import {getForcast} from '../helpers/api';

class ForecastContainer extends React.Component {
	static contextTypes = {
		router: PropTypes.object.isRequired
	};

	state = {
			isLoading: true,
			forecastData: {}
	};

	componentDidMount = () => {
		this.makeRequest(this.props.match.params.city)
	};

	componentWillReceiveProps = ({match}) => {
		this.makeRequest(match.params.city)
	};

	makeRequest = async (city) => {
		const forecastData = await getForcast(city);

		this.setState({
					isLoading: false,
					forecastData: forecastData
				});
	};
	handleClick = (weather) => {
		this.context.router.history.push({
			pathname: `/detail/${this.props.match.params.city}`,
			state: {
				weather: weather
			}
		})
	};

	render() {
		const {isLoading, forecastData} = this.state;
		return (
			<Forecast
				city={this.props.match.params.city}
				isLoading={isLoading}
				handleClick={this.handleClick}
				forecastData={forecastData}/>
		)
	}
}

export default ForecastContainer;
