<template>
    <div class="container">
        <div class="card hover" style="margin-bottom:50px">
            <q-img :src="currentProject.img" class="card-image" />
            <div class="card-meta">
                <span class="date"><span>{{currentProject.interestRate}}</span></span>
            </div>
            <q-scroll-area class="card-details">
                <h2>{{currentProject.name}}</h2>
                <h3>{{currentProject.motto}}</h3>
                <p><b>Location: </b>{{currentProject.location}}</p>
                <p><b>Interest Rate: </b>{{currentProject.interestRate}}</p>
                <p><b>Term: </b> {{currentProject.term}}</p>
                <p><b>Type: </b> {{currentProject.type}}</p>
                <p><b>Description: </b>{{currentProject.description}}</p>
            </q-scroll-area>
        </div>
    </div>
</template>

<script>

export default {
    props: ["currentProject"],
    data() {
        return {
        }
    },
}
</script>

<style>
    @import "../styles/ProjectListItemStyle.sass";
</style>
