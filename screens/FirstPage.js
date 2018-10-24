import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import firstPageStyles from '../styles/firstPage'

export default class FirstPage extends React.Component {

    goToSecondPage = () => {
        this.props.navigation.navigate('SecondPage')
    }


    render() {
        return (
            <View style={firstPageStyles.container}>
                <Text style={styles.myText}>I am the First page</Text>
                <TouchableOpacity onPress={this.goToSecondPage}><Text> SECOND PAGE </Text></TouchableOpacity>

            </View>
        );
    }
}

const styles = StyleSheet.create({
   myText: {
       fontWeight:'bold'
   }
});
