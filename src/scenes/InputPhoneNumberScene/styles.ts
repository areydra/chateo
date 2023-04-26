import { StyleSheet } from 'react-native';
import colors from '../../themes/colors';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.neutral.white,
    },
    containerHeader: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: 80,
    },
    title: {
        color: colors.neutral.active,
        textAlign: 'center',
        marginBottom: 8,
    },
    description: {
        color: colors.neutral.active,
        textAlign: 'center',
    },
    containerField: {
        marginTop: 48,
        flexDirection: 'row',
        alignItems: 'center',
    },
    containerCountryCode: {
        marginRight: 16,
        backgroundColor: colors.neutral.offWhite,
        paddingHorizontal: 6,
        paddingVertical: 8,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 4,
        height: 36,
    },
    field: {
        backgroundColor: colors.neutral.offWhite,
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
        lineHeight: 16,
    },
    button: {
        marginBottom: 32,
        marginHorizontal: 24,
    },
});

export default styles;