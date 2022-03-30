<template>
  <v-app>
     <core-drawer
       />
    <v-content class="grey lighten-5">
      <v-layout row justify-center>
        <v-dialog v-model="$store.state.loading" persistent fullscreen content-class="loading-dialog"
                  transition="fade-transition">
          <v-container fill-height>
            <v-layout row justify-center align-center>
              <v-progress-circular indeterminate :size="70" :width="7" color="secondary"></v-progress-circular>
            </v-layout>
          </v-container>
        </v-dialog>
      </v-layout>
      <div id="core-view">
        <v-fade-transition mode="out-in">
          <router-view/>
        </v-fade-transition>
      </div>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data: () => ({
    //
  }),
  components: {
    CoreDrawer: () => import('@/components/core/Drawer'),
  }
};
</script>

<style>

.loading-dialog {
  background-color: white
}

span.note.mr {
  font-family: 'OmeBhatkhandeHindi' !important;
  font-size: 1em;
  line-height: 1.5em;
}

span.note.en {
  font-family: 'OmeBhatkhandeEnglish' !important;
  font-size: 1em;
  line-height: 1.5em;
}

span.notebh.mr {
  font-family: 'OmeBhatkhandeHindi' !important;
  font-size: 1em;
  line-height: 1.5em;
}

span.notebh.en {
  font-family: 'OmeBhatkhandeEnglish' !important;
  font-size: 1em;
  line-height: 1.5em;
}

</style>
