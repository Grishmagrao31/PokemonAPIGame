import ApiFourthFunction from './ApiFourthFunction'

it('fetchpokemon test', () => {
     jest.setTimeout(30000);
    const url = 'https://pokeapi.co/api/v2/type/3';
    return ApiFourthFunction(url).then((json) => {
        expect(json).not.toBeNull();
    });
});