import React from 'react'
import { FlatList, StyleSheet, Text, View, Image, useWindowDimensions } from 'react-native'


const ImageCarousel = ({images}) => {
    const windowWidth = useWindowDimensions().width;

    return (
        <View style={styles.root}>
            <FlatList
                data={images}
                renderItem={({item}) => (
                    <Image 
                    style={[styles.image, {width: windowWidth - 40}]} 
                    source={{uri: item}} 

                    />
                )}
                showsHorizontalScrollIndicator={false}
                horizontal  
                snapToInterval={windowWidth - 20}
                snapToAlignment='center'
                decelerationRate={"fast"}
            />
        </View>
    )
}

export default ImageCarousel

const styles = StyleSheet.create({
    root: {},
    image: {
        margin: 10,
        height: 250,
        resizeMode: "contain",
    },
})
