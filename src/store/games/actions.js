export const actions = {
    async fetchGames(store) {
        const games = (await import('./../../data/data.json')).games;
        store.commit('updateGames', games);
    }
}