import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

const Task = (props) => {
    return (
        <View style={styles.card}>
            <View style={styles.container}>
                <TouchableOpacity style={styles.square} />
                <View style={styles.textContainer}>
                    <Text styles={styles.task}>{props.task}</Text>
                    <Text styles={styles.date}>{props.date}</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        width: "100%",
        borderWidth: 1,
        borderStyle: "solid",
        borderRadius: 4,
        marginBottom: 16,
        padding: 8,
        backgroundColor: "white"
    },
    container: {
        flexDirection: "row",
        alignItems: "center",
    },
    square: {
        backgroundColor: "#55BCF6",
        height: 24,
        width: 24,
        borderRadius: 4, 
        opacity: 0.4,
    },
    textContainer: {
        marginLeft: 8
    },
    task: {
        fontWeight: "bold",
        fontSize: 16,
    },
    date: {
        color: "gray",
        fontSize: 16,
    },
});

export default Task
