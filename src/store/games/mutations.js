export const mutations = {
    updateGames(state, games) {
        state.games = games;
    },

    updateFavoriteGames(state, game) {
        state.favoriteGames.push(game.id);
    },
    DELETE_GAME(state, game){
        let index = state.favoriteGames.findIndex(c => c === game.id);
        state.favoriteGames.splice(index,1);
    }
}