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

import Feather from 'react-native-vector-icons/Feather';
Feather.loadFont();

export const Container = styled.View`
    padding: ${RFValue(0)}px ${RFValue(10)}px;
`;

export const InfoView = styled.TouchableOpacity`
    align-items: center;
    justify-content: center;
    width: ${RFValue(150)}px;
    height: ${RFValue(180)}px;
    margin-right: ${RFValue(5)}px;
    border-radius: ${RFValue(10)}px;
    background-color: ${({ theme }) => theme.colors.white};
`;

export const FlatImage = styled.Image`
    width: ${RFValue(140)}px;
    height: ${RFValue(180)}px;
`;

export const FlatTitle = styled.Text`
    text-align: center;
    position: absolute;
    bottom: ${RFValue(5)}px;
    left:  ${RFValue(10)}px;
    right:  ${RFValue(10)}px;

    font-size: ${RFValue(12)}px;
    font-family: ${({ theme }) => theme.fonts.light};
    color: ${({ theme }) => theme.colors.blue_dark};
`;

export const IconPlay = styled(Feather)`
    z-index: 1;
    opacity: 0.5;
    position: absolute;
    bottom: ${RFValue(70)}px;
    right:  ${RFValue(40)}px;
    font-size: ${RFValue(70)}px;
    color: ${({ theme }) => theme.colors.blue_dark};
`;
