import React from 'react'
import { View, Text, StyleSheet, ScrollView, SafeAreaView } from 'react-native'
import RecipeItem from '../components/RecipeItem'

const DetailsScreen = ({ navigation }) => {

    const recipie = navigation.getParam('recipie')
    return <SafeAreaView style={styles.viewContainer}>
        <ScrollView>
            <Text>Full Recepie</Text>
            <Text >{recipie.recipie} </Text>

        </ScrollView>
    </SafeAreaView>
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


export default DetailsScreen

