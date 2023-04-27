import React from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import Text from '../../components/Text';

import styles from './styles';
import colors from '../../themes/colors';

interface ICardUser {
    initialName?: string;
    title: string;
    description: string;
    time?: string;
    totalUnreadMessage?: string;
    isOnline: boolean;
    isHasUnreadStory: boolean;
    onPress: () => void;
    avatar?: string,
};

const CardUser = ({
    initialName,
    title,
    description,
    time,
    totalUnreadMessage,
    isOnline,
    isHasUnreadStory,
    avatar,
    onPress,
}: ICardUser) => (
    <TouchableOpacity
        activeOpacity={0.8}
        style={styles.container}
        onPress={onPress}
    >
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
        <View style={styles.containerMiddle}>
            <Text
                text={title}
                typography='body_text_1'
            />
            <Text
                text={description}
                typography='metadata_1'
                color={colors.neutral.disabled}
            />
        </View>
        <View style={styles.containerLatest}>
            {time && (
                <Text
                    text={time}
                    typography='metadata_2'
                    color={colors.neutral.weak}
                    style={styles.textTime}
                />
            )}
            {totalUnreadMessage && (
                <View style={styles.totalUnreadMessages}>
                    <Text
                        text={totalUnreadMessage}
                        typography='metadata_3'
                        color={colors.brand.dark}
                        style={styles.textTotalUnreadMessages}
                    />
                </View>
            )}
        </View>
    </TouchableOpacity>
);

export default CardUser;