import About from '../screens/about';
import { createDrawerNavigator } from "react-navigation-drawer";
import { createAppContainer } from "react-navigation";
import Home from '../screens/home';
import HomeStack from './homeStack';
import AboutStack from './aboutStack';

const RouteDrawerNavigator = createDrawerNavigator({
  Home: {
    screen: HomeStack
    },
  
  About: {
    screen: AboutStack
    },
  
});

export default createAppContainer(RouteDrawerNavigator);