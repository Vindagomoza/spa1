import {mutations} from "@/store/games/mutations";
import {getters} from "@/store/games/getters";
import {actions} from "@/store/games/actions";
import {state} from "@/store/games/state";

export const games = {
    state,
    actions,
    getters,
    mutations
}