<script>
export default {
    methods: {
        macthParam() {
            document.querySelector('.profileArea').classList.add('block')
        }
    }
}
</script>

<template>
    <header>
        <h1><router-link to="/">1112.Portfolio</router-link></h1>
        <nav>
            <ul>
                <li><router-link to="/">Home</router-link></li>
                <li v-on:click="macthParam"><router-link to="/about">About</router-link></li>
                <li><router-link to="/works">Works</router-link></li>
                <li class="github"><a href="https://github.com/ss-1112/ss-portfolio" target="_blank"><img src="/src/assets/images/GitHub-Mark-32px.png" alt="github"></a></li>
            </ul>
        </nav>
    </header>
</template>