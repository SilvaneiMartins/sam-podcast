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

import { createStackNavigator } from "@react-navigation/stack";

/**
 * Componente criado pelo proprio desenvolvedor;
 */
import { Login } from "../screens/app/Login";
import { Cadastro } from "../screens/app/Cadastro";
import { ForgotPassword } from "../screens/app/ForgotPassword";

const { Navigator, Screen } = createStackNavigator();

const AppRoutes: React.FC = () => (
    <Navigator
        initialRouteName="Login"
        screenOptions={{
            headerShown: false,
        }}
    >
        <Screen name="Login" component={Login} />
        <Screen name="Cadastro" component={Cadastro} />
        <Screen name="ForgotPassword" component={ForgotPassword} />
    </Navigator>
);

export default AppRoutes;
