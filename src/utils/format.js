import { format, parseISO } from 'date-fns';

export const cepFormatter = (cep) => {
  if (!cep) {
    return '';
  }

  const stringBeforeHifen = cep.substring(0, 5);
  const stringAfterHifen = cep.substring(5, 8);
  return `${stringBeforeHifen}-${stringAfterHifen}`;
};

export const dataFormatter = (date) => format(parseISO(date), 'd/MM/yyyy');

export const cepMask = (value) =>
  value
    .replace(/\D/g, '')
    .replace(/(\d{5})(\d)/, '$1-$2')
    .replace(/(-\d{3})\d+?$/, '$1');
