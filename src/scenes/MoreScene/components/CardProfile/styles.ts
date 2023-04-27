import { StyleSheet } from 'react-native';
import colors from '../../../../themes/colors';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 30,
    },
    innerContainerLeft: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    containerImage: {
        width: 50,
        height: 50,
        borderRadius: 50,
        backgroundColor: colors.neutral.line,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 20,
    },
    imageProfile: {
        width: 24,
        height: 24,
        resizeMode: 'contain',
    },
    imageArrowForward: {
        width: 24,
        height: 24,
        resizeMode: 'contain',
    },
});

export default styles;
