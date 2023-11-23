import { createStackNavigator } from 'react-navigation-stack';
import About from '../screens/about'

const screens = {
    About: {
        screen: About,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <Header navigation={navigation}
                title='AboutPage'/>
            }
        }
    },
    
}

const AboutStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerStyle: { backgroundColor: 'gray',
         height: 60
        }
    }
});

export default AboutStack;