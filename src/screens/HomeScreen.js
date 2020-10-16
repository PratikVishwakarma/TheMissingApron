import React, { useContext, useEffect } from 'react'
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import RecipeItem from '../components/RecipeItem'

import { Context } from '../context/RecipeContext'

const HomeScreen = ({ navigation }) => {
    var { state, getVideos } = useContext(Context)

    useEffect(() => {
        getVideos()
    }, [])

    return <View style={styles.viewContainer}>
        <Text>HomeScreen</Text>
        <FlatList
            style= {styles.viewContainer}
            data={state}
            renderItem={({ item }) => {
            return <TouchableOpacity onPress={() => {
                navigation.navigate('Details', { recipie: item })
            }}>
                <RecipeItem name={item.title} image={item.imgUrl} />
            </TouchableOpacity>
        }}
            numColumns={2}
        />
    </View>
}


const styles = StyleSheet.create({
    viewContainer: {
        backgroundColor: 'white',
        padding: 16,
        flex: 1
    },
    inputHeading: {
        fontSize: 20
    },
    inputTextStyle: {
        padding: 8,
        marginVertical: 8,
        borderColor: 'black',
        borderWidth: 1,
        fontSize: 20
    }
})


export default HomeScreen

