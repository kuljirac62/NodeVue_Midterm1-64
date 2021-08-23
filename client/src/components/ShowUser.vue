<template>
  <div>
    <h1>Show TaxiDriver</h1>
    <p>id: {{ userId }}</p>
    <p>ชื่อ - นามสกุล {{ TaxiDriver.FirstName }} - {{TaxiDriver.LastName }}</p>
    <p>วันเกิด: {{ TaxiDriver.birth_date }}</p>
    <p>เลขที่ใบขับขี่: {{ TaxiDriver.driving_licence_number }}</p>
    <p>ใบขับขี่หมดอายุ: {{TaxiDriver.expiry_date }}</p>
  </div>
</template>
<script>
import UserService from "@/services/UsersService";
export default {
  data() {
    return {
      TaxiDriver: null,
    };
  },
  async created() {
    try {
      let userId = this.$route.params.userId;
      this.TaxiDriver = (await UserService.show(userId)).data;
    } catch (error) {
      console.log(error);
    }
  },
};
</script>
<style scoped>
</style>