import * as React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { NavigationContainer as NativeNavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeTabs from '../HomeTabs';
import OnboardingScene from '../../../scenes/OnboardingScene';
import InputPhoneNumberScene from '../../../scenes/InputPhoneNumberScene';
import PhoneNumberVerificationScene from '../../../scenes/PhoneNumberVerificationScene';
import ProfileScene from '../../../scenes/ProfileScene';
import ChatScene from '../../../scenes/ChatScene';

const Stack = createNativeStackNavigator();

const NavigationContainer = () => (
    <NativeNavigationContainer>
        <Stack.Navigator
            screenOptions={({ route, navigation }) => ({
                title: '',
                headerShadowVisible: false,
                animation: 'slide_from_right',
                headerTitleStyle: {
                    fontFamily: 'Mulish-SemiBold',
                    fontSize: 18,
                },
                headerLeft: () => (
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Image
                            source={require('../../../../assets/images/icons/arrowBack.png')}
                            style={{
                                width: 24,
                                height: 24,
                                resizeMode: 'contain',
                                marginRight: 8,
                            }}
                        />
                    </TouchableOpacity>
                ),
            })}
        >
            <Stack.Screen
                name='Onboarding'
                component={OnboardingScene}
                options={{
                    headerLeft: () => <></>
                }}
            />
            <Stack.Screen
                name='InputPhoneNumber'
                component={InputPhoneNumberScene}
            />
            <Stack.Screen
                name='PhoneNumberVerification'
                component={PhoneNumberVerificationScene}
            />
            <Stack.Screen
                name='Profile'
                component={ProfileScene}
                options={{
                    title: 'Your Profile',
                }}
            />
            <Stack.Screen
                name='Home'
                component={HomeTabs}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name='Chat'
                component={ChatScene}
                options={{
                    headerShown: false,
                }}
            />
        </Stack.Navigator>
    </NativeNavigationContainer>
);

export default NavigationContainer;
