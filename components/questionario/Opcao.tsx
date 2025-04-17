import { Pressable, StyleSheet, Text } from "react-native";

export interface OpcaoProps {
    texto: string
    indice: number
    onPress: () => void
}

export default function Opcao(props: OpcaoProps) {
    return (
        <Pressable style={styles.container} onPress={props.onPress}>
            <Text style={styles.texto}>{props.texto}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
container:{
    backgroundColor: '#2E9D48',
    width: 300,
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderRadius: 15,    
},
texto:{
    textAlign: 'center',
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
},

})