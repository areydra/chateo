import React from 'react';
import { Image, ImageSourcePropType, TouchableOpacity, View } from 'react-native';

import Text from '../../components/Text';

import styles from './styles';

interface ICardMoreMenu {
    imageSource: ImageSourcePropType;
    text: string;
    onPress: () => void;
};

const CardMoreMenu = ({ imageSource, text, onPress }: ICardMoreMenu) => {
    return (
        <TouchableOpacity
            activeOpacity={0.8}
            style={styles.container}
            onPress={onPress}
        >
            <View style={styles.innerContainerLeft}>
                <Image
                    source={imageSource}
                    style={styles.imageMenu}
                />
                <Text
                    text={text}
                    typography='body_text_1'
                />
            </View>
            <Image
                source={require('../../../assets/images/icons/arrowForward.png')}
                style={styles.imageForward}
            />
        </TouchableOpacity>
    );
};

export default CardMoreMenu;
