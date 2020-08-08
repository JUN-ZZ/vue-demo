<template>
  <div>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="pageSizes"
      :page-size="pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total">
    </el-pagination>
  </div>
</template>

<script>
export default {

  name: "index",
  props:{
    total: {
      required:true,
      type: Number,
      default: 0
    },
    pageSizes:{
      default: [1, 20, 30, 40]
    },
    pageSize: {
      default: 10
    },
    currentPage: {
      default: 1
    }

  },
  data(){
    return {

    }
  },
  methods: {
    handleSizeChange(val) {
      this.pageSize = val
      this.$emit('pagination', {currentPage:this.currentPage,limit:this.pageSize})
    },
    handleCurrentChange(val) {
      this.currentPage = val
      this.$emit('pagination',{currentPage:this.currentPage,limit:this.pageSize})
      console.log(`当前页: ${val}`);
      console.log(`pageSize: ${this.pageSize}`);
    }
  },


}
</script>

<style scoped>

</style>
