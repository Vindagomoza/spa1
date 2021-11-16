export const getters = {
    getAllGames(state) {
        return state.games;
    },
    getFavorites(state) {
        return state.favoriteGames;
    },
    favoritesCount(state) {
        return state.favoriteGames.length;
    },
    getFavGames(state){
        return state.games.map(game =>{
            if(state.favoriteGames.includes(game.id)){
                return game
            }
            return ''
        }).filter(x => x !=='');
    }
}
