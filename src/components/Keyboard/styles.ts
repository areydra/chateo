import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    containerKeyboard: {
        paddingBottom: 24,
        backgroundColor: '#F7F7FC',
    },
    containerLineKeyboard: {
        flexDirection: 'row',
    },
    containerTextKeyboard: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: 54,
    },
    textKeyboard: {
        fontFamily: 'Mulish-Bold',
        fontSize: 24,
        lineHeight: 30,
        color: '#0F1828',
        textAlign: 'center',
    },
    image: {
        width: 32,
        height: 32,
        resizeMode: 'contain',
    },
});

export default styles;