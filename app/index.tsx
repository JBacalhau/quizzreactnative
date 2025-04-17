import Pergunta from "@/components/questionario/Pergunta";
import Resultado from "@/components/questionario/Resultado";
import Tempo from "@/components/questionario/Tempo";
import Logo from "@/components/template/Logo";
import Pagina from "@/components/template/Pagina";
import useQuestionario from "@/data/hooks/useQuestionario";
import { View } from "react-native";

export default function Index() {
  const { pergunta, concluido, pontuacao, times, totalDePerguntas, responder, reiniciar } = useQuestionario();

  return (
      <Pagina>
          <View style={{ gap: 40, paddingHorizontal: 10 }}>
              <Logo />

              {concluido ? (
                  <Resultado 
                      pontuacao={pontuacao} 
                      totalDePerguntas={totalDePerguntas} 
                      reiniciar={reiniciar} 
                  />
              ) : (
                  pergunta && ( // Renderiza apenas se houver pergunta
                      <>
                          <Pergunta pergunta={pergunta} opcaoSelecionada={responder} />
                          <Tempo time={times} />
                      </>
                  )
              )}
          </View>
      </Pagina>
  );
}