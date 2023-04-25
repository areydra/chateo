import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        backgroundColor: '#FFFFFF',
    },
    title: {
        fontFamily: 'Mulish-Bold',
        fontSize: 24,
        lineHeight: 30,
        textAlign: 'center',
        color: '#0F1828',
        marginTop: 80,
    },
    description: {
        fontFamily: 'Mulish-Regular',
        fontSize: 14,
        lineHeight: 24,
        textAlign: 'center',
        color: '#0F1828',
        marginTop: 8,
    },
    textResendCode: {
        fontFamily: 'Mulish-SemiBold',
        fontSize: 16,
        lineHeight: 28,
        color: '#002DE3',
        textAlign: 'center',
        marginBottom: 44,
    },
    containerCode: {
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 48,
        height: 40,
    },
    containerTextCodeCircle: {
        width: 32,
        alignItems: 'center',
    },
    circle: {
        width: 24,
        height: 24,
        borderRadius: 24,
        backgroundColor: '#EDEDED',
    },
    textCode: {
        fontFamily: 'Mulish-Bold',
        fontSize: 32,
        lineHeight: 40,
        color: '#0F1828',
    },
    space: {
        height: 1,
        width: 40,
        backgroundColor: 'transparent',
    }
});

export default styles;