import React, { useState } from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity, FlatList, ImageBackground, ScrollView } from 'react-native'
import { BlurView } from 'expo-blur'

//constants
import { FONTS, icons, SIZES, COLORS, dummyData, images } from '../constants'

const HomeScreen = ({ navigation }) => {

    const [selectedTab, setSelectedTab] = useState(0);

    function renderHeader() {
        return (
            <View style={{ height: 100, justifyContent: 'center', backgroundColor: COLORS.white, ...styles.shadow }}>
                <View style={{ marginTop: SIZES.padding, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <TouchableOpacity
                        onPress={() => console.log("Menu on Pressed")}
                        style={{
                            width: 50,
                            height: 50,
                            borderRadius: 25,
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                    >
                        <Image
                            source={icons.menu}
                            resizeMode="contain"
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: COLORS.darkGray
                            }}
                        />
                    </TouchableOpacity>
                    <Image
                        source={icons.header}
                        resizeMode="contain"
                        style={{
                            width: 80,
                            height: 45,
                        }}
                    />
                    <TouchableOpacity
                        onPress={() => console.log("Notification on Pressed")}
                        style={{
                            width: 50,
                            height: 50,
                            borderRadius: 25,
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                    >
                        <Image
                            source={icons.bell}
                            resizeMode="contain"
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: COLORS.darkGray
                            }}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    function renderWelcome() {
        return (
            <View style={{ marginTop: SIZES.padding, marginHorizontal: SIZES.padding, flexDirection: 'row', justifyContent: 'space-between' }}>
                <View>
                    <Text style={{ color: COLORS.gradient1, ...FONTS.h1 }}>WELCOME! RONALD</Text>
                    <Text style={{ ...FONTS.h5, color: COLORS.gray, marginTop: SIZES.base }}>Lets select a watch for you</Text>
                </View>
                <TouchableOpacity
                    onPress={() => console.log("Search on Pressed")}
                    style={{
                        width: 40,
                        height: 40,
                        borderRadius: 20,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                >
                    <Image
                        source={icons.search}
                        resizeMode="contain"
                        style={{
                            width: 20,
                            height: 20,
                            tintColor: COLORS.lightGray2
                        }}
                    />
                </TouchableOpacity>
            </View>
        )
    }

    function renderPopularSection() {

        const renderItem = ({ item, index }) => {
            return (
                <View style={{ flex: 1 }}>
                    <TouchableOpacity
                        style={{
                            width: SIZES.width / 1.5,
                            height: SIZES.width / 1.5,
                            marginLeft: index == 0 ? 0 : SIZES.base,
                            marginRight: index == dummyData.popularList.length - 1 ? SIZES.base : 0,
                        }}
                        onPress={() => navigation.navigate("Detail", { selectedWatch: item })}
                    >
                        <ImageBackground
                            source={item.image}
                            resizeMode="cover"
                            style={{
                                width: '100%',
                                height: '100%',
                                justifyContent: 'flex-end',
                                alignItems: 'center',
                            }}
                            imageStyle={{ borderRadius: 20 }}
                        >
                            <BlurView tint="light" intensity={30} style={{ width: '80%', height: 80, marginBottom: SIZES.radius, justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row' }}>
                                <View style={{ marginLeft: SIZES.radius }}>
                                    <Text style={{ color: COLORS.white, ...FONTS.body3 }}>{item.name}</Text>
                                    <Text style={{ color: COLORS.white, ...FONTS.h3, marginTop: SIZES.base }}>${item.price}</Text>
                                </View>
                                <Image
                                    source={icons.right}
                                    resizeMode="contain"
                                    style={{
                                        width: 25,
                                        height: 25,
                                        tintColor: COLORS.white,
                                        marginRight: SIZES.base
                                    }}
                                />
                            </BlurView>
                        </ImageBackground>

                    </TouchableOpacity>

                </View>

            )
        }

        return (
            <View style={{ marginHorizontal: SIZES.padding, marginTop: SIZES.padding }}>
                <Text style={{ color: COLORS.primary, ...FONTS.h1 }}>POPULAR</Text>
                <FlatList
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{ marginTop: SIZES.radius }}
                    keyExtractor={item => `${item.id}`}
                    data={dummyData.popularList}
                    renderItem={renderItem}
                />
            </View>
        )
    }

    function renderCategories() {
        return (
            <View style={{ marginHorizontal: SIZES.padding, marginTop: SIZES.radius, flexDirection: 'row' }}>
                {dummyData.categories.map((item, index) => {
                    return (
                        <TouchableOpacity key={index}
                            style={{
                                margin: SIZES.radius,
                                borderWidth: selectedTab.id == index ? null : 1,
                                borderColor: selectedTab.id == index ? null : COLORS.gray,
                                borderRadius: 10,
                                justifyContent: 'center',
                                alignItems: 'center',
                                paddingVertical: 3,
                                paddingHorizontal: 10,
                                backgroundColor: selectedTab.id == index ? COLORS.primary : null,
                            }}
                            onPress={() => setSelectedTab(item)}
                        >
                            <Text style={{ color: selectedTab.id == index ? COLORS.white : COLORS.gray, ...FONTS.body4 }}>{item.name}</Text>
                        </TouchableOpacity>
                    )
                })}
            </View>
        )
    }

    function renderCardList() {
        return (
            <View
                style={{
                    marginHorizontal: SIZES.padding,
                    marginTop: SIZES.radius,
                    backgroundColor: COLORS.white,
                    ...styles.shadow,
                }}
            >
                <View style={{ flexDirection: 'row', margin: 10 }}>
                    <Image
                        source={dummyData.cardList[0].image}
                        resizeMode="cover"
                        style={{
                            width: 100,
                            height: 100
                        }}
                    />
                    <View style={{ justifyContent: 'space-around', marginLeft: SIZES.radius }}>
                        <Text style={{ color: COLORS.black, ...FONTS.body2 }}>{dummyData.cardList[0].name}</Text>
                        <Text style={{ color: COLORS.lightGray2, ...FONTS.body4 }}>Get {dummyData.cardList[0].sale} off</Text>
                    </View>
                    <View style={{ justifyContent: 'flex-end', marginRight: SIZES.base }}>
                        <Text style={{ color: COLORS.primary, ...FONTS.body2 }}>${dummyData.cardList[0].price}</Text>
                    </View>
                </View>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            {renderHeader()}
            <ScrollView contentContainerStyle={{ paddingBottom: 60 }}>
                {renderWelcome()}
                {renderPopularSection()}
                {renderCategories()}
                {renderCardList()}
            </ScrollView>
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
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
    }

})

export default HomeScreen
