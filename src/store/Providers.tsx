'use client';

import { Provider } from 'react-redux';
import { store } from '@/store';
import { useEffect } from 'react';
import { setFavoritePokemons } from './pokemons/pokemonSlice';

interface Props {
    children: React.ReactNode;
}

export const Providers = ({ children }: Props) => {

  useEffect(() => {
    const favorites = JSON.parse( localStorage.getItem('favorites-pokemon') ?? '{}' );
    store.dispatch( setFavoritePokemons( favorites ));
  }, [])
  

  return (
    <Provider store = { store }>
        { children }
    </Provider>
  )
}
