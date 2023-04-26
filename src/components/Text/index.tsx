import React from 'react';
import { Text as NativeText, StyleProp, TextStyle } from 'react-native';

import styles from './styles';

interface IText {
    text?: string;
    style?: StyleProp<TextStyle>;
    typography: 'heading_1' | 'heading_2' | 'subheading_1' | 'subheading_2' | 'body_text_1' | 'body_text_2' | 'metadata_1' | 'metadata_2' | 'metadata_3'; 
}

const mode = {
    heading_1: styles.heading1,
    heading_2: styles.heading2,
    subheading_1: styles.subheading1,
    subheading_2: styles.subheading2,
    body_text_1: styles.bodytext1,
    body_text_2: styles.bodytext2,
    metadata_1: styles.metadata1,
    metadata_2: styles.metadata2,
    metadata_3: styles.metadata3,
};

const Text = ({ text, style, typography }: IText) => {
    return (
        <NativeText style={[styles.default, mode[typography], style]}>
            {text}
        </NativeText>
    );
};

export default Text;
