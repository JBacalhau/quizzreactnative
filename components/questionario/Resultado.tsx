import { Pressable, StyleSheet, Text, View } from "react-native";


export interface ResultadoProps {
    pontuacao: number
    totalDePerguntas: number
    reiniciar: () => void
}

export default function Resultado(props: ResultadoProps) {
    const { pontuacao, totalDePerguntas, reiniciar } = props
    return (   
        <View style={styles.container}>
            <Text style={styles.texto}>Você acertou</Text>
            <Text style={styles.destaque}>{Math.round((pontuacao / totalDePerguntas) * 100)}%</Text>
            <Pressable style={styles.botao} onPress={reiniciar}>
                <Text style={styles.textoBotao}>Reiniciar</Text>
            </Pressable>
        </View>
     )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.651)',
        padding: 15,
        borderRadius: 10,
    },
    texto: {
        color: '#bbb',
        fontSize: 20,
        fontWeight:"bold",
    },
    destaque: {
        color: 'white',
        fontSize: 60,
        fontWeight:"900",
    },
    botao: {
        marginTop: 20,
        backgroundColor: '#2E9D48',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
        marginBottom: 10,
    },
    textoBotao: {
        color: 'white',
    },
})