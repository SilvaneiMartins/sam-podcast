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
import theme from '../../styles/theme';
import LinearGradient from 'react-native-linear-gradient';
import { BorderlessButton } from 'react-native-gesture-handler';
import { RFValue, RFPercentage } from 'react-native-responsive-fontsize';

import AntDesign from 'react-native-vector-icons/AntDesign';
AntDesign.loadFont();


 /**
  * Estilização do HEADER do componente;
  */
  export const Headers = styled(LinearGradient).attrs({
    colors: [theme.colors.pink, theme.colors.blue_dark],
    start: { x: 0, y: 0 },
    end: { x: 1, y: 0 },
    locations: [0, 0.7],
})`
    align-items: center;
    justify-content: center;
    height: ${RFPercentage(10)}px;
    padding: ${RFValue(0)}px ${RFValue(10)}px;

    border-bottom-right-radius: ${RFValue(40)}px;
`;

export const Name = styled.Text`
    text-align: center;
    font-size: ${RFValue(20)}px;
    margin-top: ${RFValue(15)}px;
    color: ${({ theme }) => theme.colors.white};
    font-family: ${({ theme }) => theme.fonts.bold};
`;

/**
 * Estilização do Cotainer do componente;
 */
export const Container = styled.View`

`;
