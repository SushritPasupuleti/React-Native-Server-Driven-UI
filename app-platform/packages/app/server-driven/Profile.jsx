import * as React from 'react';
import { Animated, Alert, TouchableOpacity } from 'react-native';

function GreetButton() {
	return (
		<TouchableOpacity onPress={() => Alert.alert('Hello!')}>
			<Animated.Text children="Greet" />
		</TouchableOpacity>
	);
}

export default function MyNewWormhole(props) {
	return (
		<Animated.View style={{ flex: 1, backgroundColor: 'red' }}>
			<Animated.Text>
				Hello! Welcome to React Native SDUI!
			</Animated.Text>
			<GreetButton />
		</Animated.View>
	);
}
