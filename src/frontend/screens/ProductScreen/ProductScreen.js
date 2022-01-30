import React, { useState } from 'react'
import { Image, StyleSheet, Text, View, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import product from '../../../backend/products/data/Product'
import QuantitySelector from '../../components/QuantitySelector/QuantitySelector'
import Button from "../../components/Button/Button"
import ImageCarousel from '../../components/ImageCarousel/ImageCarousel'
import {useRoute} from "@react-navigation/native"
import {useStateValue} from "../../../backend/StateProvider"

const ProductScreen = ({route}) => {
    const [quantity, setQuantity] = useState(1)
    const [{}, dispatch] = useStateValue();

    const { id, title, image, price, oldPrice} = route.params;

    // console.log(item);


    
    const addToBasket = () => {
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                id, title, price, oldPrice, image
            }
        })
    }

    // const title = route.params.item.title;
    // console.log(title);
    
    // const route = useRoute();
    // console.log(route.params.item.id);
    // console.log(route.params);
    // const id = route.params.item.id;
    // console.log(id);
    
    
    return (
        <ScrollView style={styles.root} >
                <View>
            <Text style={styles.title}>{title}</Text>
            <Image style={styles.image} source={{uri: image}}/>
            <View style={styles.priceContainer}>
                    <Text style={styles.price}>from $ {price}</Text>
                    <Text style={styles.oldPrice}>$ {oldPrice}</Text>
            </View>
            {/* <Text style={styles.description}>{description}</Text> */}
            <QuantitySelector quantity={quantity} setQuantity={setQuantity} />

            <Button text={"Add To Cart"} onPress={addToBasket}/>
            <Button text={"Buy Now"} onPress={() => {console.log("Clicked on Buy")}}/>
            </View>
        </ScrollView>
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
        fontSize: 20,
        marginBottom: 20,
        fontWeight: "500",
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
    image: {
        height: 350,
        width: "100%",
        resizeMode: 'contain',
        marginBottom: 20,
    }
})
