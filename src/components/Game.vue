<template>
    <div>
        <p class="game-name">
            {{game.title}}
        </p>
        <div class="game-content">
            <img
                    class="game-image"
                    v-bind:src="'https://picsum.photos/id/' + game.id + '/200/200'"
                    alt="Game logo missing"
            >
<!--            <div class="game-buttons">-->
<!--                <button v-if="game.hasDemo">DEMO</button>-->
<!--                <vs-button :class="isFavorite(game)"-->
<!--                           @click="addToFavorites(game)"-->
<!--                           color="danger" type="gradient" style="min-width: 120px">{{ favorite ? 'Unfavorite' : 'favorite' }}</vs-button>-->
<!--            </div>-->
        </div>
    </div>
</template>

<script>
    export default {
        name: "Game",
        props:['game']
    };
</script>