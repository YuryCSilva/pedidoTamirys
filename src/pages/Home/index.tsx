import React, { useContext, useState } from 'react';
import Exit from 'assets/img/icon/exit.png'

import * as S from './styles';
import { Context } from 'App';
import { LocalStorage } from 'services/localStorage';
import { useNavigate } from 'react-router-dom';
import Loading from 'components/templates/Loading';

const Home: React.FC = () => {
  const { setIsAuthenticated } = useContext(Context);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  function HandleClick() {
    setIsLoading(!isLoading)
    setTimeout(() => {
      LocalStorage.removeItem('user');
      setIsAuthenticated(false);
      navigate("/");
      setIsLoading(!isLoading)
    }, 2000)
  }

  return <S.ContainerMain>
    {isLoading && <Loading />}
    <S.ContainerButton>
      <S.ButtonHome type='button' onClick={HandleClick}><img src={Exit} width='16' height='16' />&nbsp;Sair</S.ButtonHome>
    </S.ContainerButton>
    <S.ContainerCard>
      <S.TitleLogin>Olá Minha Pudimzin</S.TitleLogin>
      <S.ParagraphyLogin>É acho que eu te enganei pedindo para testar esse "site" que eu tava criando ein 🤣🤣.</S.ParagraphyLogin>
      <S.ParagraphyLogin>Eu te disse que a forma q ia te pedir em namoro não era qualquer de qualquer jeito, então toma, um site totalmente especial para você.</S.ParagraphyLogin>
      <S.ParagraphyLogin>Então vamos lá, desde o momento que eu comecei a conversar com você no EJC eu senti algo que eu nunca senti por nenhuma mulher até hoje. Eu sou muito feliz quando estou com você, me sinto uma pessoa totalmente realizada do seu lado, já te disse isso, porém, adoro quando você dá aquela risadinha que acho que nem mesmo você percebe, acho lindo também quando eu falo demais (algo normal) nos nossos momentos românticos e você fica escutando, com uma cara de boiolinha ❤️ ou quando eu começo a falar muita besteira (algo normal também) e você começa a me beijar para eu calar a boca 😂. Toda essa sua forma de ser e de agir me deixa cada dia mais apaixonado por você e acho que tu ja sabe disso, então é por isso que eu quero dar um passo a mais na nossa relação e ganhar um status novo na sua vida, quero mudar esse meu status atual, essa parada de ser ficante é maio bagulho de otário 😝, então quero ir para o nível acima, quero me tornar seu namorado e de pouco em pouco ganhar ainda mais uma vaguinha no seu coração.</S.ParagraphyLogin>
      <S.ParagraphyLogin>Desde a primeira vez que a gente ficou eu disse que queria isso com você ,porém, iria espera o seu momento e acho que o momento chegou. Então, Minha Pudim você aceita namorar esse cara que so fala besteira, fala demais, chato, porém, que também é apaixonado por você, quer estar ao seu lado em cada conquista da sua vida e o principal, ser seu namorado??</S.ParagraphyLogin>
      <S.ParagraphyLogin>Tamirys dos Santos Sigaia, você aceita namorar comigo? Se sim, dê um beijo nesse lindao que está ao seu lado, vulgo Yury e se não dê um duplo invertido mortal carpado ao quadrado dentro do cubo na inércia de Plutão 🤣</S.ParagraphyLogin>
      <S.ParagraphyLogin>Ass: Yury Silva</S.ParagraphyLogin>
    </S.ContainerCard>
  </S.ContainerMain>;
}

export default Home;