import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: 80,
    },
    title: {
        fontFamily: 'Mulish-Bold',
        fontSize: 24,
        lineHeight: 30,
        color: '#0F1828',
        textAlign: 'center',
        marginBottom: 8,
    },
    description: {
        fontFamily: 'Mulish-Regular',
        fontSize: 14,
        lineHeight: 24,
        color: '#0F1828',
        textAlign: 'center',
    },
    containerField: {
        marginTop: 48,
        flexDirection: 'row',
        alignItems: 'center',
    },
    containerCountryCode: {
        marginRight: 16,
        backgroundColor: '#F7F7FC',
        paddingHorizontal: 6,
        paddingVertical: 8,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 4,
        height: 36,
    },
    field: {
        backgroundColor: '#F7F7FC',
        paddingHorizontal: 6,
        paddingVertical: 8,
        fontFamily: 'Mulish-SemiBold',
        fontSize: 14,
        borderRadius: 4,
        height: 36,
        flex: 1,
    },
    image: {
        width: 24,
        height: 24,
        resizeMode: 'contain',
        marginRight: 8,
    },
    textCountryCode: {
        fontFamily: 'Mulish-SemiBold',
        fontSize: 14,
        lineHeight: 16,
    },
    button: {
        backgroundColor: '#002DE3',
        paddingVertical: 12,
        borderRadius: 30,
        marginBottom: 32,
        marginHorizontal: 24,
    },
    textButton: {
        fontFamily: 'Mulish-SemiBold',
        fontSize: 16,
        lineHeight: 28,
        color: '#F7F7FC',
        textAlign: 'center',
    },
});

export default styles;