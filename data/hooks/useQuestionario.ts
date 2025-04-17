import { useEffect, useState } from "react";
import todasAsPerguntas from "@/data/constants/perguntas";
import Pergunta from "../model/Pergunta";

export default function useQuestionario() {
    const [indicePergunta, setIndicePergunta] = useState(0);
    const [respostas, setRespostas] = useState<number[]>([]);
    const [perguntas, setPerguntas] = useState<Pergunta[]>([]);
    const [time, setTime] = useState(10);
    const [respondeu, setRespondeu] = useState(false);

    useEffect(() => {
        setPerguntas(sortearPerguntas());
    }, []);

    function sortearPerguntas() {
        return todasAsPerguntas
            .sort(() => Math.random() - 0.5)
            .slice(0, 10);
    }

    useEffect(() => {
        setTime(10);
        setRespondeu(false);


        const id = setInterval(() => {
            setTime((t) => {
                if (t === 1 && !respondeu) {
                    setIndicePergunta((prev) => prev + 1);
                }
                return t > 0 ? t - 1 : 0;
            });
        }, 1000);

        return () => clearInterval(id);
    }, [indicePergunta]);


    return {
        get pergunta() {
            return perguntas[indicePergunta]
        },
        get pontuacao() {
            return perguntas
                .map((p) => p.resposta)
                .map((r, i) => (r === respostas[i] ? 1 : 0))
                .filter(Boolean).length
        },
        get totalDePerguntas() {
            return perguntas.length
        },
        get concluido() {
            return indicePergunta >= perguntas.length;
        },
        get times() {
            return time
        },
        responder(resposta: number) {
            setRespostas([...respostas, resposta])
            setIndicePergunta(indicePergunta + 1)
        },
        reiniciar() {
            setIndicePergunta(0)
            setRespostas([])
            setPerguntas(sortearPerguntas())
            setTime(10);
        }
    }

}