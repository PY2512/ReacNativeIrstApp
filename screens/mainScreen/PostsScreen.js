import { createStackNavigator } from '@react-navigation/stack'
import react from 'react'
import {moduleName} from 'react-native'
import CommentsScreen from '../nestedScreen/CommentsScreen'
import DefaultPostsScreen from '../nestedScreen/DefaultPostsScreen'
import MapScreen from './../nestedScreen/MapScreen'


const NestedScreen = createStackNavigator()

export default PostsScreen = () => {
    return(
    <NestedScreen.Navigator>
        <NestedScreen.Screen name='DefaultScreen' component={DefaultPostsScreen}/>
        <NestedScreen.Screen name='Comments' component={CommentsScreen}/>
        <NestedScreen.Screen name='Map' component={MapScreen}/>
    </NestedScreen.Navigator>
)}

