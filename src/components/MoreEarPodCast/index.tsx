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
import { FlatList } from 'react-native';

/**
 * Componente criado pelo proprio desenvolvedor;
 */
import { moreeardcast } from "../../utils/moreeardcast";

import {
    Container,
    InfoView,
    ViewImage,
    ViewInfor,
    FlatImage,
    FlatTitle,
    IconPlay,
    FlatDuration,
    FlatDate,
    ViewButton,
    IconProfile,
    IconMessage,
    ButtonHeader,
} from './styles';

const MoreEarPodCast: React.FC = () => {
    return (
        <Container>
            <FlatList
                data={moreeardcast}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <InfoView>
                        <ViewImage>
                            <IconPlay name="play-circle" />
                            <FlatImage
                                source={{ uri: item.image }}
                                resizeMode="contain"
                            />
                        </ViewImage>
                        <ViewInfor>
                            <FlatTitle numberOfLines={1} >{item.title}</FlatTitle>
                            <FlatDuration>Duração {item.duration}</FlatDuration>
                            <FlatDate>Data {item.date}</FlatDate>
                        </ViewInfor>

                        <ViewButton>
                            <ButtonHeader>
                                <IconProfile name="hearto" />
                            </ButtonHeader>

                            <ButtonHeader>
                                <IconMessage name="pluscircleo" />
                            </ButtonHeader>
                        </ViewButton>
                    </InfoView>
                )}
                showsVerticalScrollIndicator={false}
            />
        </Container>
    );
}

export { MoreEarPodCast };
