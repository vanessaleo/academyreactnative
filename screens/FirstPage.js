import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity, StatusBar } from 'react-native';
import firstPageStyles from '../styles/firstPage'
import ToolbarComponent from '../components/ToolbarComponent';

export default class FirstPage extends React.Component {

    goToSecondPage = () => {
        this.props.navigation.navigate('SecondPage')
    }


    render() {
        return (
            <View style={firstPageStyles.container}>
            <View style={{height:400}}>
                <Text >I am the First page</Text>
                <TouchableOpacity onPress={this.goToSecondPage}>
                    <Text> SECOND PAGE </Text>
                </TouchableOpacity>
                </View>
                <View style={styles.container}>
                  <StatusBar barStyle="light-content" />
                  <ToolbarComponent
                    foreground="light"
                    style={styles.toolbar}
                    title="Title"
                    leftItem={{
                      title: 'Left',
                      layout: 'title',
                      onPress: () => {
                        console.log('pressed');
                      },
                    }}
                    rightItem={{
                      title: 'Right',
                      layout: 'title',
                      onPress: () => {
                        console.log('pressed');
                      },
                    }}
                  />
                </View>



            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    color: 'white',
    fontSize: 12,
    textAlign: 'center',
  },
  toolbar: {
    backgroundColor: 'lightgrey',
  },
});
