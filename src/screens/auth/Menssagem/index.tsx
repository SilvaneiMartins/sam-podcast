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
import { HeaderMensagem } from '../../../components/HeaderMensagem';

import {
    Container
} from './styles';

const Menssagem: React.FC = () => {
    return (
        <>
            <HeaderMensagem />
            <Container>
                <Text>Menssagem</Text>
            </Container>
        </>
    );
}

export { Menssagem };
