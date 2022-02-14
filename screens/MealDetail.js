import {useCallback, useEffect} from 'react'
import {View,Text,StyleSheet, Button, Alert,ScrollView,Image} from 'react-native'
import {useDispatch, useSelector} from 'react-redux'
import Color from '../constant/Color'
import { MEALS } from '../data/dummy-data'
import { toogleFavorite } from '../store/actions/meals'


const ListItem = props => {
    return (
      <View style={styles.listItem}>
        <Text>{props.children}</Text>
      </View>
    );
  };

const MealDetail = props => {
    const {mealId} = props.route.params
    // useEffect(() => {
    //     const selectMeal = MEALS.find(meal => meal.id === mealId)
    //     console.log(selectMeal)
    //     props.navigation.setOptions({
    //         title: selectMeal.title,
    //         headerStyle:{
    //             backgroundColor:Platform.OS==='android' ? Color.primary : ''
    //         },
    //         headerTintColor:Platform.OS=='android' ? 'white' : Color.primary
    //     });
    // }, [props.navigation]);
    const availableMeals = useSelector(state => state.meals.meals)
    const selectedMeal = availableMeals.find(meal => meal.id === mealId);

    useEffect(() => {
      props.navigation.setParams({
        mealTitle:selectedMeal.title
      })
    },[selectedMeal])

    const dispatch = useDispatch()
    const handleFav = useCallback(() => {
      dispatch(toogleFavorite(mealId))
    },[dispatch,mealId])
    const currentFav = useSelector(state => state.meals.favoriteMeals.some(meal => meal.id === mealId))
    useEffect(() => {
      // console.log('assuuuuuuuu')
      // props.navigation.setParams({
      //   toogleFavorite:handleFav
      // })
    },[handleFav])

    return(
        <ScrollView>
        <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
        <View style={styles.details}>
          <Text>{selectedMeal.duration}m</Text>
          <Text>{selectedMeal.complexity.toUpperCase()}</Text>
          <Text>{selectedMeal.affordability.toUpperCase()}</Text>
        </View>
        <Button title="favo" onPress={handleFav} />
        <Text style={styles.title}>Ingredients</Text>
        {selectedMeal.ingredients.map(ingredient => (
          <ListItem key={ingredient}>{ingredient}</ListItem>
        ))}
        <Text style={styles.title}>Steps</Text>
        {selectedMeal.steps.map(step => (
          <ListItem key={step}>{step}</ListItem>
        ))}
      </ScrollView>
    )
}

const styles = StyleSheet.create({
    image: {
      width: '100%',
      height: 200
    },
    details: {
      flexDirection: 'row',
      padding: 15,
      justifyContent: 'space-around'
    },
    title: {
      fontSize: 22,
      textAlign: 'center'
    },
    listItem: {
      marginVertical: 10,
      marginHorizontal: 20,
      borderColor: '#ccc',
      borderWidth: 1,
      padding: 10
    }
  });
  
export default MealDetail;
