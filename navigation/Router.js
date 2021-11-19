import React from 'react'
import { Image, StyleSheet } from 'react-native';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

//screens
import HomeScreen from '../screens/HomeScreen';
import DetailScreen from '../screens/DetailScreen';
import LandingScreen from '../screens/LandingScreen';

//constants
import { COLORS, icons } from '../constants';
import { LinearGradient } from 'expo-linear-gradient';


const dTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        border: 'transparent'
    }
}

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Router = () => {
    return (
        <NavigationContainer theme={dTheme}>
            <Stack.Navigator initialRouteName="Root" screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Landing" component={LandingScreen} />
                <Stack.Screen name="Root" component={Tabs} />
                <Stack.Screen name="Detail" component={DetailScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

const Tabs = () => {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false, tabBarShowLabel: false, tabBarStyle: { ...styles.shadow } }}>
            <Tab.Screen name="Home" component={HomeScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={icons.home}
                            resizeMode="contain"
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: focused ? COLORS.gradient1 : COLORS.gray
                            }}
                        />
                    )
                }}
            />
            <Tab.Screen name="Favourite" component={HomeScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={icons.favourite}
                            resizeMode="contain"
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: focused ? COLORS.gradient1 : COLORS.gray
                            }}
                        />
                    )
                }}
            />
            <Tab.Screen name="Cart" component={HomeScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={icons.bag}
                            resizeMode="contain"
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: focused ? COLORS.gradient1 : COLORS.gray
                            }}
                        />
                    )
                }}
            />
            <Tab.Screen name="Profile" component={HomeScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={icons.profile}
                            resizeMode="contain"
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: focused ? COLORS.gradient1 : COLORS.gray
                            }}
                        />
                    )
                }}
            />
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    shadow: {
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.82,
        shadowRadius: 7.93,
        elevation: 7
    }
})

export default Router
