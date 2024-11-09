import { Image, StyleSheet, Text, View } from 'react-native'
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
            {
                headerShown: false,
                tabBarStyle:{
                background: "aliceblue"

                }
            }
        }>
            <Tabs.Screen name='Home' component={Home}
                options={{
                    tabBarIcon: () => (
                        <Image source={require("../../assets/icons/home.png")} style={{ width: 28, height: 28 }} />
                    )
                }}
            />
            {/* <Tabs.Screen name='Discover' component={Discover} /> */}
            {/* <Tabs.Screen name='Saved' component={Saved} /> */}
            <Tabs.Screen name='Search' component={Search}

                options={{
                    tabBarIcon: () => (
                        <Image source={require("../../assets/icons/search.svg")} />
                    )
                }}
            />


            <Tabs.Screen name='Profile' component={Profile}
                options={
                    {
                        tabBarLabelPosition: "beside-icon",
                        // tabBarLabel:"New",
                        tabBarIcon: ({ color, size }) => (
                            <Image source={require("../../assets/icons/user.svg")} style={{ color: "black" }} />
                        ),
                        tabBarBackground: "black"
                    }
                }

            />
        </Tabs.Navigator>
    )
}

export default BottomTabs

const styles = StyleSheet.create({})