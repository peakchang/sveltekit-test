<script>
    // form 변수는 actions 에서 리턴된 값이다
    export let form;
</script>

<form method="post">
    <input type="text" placeholder="제목" name="title" />
    <textarea name="body" rows="10" placeholder="내용" />
    <button type="submit">Submit</button>
</form>

<pre>
    {JSON.stringify(form, null, 2)}
</pre>

<style>
    form {
        padding: 20px;
    }
</style>
