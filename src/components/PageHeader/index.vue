<template>
    <div class="header">
        <h3><span>{{title}}</span></h3>
    </div>
</template>

<script>
    export default {
        name: "index",
        props: {
          title: ''
        }
    }
</script>

<style scoped>

  .header {
    border:1px solid #f3f2ec;
    padding: 20px;
  }

</style>
