import { Text, View } from "react-native";
import { Link } from "expo-router";
import React from "react";

export default function Index(){
  return (
    <View 
    style={{
      flex:1,
      justifyContent:"center",
      alignItems: "center",
    }}
    >
      <Text className="font-rubik my-10 text-red-500 font-bold text-3xl ">Welcome to ReState</Text>
      <Link href='/sign-in'>Sign In</Link>
      <Link href='/explore'>Explore</Link>
      <Link href='/profile'>Profile</Link>
      <Link href='/properties/1'>Property</Link>
    </View>
  )
}