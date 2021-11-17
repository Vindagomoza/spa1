<template>
    <div>
        <p class="game-name">
            {{item.title}}
        </p>
        <div class="game-content">
            <img
                    class="game-image"
                    v-bind:src="'https://picsum.photos/id/' + item.id + '/200/200'"
                    alt="Game logo missing"
            >
            <div class="game-buttons">
                <button v-if="item.hasDemo">DEMO</button>
                <vs-button :class="isFavorite(item)"
                           @click="addToFavorites(item)"
                           color="danger" type="gradient" style="min-width: 120px">{{ favorite ? 'Unfavorite' : 'favorite' }}</vs-button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Game",
        methods: {},
        props:['item',"isFavorite", "addToFavorites"]
    };
</script>