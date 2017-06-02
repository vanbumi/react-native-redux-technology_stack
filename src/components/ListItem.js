import React, { Component } from 'react';
import { Text } from 'react-native';
import { CardSection } from './common';

class ListItem extends Component {
	render() {
		return(
			<CardSection>
				<Text>{this.props.library.title}</Text>
			</CardSection>
		);				
	}
}

export default ListItem; 