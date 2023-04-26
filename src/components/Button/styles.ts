import { StyleSheet } from 'react-native';
import colors from '../../themes/colors';

const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.brand.default,
        paddingVertical: 12,
        borderRadius: 30,
    },
    textButton: {
        color: colors.neutral.offWhite,
        textAlign: 'center',
    },
});

export default styles;
