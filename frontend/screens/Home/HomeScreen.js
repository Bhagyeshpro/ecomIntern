import React, { useLayoutEffect } from 'react'
import { StyleSheet,SafeAreaView, Image, Text, View, FlatList, TouchableOpacity, useWindowDimensions } from 'react-native'
import ProductItem from '../../components/ProductItem/ProductItem'
import {Feather} from "@expo/vector-icons"
import products from "../../../backend/products/data/Products"
import Navigation from '../../navigation/Navigation'

const HomeScreen = ({navigation}) => {
    const windowWidth = useWindowDimensions().width;

    useLayoutEffect(() => {
        navigation.setOptions({
            headerStyle: {backgroundColor: "#222e3c"},
            headerRight: () => (
                <View
                 style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        width : windowWidth-400,
                        marginRight: 10
                    }}
                >
                    <TouchableOpacity onPress={() => navigation.navigate("Cart")}>
                        <Feather name="shopping-cart" size={24} color="white" />
                    </TouchableOpacity> 
                </View>
            )
        })
    }, [])

    return (
        <View style={styles.container}>
            {/* <ProductItem item={products[2]}/> */}
            {
                <FlatList
                    data={products}
                    renderItem={({item}) => <ProductItem item={item}/>}
                />
            }
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
   container: {
       flex: 1,
       marginTop: 20
   }
})
