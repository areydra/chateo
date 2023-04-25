import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    containerHeader: {
        alignItems: 'center',
    },
    image: {
        width: 270,
        height: 260,
        resizeMode: 'contain',
        marginTop: 45,
    },
    textTitle: {
        fontFamily: 'Mulish-Bold',
        fontSize: 24,
        lineHeight: 30,
        color: '#0F1828',
        textAlign: 'center',
        marginTop: 42,
    },
    containerBottom: {
        width: '100%',
        paddingBottom: 20,
    },
    textPrivacyPolicy: {
        fontFamily: 'Mulish-SemiBold',
        fontSize: 14,
        lineHeight: 24,
        color: '#0F1828',
        textAlign: 'center',
        marginBottom: 18,
    },
    containerButton: {
        backgroundColor: '#002DE3',
        paddingVertical: 12,
        borderRadius: 30,
    },
    textButton: {
        textAlign: 'center',
        fontFamily: 'Mulish-SemiBold',
        fontSize: 16,
        lineHeight: 28,
        color: '#F7F7FC',
    },
});

export default styles;