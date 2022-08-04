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
import { Text, SafeAreaView } from 'react-native';

/**
 * Componente criado pelo proprio desenvolvedor;
 */
import { TopPodCast } from '../../../components/TopPodCast';
import { HeaderPodCast } from '../../../components/HeaderPodCast';
import { MoreEarPodCast } from '../../../components/MoreEarPodCast';

import {
    Container,
    ContentInfo,
    TitleInfo1,
    TitleInfo2,
} from './styles';

const PodCast: React.FC = () => {
    return (
        <>
            <HeaderPodCast />
            <Container>
                <ContentInfo>
                    <TitleInfo1>Top 5</TitleInfo1>
                    <TitleInfo2>PodCast</TitleInfo2>
                    <TitleInfo1>da semana</TitleInfo1>
                </ContentInfo>

                <TopPodCast />

                <ContentInfo>
                    <TitleInfo2>PodCast</TitleInfo2>
                    <TitleInfo1>mais escutado</TitleInfo1>
                </ContentInfo>

                <MoreEarPodCast />
            </Container>
        </>
    );
}

export { PodCast };
