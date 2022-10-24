import {View,FlatList,StyleSheet} from 'react-native'
import { useNavigation } from '@react-navigation/native';
import MealItem from './MealItem'

const MealList = ({items}) => {
    const navigation = useNavigation()
    const renderMealItem = itemData => {
        return <MealItem {...itemData.item} 
            onSelectMeal = {() => {
                navigation.navigate('MealDetail',{
                    mealId:itemData.item.id
                })
            }}
        />
    }
    return(
        <View style={styles.screen}>
            <FlatList data={items} keyExtractor={(item,index) => item.id} renderItem={renderMealItem} />
        </View>
    )
}

const styles = StyleSheet.create({
    screen:{
        flex:1,
        padding:16
    }
})

export default MealList;
