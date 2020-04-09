import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import SearchAndRegister from '~/components/SearchAndRegister';
import TableOperations from '~/components/TableOperations';

import { fetchDeliveriesRequest } from '~/store/modules/deliveries/actions';

import content from './content';
import headers from './headers';
import colorStatus from './colors';

import * as S from './styles';

export default function Deliveries() {
  const [screen, setScreen] = useState('DEFAULT');

  const dispatch = useDispatch();
  const deliveries = useSelector((state) => state.deliveries);

  useEffect(() => {
    dispatch(fetchDeliveriesRequest());
  }, []);

  const handleVisualizar = (retorno) => {
    return retorno;
  };

  const handleEditar = (retorno) => {
    return retorno;
  };

  const handleExcluir = (retorno) => {
    return retorno;
  };

  const funcoes = {
    Visualizar: handleVisualizar,
    Editar: handleEditar,
    Excluir: handleExcluir,
  };
  return (
    <>
      <SearchAndRegister
        title="Gerenciando Encomendas"
        placeholder="Buscar por encomendas"
      />
      {screen === 'DEFAULT' && (
        <S.TrableContainer role="table">
          <S.TableRow role="rowgroup">
            {headers.map((header) => (
              <S.HeaderCell key={header} role="columnheader">
                {header}
              </S.HeaderCell>
            ))}
            <S.HeaderCell role="columnheader">Ações</S.HeaderCell>
          </S.TableRow>
          {Object.entries(deliveries).map(([key, value]) => (
            <S.TableRow key={key}>
              <S.BodyCell>{`#${value.id < 10 ? 0 : ''}${value.id}`}</S.BodyCell>
              <S.BodyCell>{value.recipient.name}</S.BodyCell>
              <S.BodyCell>{value.courier.name}</S.BodyCell>
              <S.BodyCell>{value.recipient.cidade}</S.BodyCell>
              <S.BodyCell>{value.recipient.estado}</S.BodyCell>
              <S.BodyCell>
                <S.StatusWrapper color={colorStatus[value.status]}>
                  <S.Circle color={colorStatus[value.status]} />
                  {value.status}
                </S.StatusWrapper>
              </S.BodyCell>
              <S.BodyCell>
                <TableOperations
                  operations={content}
                  functions={funcoes}
                  object={value}
                />
              </S.BodyCell>
            </S.TableRow>
          ))}
        </S.TrableContainer>
      )}
      {screen === 'REGISTER' && <h1>EDICAO</h1>}
    </>
  );
}
