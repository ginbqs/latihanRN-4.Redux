import {MEALS} from '../../data/dummy-data'
import { SET_FILTERS, TOOGLE_FAVORITE } from '../actions/meals';
const initalState = {
    meals: MEALS,
    filterMeals: MEALS,
    favoriteMeals: []
}

const mealReducres = (state = initalState,action) => {
    switch(action.type){
        case TOOGLE_FAVORITE:
            const existingIndex = state.favoriteMeals.findIndex(meal => meal.id === action.mealId)
            if(existingIndex >=0){
                const updatedMeals = [...state.favoriteMeals]
                updatedMeals.splice(existingIndex,1)
                return {...state,favoriteMeals:updatedMeals}
            }else{
                const meal = state.meals.find(meal => meal.id === action.mealId)
                return {...state,favoriteMeals:state.favoriteMeals.concat(meal)}
            }
        case SET_FILTERS:
            const appliedFilters = action.filters
            const updatedFilteredMeals = state.meals.find(meal => {
                if(appliedFilters.glutenFree && !meal.isGlutenFree){
                    return false
                }
                if(appliedFilters.lactoseFree && !meal.isLactoseFree){
                    return false
                }
                if(appliedFilters.vegetarian && !meal.isVegetarian){
                    return false
                }
                if(appliedFilters.vegan && !meal.isVegan){
                    return false
                }
                return true;
            })
            return {...state,filterMeals:updatedFilteredMeals}

        default:
            return state
    }
}

export default mealReducres