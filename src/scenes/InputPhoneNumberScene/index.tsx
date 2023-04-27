import React, { useRef } from 'react';
import { ToastAndroid, View } from 'react-native';

import Keyboard from '../../components/Keyboard';

import styles from './styles';
import FieldPhoneNumber, { IRefFieldPhoneNumber } from './components/FieldPhoneNumber';
import Button from '../../components/Button';
import Text from '../../components/Text';
import { useUsertore } from '../../stores/useUserStore';

const InputPhoneNumberScene = ({ navigation }) => {
    const refFieldPhoneNumber = useRef<IRefFieldPhoneNumber>();
    const setPhoneNumber = useUsertore(state => state.setPhoneNumber);

    const getPhoneNumberWithCountryCode = (phoneNumber: string) => {
        if (!phoneNumber) {
            return '';
        }

        const countryCode = '+62';
        const isFirstCharZero = phoneNumber.charAt(0) === '0';

        return countryCode.concat(isFirstCharZero ? phoneNumber.slice(1) : phoneNumber);
    };

    const phoneNumberValidation = (phoneNumber: string, callback: () => void) => {
        if (!phoneNumber.length) {
            ToastAndroid.show('Phone number cannot be blank!', ToastAndroid.SHORT);
            return;
        }

        if (phoneNumber.length < 9) {
            ToastAndroid.show('Phone number too short!', ToastAndroid.SHORT);
            return;
        }

        if (phoneNumber.length > 14) {
            ToastAndroid.show('Phone number too long!', ToastAndroid.SHORT);
            return;
        }

        callback();
    };

    const onPressKeyboard = (value: string) => {
        refFieldPhoneNumber.current?.setValue(value);
    };

    const onPressButtonContinue = () => {
        let phoneNumber = refFieldPhoneNumber.current?.phoneNumber as string;
        let phoneNumberWithCountryCode = getPhoneNumberWithCountryCode(phoneNumber);

        phoneNumberValidation(phoneNumber, () => {
            setPhoneNumber(phoneNumberWithCountryCode);
            navigation.push('PhoneNumberVerification');
        });
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
                onPress={onPressButtonContinue}
                text='Continue'
                style={styles.button}
            />
            <Keyboard onPress={onPressKeyboard} />
        </View>
    );
};

export default InputPhoneNumberScene;
