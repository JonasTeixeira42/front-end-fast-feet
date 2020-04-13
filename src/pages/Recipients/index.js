import React from 'react';
import RegisterDelivery from '~/components/RegisterDelivery';

import * as S from './styles';

export default function Deliveries() {
  return (
    <>
      <RegisterDelivery
        title="Gerenciando Destinatários"
        placeholder="Buscar por destinatários"
      />
    </>
  );
}
