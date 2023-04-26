import React, { useRef } from 'react';
import { Text, View } from 'react-native';

import Keyboard from '../../components/Keyboard';

import styles from './styles';
import FieldPhoneNumber, { IRefFieldPhoneNumber } from './components/FieldPhoneNumber';
import Button from '../../components/Button';

const InputPhoneNumberScene = ({ navigation }) => {
    const refFieldPhoneNumber = useRef<IRefFieldPhoneNumber>();

    const onPressKeyboard = (value: string) => {
        refFieldPhoneNumber.current?.setValue(value);
    };

    return (
        <View style={styles.container}>
            <View style={styles.containerHeader}>
                <Text style={styles.title}>Enter Your Phone Number</Text>
                <Text style={styles.description}>Please confirm your country code and enter your phone number</Text>
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
