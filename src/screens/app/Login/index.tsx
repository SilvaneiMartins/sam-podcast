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
import { Text, FlatList } from 'react-native';


/**
 * Componente criado pelo proprio desenvolvedor;
 */
import ImgLogo from "../../../assets/logo1.png";
import { infocast } from "../../../utils/infocacst";

import {
    BgGradient,
    Container,
    ContentTop,
    ContentBody,
    ContentFooter,
    ViewTitle,
    Logo,
    TitleInfo,
    ContentTitleApp,
    TitleApp1,
    TitleApp2,
    FooterButton,
    ButtonFooter,
    ButtonTitle,
    ButtonIcom,
    ContentFlatList,
    InfoView,
    FlatImage,
    FlatTitle
} from './styles';

const Login: React.FC = () => {
    return (
        <BgGradient>
            <Container>
                <ContentTop>
                    <Logo source={ImgLogo} resizeMode="contain" />
                    <ContentTitleApp>
                        <ViewTitle>
                            <TitleApp1>sam</TitleApp1>
                            <TitleApp2>Cast</TitleApp2>
                        </ViewTitle>
                        <TitleInfo>Seu melhor canal de audio</TitleInfo>
                    </ContentTitleApp>
                </ContentTop>


                <ContentBody>
                    <ContentFlatList>
                        <FlatList
                            data={infocast}
                            keyExtractor={(item) => item.id}
                            renderItem={({ item }) => (
                                <InfoView>
                                    <FlatImage
                                        source={{ uri: item.image }}
                                        resizeMode="contain"
                                    />
                                    <FlatTitle>{item.title}</FlatTitle>
                                </InfoView>
                            )}
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                        />
                    </ContentFlatList>
                </ContentBody>

                <ContentFooter>
                    <FooterButton>
                        <ButtonFooter>
                            <ButtonTitle>Iniciar</ButtonTitle>
                            <ButtonIcom name="arrow-forward-outline" />
                        </ButtonFooter>
                    </FooterButton>
                </ContentFooter>
            </Container>
        </BgGradient>
    );
}

export { Login };
