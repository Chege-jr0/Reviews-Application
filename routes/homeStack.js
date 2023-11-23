import { createStackNavigator } from 'react-navigation-stack';
import Home from '../screens/home';
import ReviewDetails from '../screens/reviewDetails';
import { createAppContainer } from 'react-navigation';
import Header from '../shared/header';
import React from 'react';

const screens = {
    Home: {
        screen: Home,
        navigationOptions:({ navigation}) => {
            return{
                headerTitle: () => <Header navigation={navigation} 
                title = 'HomePage'/>,
            }
        }
    },
    
    ReviewDetails: {
        screen: ReviewDetails,
        navigationOptions:{
            title: 'ReviewPage',
           
        }
    }
    
}

const HomeStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerStyle: { backgroundColor: 'gray'
     }
    }
});

export default createAppContainer(HomeStack);