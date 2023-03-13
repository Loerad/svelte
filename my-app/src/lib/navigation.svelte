<script>
    import { page } from '$app/stores';
</script>

<nav>
    <ul>

        <li> <a href="/" class:active="{$page.url.pathname === "/"}">Main page</a> </li>
        <li> <a href="how_to_play" class:active="{$page.url.pathname.includes("how_to_play")}">How this works</a> </li>
                
    </ul>
</nav>