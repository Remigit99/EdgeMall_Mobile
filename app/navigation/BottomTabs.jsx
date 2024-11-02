import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../screens/Home'
import Search from '../screens/Search'
import Profile from '../screens/Profile'
import Discover from "../screens/Discover"
import Saved from "../screens/Saved"


const Tabs = createBottomTabNavigator()

const BottomTabs = () => {
    return (
        <Tabs.Navigator screenOptions={
            { headerShown: false }
        }>
            <Tabs.Screen options={{ tabBarShowlabel: false }} name='Home' component={Home} />
            <Tabs.Screen name='Discover' component={Discover} />
            <Tabs.Screen name='Saved' component={Saved} />
            <Tabs.Screen name='Search' component={Search} />
            <Tabs.Screen name='Profile' component={Profile} />
        </Tabs.Navigator>
    )
}

export default BottomTabs

const styles = StyleSheet.create({})