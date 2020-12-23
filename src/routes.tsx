import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './screens/Home';

const AppStack = createStackNavigator();

function headerOptions(title) {
    return {
        title: title,
        headerStyle: {
            backgroundColor: '#FDD4C3',
        },
        headerTitleStyle: {
            fontSize: 16
        },
    };
}

export default function Routes() {
    return (
        <NavigationContainer>
            <AppStack.Navigator>
                <AppStack.Screen name="Home" component={Home} options={{headerShown: false}}/>
            </AppStack.Navigator>
        </NavigationContainer>
    );
}
