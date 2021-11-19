import React from 'react';
import { SafeAreaView, View, Image, Text, ImageBackground, StyleSheet, TouchableOpacity } from 'react-native';

//constants
import { icons, images, FONTS, SIZES, COLORS } from '../constants'

const LandingScreen = ({ navigation }) => {

    function renderLogo() {
        return (
            <View
                style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    position: 'absolute',
                    top: 30,
                    left: 0,
                    right: 0
                }}
            >
                <Image
                    source={images.landinglogo}
                    resizeMode="contain"
                    style={{
                        width: 117,
                        height: 67
                    }}
                />
            </View>
        )
    }

    function renderBottomSection() {
        return (
            <View
                style={{
                    marginBottom: SIZES.padding,
                    marginHorizontal: SIZES.padding,
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Text style={{ color: COLORS.white, ...FONTS.body1 }}>Buy your Premium Watches,</Text>
                <Text style={{ color: COLORS.white, ...FONTS.body1 }}>Only Here</Text>
                <View style={{
                    flexDirection: 'row',
                    marginTop: SIZES.padding
                }}>
                    <TouchableOpacity
                        onPress={() => console.log("Sign up pressed")}
                        style={{
                            width: 150,
                            height: 60,
                            backgroundColor: 'transparent',
                            borderWidth: 1,
                            borderColor: COLORS.primary,
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: 50
                        }}
                    >
                        <Text style={{ color: COLORS.white, ...FONTS.h2 }}>SIGN UP</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigation.replace("Root")}
                        style={{
                            width: 150,
                            height: 60,
                            backgroundColor: COLORS.primary,
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: 50,
                            marginLeft: SIZES.radius,
                        }}
                    >
                        <Text style={{ color: COLORS.white, ...FONTS.h2 }}>LOG IN</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    function renderBackground() {
        return (
            <ImageBackground
                source={images.landingbg}
                resizeMode="cover"
                style={{
                    width: '100%',
                    height: '100%',
                    justifyContent: 'flex-end'
                }}
            >
                {/* Logo */}
                {renderLogo()}
                {/* Info text & Buttons */}
                {renderBottomSection()}
            </ImageBackground>
        )
    }

    return (
        <View style={styles.container}>
            {renderBackground()}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.black
    }
})

export default LandingScreen
