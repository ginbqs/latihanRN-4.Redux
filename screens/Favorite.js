import {View,Text,StyleSheet} from 'react-native'
import { useSelector } from 'react-redux';
import MealList from '../components/MealsList/MealList';
import { MEALS } from '../data/dummy-data';

const Favorite = props => {
    const favoriteMealIds = useSelector(state => state.favoriteMeals.ids)

    const favoriteMeals = MEALS.filter(meal => favoriteMealIds.includes(meal.id))
    if(favoriteMeals.length === 0){
        return (
            <View style={styles.screen}>
                <Text style={styles.text}>Kamu belum memiliki makanan favorite</Text>
            </View>
        )
    }
    return <MealList items={favoriteMeals} />
}

const styles = StyleSheet.create({
    screen:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    text:{
        fontSize:18,
        fontWeight:'bold',
        color:'white'
    }
})

export default Favorite;
