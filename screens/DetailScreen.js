import React from 'react'
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, Image, ScrollView, FlatList } from 'react-native'

//constants
import { FONTS, icons, SIZES, COLORS, dummyData } from '../constants'

const DetailScreen = ({ route, navigation }) => {

    const { selectedWatch } = route.params;

    function renderImage() {
        return (
            <ImageBackground
                source={selectedWatch.image}
                resizeMode="cover"
                style={{
                    width: '100%',
                    height: 350,
                }}
            >
                <TouchableOpacity
                    style={{
                        width: 50,
                        height: 50,
                        borderRadius: 25,
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginTop: SIZES.padding,
                        marginHorizontal: SIZES.padding
                    }}
                    onPress={() => navigation.goBack()}
                >
                    <Image
                        source={icons.back}
                        resizeMode="contain"
                        style={{
                            width: 25,
                            height: 25,
                            tintColor: COLORS.white
                        }}
                    />
                </TouchableOpacity>
            </ImageBackground>
        )
    }

    function renderInfoSection() {
        return (
            <View style={{ flexDirection: 'row', marginHorizontal: SIZES.padding, marginTop: SIZES.padding, justifyContent: 'space-between' }}>
                <View style={{ paddingVertical: SIZES.radius }}>
                    <Text style={{ color: COLORS.black, ...FONTS.h1 }}>{selectedWatch.name}</Text>
                    <Text style={{ color: COLORS.primary, ...FONTS.largeTitle, marginTop: SIZES.radius }}>${selectedWatch.price}</Text>
                </View>
                <TouchableOpacity
                    style={{
                        width: 60,
                        height: 60,
                        borderRadius: 30,
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                    onPress={() => console.log("Bookmark Pressed")}
                >
                    <Image
                        source={icons.bookmark}
                        resizeMode="contain"
                        style={{
                            width: 30,
                            height: 30,
                            tintColor: COLORS.gradient1
                        }}
                    />
                </TouchableOpacity>
            </View>
        )
    }

    function renderDescription() {
        return (
            <View style={{ marginHorizontal: SIZES.padding, marginTop: SIZES.padding }}>
                <Text style={{ color: COLORS.darkGray, ...FONTS.h4 }}>Description</Text>
                <Text style={{ color: '#ACACAC', ...FONTS.body3, marginTop: SIZES.base }}>{selectedWatch.description}</Text>
            </View>
        )
    }

    function renderSimilarProducts() {

        const renderItem = ({ item, index }) => {
            return (
                <Image
                    source={item.image}
                    resizeMode="cover"
                    style={{
                        width: 100,
                        height: 100,
                        marginLeft: index == 0 ? 0 : SIZES.padding,
                        borderRadius: 20
                    }}
                />
            )
        }

        return (
            <View style={{ marginHorizontal: SIZES.padding, marginTop: SIZES.padding }}>
                <Text style={{ color: COLORS.darkGray, ...FONTS.h4 }}>Similar Products</Text>
                <FlatList
                    horizontal
                    contentContainerStyle={{ marginTop: SIZES.radius }}
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={item => `${item.id}`}
                    data={dummyData.cardList}
                    renderItem={renderItem}
                />
            </View>
        )
    }

    function renderBottomSection() {
        return (
            <View style={{ backgroundColor: COLORS.white, width: '100%', height: 80, justifyContent: 'center', alignItems: 'center', ...styles.shadow, paddingHorizontal: SIZES.padding }}>
                <TouchableOpacity
                    style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: COLORS.primary,
                        borderRadius: 25,
                        height: 50,
                        width: '100%'
                    }}
                    onPress={() => console.log("ADD TO CART Pressed")}
                >
                    <Text style={{ color: COLORS.white, ...FONTS.h2 }}>ADD TO CART</Text>
                </TouchableOpacity>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            {/* Render Image */}
            {renderImage()}
            <ScrollView contentContainerStyle={{ paddingBottom: 50 }} showsVerticalScrollIndicator={false}>
                {/* Watch Info */}
                {renderInfoSection()}
                {/* Description */}
                {renderDescription()}
                {/* Similar Products */}
                {renderSimilarProducts()}
            </ScrollView>
            {/* Bottom */}
            {renderBottomSection()}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.92,
        shadowRadius: 4.92,
        elevation: 5,
    }
})

export default DetailScreen
