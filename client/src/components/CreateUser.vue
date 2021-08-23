<template>
<div>
    <h1>Create TaxiDriver</h1>
    <form v-on:submit.prevent = "createUser">
        <p>ชื่อ: <input type="text" v-model="TaxiDriver.FirstName"></p>
        <p>นามสกุล: <input type="text" v-model="TaxiDriver.LastName"></p>
        <p>วันเกิด: <input type="text" v-model="TaxiDriver.birth_date"></p>
        <p>เลขที่ใบขับขี่: <input type="text" v-model="TaxiDriver.driving_licence_number "></p>
        <p>ใบขับขี่หมดอายุ: <input type="text" v-model="TaxiDriver.expiry_date"></p>
        <p><button type="submit">create TaxiDriver</button></p>
    </form>
    <hr>
    <div>
        <p>ชื่อ: {{TaxiDriver.FirstName}}</p>
        <p>นามสกุล: {{TaxiDriver.LastName}}</p>
        <p>วันเกิด: {{TaxiDriver.birth_date}}</p>
        <p>เลขที่ใบขับขี่: {{TaxiDriver.driving_licence_number}}</p>
        <p>ใบขับขี่หมดอายุ: {{TaxiDriver.expiry_date}}</p>
    </div>
</div>
</template>
<script>
import UsersService from '@/services/UsersService'

export default {
    data(){
        return{
            TaxiDriver:{
                FirstName: '',
                LastName: '',
                birth_date: '',
                driving_licence_number: '',
                expiry_date: ''
            }
        }
    },
    methods:{
        async createUser(){
            try{
                await UsersService.post(this.TaxiDriver)
                this.$router.push({
                    name: 'users'
                })
            }catch(error){
                console.log(error)
            }
        }
    }    
}
</script>
<style scoped>


</style>