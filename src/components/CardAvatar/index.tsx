import React from 'react';
import { Image, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import Text from '../../components/Text';

import styles from './styles';
import colors from '../../themes/colors';

interface ICardAvatar {
    initialName?: string;
    description: string;
    isOnline: boolean;
    isHasUnreadStory: boolean;
    avatar?: string,
};

const CardAvatar = ({
    avatar,
    description,
    isHasUnreadStory,
    initialName,
    isOnline,
}: ICardAvatar) => (
    <View style={styles.container}>
        <LinearGradient
            style={styles.containerFirst}
            colors={isHasUnreadStory ? colors.gradient.styleOne : colors.gradient.white}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}} 
        >
            {avatar ? (
                <Image
                    style={styles.avatar}
                    source={{ uri: avatar }}
                />
            ) : (
                <View style={styles.defaultImage}>
                    <Text
                        text={initialName}
                        typography='heading_2'
                        style={styles.textDefaultImage}
                        color={colors.neutral.white}
                    />
                </View>

            )}
            {isOnline && (
                <View style={styles.online}/>
            )}
        </LinearGradient>
        <Text
            text={description}
            typography='metadata_2'
            style={{
                textAlign: 'center',
                marginTop: 4,
            }}
            numberOfLines={1}
            ellipsizeMode='tail'
        />
    </View>
);

export default CardAvatar;
