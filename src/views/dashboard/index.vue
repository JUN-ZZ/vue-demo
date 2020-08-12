<template>
  <div class="dashboard-container">
    <div class="dashboard-text"></div>
    <div class="block">
<!--      <span class="demonstration">Click 指示器触发</span>-->
      <el-carousel trigger="click" height="150px">
        <el-carousel-item v-for="item in 4" :key="item">
<!--          <h3 class="small">{{ item }}</h3>-->
          <img src="@/assets/404_images/404.png" width="1000px" height="200px" alt="hhh">
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Dashboard',
  computed: {
    ...mapGetters([
      'name'
    ])
  }
}
</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}
</style>
