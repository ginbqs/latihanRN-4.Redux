import {useLayoutEffect, useState} from 'react'
import MealList from '../components/MealsList/MealList'
import { CATEGORIES, MEALS } from '../data/dummy-data'

const CategoryMeal = ({route,navigation}) => {
    const {categoryId,otherParam} = route.params
    const [selected,setSelected] = useState({})

    
    const displayMeals = MEALS.filter(meal => meal.categoryIds.indexOf(categoryId) >=0)

    useLayoutEffect(() => {
        const selectedCategory = CATEGORIES.find(val => val.id === categoryId)
        navigation.setOptions({
          title: selectedCategory.title,
         });
      }, [navigation,categoryId]);

    return <MealList items={displayMeals} />
    
}


export default CategoryMeal;
