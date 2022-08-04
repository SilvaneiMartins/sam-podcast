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

import {
    Container,
    Headers,
    Name,
} from './styles';

const HeaderHome: React.FC = () => {
    return (
        <Container>
            <Headers>
                <Name>Principal</Name>
            </Headers>
        </Container>
    );
}

export { HeaderHome };
