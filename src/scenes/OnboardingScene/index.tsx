import React from 'react';
import { Image, View } from 'react-native';

import styles from './styles';
import Button from '../../components/Button';
import Text from '../../components/Text';

const OnboardingScene = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.containerHeader}>
                <Image
                    source={require('../../../assets/images/illustrations/onboarding.png')}
                    style={styles.image}
                />
                <Text
                    text='Connect easily with your family and friends over countries'
                    typography='heading_2'
                    style={styles.textTitle}
                />                    
            </View>

            <View style={styles.containerBottom}>
                <Text
                    text='Terms & Privacy Policy'
                    typography='body_text_1'
                    style={styles.textPrivacyPolicy}
                />      
                <Button
                    onPress={() => navigation.push('InputPhoneNumber')}
                    text='Start Messaging'
                />
            </View>
        </View>
    );
};

export default OnboardingScene;
