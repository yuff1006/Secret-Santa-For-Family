import { createContext } from 'react';

export const AppContext = createContext({
  secretKeyPairs: {},
  participantPair: {},
  gameToken: '',
});
