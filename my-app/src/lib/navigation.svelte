<script>
    import { page } from '$app/stores';
</script>

<nav>
    <ul>

        <li> <a href="/" class:active="{$page.url.pathname === "/"}">Main page</a> </li>
        <li> <a href="about" class:active="{$page.url.pathname.includes("about")}">About page</a> </li>
                
    </ul>
</nav>