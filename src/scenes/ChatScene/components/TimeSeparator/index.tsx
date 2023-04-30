import React from 'react';
import { View } from 'react-native';

import styles from './styles';
import colors from '../../../../themes/colors';
import Text from '../../../../components/Text';

interface ITimeSeparator {
    time: string;
};

const TimeSeparator = ({ time } : ITimeSeparator) => (
    <View style={styles.container}>
        <View style={styles.line}/>
        <Text
            typography='metadata_1'
            text={time}
            color={colors.neutral.disabled}
            style={styles.textTime}
        />
        <View style={styles.line}/>
    </View>
);

export default TimeSeparator;
