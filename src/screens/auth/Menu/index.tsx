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
import { HeaderMenu } from '../../../components/HeaderMenu';

import {
    Container
} from './styles';

const Menu: React.FC = () => {
    return (
        <>
            <HeaderMenu />
            <Container>
                <Text>Menu</Text>
            </Container>
        </>
    );
}

export { Menu };
