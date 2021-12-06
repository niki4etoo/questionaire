import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
	
	constructor(props){
		super(props);
		
		this.styles = StyleSheet.create({
		  container: {
			flex: 1,
			backgroundColor: '#fff',
			alignItems: 'center',
			justifyContent: 'center',
		  },
		 
		  answers: {
			display: 'grid',
			gridTemplateRows: 'repeat(2, 1fr)',
			gridTemplateColumns: 'repeat(2, 1fr)',
			gap: '50px',
			
			padding: '30px',
		  },
		  
		  question: {
			  fontSize: 32,
			  fontWeight: 'bold',
		  },
		  
		  answer: {
			  fontSize: 24,
		  },
		});
		
		this.bytes = 4;
	}

	render () {
		return (
			<View style={this.styles.container}>
			  <Text style={this.styles.question}>How much bits are in {this.bytes} bytes?</Text>
			  <View style={this.styles.answers}>
				<Text style={this.styles.answer}>{this.bytes * 2} bits</Text>
				<Text style={this.styles.answer}>{this.bytes * 4} bits</Text>
				<Text style={this.styles.answer}>{this.bytes * 8} bits</Text>
				<Text style={this.styles.answer}>{this.bytes * 3} bits</Text>
			  </View>
			  <StatusBar style="auto" />
			</View>
		  );
	}
}
