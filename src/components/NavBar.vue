<template>
    <div id="q-app">
        <div class="q-pa-md"> <!--if you want it to fit the corners on top remove this class-->
            <q-toolbar class="bg-primary text-secondary shadow-2 rounded-borders">
                <q-btn flat label="Homepage" :to="'/'"></q-btn>
                <q-space></q-space>

                <!--
                notice shrink property since we are placing it
                as child of QToolbar
                -->
                <q-tabs 
                    v-model="tab"
                    indicator-color="transparent"
                    active-color="white"
                    class="text-secondary-5 shadow-1">
                        <q-route-tab name="Home" icon="home" :to="'/'" label="Home"></q-route-tab>
                        <q-route-tab name="About" icon="font_download" :to="'/about'" label="About"></q-route-tab>
                        <q-route-tab name="Contact" icon="email" :to="'/contact'" label="Contact"></q-route-tab>
                </q-tabs>
            </q-toolbar>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            tab: ''
        }
    }
}
</script>