import React from "react";
import { StyleSheet, View } from "react-native";

export interface TriangleProps{
    color:string,

}

const Triangle = (props:TriangleProps) => {

    const styles = StyleSheet.create({
        triangle: {
          width: 0,
          height: 0,
          backgroundColor: "transparent",
          borderStyle: "solid",
          borderLeftWidth: 50,
          borderRightWidth: 50,
          borderBottomWidth: 100,
          borderLeftColor: "transparent",
          borderRightColor: "transparent",
          borderBottomColor: props.color,
          transform: [{ rotate: "70deg" }]
        },
      });

    return <View style={styles.triangle} />;
  };


  export default Triangle;
  