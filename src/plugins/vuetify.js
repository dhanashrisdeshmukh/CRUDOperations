import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: '#3B86FF',
                secondary: '#43425D',
                accent: '#A3A0FB',
                error: '#FF6565',
            },
        },
    },
});
