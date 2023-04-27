import { StyleSheet } from 'react-native';
import colors from '../../themes/colors';

const styles = StyleSheet.create({
    container: {
        maxWidth: 56,
    },
    innerContainer: {
        width: 56,
        height: 56,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 16,
    },
    defaultImage: {
        backgroundColor: colors.brand.light,
        width: 52,
        height: 52,
        borderWidth: 2,
        borderRadius: 16,
        borderColor: colors.neutral.white,
        justifyContent: 'center',
    },
    textDefaultImage: {
        fontSize: 14,
        lineHeight: 24,
        textAlign: 'center',
    },
    online: {
        backgroundColor: colors.accent.success,
        width: 16,
        height: 16,
        borderRadius: 16,                                
        borderWidth: 2,
        borderColor: colors.neutral.white,
        position: 'absolute',
        top: 0,
        right: 0,
    },
    avatar: {
        width: 52,
        height: 52,
        borderWidth: 2,
        borderRadius: 16,
        borderColor: colors.neutral.white,
        resizeMode: 'contain',
    },
    description: {
        textAlign: 'center',
        marginTop: 4,
    },
});

export default styles;