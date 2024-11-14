import { useAppSelector } from '../../store/hooks'

import Tarefa from '../../components/Tarefa'
import * as S from './styles'
import { selectTarefas } from '../../store/reducers/tarefas'
import { selectFiltro } from '../../store/reducers/filtro'

const ListaDeTarefas = () => {
  let tarefas = useAppSelector(selectTarefas)
  const { termo, criterio, valor } = useAppSelector(selectFiltro)

  if (termo) {
    tarefas = tarefas.filter(
      (tarefa) => tarefa.titulo.toLowerCase().search(termo.toLowerCase()) >= 0
    )
  }

  if (criterio === 'prioridade') {
    tarefas = tarefas.filter((tarefa) => tarefa.prioridade === valor)
  } else if (criterio === 'status') {
    tarefas = tarefas.filter((tarefa) => tarefa.status === valor)
  }

  let inicio = `${tarefas.length} tarefas `
  let fim = `no total`

  if (tarefas.length === 0) {
    inicio = `Nenhuma tarefa adicionada`
    fim = ''
  } else {
    if (criterio !== 'todas') {
      fim = `marcadas com: "${criterio} = ${valor}"`
    }

    if (termo !== undefined && termo.length > 0) {
      fim += ` e ${termo}`
    }
  }

  const mensagemTarefas = inicio + fim + '.'

  return (
    <S.Container>
      <S.Resultado>{mensagemTarefas}</S.Resultado>
      <ul>
        {tarefas.map((tarefa) => (
          <li key={tarefa.id}>
            <Tarefa
              titulo={tarefa.titulo}
              descricao={tarefa.descricao}
              prioridade={tarefa.prioridade}
              status={tarefa.status}
              id={tarefa.id}
            />
          </li>
        ))}
      </ul>
    </S.Container>
  )
}

export default ListaDeTarefas

// 1 - D
// 2 - C
// 3 - D
// 4 - B
// 5 - C
/*
As respostas corretas são: D, c, c, d, c respectivamente
Resolução:
Teste 1
No Teste 1, os números apresentados seguem um padrão baseado em quadrados perfeitos.

Observando os números ao redor do círculo, temos:
16=4²
1=1²
25=5²
4=2²
36= 6²
9=3²
Cada número é o quadrado de um número inteiro de 1 a 6. Seguindo essa lógica, o próximo número que completaria a sequência seria .
7²=49
Portanto, o número que deve substituir o ponto de interrogação é 49.
Padrão: Cada número é um quadrado perfeito, seguindo a sequência dos quadrados de números inteiros de  a .
Resposta do Teste 1: D

Teste 2
No Teste 2, para encontrar a figura que substitui o ponto de interrogação, é necessário observar o padrão de rotação dos elementos.

Observando cada figura na sequência, notamos que há um padrão de rotação dos elementos em sentido horário. A cada passo, a disposição dos círculos e linhas segue essa rotação. Analisando cuidadosamente esse padrão, percebemos que a figura que melhor se ajusta à sequência é a opção C, pois mantém a mesma organização rotacional.
Resposta do Teste 2: C

Teste 3
Em cada figura, há diferentes formas geométricas, como círculos, retângulos e losangos.
O detalhe específico que destaca uma das opções é a presença de um círculo vazio, que aparece apenas na letra C e não se repete em nenhuma outra figura.
Assim, a característica única que torna a figura C diferente das outras é o círculo vazio.
Resposta corrigida para o Teste 3: C

Teste 4 - Questão Visual:
Neste tipo de questão, observamos uma relação entre as figuras do lado esquerdo e direito para encontrar uma correspondência lógica. No primeiro caso em que tem a resposta, a figura no topo esquerdo se relaciona com a do topo direito, e precisamos encontrar uma opção que siga o mesmo padrão de transformação.
Observando as figuras do topo, notamos que a transformação ocorre pela posição dos círculos, onde tem círculo na primeira posição precisa ter na resposta e onde tem na segunda posição também precisa estar de acordo.
Seguindo essa lógica, entre as alternativas de resposta, a opção D parece ser a que melhor mantém o padrão de transformação observado, visto que os círculos estão nos lugares seguindo a ordem da opção 1 e 2.
Resposta do Teste 4: D


Teste 5 - Questão de Respiração:
A questão envolve o termo "bradipneia", que é uma condição caracterizada pela respiração lenta.
Resposta do Teste 5 - Questão de Respiração: C) Ele está respirando muito lentamente.

Para a 3, oq eu fiz foi analisar oq cada hexágono tem: 3 círculos pretos, 2 círculos grandes vazios, 1 círculo pequeno vazio, um retângulo vazio em pé, um retângulo preto deitado, um losango
Assim, a letra D é o único com 2 círculos pequenos vazios ao invés de 1 apenas.

Já para a questão 4 eu fiz meio que igual quando a gente tá fazendo um if em que temos duas afirmações das quais queremos uma delas verdadeira, mas não as duas ao mesmo tempo. Aí eu pensei em um grid com duas colunas e três linhas para cada retângulo e fui comparando cada célula desse grid. Se tem círculo no primeiro e no segundo, tem na resposta. Se tem círculo nos dois, não pode ter na resposta. E se não tem círculo nos dois retângulos, então também não vai ter na resposta.
*/
