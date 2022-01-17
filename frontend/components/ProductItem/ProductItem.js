import React from 'react'
import { StyleSheet,SafeAreaView, Image, Text, View } from 'react-native'

const ProductItem = ({item}) => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.root}>
                <Image source={{uri: item.image}} style={styles.image}/>
                <View style={styles.rightContainer}>
                    <Text numberOfLines={3} style={styles.title}>{item.title}</Text>
                    <View style={styles.priceContainer}>
                    <Text style={styles.price}>from $ {item.price}</Text>
                    <Text style={styles.oldPrice}>$ {item.oldPrice}</Text>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default ProductItem

const styles = StyleSheet.create({
     container: {
        // flex: 1,
    },
    root: {
            flexDirection: "row",
            margin: 7,
            borderWidth: 1,
            borderColor: "#d1d1d1",
            borderRadius: 10,
            backgroundColor: "#fff",
            marginTop: 7,
        },
    image: {
        flex: 2,
        height: 150,
        resizeMode: "contain",
    },
    title: {
        fontSize: 18,
    },
    price: {
        fontSize: 18,
        fontWeight: "bold"
    },
    priceContainer: {
        flexDirection: "row",
        alignItems: "center"
    },
    oldPrice: {
        marginLeft: 5,
        fontSize: 12,
        fontWeight: "normal",
        textDecorationLine: "line-through",
    },
    rightContainer: {
        padding: 10,
        flex: 3,
    },
})
