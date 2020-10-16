import React from 'react'
import { View, Image, Text, StyleSheet } from 'react-native'
const RecipeItem = ({ name, image }) => {
    let imageSrc = { uri: image };
    return <View style={styles.viewContainer}>
        {image ? <Image
            style={styles.gridItemImage}
            source={imageSrc}
        /> : null}

        <Text>{`${name}`}</Text>
    </View>
}

const styles = StyleSheet.create({
    viewContainer: {
        margin: 10,
        borderRadius: 8,
        shadowColor: '#000000',
        shadowOpacity: 0.3,
        shadowRadius: 3,
        backgroundColor: '#ffffff',
        elevation: 5,
        justifyContent: 'center',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }, gridItemImage: {
        width: 100,
        height: 100,
        borderColor: 'white',
    }
})

export default RecipeItem

