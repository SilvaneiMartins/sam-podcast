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
import React from 'react';
import { Text } from 'react-native';

/**
 * Componente criado pelo proprio desenvolvedor;
 */
import { HeaderHome } from '../../../components/HeaderHome';

import {
    Container
} from './styles';

const Home: React.FC = () => {
    return (
        <>
            <HeaderHome />
            <Container>
                <Text>Home</Text>
            </Container>
        </>
    );
}

export { Home };
