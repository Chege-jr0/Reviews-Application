import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from '../screens/home';
import ReviewDetails from '../screens/reviewDetails';

const screens = {
    Home: {
        screen: Home,
        navigationOptions:{
            title: 'HomePage',
          
        }
    },
    
    ReviewDetails: {
        screen: ReviewDetails,
        navigationOptions:{
            title: 'ReviewDetails',
           

        }
    }
    
}

const HomeStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerStyle: { backgroundColor: 'gray',
         haederTintColor: '#444'

     }
    }
});

export default HomeStack;