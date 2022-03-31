<template>
  <v-container fluid>
    <h3>users Overview</h3>
    <v-row align="start" justify="space-between">
      <v-col cols="9">
        <v-card flat tile class="px-4 py-6">
          <h4 class="mb-2">Registered Users</h4>

          <v-data-table
            :headers="userHeaders"
            :items="userList"
            class="elevation-0 full-width"
          >
            <template v-slot:item.actions="row">
              <v-btn
                fab
                dark
                x-small
                color="primary"
                @click="(e) => edituser(e, row.item)"
              >
                <v-icon>mdi-pencil</v-icon>
              </v-btn>
              <v-btn
                fab
                dark
                x-small
                color="primary"
                @click="(e) => deleteUser(e, row.item)"
              >
                <v-icon>mdi-trash</v-icon>
              </v-btn>
            </template>
          </v-data-table>
        </v-card>
      </v-col>
      <v-col cols="3">
        <v-btn full-width x-large block color="secondary" @click="openModal()"
          >Create User</v-btn
        >
      </v-col>
    </v-row>
    <v-dialog v-model="createModal" persistent max-width="600px">
      <v-card >
        <v-card-title>
          <span class="headline">Add user</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" sm="6" md="4">
                <v-text-field v-model="user.name" label=" Name*" required></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field v-model="user.surname" label="surname"></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field v-model="user.email" label="Email*" required></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field v-model="user.phonenumber" label="Phone Number*" required></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-btn  @click="createUser()" required>Create</v-btn>
              </v-col>
              <v-col cols="12">
                <v-btn  @click="closeModal()" required>Cancel</v-btn>
              </v-col>
             
              
            </v-row>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
       
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
import axios from "axios";
// import store from "../store";
import router from '../router';
export default {
  name: "User",
  data() {
    return {
      user: {},
      userList: [],

      userHeaders: [
        { text: "NAme", value: "name", class: "grey lighten-5" },
        { text: "Surname", value: "surname", class: "grey lighten-5" },
        { text: "Email", value: "email", class: "grey lighten-5" },
        { text: "PhoneNumber", value: "phonenumber", class: "grey lighten-5" },
        {text: 'Actions', value: 'actions', class: 'grey lighten-5'}
      ],
     
      createModal: null,
    };
  },

  mounted() {
    axios
      .get("http://localhost:3001/users")
      .then((response) => {
        console.log(response.data);
        this.userList = response.data;
      })
      .catch((err) => console.log(err));
  },

  methods: {
     
      openModal(){
          this.createModal=true
      },
      closeModal(){
          this.createModal=false
      },
    createUser() {
        // this.userList.push(this.user)
        console.log("this.user",this.user)
        this.createModal=false
      axios
        .post("http://localhost:3001/users",
         this.user)
        .then((Response) => {
          console.log("post",Response.data);
          this.userList.push(Response.data)

        })
        .catch((err) => console.log(err));
    // let data = JSON.stringify(this.userList);
// fs.writeFileSync("/db/userList.json", data);
    },
   edituser(e,x){
       this.$store.dispatch("setEditableUser",x);
       router.push("/updateUser");
   },

    // Delete data
    deleteUser(e,x) {
       if(confirm("Do you really want to delete?")){
          axios
        .delete("http://localhost:3001/users/"+x.id
         )
        .then(() => {

           axios
      .get("http://localhost:3001/users")
      .then((response) => {
        console.log(response.data);
        this.userList = response.data;
      })
      .catch((err) => console.log(err));

        })
        .catch((err) => console.log(err));
                  

   }
        
  },
}
}
</script>

<style scoped>
</style>
