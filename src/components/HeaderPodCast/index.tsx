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
    ViewAvatar,
    Avatar,
    ViewInfo,
    Name,
    Localizacao,
    DateLocal,
    ButtonHeader,
    ViewButton,
    IconProfile,
    IconMessage,
} from './styles';

const HeaderPodCast: React.FC = () => {
    return (
        <Container>
            <Headers>
                <ViewAvatar>
                    <Avatar
                        source={{ uri: "https://avatars.githubusercontent.com/u/4657811?v=4" }}
                    />
                </ViewAvatar>

                <ViewInfo>
                    <Name>Silvanei Martins</Name>
                    <Localizacao>Vilhena, Rondônia</Localizacao>
                    <DateLocal>23 de dezembro 2021</DateLocal>
                </ViewInfo>

                <ViewButton>
                    <ButtonHeader>
                        <IconProfile name="adduser" />
                    </ButtonHeader>

                    <ButtonHeader>
                        <IconMessage name="message1" />
                    </ButtonHeader>
                </ViewButton>
            </Headers>
        </Container >
    );
}

export { HeaderPodCast };
