import React, { useRef } from 'react';
import { View } from 'react-native';

import Keyboard from '../../components/Keyboard';

import styles from './styles';
import FieldPhoneNumber, { IRefFieldPhoneNumber } from './components/FieldPhoneNumber';
import Button from '../../components/Button';
import Text from '../../components/Text';

const InputPhoneNumberScene = ({ navigation }) => {
    const refFieldPhoneNumber = useRef<IRefFieldPhoneNumber>();

    const onPressKeyboard = (value: string) => {
        refFieldPhoneNumber.current?.setValue(value);
    };

    return (
        <View style={styles.container}>
            <View style={styles.containerHeader}>
                <Text
                    text='Enter Your Phone Number'
                    typography='heading_2'
                    style={styles.title}
                />
                <Text
                    text='Please confirm your country code and enter your phone number'
                    typography='body_text_2'
                    style={styles.description}
                />
                <FieldPhoneNumber ref={refFieldPhoneNumber}/>
            </View>
            <Button
                onPress={() => {
                    navigation.push('PhoneNumberVerification', {
                        phoneNumber: '+62 838-0710-6451',
                    });
                }}
                text='Continue'
                style={styles.button}
            />
            <Keyboard onPress={onPressKeyboard} />
        </View>
    );
};

export default InputPhoneNumberScene;
