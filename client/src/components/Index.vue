<template>
  <div>
    <h1>Get All TaxiDriver</h1>
    <div v-if="users.length">
      <h4>จำนวนผู้ใช้งาน {{ users.length }}</h4>
      <p>
        <button v-on:click="navigateTo('/TaxiDriver/create')">
            สร้างผู้ใช้งาน
          </button>
      </p>
      <div v-for="user in users" v-bind:key="user.id">
        <p>id: {{ user.id }}</p>
        <p>ชื่อ-นามสกุล: {{ TaxiDriver. FirstName }} - {{TaxiDriver.lastname }}</p>
        <p>วันเกิด: {{ TaxiDriver.birth_date }}</p>
        <p>เลขที่ใบขับขี่: {{ TaxiDriver.driving_licence_number }}</p>
        <p>ใบขับขี่หมดอายุ: {{TaxiDriver.expiry_date }}</p>
          <button v-on:click="navigateTo('/user/' + TaxiDriver.id)">
            ดูข้อมูลผู้ใช้
          </button>
          <button v-on:click="navigateTo('/user/edit/' + TaxiDriver.id)">
            แก้ไขข้อมูล
          </button>
          <button v-on:click="deleteUser(TaxiDriver)">
            ลบข้อมูล
          </button>
        
        <hr />
      </div>
    </div>
  </div>
</template>
<script>
import UsersService from "@/services/UsersService";

export default {
  data() {
    return {
      users: [],
    };
  },
  async created() {
    try {
      this.users = (await UsersService.index()).data;
    } catch (error) {
      console.log(error);
    }
  },
  methods: {
    navigateTo(route) {
      this.$router.push(route);
    },
    async deleteUser(user){
      let result = confirm("Want to delete")
      if(result){
        try{
          await UsersService.delete(user)
          this.refreshData()
        }catch(error){
          console.log(error)
        }
      }
    },
    async refreshData(){
      this.users = (await UsersService.index()).data
    }
  },
};
</script>
<style scoped>
</style>