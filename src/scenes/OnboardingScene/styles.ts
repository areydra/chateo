import { StyleSheet } from 'react-native';
import colors from '../../themes/colors';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: colors.neutral.white,
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
        color: colors.neutral.active,
        textAlign: 'center',
        marginTop: 42,
    },
    containerBottom: {
        width: '100%',
        paddingBottom: 20,
    },
    textPrivacyPolicy: {
        color: colors.neutral.active,
        textAlign: 'center',
        marginBottom: 18,
    },
});

export default styles;