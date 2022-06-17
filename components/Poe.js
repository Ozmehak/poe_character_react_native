import wretch from 'wretch'
import {useEffect, useState} from "react";
import {Text, View, FlatList, Image, StyleSheet} from "react-native";
import {ScrollView} from "react-native";


export const Cities = (props) => {
    const [character, setCharacter] = useState(null)
    const [items, setItems] = useState({})


    let acc = props.acc.toLowerCase().trim()
    let char = props.char.toLowerCase().trim()


    useEffect(() => {
        wretch(`https://www.pathofexile.com/character-window/get-items?accountName=${acc}&realm=pc&character=${char}`)
            .get()
            .json()
            .then((result) => {
                setCharacter([result.character])
                setItems([result.items])
            })
    }, [])

    return (
        <View>

            <FlatList
                data={character}
                renderItem={({item}) => (
                    <View style={{color: 'white'}}>
                        <Text style={styles.text}>Name: {item.name}</Text>
                        <Text style={styles.text}>Class: {item.class}</Text>
                        <Text style={styles.text}>Level: {item.level}</Text>
                        <Text style={styles.text}>League: {item.league}</Text>
                    </View>
                )}
                keyExtractor={(character) => character}

            />
            <FlatList
                data={items}
                renderItem={({item}) => (
                    <View style={{display: 'flex', flexDirection: 'row'}}>
                        <Image style={styles.image} source={{uri: `${item[10].icon}`}}/>
                        <Image style={styles.image} source={{uri: `${item[11].icon}`}}/>
                        <Image style={styles.image} source={{uri: `${item[3].icon}`}}/>
                        <Image style={styles.image} source={{uri: `${item[7].icon}`}}/>
                        <Image style={styles.image} source={{uri: `${item[6].icon}`}}/>
                        <Image style={styles.image} source={{uri: `${item[8].icon}`}}/>
                    </View>

                )}
                keyExtractor={(item) => item}
            />


        </View>

    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 30,
    },
    image: {
        height: 140,
        width: 40,
        marginRight: 2,
        resizeMode: "contain"
    },


});

