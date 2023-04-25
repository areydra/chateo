import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import OnboardingScene from './src/scenes/OnboardingScene';
import InputPhoneNumberScene from './src/scenes/InputPhoneNumberScene';
import PhoneNumberVerificationScene from './src/scenes/PhoneNumberVerificationScene';
import ProfileScene from './src/scenes/ProfileScene';
import { Image, TouchableOpacity } from 'react-native';

const Stack = createNativeStackNavigator();

function App() {
    return (
        <NavigationContainer>
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
                                source={require('./assets/images/icons/arrowBack.png')}
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
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;