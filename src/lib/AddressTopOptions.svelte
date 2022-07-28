<script lang="ts">
import { afterNavigate,goto } from '$app/navigation';
import FavoriteButton from './FavoriteButton.svelte';
import type Address from './models/address';

    export let address: Address;

    let previousPage : string;
    afterNavigate((navigation) => {
        previousPage = navigation.from?.pathname || '/';
    })

    function goBack() {
        goto(previousPage);
    }

</script>

<div class="mb-2 flex flex-row justify-between">
    <button on:click={goBack} class="flex items-center">
        <span class="material-icons-round text-base text-secondary-600 mr-1">
            arrow_back_ios
        </span>
      <span class="text-secondary-600 text-sm">Voltar</span>
    </button>
    <div class="flex flex-row justify-end items-center">
        <button class="mr-2">
            <span class="material-icons-round text-2xl text-secondary-700">
                ios_share
            </span>
        </button>
        <FavoriteButton {address}/>
    </div>
</div>