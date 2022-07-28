<script lang="ts">
    import { page } from '$app/stores';
    
</script>

<div class="py-2 flex justify-evenly items-center bg-secondary-100 z-50">
    <a class="nav-button" href="/" class:inactive={$page.url.pathname!=='/'}>
        <span class="material-icons-round h-5 mb-0.5">
            search
        </span>
        Buscar
    </a>
    <a class="nav-button" href="/archive" class:inactive={$page.url.pathname!=='/archive'}>
        <span class="material-icons-round h-5 mb-0.5 stroke-0">
            bookmark_border
        </span>
        Salvos
    </a>
    <a class="nav-button" href="/history" class:inactive={$page.url.pathname!=='/history'}>
        <span class="material-icons-round h-5 mb-0.5 stroke-0">
            history
        </span>
        Histórico
    </a>
</div>