
import React from 'react';
import {StyleSheet} from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import {useSelector} from 'react-redux'

import HeaderButton from '../components/HeaderButton';
import MealList from '../components/MealList';
import { MEALS } from '../data/dummy-data';


const Favorite = props => {
  const favMeals = useSelector(state => state.meals.favoriteMeals);
  return <MealList listData={favMeals} navigation={props.navigation} />;
};

const styles = StyleSheet.create({
    screen:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})

export default Favorite;
