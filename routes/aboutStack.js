import { createStackNavigator } from 'react-navigation-stack';
import About from '.../screens/about';

const screens = {
    About: {
        screen: About,
        navigationOptions:{
            title: 'About GameZone',
          
        }
    },
    
}

const AboutStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerStyle: { backgroundColor: 'gray',
         haederTintColor: '#444',
         height: 60
        }
    }
});

export default AboutStack;