<script>
    export let data;
    console.log(data);
</script>



<h1>홈 화면</h1>

<ul>
    {#each data.get_board_list as post}
        <li>
            <a href={post.id}>{post.tb_subject}</a>
        </li>
    {/each}
</ul>
