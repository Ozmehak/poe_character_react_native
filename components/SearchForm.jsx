import {TextInput, Button, View} from "react-native";
import {useState} from "react";
import {Poe} from "./Poe";
import {Text} from "react-native";


export const SearchForm = () => {
    const [accName, setAccName] = useState()
    const [charName, setCharName] = useState()
    const [poe, setPoe] = useState(null)


    const handlePress = () => {
     setPoe(true)
    }

    return (
        <View style={{height: '60%'}}>
            <TextInput
                onChangeText={(text) => setAccName(text)}
                onSubmitEditing={() => {
                    alert()
                }}
                style={{borderWidth: 3, borderColor: '#fff', padding: 5}}
                value={accName}
            />
            <TextInput
                onChangeText={(text) => setCharName(text)}
                onSubmitEditing={() => {
                    alert()
                }}
                style={{borderWidth: 3, borderColor: '#fff', padding: 5}}
                value={charName}
            />
            <Button title={'Search'} onPress={handlePress}/>

            <Text>
            {poe && (
                <Poe acc={accName} char={charName}/>
                )}
            </Text>



        </View>
    )

}
