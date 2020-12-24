import React from 'react';
import { View, Text, Button } from 'react-native';

import styles from './styles';

export default function Day(props: any) {
    return(
        <View style={styles.container}>
            <Text>Dia {props.count}</Text>
            <Button title="+" onPress={ () => {} }/>
        </View>
    );
}
