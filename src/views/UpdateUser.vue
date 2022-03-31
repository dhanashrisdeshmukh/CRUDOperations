 
 <template>
  <v-card>
    <v-card-title>
      <span class="headline">Edit user</span>
    </v-card-title>
    <v-card-text>
      <v-container>
        <v-row>
          <v-col cols="12" sm="6" md="4">
            <v-text-field
              v-model="user.name"
              label=" Name*"
              required
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="6" md="4">
            <v-text-field v-model="user.surname" label="surname"></v-text-field>
          </v-col>
          <v-col cols="12" sm="6" md="4">
            <v-text-field
              v-model="user.email"
              label="Email*"
              required
            ></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-text-field
              v-model="user.phonenumber"
              label="Phone Number*"
              required
            ></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-btn @click="updateUser()" required>Update User</v-btn>
          </v-col>
          <v-col cols="12">
            <v-btn @click="cancel()" required>Cancel</v-btn>
          </v-col>
        </v-row>
      </v-container>
      <small>*indicates required field</small>
    </v-card-text>
  </v-card>
</template>
 <script>
import axios from "axios";
import router from '../router';

export default {
  name: "User",
  data() {
    return {
      userList: [],
      user: this.$store.getters.getUser,
    };
  },

  methods: {
    updateUser() {
      console.log("this.user",this.user)
      axios
        .put("http://localhost:3001/users/"+this.user.id , this.user)
        .then((Response) => {
          console.log("post", Response.data);
          router.push("/users");

        })
        .catch((err) => console.log(err));
    },
    cancel(){
          router.push("/users");

    }
  },
};
</script>
