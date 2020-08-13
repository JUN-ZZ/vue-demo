<template>
    <div class="container">
      <pageHeader title="权限配置"></pageHeader>
      <el-table
        :data="authData"
        border
        style="width: 100%">
        <el-table-column
          prop="name"
          label="name"
          width="180">
        </el-table-column>
        <el-table-column
          prop="page_tag"
          label="page_tag"
          width="180">
        </el-table-column>
        <el-table-column
          prop="request_type"
          label="request_type"
          width="180">
        </el-table-column>
        <el-table-column
          prop="url"
          label="url">
        </el-table-column>
        <el-table-column label="操作">
          <el-button
            size="medium" type="text"
            @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button
            size="medium"
            type="text" style="color: #ea3e3e"
            @click="handleDelete(scope.$index, scope.row)">删除</el-button>

        </el-table-column>
      </el-table>
      <pagination :total="total" :pageSize="pageSize" :currentPage="currentPage" @pagination="paginationChange"></pagination>
    </div>
</template>

<script>
  import pagination from '@/components/Pagination/index'
  import pageHeader from '@/components/PageHeader/index'
  import {getAuth} from "@/api/auth";

  export default {
        name: "index",
        props: {

        },
        data(){
          return {
            total:0,
            pageSize:10,
            currentPage:1,
            authData: []
          }
        },
        components: {
          pagination,
          pageHeader
        },
        created() {
          let params = {
            limit: this.pageSize,
            page_num: this.currentPage
          }
          this.getAuthList(params)
        },
        methods: {
          getAuthList(params){
            getAuth(params).then(res =>{
              console.log(res)
              if (res.code===200){
                this.total = res.total;
                this.authData = res.data;
              }
            }).catch(

            )
          },
          async paginationChange(data){
            console.log(data)
            this.pageSize = data.limit
            this.currentPage = data.currentPage
            console.log(this.pageSize)
            let params = {
              limit: this.pageSize,
              page_num: this.currentPage
            }
            await this.getAuthList(params)
          }

        }
    }
</script>

<style scoped>

</style>
