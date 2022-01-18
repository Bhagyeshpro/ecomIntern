import React, { useLayoutEffect } from 'react'
import { StyleSheet,SafeAreaView, Image, Text, View, FlatList, TouchableOpacity, useWindowDimensions } from 'react-native'
import ProductItem from '../../components/ProductItem/ProductItem'
import {Feather} from "@expo/vector-icons"
import products from "../../../backend/products/data/Products"
import Navigation from '../../navigation/Navigation'

const HomeScreen = ({navigation}) => {
    const windowWidth = useWindowDimensions().width;

    return (
        <View style={styles.container}>
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
