import Input from 'components/base/Input';
import * as S from './styles';
import React, { useContext, useRef, useState } from 'react';
import * as util from 'utils/conversor';
import { LocalStorage } from 'services/localStorage';
import { useNavigate } from 'react-router-dom';
import { Context } from 'App';
import Loading from 'components/templates/Loading';



const Login: React.FC = () => {
  const nameRef = useRef<any>(null);
  const passRef = useRef<any>(null);
  const navigate = useNavigate();
  const { setIsAuthenticated } = useContext(Context);
  const [isLoading, setIsLoading] = useState(false);
  const [isValid, setIsValid] = useState(false);

  const handleSubmit = () => {
    setIsLoading(true)
    setTimeout(() => {
      let nameRefValue = util.conversorText(nameRef.current.value);
      let passRefValue = util.conversorPassword(passRef.current.value);
      if (nameRefValue === 'tamirys' && passRefValue === '29032001') {
        LocalStorage.setObject('user', { name: 'Tamirys', nascimento: '29/03/2001' });
        setIsAuthenticated(true);
        navigate("/user/home");
      }
      setIsLoading(false)
    }, 2000);
  }

  const handleChange = () => {
    let nameRefValue: string = nameRef.current.value;
    let passRefValue: string = passRef.current.value;

    if (nameRefValue.length > 0 && passRefValue.length > 5) {
      setIsValid(true)
    }
  }

  return (
    <S.ContainerMain>
      {isLoading && <Loading />}
      <S.ContainerForm >
        <Input id='name' label='Nome' placeholder='Digite seu nome' onChange={handleChange} ref={nameRef} />
        <Input id='password' label='Senha' placeholder='********' onChange={handleChange} type='password' ref={passRef} />
        <S.ButtonLogin type='button' isValid={isValid} onClick={handleSubmit}>Entrar</S.ButtonLogin>
      </S.ContainerForm>
    </S.ContainerMain>
  );
};

export default Login;
