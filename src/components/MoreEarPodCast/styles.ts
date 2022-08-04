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

import AntDesign from 'react-native-vector-icons/AntDesign';
AntDesign.loadFont();


export const Container = styled.View`
    flex: 1;
    padding: ${RFValue(0)}px ${RFValue(10)}px;
`;

export const InfoView = styled.TouchableOpacity`
    flex-direction: row;
    margin-right: ${RFValue(5)}px;
    margin-bottom: ${RFValue(5)}px;
    border-radius: ${RFValue(10)}px;
    background-color: ${({ theme }) => theme.colors.white};
`;

export const ViewImage = styled.View`
    padding: ${RFValue(10)}px;
    width: ${RFValue(140)}px;
`;

export const ViewInfor = styled.View`
    flex: 1;
    padding: ${RFValue(10)}px ${RFValue(0)}px;
`;


export const FlatImage = styled.Image`
    width: ${RFValue(100)}px;
    height: ${RFValue(100)}px;
`;

export const FlatTitle = styled.Text`
    width: 90%;
    font-size: ${RFValue(14)}px;
    margin-top: ${RFValue(5)}px;
    font-family: ${({ theme }) => theme.fonts.bold};
    color: ${({ theme }) => theme.colors.blue_dark};
`;

export const IconPlay = styled(Feather)`
    z-index: 1;
    opacity: 0.5;
    position: absolute;
    bottom: ${RFValue(40)}px;
    left:  ${RFValue(30)}px;
    font-size: ${RFValue(50)}px;
    color: ${({ theme }) => theme.colors.blue_dark};
`;

export const FlatDuration = styled.Text`
    font-size: ${RFValue(12)}px;
    margin-top: ${RFValue(10)}px;
    font-family: ${({ theme }) => theme.fonts.light};
    color: ${({ theme }) => theme.colors.blue_dark};
`;

export const FlatDate = styled.Text`
    font-size: ${RFValue(12)}px;
    font-family: ${({ theme }) => theme.fonts.light};
    color: ${({ theme }) => theme.colors.blue_dark};
`;


export const ViewButton = styled.View`
    flex-direction: row;
    position: absolute;
    bottom: ${RFValue(10)}px;
    right: ${RFValue(10)}px;
`;

export const ButtonHeader = styled.TouchableOpacity`
    padding: ${RFValue(5)}px;
`;

export const IconProfile = styled(AntDesign)`
    padding: ${RFValue(5)}px;
    font-size: ${RFValue(20)}px;
    color: ${({ theme }) => theme.colors.blue_dark};
`;

export const IconMessage = styled(AntDesign)`
    padding: ${RFValue(5)}px;
    font-size: ${RFValue(20)}px;
    margin-left: ${RFValue(-5)}px;
    color: ${({ theme }) => theme.colors.blue_dark};
`;
