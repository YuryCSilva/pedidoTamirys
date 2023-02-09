import React from 'react';
import LoadingImg from 'assets/img/illustration/coracao-batendo-09.gif';

import * as S from './styles';

const Loading: React.FC = () => {
    return (
        <S.LoadingBackground>
            <S.LoadingImage src={LoadingImg} />
        </S.LoadingBackground>
    )
}

export default Loading;