import React, { usestate, useEffect }from 'react';
// import React { useState, useEffect } from 'react'
import {
    View,
    Text,
    Image,
    TouchableOpacity
} from 'react-native';
import {
    createDrawerNavigator,
    DrawerContentScrollView
} from "@react-navigation/drawer";

import Animated from "react-native-reanimated";

import{ MainLayout } from "../screens";
import { 
    COLORS,
    FONTS,
    SIZES,
    constants,
    icons,
    dummyData
} from "../constants";
// import Animated from 'react-native-reanimated';
import { connect } from "react-redux";
import { setSelectedTab, selectedTab } from "../stores/tab/tabActions";

const Drawer = createDrawerNavigator()

const CustomDrawerItem = ({label, icon, isFocused, onPress}) => {
    return (
        <TouchableOpacity
            style = {{
                flexDirection: 'row',
                height: 40,
                marginBottom: SIZES.base,
                alignItems: 'center',
                paddingLeft: SIZES.radius,
                borderRadius: SIZES.base,
                backgroundColor: isFocused ? COLORS.transparentBlack1: null
            }}
            onPress = {onPress}
        >
            <Image
                source={icon}
                style = {{
                    width: 20,
                    height: 20,
                    tintColor: COLORS.white
                }}
            />
            <Text
                style = {{
                    marginLeft: 15,
                    color: COLORS.white,
                    ...FONTS.h3
                }}
            >
                {label}
            </Text>
        </TouchableOpacity>
    )
}

const CustomDrawerContent = ({navigation, selectedTab, setSelectedTab}) => {
    return (
        <DrawerContentScrollView
            scrollEnabled = {true}
            contentContainerStyle = {{ flex: 1 }}
        >
            <View
                style = {{
                    flex: 1,
                    paddingHorizontal: SIZES.radius
                }}
            >
                {/*COLOSE*/}
                <View
                    style = {{
                        justifyContent: 'center',
                        alignItems: 'flex-start'
                    }}
                >
                    <TouchableOpacity
                        style = {{
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                        onPress = {() => navigation.closeDrawer()}
                    >
                        <Image
                            source={icons.cross}
                            style = {{
                                height: 35,
                                width: 35,
                                tintColor: COLORS.white
                            }}
                        />
                    </TouchableOpacity>
                </View>

                <TouchableOpacity
                    style = {{
                        flexDirection: 'row',
                        marginTop: SIZES.radius,
                        alignItems: 'center'
                    }}
                    onPress = {() => console.log("Profile")}
                >
                    <Image
                        source={dummyData.myProfile?.profile_image}
                        style = {{
                            width: 50,
                            height: 50,
                            borderRadius: SIZES.radius
                        }}
                    />
                    <View
                        style = {{
                            marginLeft: SIZES.radius
                        }}
                    >
                        <Text style = {{ color: COLORS.white, ...FONTS.h3}}>
                            {dummyData.myProfile.name}
                        </Text>
                        <Text style = {{ color: COLORS.white, ...FONTS.body4}}>
                            Ver Perfile
                        </Text>
                    </View>
                </TouchableOpacity>
                <View
                    style = {{ 
                        flex: 1,
                        marginTop: SIZES.radius
                    }}
                >
                    <CustomDrawerItem
                        label = {constants.screens.home}
                        icon = {icons.home}
                        isFocused = {selectedTab == constants.screens.home}
                        onPress = {() =>{
                            setSelectedTab(constants.screens.home)
                            navigation.navigate("MainLayout")
                        }}
                    />
                    <CustomDrawerItem
                        label = {constants.screens.my_wallet}
                        icon = {icons.wallet}
                    />
                    <CustomDrawerItem
                        label = {constants.screens.notification}
                        icon = {icons.notification}
                        isFocused = {selectedTab == constants.screens.notification}
                        onPress = {() =>{
                            setSelectedTab(constants.screens.notification)
                            navigation.navigate("MainLayout")
                        }}
                    />
                    <CustomDrawerItem
                        label = {constants.screens.favourite}
                        icon = {icons.favourite}
                        isFocused = {selectedTab == constants.screens.favourite}
                        onPress = {() =>{
                            setSelectedTab(constants.screens.favourite)
                            navigation.navigate("MainLayout")
                        }}
                    />

                    {/* Linea de division */}
                    <View
                        style = {{
                            height: 1,
                            marginVertical: SIZES.radius,
                            marginLeft: SIZES.radius,
                            backgroundColor: COLORS.lightGray1
                        }}
                    >  
                    </View>
                    <CustomDrawerItem
                        label = "Revisar Orden"
                        icon = {icons.location}
                    />
                    <CustomDrawerItem
                        label = "Cupones"
                        icon = {icons.coupon}
                    />
                    <CustomDrawerItem
                        label = "Configuracion"
                        icon = {icons.setting}
                    />
                    <CustomDrawerItem
                        label = "Invitar"
                        icon = {icons.profile}
                    />
                    <CustomDrawerItem
                        label = "Ayuda"
                        icon = {icons.help}
                    />
                </View>
                <View
                    style = {{
                        marginBottom: SIZES.padding
                    }}
                >
                    <CustomDrawerItem
                        label = "Salir"
                        icon = {icons.logout}
                    />
                </View>
            </View>
        </DrawerContentScrollView>
    )
}
const CustomDrawer = ({ selectedTab, setSelectedTab }) => {
    const [progress, setProgress] = React.useState(new Animated.Value(0))
    const scale = Animated.interpolateNode(progress, {
        inputRange: [0, 1],
        outputRange: [1, 0.8]
    })
    const borderRadius = Animated.interpolateNode(progress, {
        inputRange: [0, 1],
        outputRange: [0, 26]
    })
    const animatedStyle = {borderRadius, transform: [{scale}]}
    return (
        <View
            style ={{
                flex: 1,
                backgroundColor: COLORS.primary
            }}
        >
            <Drawer.Navigator
                drawerType = "slide"
                overlayColor = "transparent"
                drawerStyle ={{
                    flex: 1,
                    width: '65%',
                    paddingRight: 20,
                    backgroundColor: 'transparent'
                }}
                sceneContainerStyle ={{
                    backgroundColor: 'transparen'
                }}
                initialRouteName = "MainLayout"
                drawerContent={props => {
                    setTimeout(() => {
                        setProgress (props.progress)
                    }, 0)
                    
                    return (
                        <CustomDrawerContent
                            navigation = {props.navigation}
                            selectedTab = {selectedTab}
                            setSelectedTab = {setSelectedTab}
                        />
                    )
                }}
            >
                <Drawer.Screen name = "MainLayout">
                    {props => <MainLayout {...props} 
                    drawerAnimationStyle = {animatedStyle}/>}
                </Drawer.Screen>
            </Drawer.Navigator>
        </View>
    )
}


function mapStateToProps(state) {
    return {
        selectedTab: state.tabReducer.selectedTab
    }
}
function mapDispatchToProps(dispatch) {
    return {
        setSelectedTab: (selectedTab) => { return dispatch
        (setSelectedTab(selectedTab))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CustomDrawer)
