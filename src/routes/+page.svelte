<script>
    export let data;
</script>



<h1>홈 화면</h1>

<ul>
    {#each data.posts as post}
        <li>
            <a href={post.id}>{post.title}</a>
        </li>
    {/each}
</ul>
