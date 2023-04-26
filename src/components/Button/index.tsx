import React from 'react';
import { TouchableOpacity } from 'react-native';

import styles from './styles';
import Text from '../Text';

interface IButton {
    onPress: (args: any) => any;
    text: string;
    style?: any;
};

const Button = ({ onPress, text, style }: IButton) => {
    return (
        <TouchableOpacity
            activeOpacity={0.8}
            style={[styles.button, style]}
            onPress={onPress}
        >
            <Text
                text={text}
                typography='subheading_2'
                style={styles.textButton}
            />
        </TouchableOpacity>
    );
};

export default Button;
