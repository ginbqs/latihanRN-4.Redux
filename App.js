import { StatusBar } from "expo-status-bar";
import NavigatorRedux from "./navigation/NavigatorRedux";
import 'react-native-gesture-handler';


export default function App() {
  return (
    <>
    <StatusBar style='dark' />
    <NavigatorRedux />
    </>
  );
}
