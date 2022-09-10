import LoginScreen from '../screens/auth/LoginScreen';
import RegisterScreen from '../screens/auth/RegisterScreen';
import { createStackNavigator } from '@react-navigation/stack';


import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import PostsScreen from '../screens/mainScreen/PostsScreen';
import CreateScreen from '../screens/mainScreen/CreateScreen';
import ProfileScreen from '../screens/mainScreen/ProfileScreen';

const AuthStack = createStackNavigator();
const MainTab = createBottomTabNavigator();

import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';


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
    return <MainTab.Navigator tabBarOptions={{showLabel: false}}>
        <MainTab.Screen 
          options={{
            headerShown: false, 
            tabBarIcon: ({focused, size, color}) => 
              <Ionicons name="ios-grid-outline" size={size} color={color} />
              }
            }  
          name="Posts" 
          component={PostsScreen}/>
        <MainTab.Screen 
          options={{
            headerShown: false, 
            tabBarIcon: ({focused, size, color}) => 
              <Ionicons name="add" size={size} color={color} />}} 
          name="Crete" 
          component={CreateScreen}/>
        <MainTab.Screen 
          options={{headerShown: false,
          tabBarIcon: ({focused, size, color}) => 
              <Feather name="user" size={size} color={color} />}} 
          name="Profile"
          component={ProfileScreen}/>
      </MainTab.Navigator>
  }