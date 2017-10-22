import React from 'react';
import Detail from '../components/Detail';

class DetailContainer extends React.Component {
	render() {
		const {location, match} = this.props;
		return (
			<Detail
				weather={location.state.weather}
				city={match.params.city}/>
		);
	}
}

export default  DetailContainer;
