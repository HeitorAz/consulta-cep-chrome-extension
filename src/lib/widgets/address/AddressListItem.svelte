<script lang="ts">
import { goto } from "$app/navigation";
import type Address from "$models/address";
import { fetchCepInfo } from "$providers/cep";
import { showDangerNotification } from "$providers/notifications";
import FavoriteButton from "$widgets/shared/FavoriteButton.svelte";

    export let address: Address;
    export let showDate: boolean;

    $: lastUsed = `${address.lastUsed.toLocaleDateString('PT-BR')} ${address.lastUsed.toLocaleTimeString('PT-BR', {hour: '2-digit', minute:'2-digit'})}`

    async function selectAddress() {
        try {
            await fetchCepInfo(address.information.cep);
            await goto('address-info');
        } catch (err) {
            showDangerNotification('Não foi possível selecionar o endereço');
        }
    }
</script>

<div class="w-full p-2 flex flex-row justify-between items-center">
    <button class="flex flex-row justify-start items-center" on:click={selectAddress}>
        <img src="images/flags/{address.information.estado}.png" width="23" class="mr-2" alt="Bandeira Estado">
        <div class="text-start">
            <p class="text-sm text-primary-900 font-semibold mb-0.5">{address.information.cep}&#9;{#if showDate}<span class="text-xs text-secondary-300 font-normal"> | {lastUsed}</span>{/if}</p>
            <p class="text-xs text-primary-400 font-semibold">{address.information.logradouro || address.information.cidade || address.information.estado || address.information.bairro}</p>
        </div>
    </button>
    <FavoriteButton {address} />
</div>