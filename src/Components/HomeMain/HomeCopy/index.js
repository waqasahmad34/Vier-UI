import React, { Component } from 'react';
import HomeCopy from './HomeCopy';

class HomeCopyContainer extends Component {
	render() {
		return <HomeCopy navigation={this.props.navigation} />;
	}
}

export default HomeCopyContainer;
