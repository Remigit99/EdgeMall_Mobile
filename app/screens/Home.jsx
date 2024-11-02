import { Image, ImageBackground, ScrollView, StyleSheet, Switch, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const Home = () => {
    return (
        <SafeAreaView>
            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginVertical: 16, marginHorizontal: 16 }}>
                <Text style={{ fontSize: 24, color: "coral", fontFamily: "MontserratBold", fontWeight: "bold" }}>STACK NEWS</Text>
                <View style={{ flexDirection: "row", gap: 16, alignItems: "center" }}>
                    <Switch />
                    <View style={{ width: 28, height: 28, borderRadius: 14, backgroundColor: "gray" }}>
                        <Image source={require("../../assets/images/user.svg")} style={{ display: "flex", justifySelf: "center", alignSelf: "center" }} />

                        {/* <Text>Search</Text> */}
                    </View>
                </View>

            </View>

            <View >
                <View style={{ flexDirection: "row", justifyContent: "space-between", marginVertical: 8, marginHorizontal: 16 }}>
                    <Text style={{ fontFamily: "MontserratMedium", color: "green", fontSize: 18 }}>Breaking News</Text>
                    <Text style={{ fontFamily: "MontserratMedium", color: "green", fontSize: 18 }}>View All</Text>
                </View>

                <ScrollView horizontal>



                    <View style={{ marginHorizontal: 16, position: "relative" }}>
                        <Image
                            source={require("../../assets/images/men_banner.jpg")}

                            style={{ width: 200, height: 150, borderRadius: 12 }}
                        />

                        <Text style={{ position: "absolute", fontSize: 18, bottom: 20, color: "white" }}>Trump Vs Kamala Harris</Text>
                    </View>


                    <View style={{ marginHorizontal: 16 }}>
                        <Image
                            source={require("../../assets/images/Ecrou.jpg")}

                            style={{ width: 200, height: 150, borderRadius: 12 }}
                        />

                        <Text numberOfLines={1}>Trump Vs Kamala Harris</Text>
                    </View>

                    <View style={{ marginHorizontal: 16 }}>
                        <Image
                            source={require("../../assets/images/nike_banner.png")}

                            style={{ width: 200, height: 150, borderRadius: 12 }}
                        />

                        <Text numberOfLines={1}>Trump Vs Kamala Harris</Text>
                    </View>



                </ScrollView>
            </View>

            <ScrollView>
                <View style={{ flexDirection: "row", justifyContent: "space-between", marginVertical: 8, marginHorizontal: 16 }}>
                    <Text style={{ fontFamily: "MontserratMedium", color: "green", fontSize: 18 }}>Breaking News</Text>
                    <Text style={{ fontFamily: "MontserratMedium", color: "green", fontSize: 18 }}>View All</Text>
                </View>

                <View>
                    
                    <View style={{flexDirection:"row", gap: 14, alignItems: "center", marginHorizontal: 16}}>
                        <View>
                        <Image source={require("../../assets/images/women_clothing.jpg")} style={{ width: 100, height: 80}} />

                        </View>

                        <View style={{flex:1,flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}>
                            <View>
                            <Text style={{fontFamily: "MontserratRegular", fontWeight: "700"}}>Aderemi Abiodun</Text>
                            <Text style={{fontFamily: "MontserratMedium", fontWeight: "800"}}>Dow Jones Futures Fall</Text>
                            <Text>Sat Nov 2, 2024</Text>
                            </View>

                            <View>
                                <Text>Saved</Text>
                            </View>
                        </View>

                    </View>

                    <View style={{flexDirection:"row", gap: 14, alignItems: "center", marginHorizontal: 16}}>
                        <View>
                        <Image source={require("../../assets/images/women_clothing.jpg")} style={{ width: 100, height: 80}} />

                        </View>

                        <View style={{flex:1,flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}>
                            <View>
                            <Text style={{fontFamily: "MontserratRegular", fontWeight: "700"}}>Aderemi Abiodun</Text>
                            <Text style={{fontFamily: "MontserratMedium", fontWeight: "800"}}>Dow Jones Futures Fall</Text>
                            <Text>Sat Nov 2, 2024</Text>
                            </View>

                            <View>
                                <Text>Saved</Text>
                            </View>
                        </View>

                    </View>

                    <View style={{flexDirection:"row", gap: 14, alignItems: "center", marginHorizontal: 16}}>
                        <View>
                        <Image source={require("../../assets/images/women_clothing.jpg")} style={{ width: 100, height: 80}} />

                        </View>

                        <View style={{flex:1,flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}>
                            <View>
                            <Text style={{fontFamily: "MontserratRegular", fontWeight: "700"}}>Aderemi Abiodun</Text>
                            <Text style={{fontFamily: "MontserratMedium", fontWeight: "800"}}>Dow Jones Futures Fall</Text>
                            <Text>Sat Nov 2, 2024</Text>
                            </View>

                            <View>
                                <Text>Saved</Text>
                            </View>
                        </View>

                    </View>

                    <View style={{flexDirection:"row", gap: 14, alignItems: "center", marginHorizontal: 16}}>
                        <View>
                        <Image source={require("../../assets/images/women_clothing.jpg")} style={{ width: 100, height: 80}} />

                        </View>

                        <View style={{flex:1,flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}>
                            <View>
                            <Text style={{fontFamily: "MontserratRegular", fontWeight: "700"}}>Aderemi Abiodun</Text>
                            <Text style={{fontFamily: "MontserratMedium", fontWeight: "800"}}>Dow Jones Futures Fall</Text>
                            <Text>Sat Nov 2, 2024</Text>
                            </View>

                            <View>
                                <Text>Saved</Text>
                            </View>
                        </View>

                    </View>

                    <View style={{flexDirection:"row", gap: 14, alignItems: "center", marginHorizontal: 16}}>
                        <View>
                        <Image source={require("../../assets/images/women_clothing.jpg")} style={{ width: 100, height: 80}} />

                        </View>

                        <View style={{flex:1,flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}>
                            <View>
                            <Text style={{fontFamily: "MontserratRegular", fontWeight: "700"}}>Aderemi Abiodun</Text>
                            <Text style={{fontFamily: "MontserratMedium", fontWeight: "800"}}>Dow Jones Futures Fall</Text>
                            <Text>Sat Nov 2, 2024</Text>
                            </View>

                            <View>
                                <Text>Saved</Text>
                            </View>
                        </View>

                    </View>


                </View>


            </ScrollView>
        </SafeAreaView>
    )
}

export default Home

const styles = StyleSheet.create({})