import React from 'react';
import { View } from 'react-native';

import styles from './styles';
import colors from '../../../../themes/colors';
import Text from '../../../../components/Text';

interface IMessage {
    text: string;
    time: string;
    isChatFromFriend: boolean;
};

const Message = ({ text, time, isChatFromFriend } : IMessage) => (
    <View style={isChatFromFriend ? styles.containerFromFriend : styles.container}>
        <Text
            text={text}
            typography='body_text_1'
            color={isChatFromFriend ? colors.neutral.active : colors.neutral.white}
        />
        <Text
            text={time}
            typography='metadata_2'
            color={isChatFromFriend ? colors.neutral.disabled : colors.neutral.white}
        />
    </View>
);

export default Message;
