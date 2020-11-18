import {fetchpokemons} from './api';

 it('fetchpokemons test', () => {
     return fetchpokemons().then ((json) => {
         expect(json).not.toBeNull(); 
 });
 });