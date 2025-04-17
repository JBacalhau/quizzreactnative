import { StyleSheet, Text, View } from "react-native";


export interface TempoProps {
    time?: number
}

export default function Tempo(props: TempoProps) {
    return (
        <View style={styles.container}>

            <Text style={styles.tempo}>{props.time}s</Text>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,        
        marginLeft: 10,
        
    },
    tempo: {
        color: "white",
        fontSize: 30,
        fontWeight: "bold",
    },
});