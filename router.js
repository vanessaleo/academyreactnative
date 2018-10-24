import React from 'react';
import {createStackNavigator} from 'react-navigation';

import FirstPage from './screens/FirstPage';
import SecondPage from './screens/SecondPage';


export const Root = createStackNavigator(
    {
        FirstPage: {
            screen: FirstPage,
            navigationOptions: {
                gesturesEnabled: false,
            }
        },
        SecondPage: {
            screen: SecondPage,
            navigationOptions: {
                gesturesEnabled: false,
            }
        }
    }
);

