import React from 'react';
import { Image, Text, View } from 'react-native';

import styles from './styles';
import Button from '../../components/Button';

const OnboardingScene = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.containerHeader}>
                <Image
                    source={require('../../../assets/images/illustrations/onboarding.png')}
                    style={styles.image}
                />
                <Text style={styles.textTitle}>
                    Connect easily with your family and friends over countries
                </Text>
            </View>

            <View style={styles.containerBottom}>
                <Text style={styles.textPrivacyPolicy}>Terms & Privacy Policy</Text>
                <Button
                    onPress={() => navigation.push('InputPhoneNumber')}
                    text='Start Messaging'
                />
            </View>
        </View>
    );
};

export default OnboardingScene;
