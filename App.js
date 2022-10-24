import { StatusBar } from "expo-status-bar";
import NavigatorContext from "./navigation/NavigatorContext";
import 'react-native-gesture-handler';


export default function App() {
  return (
    <>
    <StatusBar style='dark' />
    <NavigatorContext />
    </>
  );
}
