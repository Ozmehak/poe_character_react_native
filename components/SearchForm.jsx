import {TextInput, Button, View} from "react-native";
import {useState} from "react";
import Cities from "./Cities";


export const SearchForm = () => {
    const [accName, setAccName] = useState()
    const [charName, setCharName] = useState()

    const handlePress = () => {
     setCities(true)
    }

    return (
        <View>
            <TextInput
                onChangeText={(text) => setAccName(text)}
                onSubmitEditing={() => {
                    alert()
                }}
                style={{borderWidth: 1}}
                value={accName}
            />
            <TextInput
                onChangeText={(text) => setCharName(text)}
                onSubmitEditing={() => {
                    alert()
                }}
                style={{borderWidth: 1}}
                value={charName}
            />
            <Button title={'Search'} onPress={handlePress}/>
            <Cities />


        </View>
    )
}
