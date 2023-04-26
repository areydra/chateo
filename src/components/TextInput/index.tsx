import React from 'react';
import { TextInput as NativeTextInput, TextInputProps } from 'react-native';

import styles from './styles';
import colors from '../../themes/colors';

const TextInput = (props: TextInputProps) => {
    return (
        <NativeTextInput
            {...props}
            style={[styles.default, props.style]}
            placeholderTextColor={colors.neutral.disabled}
        />
    )
};

export default TextInput;