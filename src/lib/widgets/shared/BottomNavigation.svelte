<script lang="ts">
    import { page } from '$app/stores';

    let routes = [
        {
            route: '/',
            iconName: 'search',
            label: 'Buscar',
            alias: '',
        },
        {
            route: '/favorites',
            iconName: 'bookmark_border',
            label: 'Salvos',
        },
        {
            route: '/history',
            iconName: 'history',
            label: 'Histórico',
        },
    ]
    
</script>

<div class="py-2 flex justify-evenly items-center bg-secondary-100 z-50">
    {#each routes as route}
    <a class="nav-button" href="{route.route}" class:active={$page.url.pathname === route.route || $page.url.pathname === route.alias}>
        <span class="material-icons-round h-5 mb-0.5">
            {route.iconName}
        </span>
        {route.label}
    </a>
    {/each}
</div>