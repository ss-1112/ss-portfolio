<script>
  import Header from './components/modules/Header'
  import Footer from './components/modules/Footer'

  export default {
    components: {
      Header,
      Footer
    }
  }
</script>

<template>
  <div class="wrapper">
      <Header/>
      <router-view></router-view>
      <Footer/>
  </div>
</template>