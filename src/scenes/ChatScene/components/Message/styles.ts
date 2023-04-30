import { StyleSheet } from 'react-native';
import colors from '../../../../themes/colors';

const styles = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: colors.brand.default,
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        borderBottomLeftRadius: 16,
        alignSelf: 'flex-end',
        alignItems: 'flex-end',
    },
    containerFromFriend: {
        padding: 10,
        backgroundColor: colors.neutral.white,
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        borderBottomRightRadius: 16,
        alignSelf: 'flex-start',
        alignItems: 'flex-start',    
    },
});

export default styles;