<template>
  <div class="design-theme">
      <Navbar />
      <main>
          <Content/>
      </main>
      <Contact />
      <Footer />
      <ToTop />
    <link rel="stylesheet" :href="$withBase('/roboto/stylesheet.css')" />
</div>
</template>

<script>
  export default {
    name: 'Layout'
  }
</script>

<style src="./styles/index.scss" lang="scss">
</style>
