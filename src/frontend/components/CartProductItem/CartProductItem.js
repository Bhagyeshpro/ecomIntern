import React, {useState} from 'react'
import { StyleSheet,SafeAreaView, Image, Text, View } from 'react-native'
import Button from '../Button/Button'

import QuantitySelector from "../QuantitySelector/QuantitySelector"

const CartProductItem = ({id, title, image, oldPrice, price}) => {
    // const [quantityIs, setQuantityIs] = useState(item.quantity);

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.root}>
                <Image source={{uri: image}} style={styles.image}/>
                <View style={styles.rightContainer}>
                    <Text numberOfLines={3} style={styles.title}>{title}</Text>
                    <View style={styles.priceContainer}>
                    <Text style={styles.price}>from $ {price}</Text>
                    <Text style={styles.oldPrice}>$ {oldPrice}</Text>
                    </View>
                    <Button text={"Remove From Cart"}/>
                </View>
            </View>
            {/* <View style={styles.quantityContainer}>
            <QuantitySelector quantity={quantityIs} setQuantity={setQuantityIs}/>
            </View> */}

        </SafeAreaView>
    )
}

export default CartProductItem

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
    quantityContainer: {
        marginLeft: 10,
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
