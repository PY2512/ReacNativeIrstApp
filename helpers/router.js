import LoginScreen from '../screens/auth/LoginScreen';
import RegisterScreen from '../screens/auth/RegisterScreen';
import { createStackNavigator } from '@react-navigation/stack';


import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import PostsScreen from '../screens/mainScreen/PostsScreen';
import CreateScreen from '../screens/mainScreen/CreateScreen';
import ProfileScreen from '../screens/mainScreen/ProfileScreen';

const AuthStack = createStackNavigator();
const MainTab = createBottomTabNavigator();


export const useRoute = (isAuth) => {
    if (!isAuth) {
      return(
      <AuthStack.Navigator>
        <AuthStack.Screen 
          options={{headerShown: false}} 
          name="Login" 
          component={LoginScreen}/>
        <AuthStack.Screen 
          options={{headerShown: false}} 
          name="Register" 
          component={RegisterScreen}/>
    </AuthStack.Navigator>
      )
    }
    return <MainTab.Navigator>
        <MainTab.Screen name="Posts" component={PostsScreen}/>
        <MainTab.Screen name="Crete" component={CreateScreen}/>
        <MainTab.Screen name="Profile" component={ProfileScreen}/>
      </MainTab.Navigator>
  }