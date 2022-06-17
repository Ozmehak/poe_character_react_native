import {StatusBar} from 'expo-status-bar';
import {StyleSheet, ImageBackground, View, Button} from 'react-native';
import * as Speech from 'expo-speech';
import blackRed from "./assets/photo-1607457561901-e6ec3a6d16cf.jpeg"
import {SearchForm} from "./components/SearchForm";
import {Lion} from "./components/Lion";



export default function App() {
    const speak = () => {
        const thingToSay = 'vilken sexi apa.... Kom Nahti jag vill prata med dig';
        Speech.speak(thingToSay);
    };
    return (
        <View style={styles.container}>
            <ImageBackground source={blackRed} resizeMode="cover" style={styles.image}>
                <StatusBar style="dark"/>
                <Button title="Press4Noise" onPress={speak}/>
                <SearchForm/>
                <Lion/>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'brown',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
