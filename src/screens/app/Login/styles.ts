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
import theme from '../../../styles/theme';
import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import { RFValue } from 'react-native-responsive-fontsize';
import { BorderlessButton } from 'react-native-gesture-handler';

import Ionicons from 'react-native-vector-icons/Ionicons';
Ionicons.loadFont();


export const BgGradient = styled(LinearGradient).attrs({
    colors: [theme.colors.pink, theme.colors.blue_dark],
    start: { x: 0, y: 0.4 },
    end: { x: 0.8, y: 1 },
    locations: [0, 0.5],
    flex: 1,
})`

`;

export const Container = styled.View`
    flex: 1;
`;

export const ContentTop = styled.View`
    flex-direction: row;
    align-items: center;
    height: ${RFValue(250)}px;
`;

export const ContentBody = styled.View`
    flex: 1;
    padding: ${RFValue(0)}px ${RFValue(10)}px;
`;

export const ContentFooter = styled.View`
    height: ${RFValue(100)}px;
    align-items: flex-end;
    justify-content: center;
`;

export const ViewTitle = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

export const ContentTitleApp = styled.View`
    width:70%;
    position: absolute;
    align-items: flex-end;
    bottom: ${RFValue(5)}px;
    right: ${RFValue(15)}px;
`;

export const Logo = styled.Image`
    width: ${RFValue(180)}px;
    height: ${RFValue(180)}px;
    margin-top: ${RFValue(-30)}px;
`;

export const TitleInfo = styled.Text`
    font-size: ${RFValue(15)}px;
    color: ${({ theme }) => theme.colors.white};
    font-family: ${({ theme }) => theme.fonts.bold};
`;

export const TitleApp1 = styled.Text`
    font-size: ${RFValue(20)}px;
    margin-bottom: ${RFValue(-23)}px;
    color: ${({ theme }) => theme.colors.white};
    font-family: ${({ theme }) => theme.fonts.light};
`;

export const TitleApp2 = styled.Text`
    font-size: ${RFValue(40)}px;
    margin-bottom: ${RFValue(-15)}px;
    color: ${({ theme }) => theme.colors.white};
    font-family: ${({ theme }) => theme.fonts.bold};
`;

export const FooterButton = styled.View`
align-items: center;
    justify-content: center;
    width: ${RFValue(160)}px;
    height: ${RFValue(40)}px;
    margin-right: ${RFValue(15)}px;
    border-radius: ${RFValue(25)}px;
    background-color: ${({ theme }) => theme.colors.pink};
`;

export const ButtonFooter = styled(BorderlessButton)`
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

export const ButtonTitle = styled.Text`
    font-size: ${RFValue(15)}px;
    color: ${({ theme }) => theme.colors.white};
    font-family: ${({ theme }) => theme.fonts.bold};
`;

export const ButtonIcom = styled(Ionicons)`
    font-size: ${RFValue(22)}px;
    margin-left: ${RFValue(20)}px;
    margin-bottom: ${RFValue(5)}px;
    color: ${({ theme }) => theme.colors.white};
`;

export const ContentFlatList = styled.View`
    flex: 1;
`;

export const InfoView = styled.View`
    align-items: center;
    justify-content: center;
    width: ${RFValue(216)}px;
    margin-right: ${RFValue(5)}px;
    border-radius: ${RFValue(10)}px;
    background-color: ${({ theme }) => theme.colors.white};
`;

export const FlatImage = styled.Image`
    width: ${RFValue(215)}px;
    height: ${RFValue(210)}px;
`;

export const FlatTitle = styled.Text`
    text-align: center;
    position: absolute;
    bottom: ${RFValue(5)}px;
    left:  ${RFValue(10)}px;
    right:  ${RFValue(10)}px;

    font-size: ${RFValue(14)}px;
    font-family: ${({ theme }) => theme.fonts.light};
    color: ${({ theme }) => theme.colors.blue_dark};
`;
