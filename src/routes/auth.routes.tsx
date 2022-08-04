/**
 * Data: 21 / 11 / 2021
 * Projeto: Sam PodCast
 * Developer: Silvanei Martins
 * Whatsapp: (69) 9.8405-2620
 * Contato: silvaneimartins_rcc@hotmail.com
 */

/**
 * Componente criado pelo proprio framework;
 */
import React from "react";
import { Platform } from "react-native";
import { useTheme } from "styled-components";


import Ionicons from "react-native-vector-icons/Ionicons";
Ionicons.loadFont();

import Feather from "react-native-vector-icons/Feather";
Feather.loadFont();

import Fontisto from "react-native-vector-icons/Fontisto";
Fontisto.loadFont();

import AntDesign from "react-native-vector-icons/AntDesign";
AntDesign.loadFont();


import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";


/**
 * Componente criado no componente Hometabs;
 */
import { Menu } from "../screens/auth/Menu";
import { PodCast } from "../screens/auth/PodCast";
import { Home } from "../screens/auth/Home";
import { People } from "../screens/auth/People";
import { Menssagem } from "../screens/auth/Menssagem";


/**
 * Variavel do componente;
 */
const Tab = createBottomTabNavigator();
const App = createStackNavigator();

/**
 * Função referente a TAB NAVIGATOR do componente;
 */
function HomeTabs() {
    const theme = useTheme();

    return (
        <Tab.Navigator
            tabBarOptions={{
                activeTintColor: theme.colors.pink,
                inactiveTintColor: theme.colors.shape,
                labelPosition: "below-icon",
                showLabel: false,
                style: {
                    paddingVertical: Platform.OS === "ios" ? 20 : 5,
                    paddingHorizontal: Platform.OS === "ios" ? 15 : 10,
                    height: Platform.OS === "ios" ? 90 : 55,
                    backgroundColor: theme.colors.white_100,
                    paddingBottom: Platform.OS === "ios" ? 0 : 5,
                },
            }}
        >
            <Tab.Screen
                name="PodCast"
                component={PodCast}
                options={{
                    tabBarIcon: ({ size, color }) => (
                        <Fontisto
                            name="podcast"
                            size={size}
                            color={color}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="People"
                component={People}
                options={{
                    tabBarIcon: ({ size, color }) => (
                        <Ionicons
                            name="people-outline"
                            size={size}
                            color={color}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: ({ size, color }) => (
                        <Ionicons
                            name="home-outline"
                            size={size}
                            color={color}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="Menssagem"
                component={Menssagem}
                options={{
                    tabBarIcon: ({ size, color }) => (
                        <AntDesign
                            name="message1"
                            size={size}
                            color={color}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="Menu"
                component={Menu}
                options={{
                    tabBarIcon: ({ size, color }) => (
                        <Feather
                            name="menu"
                            size={size}
                            color={color}
                        />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}

const AuthRoutes: React.FC = () => (
    <App.Navigator
        initialRouteName="HomeTabs"
        screenOptions={{
            headerShown: false,
        }}
    >
        <App.Screen name="HomeTabs" component={HomeTabs} />
    </App.Navigator>
);

export default AuthRoutes;
