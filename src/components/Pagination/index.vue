<template>
  <div>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="pageSizes"
      :page-size="total"
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
      default: [10, 20, 30, 40]
    },
    pageSize:{
      default: 10
    }

  },
  data(){
    return {
      currentPage:1,
      limit:10
    }
  },
  methods: {
    handleSizeChange(val) {
      this.limit = val
      this.$emit('pagination', {page:this.currentPage,limit:this.limit})
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      this.currentPage = val
      this.$emit('pagination',{page:this.currentPage,limit:this.limit})
      console.log(`当前页: ${val}`);
    }
  },


}
</script>

<style scoped>

</style>
