<template>
  <div class="home">
    <Header>Header</Header>
    <el-container class="content">
      <Menu></Menu>
      <el-container>
        <el-main>Main</el-main>
        <el-footer>
          <Footer></Footer>
        </el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Header from './common/Header.vue';
import Footer from './common/Footer.vue';
import Menu from './common/Menu.vue';
export default {
  components: {
    Header,
    Footer,
    Menu,
  }
}
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100%;
  .content {
    position: absolute;
    width: 100%;
    top: 60px;
    bottom: 0;
    background: pink;
  }
}
</style>