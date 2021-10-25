<template>
    <div>
        <ul v-for="startup in list" :key="startup.id">
            <li style="list-style-type: none;"><startup-list-item :currentStartup="startup"></startup-list-item></li>
        </ul>
    </div>
</template>

<script>
    import StartupListItem from '../components/StartupListItem.vue';
    export default ({
        components: { StartupListItem },
        data(){
        return { 
                list:this.store.getters['apiDefinition/getStartups'],
        } 
        },
        mounted(){
            console.log("from startup list item: ", this.list);
        }
    })
</script>
