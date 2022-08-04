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
import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

import AntDesign from 'react-native-vector-icons/AntDesign';
AntDesign.loadFont();


/**
 * Estilização do CONTAINER do componente;
 */
export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.white_100};
`;

export const ContentInfo = styled.View`
    flex-direction: row;
    align-items: center;
    padding: ${RFValue(0)}px ${RFValue(10)}px;
`;

export const TitleInfo1 = styled.Text`
    font-size: ${RFValue(17)}px;
    margin-right: ${RFValue(5)}px;
    color: ${({ theme }) => theme.colors.shape};
`;

export const TitleInfo2 = styled.Text`
    font-size: ${RFValue(19)}px;
    margin-top: ${RFValue(5)}px;
    margin-right: ${RFValue(5)}px;
    color: ${({ theme }) => theme.colors.pink};
    font-family: ${({ theme }) => theme.fonts.bold};
`;
