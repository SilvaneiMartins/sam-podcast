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
import 'react-native-gesture-handler';

import React from 'react';
import { View, StatusBar } from "react-native";
import { ThemeProvider } from "styled-components/native";
import LinearGradient from 'react-native-linear-gradient';
import { NavigationContainer } from "@react-navigation/native";

/**
 * Componente criado pelo proprio desenvolvedor;
 */
import Routes from "./routes";
import theme from "./styles/theme";

const App: React.FC = () => {

    return (
        <ThemeProvider theme={theme}>
            <NavigationContainer>

                <LinearGradient
                    colors={[theme.colors.pink, theme.colors.blue_dark]}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    locations={[0, 0.]}
                >
                    <StatusBar
                        translucent={true}
                        barStyle="light-content"
                        backgroundColor="transparent"
                    />
                </LinearGradient>

                <View
                    style={{
                        backgroundColor: theme.colors.white_100,
                        flex: 1,
                    }}
                >
                    <Routes />
                </View>
            </NavigationContainer>
        </ThemeProvider>
    );
}

export default App;
