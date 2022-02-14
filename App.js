import Navigator from "./navigation/Navigator";
import 'react-native-gesture-handler';
import {Provider} from 'react-redux'
import {combineReducers,createStore} from 'redux'
import mealReducres from "./store/reducres/meals";

const rootReducer = combineReducers({
  meals : mealReducres
})

const store = createStore(rootReducer)

export default function App() {
  return (
    <Provider store={store}>    
      <Navigator />
    </Provider>
  );
}
