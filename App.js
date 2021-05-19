import {createStackNavigator, createAppContainer} from 'react-navigation';
import IndexScreen from './src/screens/IndexScreen'

const navigator = createStackNavigator({
  Index: IndexScreen
}, {
  initalRouteName: 'Index',
  defaultNavigationOptions:{
    title: 'Blogs'
  }
});
export default createAppContainer(navigator)