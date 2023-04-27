import React from 'react';
import { TouchableOpacity, View } from 'react-native';

import Text from '../../components/Text';

import styles from './styles';
import colors from '../../themes/colors';
import CardAvatar from '../CardAvatar';

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
        <CardAvatar
            avatar={avatar}
            isHasUnreadStory={isHasUnreadStory}
            initialName={initialName}
            isOnline={isOnline}
            style={styles.containerFirst}
        />
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
