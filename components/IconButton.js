import {Pressable, StyleSheet} from 'react-native'
import {Ionicons} from '@expo/vector-icons'

function IconButton({onPress,mealIsFavorite}) {
    return (
        <Pressable onPress={onPress} style={({pressed}) => pressed && styles.pressed}>
            <Ionicons name={mealIsFavorite ? "star" : 'star-outline'} size={24} color="white" />
        </Pressable>
    )
}
const styles = StyleSheet.create({
    pressed:{
        opacity:0.7,
        color:'red'
    }
})

export default IconButton;