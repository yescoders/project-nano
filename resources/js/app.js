import './bootstrap';
import.meta.glob([
    '../images/**',
    '../fonts/**',
]);
import { createApp } from 'vue';

import IncrementCounter from './components/IncrementCounter.vue';

createApp({})
    .component('IncrementCounter', IncrementCounter)
    .mount('#app')
