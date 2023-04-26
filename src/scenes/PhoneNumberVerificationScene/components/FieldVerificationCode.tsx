import React, { forwardRef, useEffect, useImperativeHandle, useState } from 'react';
import { View } from 'react-native';

import styles from '../styles';
import { StackActions, useNavigation } from '@react-navigation/native';
import Text from '../../../components/Text';

export interface IRefFieldVerificationCode {
    setValue: (value: string) => void;
};

const FieldVerificationCode = forwardRef(({}, ref) => {
    const navigation = useNavigation();

    const [verificationCode, setVerificationCode] = useState('');

    useImperativeHandle(ref, () => ({
        setValue: (value: string) => {
            setVerificationCode(prevVerificationCode => {
                if (value === 'del') {
                    return prevVerificationCode?.slice(0, -1);
                }

                if (prevVerificationCode.length === 4) {
                    return prevVerificationCode;
                }
                
                if (!prevVerificationCode) {
                    return value;
                }
    
                return prevVerificationCode + value;
            });    
        }
    }));

    useEffect(function handleVerificationCode() {
        if (verificationCode.length < 4) {
            return;
        }

        navigation.dispatch(StackActions.push('Profile'));
    }, [verificationCode]);
    
    return (
        <View style={styles.containerCode}>
            <View style={styles.containerTextCodeCircle}>
                {verificationCode[0] ? (
                    <Text
                        text={verificationCode[0]}
                        typography='heading_1'
                        style={styles.textCode}
                    />
                ) : (
                    <View style={styles.circle}/>
                )}
            </View>
            <View style={styles.space}/>
            <View style={styles.containerTextCodeCircle}>
                {verificationCode[1] ? (
                    <Text
                        text={verificationCode[1]}
                        typography='heading_1'
                        style={styles.textCode}
                    />
                ) : (
                    <View style={styles.circle}/>
                )}
            </View>
            <View style={styles.space}/>
            <View style={styles.containerTextCodeCircle}>
                {verificationCode[2] ? (
                    <Text
                        text={verificationCode[2]}
                        typography='heading_1'
                        style={styles.textCode}
                    />
                ) : (
                    <View style={styles.circle}/>
                )}
            </View>
            <View style={styles.space}/>
            <View style={styles.containerTextCodeCircle}>
                {verificationCode[3] ? (
                    <Text
                        text={verificationCode[3]}
                        typography='heading_1'
                        style={styles.textCode}
                    />
                ) : (
                    <View style={styles.circle}/>
                )}
            </View>
        </View>
    );
});

export default FieldVerificationCode;
