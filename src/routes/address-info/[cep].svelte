<script lang="ts">
import type Address from "$src/lib/models/address";
import LoadingSpinner from "$src/lib/widgets/shared/LoadingSpinner.svelte";

import { afterNavigate,goto } from "$app/navigation";
import { page } from "$app/stores";
import { CustomError } from "$src/lib/models/customError";
import AddressDisplay from "$src/lib/widgets/address/AddressDisplay.svelte";
import { fetchAddressInfo } from "$src/providers/addressService";
import { showNotification } from "$src/providers/notifications";
import { onMount } from "svelte";

    let address: Address | undefined = undefined;

    let previousPage : string = '/';
    afterNavigate((navigation) => {
        previousPage = navigation.from?.pathname || '/';
    })

    onMount(async () => {
        const cep = $page.params.cep;
        if(cep) {
            try {
                address = await fetchAddressInfo(cep);
            } catch(err) {
                goto(previousPage);
                if(err instanceof CustomError) {
                    showNotification(err.toastMessage, {type: err.toastType});
                }
            }
        } else {
            goto(previousPage);
        }
    });
</script>

<div class="h-full w-full bg-secondary-200">
    <div class="bg-white rounded-t-2xl h-full py-3 px-5 overflow-y-auto custom-scroll">
        {#if address}
            <AddressDisplay {address}/>
        {:else}
        <div class="h-full w-full flex justify-center items-center">
            <LoadingSpinner />
        </div>
        {/if}
    </div>
</div>
