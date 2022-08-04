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

     flex-direction: row;
     align-items: center;
     height: ${RFPercentage(25)}px;
     padding: ${RFValue(0)}px ${RFValue(10)}px;

     border-bottom-right-radius: ${RFValue(40)}px;
 `;

export const ViewAvatar = styled.View``;

export const Avatar = styled.Image`
     width: ${RFValue(90)}px;
     height: ${RFValue(90)}px;

     border-width: ${RFValue(3)}px;
     border-color: ${({ theme }) => theme.colors.white};
     border-radius: ${RFValue(45)}px;
 `;

export const ViewInfo = styled.View`
     margin-left: ${RFValue(5)}px;
 `;

export const Name = styled.Text`
     font-size: ${RFValue(20)}px;
     color: ${({ theme }) => theme.colors.white};
     font-family: ${({ theme }) => theme.fonts.bold};
 `;

export const Localizacao = styled.Text`
     font-size: ${RFValue(12)}px;
     margin-top: ${RFValue(5)}px;
     color: ${({ theme }) => theme.colors.white};
     font-family: ${({ theme }) => theme.fonts.light};
 `;

export const DateLocal = styled.Text`
     font-size: ${RFValue(12)}px;
     margin-top: ${RFValue(-5)}px;
     color: ${({ theme }) => theme.colors.white};
     font-family: ${({ theme }) => theme.fonts.light};
 `;

export const ViewButton = styled.View`
     flex-direction: row;
     position: absolute;
     bottom: ${RFValue(7)}px;
     right: ${RFValue(7)}px;
 `;

export const ButtonHeader = styled.TouchableOpacity`
     padding: ${RFValue(5)}px;

 `;

export const IconProfile = styled(AntDesign)`
     padding: ${RFValue(10)}px;
     font-size: ${RFValue(20)}px;
     border-radius: ${RFValue(20)}px;
     color: ${({ theme }) => theme.colors.white};
     background-color: ${({ theme }) => theme.colors.pink};
 `;

export const IconMessage = styled(AntDesign)`
     padding: ${RFValue(10)}px;
     font-size: ${RFValue(20)}px;
     border-radius: ${RFValue(20)}px;
     color: ${({ theme }) => theme.colors.white};
     background-color: ${({ theme }) => theme.colors.pink};
 `;


/**
 * Estilização do CONTAINER do componente;
 */
/**
 * Estilização do Cotainer do componente;
 */
export const Container = styled.View`

`;
