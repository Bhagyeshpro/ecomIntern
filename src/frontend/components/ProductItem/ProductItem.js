import React from 'react'
import { StyleSheet,SafeAreaView, Image, Text, View, Pressable } from 'react-native'
import { useNavigation } from '@react-navigation/native'


const ProductItem = ({item}) => {
    const navigation = useNavigation();

    const {title} = item;
    // console.log(title);

    const onPress = () => {
        console.warn("Press");
        navigation.navigate("ProductDetails", {
            title : item.title,
            image : item.image,
            price: item.price,
            oldPrice: item.oldPrice,
            id: item.id,
        })
    }

    return (
        <Pressable onPress={onPress} style={styles.container}>
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
        </Pressable>
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
