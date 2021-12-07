import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Button, Text, View } from 'react-native';

export default class App extends React.Component {
	
	constructor(props){
		super(props);
		
		this.buttons = {
			answer1: "8 bits",
			answer2: "16 bits",
			answer3: "32 bits",
			answer4: "12 bits",
		};
		
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
		  
		  buttons: {
			width: 500,  
		  },
		});
		
		this.bytes = 4;
		this.handleAnswer1 = this.handleAnswer1.bind(this);
		this.handleAnswer2 = this.handleAnswer2.bind(this);
		this.handleAnswer3 = this.handleAnswer3.bind(this);
		this.handleAnswer4 = this.handleAnswer4.bind(this);
	}
	
	componentDidMount() {
		console.log("Component did mount");
	}

	handleAnswer1 () {
		console.log("answer 1 is selected");
		
	}
	
	handleAnswer2 () {
		console.log("answer 2 is selected");
		
	}
	
	handleAnswer3 () {
		console.log("answer 3 is selected");
		
	}
	
	handleAnswer4 () {
		console.log("answer 4 is selected");
		
	}
	
	render () {
		return (
			<View style={this.styles.container}>
			  <Text style={this.styles.question}>How much bits are in {this.bytes} bytes?</Text>
			  <View style={this.styles.answers}>
				<Button id={this.buttons.answer1} title={(this.bytes * 2) + " bits"} onPress={this.handleAnswer1} />
				<Button id={this.buttons.answer2} title={(this.bytes * 4) + " bits"} onPress={this.handleAnswer2} />
				<Button id={this.buttons.answer3} title={(this.bytes * 8) + " bits"} onPress={this.handleAnswer3} />
				<Button id={this.buttons.answer4} title={(this.bytes * 3) + " bits"} onPress={this.handleAnswer4} />
				<Button style={this.styles.buttons} title="Next" />
			  </View>
			  <StatusBar style="auto" />
			</View>
		  );
	}
}
