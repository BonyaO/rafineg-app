import React, { Component } from 'react'
import {ImageBackground, TouchableOpacity, StyleSheet, Image, SafeAreaView, View, Button, Text} from 'react-native';
import tailwind from 'tailwind-rn';


const AuthenticationScreen = () => {
        return (
            <SafeAreaView style={tailwind('h-full w-full flex-1')}>
            <ImageBackground resizeMode='cover' style = {tailwind('flex-1 h-full w-full items-center')} source ={require('./../assets/images/splash-background.png')}>
                <View style = {tailwind('items-center content-center w-full pt-40 flex-col')}>
                    <Image style = {tailwind('w-20 h-20')} resizeMode='cover' source={require('./../assets/images/white-logo.png')} />
                    <Text style = {tailwind('text-white text-3xl font-bold text-center')}>RAFINEG</Text>
                    <Text style = {tailwind('')}>Save money, Live better</Text>
                </View>
                <View style={tailwind('pt-20 w-full m-12 items-center content-center justify-center flex-col')}>
                    <TouchableOpacity style={tailwind('bg-red-500 w-11/12 items-center h-12 m-4 justify-center ')} >
                        <Text style={tailwind('text-white text-center text-xl')}>LOGIN</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={tailwind('border-solid border-4 justify-center w-11/12 items-center h-12 border-white ')} >
                        <Text style={tailwind('text-white text-center text-xl')}>SIGN UP</Text>
                    </TouchableOpacity>
                </View>
                
                                
                
            </ImageBackground>
        </SafeAreaView>
        );
}

export default AuthenticationScreen;
