<!-- CSS - styling -->
<style>
    h1,p,button{

        font-family: Verdana, Geneva, Tahoma, sans-serif;
    }
    header{
        margin-left:50%; 
    }
    .flex-container
    {
        display: flex;
        flex-wrap: wrap;
        max-width: 100vw;
        max-height: 100vh;
    }
</style>
<!-- JS functions and stuff-->
<script>
    let count = 0;
    let randoleft, randotop, randobottom, randoright;
    function incrementCount()
    {
        randoleft = Math.floor(Math.random() * window.visualViewport.width);
        randotop = Math.floor(Math.random() * window.visualViewport.height);
        randobottom = Math.floor(Math.random() * window.visualViewport.height);
        randoright = Math.floor(Math.random() * window.visualViewport.width);
        count++;
    }
</script>
<!-- HTML main stuff-->
<div class= "flex-container">
<button id="but"on:click={incrementCount}  style="margin:{randotop}px {randoright}px {randobottom}px {randoleft}px;">
    <!-- If count === 1 output = time, else times-->
    Clicked {count} {count === 1 ? 'time' : 'times'}
</button>
</div>


