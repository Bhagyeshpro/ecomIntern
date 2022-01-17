import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import product from '../../../backend/products/data/Product'
import QuantitySelector from '../../components/QuantitySelector/QuantitySelector'
import Button from "../../components/Button/Button"
import ImageCarousel from '../../components/ImageCarousel/ImageCarousel'

const ProductScreen = () => {
    const [quantity, setQuantity] = useState(1)
   
    return (
        <SafeAreaView style={styles.root} >
            <Text style={styles.title}>{product.title}</Text>
            <ImageCarousel images={product.images}/>
            <View style={styles.priceContainer}>
                    <Text style={styles.price}>from $ {product.price}</Text>
                    <Text style={styles.oldPrice}>$ {product.oldPrice}</Text>
            </View>
            <Text style={styles.description}>{product.description}</Text>
            <QuantitySelector quantity={quantity} setQuantity={setQuantity} />

            <Button text={"Add To Cart"} onPress={() => {console.log("Clicked on To Cart")}}/>
            <Button text={"Buy Now"} onPress={() => {console.log("Clicked on Buy")}}/>

        </SafeAreaView>
    )
}

export default ProductScreen

const styles = StyleSheet.create({
    root: {
        padding: 10,
        backgroundColor: 'white',
    },
    title: {
        color: "black",
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
    description: {
        marginVertical: 10,
        lineHeight: 20,
    },
})
