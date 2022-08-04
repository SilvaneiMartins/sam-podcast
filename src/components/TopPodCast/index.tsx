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
import { toppodcast } from "../../utils/toppodcast";

import {
    Container,
    InfoView,
    FlatImage,
    FlatTitle,
    IconPlay
} from './styles';

const TopPodCast: React.FC = () => {
    return (
        <Container>
            <FlatList
                data={toppodcast}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <InfoView>
                        <IconPlay name="play-circle" />
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
        </Container>
    );
}

export { TopPodCast };
