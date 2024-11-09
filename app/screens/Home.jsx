import { ActivityIndicator, FlatList, Image, ImageBackground, ScrollView, Switch, Text, View } from 'react-native'
import React, { useState, useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { styles } from "../../styles/home.style.js"

const Home = () => {





    return (
        <SafeAreaView>

            <View style={styles.container}>
                <View style={styles.header}>
                    <Image style={styles.locationIcon} source={require("../../assets/icons/location.svg")} />
                    <View><Text style={styles.headerText}>Lekki Lagos</Text></View>

                    <View style={styles.headerCartWrapper}>
                        <Image style={styles.headerCart} source={require("../../assets/icons/calendar.svg")} />
                        <View style={styles.cartItemNumberWrapper}><Text style={styles.cartItemNumber}>5</Text></View>

                    </View>

                </View>

                <View>
                    <ScrollView horizontal contentContainerStyle={styles.homeHeader}>
                        <View>
                            <Image style={styles.homeHeaderImg} source={require("../../assets/images/hero-slide-01.jpg")} />
                        </View>

                        <View>
                            <Image style={styles.homeHeaderImg} source={require("../../assets/images/hero-slide-02.jpg")} />
                        </View>

                        <View>
                            <Image style={styles.homeHeaderImg} source={require("../../assets/images/hero-slide-03.jpg")} />

                        </View>
                        <View>
                            <Image style={styles.homeHeaderImg} source={require("../../assets/images/hero-slide-04.jpg")} />

                        </View>
                    </ScrollView>
                </View>

                <View styles={{}}>
                    <View style={styles.newArrivalHeader}>
                        <Text style={styles.newArrivalHeaderTxt}>New Arrivals</Text>
                        <Text style={styles.newArrivalHeaderText}>view all</Text>
                    </View>
                    <ScrollView >

                        <View style={styles.newArrivalRows}>

                            <View>
                                <Image style={styles.newArrivalRowsImg} source={require("../../assets/images/Chicago.png")} />
                                <View>
                                    <Text>Chicago</Text>
                                </View>
                            </View>

                            <View>
                                <Image style={styles.newArrivalRowsImg} source={require("../../assets/images/London.png")} />
                                <View>
                                    <Text>London</Text>
                                </View>
                            </View>
                        </View>


                        <View style={styles.newArrivalRows}>
                            <View>
                                <Image style={styles.newArrivalRowsImg} source={require("../../assets/images/Miami.png")} />
                                <View>
                                    <Text>Miami</Text>
                                </View>
                            </View>

                            <View>
                                <Image style={styles.newArrivalRowsImg} source={require("../../assets/images/New_Orleans.png")} />
                                <View>
                                    <Text>New Orleans</Text>
                                </View>
                            </View>


                        </View>
                        <View style={styles.newArrivalRows}>
                            <View>
                                <Image style={styles.newArrivalRowsImg} source={require("../../assets/images/New_York_City.png")} />
                                <View>
                                    <Text>Miami</Text>
                                </View>
                            </View>

                            <View>
                                <Image style={styles.newArrivalRowsImg} source={require("../../assets/images/philadelphia_heid.webp")} />
                                <View>
                                    <Text>New Orleans</Text>
                                </View>
                            </View>


                        </View>


                        <View style={styles.newArrivalRows}>


                        </View>

                    </ScrollView>
                </View>

            </View>
        </SafeAreaView>
    )
}

export default Home
