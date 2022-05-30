<template>
    <div class="container">
        <Header />
        <Main />
    </div>
</template>

<script>
import Main from '../components/Main';
import Header from '../components/Header';
export default {
    name: 'App',
    components: { Header, Main }

}
</script>

<style scoped>

</style>

