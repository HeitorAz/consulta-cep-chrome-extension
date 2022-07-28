<script lang="ts">
import { goto } from "$app/navigation";
import { fetchCepInfo } from "$providers/cep";
import LoadingSpinner from "./LoadingSpinner.svelte";


    let cepInput: HTMLInputElement;

    let isFetchingAddress: boolean = false;


    async function onCepInputChange() {
        cepMask();

        let cep = cepInput.value;
        if(isCepComplete(cep)) {
            await fetchAddress(cep);
        }
    }
    
    function cepMask() {
        const value = cepInput.value;
        const newValue = value.replace(/\D/g, '').substring(0,8).replace(/(\d{5})(\d)/, '$1-$2');
        cepInput.value = newValue;
    }

    function isCepComplete(cep: string) {
        return cep.length === 9;
    }

    async function fetchAddress(cep: string) {
        try {
            isFetchingAddress = true;
            await fetchCepInfo(cep);
            await goto('address-info');
        } catch(err) {
            console.error(err);
        } finally {
            isFetchingAddress = false;
        }
    }
    
</script>

<div class="h-full w-full bg-secondary-200 relative">
    <div class="bg-white rounded-t-2xl h-full flex justify-center items-center">
        <input type="tel" bind:this={cepInput} on:input={onCepInputChange} placeholder="Digite um CEP..." class="outline-0 h-5/6 w-11/12 text-center text-xl font-semibold"
            maxlength="9">
    </div>
    {#if isFetchingAddress}
        <div class="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center">
            <div class="bg-white rounded-full w-32 h-32 flex justify-center items-center">
                <LoadingSpinner />
            </div>
        </div>
    {/if}
</div>