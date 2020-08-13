<template>
  <div>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="page_num"
      :page-sizes="pageSizesCount"
      :page-size="limit"
      layout="total, sizes, prev, pager, next, jumper"
      :total="totalCount">
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
      default:() => [10, 20, 30, 40]
    },
    pageSize: {
      default: 10
    },
    currentPage: {
      default: 1
    }

  },
  computed: {
    page_num(){
      return this.currentPage
    },
    limit(){
      return this.pageSize
    },
    totalCount(){
      return this.total
    },
    pageSizesCount(){
      return this.pageSizes
    }

  },
  data(){
    return {
    }
  },
  methods: {
    handleSizeChange(val) {
      this.$emit('pagination', {currentPage:this.page_num,limit:val})
    },
    handleCurrentChange(val) {
      this.$emit('pagination',{currentPage:val,limit:this.limit})
      console.log(`当前页: ${val}`);
      console.log(`pageSize: ${this.pageSize}`);
    }
  },


}
</script>

<style scoped>

</style>
