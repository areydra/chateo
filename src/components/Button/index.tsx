import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import styles from './styles';

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
            <Text style={styles.textButton}>
                {text}
            </Text>
        </TouchableOpacity>
    );
};

export default Button;
