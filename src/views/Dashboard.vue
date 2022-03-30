<template>
  <v-container fluid>
    <h3>Students Overview</h3>
    <v-row align="start" justify="space-between">
      <v-col cols="9">
        <v-card flat tile class="px-4 py-6">
          <h4 class="mb-2"> Users</h4>
          
          <v-data-table
              :headers="userHeaders"
              :items="userList"
              class="elevation-0 full-width"
          >
        
          </v-data-table>
        </v-card>
      </v-col>
      <!-- <v-col cols="3">
        <v-btn full-width x-large block color="secondary" to="/add-student">Add Student</v-btn>
      </v-col> -->
    </v-row>
  </v-container>
</template>

<script>
// import moment from "moment";
import axios from "axios";

export default {
  name: "Dashboard",
  data() {
    return {
user:{},
   userList:[],



      userHeaders: [
        {text: 'NAme', value: 'name', class: 'grey lighten-5'},
        {text: 'Surname', value: 'surname', class: 'grey lighten-5'},
        {text: 'Email', value: 'email', class: 'grey lighten-5'},
        {text: 'PhoneNumber', value: 'phonenumber', class: 'grey lighten-5'},
        {text: 'Activate',  class: 'grey lighten-5'},
        {text: 'Action',  class: 'grey lighten-5'},
      ],
     
    }
  },
 
  created(){
     axios.get("/db/userList.json")
        .then(response => {
          console.log(response.data);
            this.userList = response.data;
          
        })
        .catch((err) => 
        console.log(err)
        )},
   
 
}
</script>

<style scoped>

</style>
