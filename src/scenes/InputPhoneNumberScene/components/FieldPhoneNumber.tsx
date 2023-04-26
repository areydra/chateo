import React, { forwardRef, useImperativeHandle, useState } from 'react';
import { Image, View } from 'react-native';

import styles from '../styles';
import Text from '../../../components/Text';
import TextInput from '../../../components/TextInput';

export interface IRefFieldPhoneNumber {
    setValue: (value: string) => void;
};

const FieldPhoneNumber = forwardRef(({}, ref) => {
    const [phoneNumber, setPhoneNumber] = useState<string>();

    useImperativeHandle(ref, () => ({
        setValue: (value: string) => {
            setPhoneNumber(prevPhoneNumber => {
                if (value === 'del') {
                    return prevPhoneNumber?.slice(0, -1);
                }
                
                if (!prevPhoneNumber) {
                    return value;
                }

                return prevPhoneNumber + value;
            });    
        }
    }));

    return (
        <View style={styles.containerField}>
            <View style={styles.containerCountryCode}>
                <Image
                    source={require('../../../../assets/images/flags/indonesia.png')}
                    style={styles.image}
                />
                <Text
                    text='+62'
                    typography='body_text_1'
                    style={styles.textCountryCode}
                />
            </View>
            <TextInput
                style={styles.field}
                placeholder='Phone Number'
                keyboardType='number-pad'
                showSoftInputOnFocus={false}
                value={phoneNumber}
                caretHidden
            />
        </View>
    );
});

export default FieldPhoneNumber;
