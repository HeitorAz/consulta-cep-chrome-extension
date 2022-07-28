<script lang="ts">
    import AddressDisplay from "$lib/AddressDisplay.svelte";
    import { addresses,currentAddressCep,getSnapshot } from "../stores";

    $: currentAddress = $addresses[getSnapshot(currentAddressCep) || ''];
    
</script>
    
<div class="h-full w-full bg-secondary-200">
    <div class="bg-white rounded-t-2xl h-full py-3 px-5 overflow-y-auto custom-scroll">
        {#if currentAddress}
            <AddressDisplay address={currentAddress}/>
        {:else}
            <div class="text-center">
                <h1 class="text-3xl font-bold">Não há endereço selecionado</h1>
                <p class="text-lg">Selecione um endereço na lista abaixo</p>
            </div>
        {/if}
    </div>
</div>