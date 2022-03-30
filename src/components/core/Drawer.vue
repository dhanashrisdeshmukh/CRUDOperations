<template>
  <v-navigation-drawer
      permanent
      color="secondary"
      app
      dark
  >
    <v-list
        dense
        nav
        class="py-0 px-0"
    >
     
      <v-divider></v-divider>

     <!-- <router-link href="/dashboard"></router-link> -->
    
       <v-list-item>
        <v-list-item-action>
           <router-link to="/">Dashboard</router-link>
        </v-list-item-action>
        <!-- <v-list-item-title >Dashboard</v-list-item-title> -->
      </v-list-item>

      <v-list-item >
        <v-list-item-action>
           <router-link to="/users">User</router-link>

        </v-list-item-action>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
// import router from '../../router'
export default {
  data: () => ({
    
  }),
 
}
</script>
<style scoped>
.v-list-item {
  border-radius: 0 !important;
  border-color: transparent !important;
  border-width: 0 !important;
  border-left: solid 5px transparent !important;
}

.v-list-item--active {
  background-color: #2F2E50 !important;
  border-radius: 0 !important;
  border-color: transparent !important;
  border-width: 0;
  border-left: 5px solid #A3A0FB !important;
}

.v-list-item--active:before {
  content: '';
  background-color: transparent !important;
}

.v-list--nav .v-list-item, .v-list--nav .v-list-item:before {
  border-radius: 0 !important;
}

.v-list-item--active i {
  color: #A3A0FB !important;
}

.brand-logo {
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 48px;
}

.brand-logo img {
  position: relative;
  height: 100%;
}

.tile {
  border-radius: 0 !important;
}
</style>
