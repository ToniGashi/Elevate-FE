<template>
    <div class="container">
        <div class="card hover" style="margin-bottom:50px">
            <q-img :src="currentStartup.img" class="card-image" />
            <div class="card-meta">
                <span class="date"><span>{{currentStartup.interestRate}}</span></span>
            </div>
            <q-scroll-area class="card-details">
                <h2>{{currentStartup.name}}</h2>
                <h3>{{currentStartup.motto}}</h3>
                <p><b>Location: </b>{{currentStartup.location}}</p>
                <p><b>Interest Rate: </b>{{currentStartup.interestRate}}</p>
                <p><b>Term: </b> {{currentStartup.term}}</p>
                <p><b>Type: </b> {{currentStartup.type}}</p>
                <p><b>Description: </b>{{currentStartup.description}}</p>
            </q-scroll-area>
        </div>  

            <!-- <div class="card hover">
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/169963/photo-1429043794791-eb8f26f44081.jpeg" alt="" class="card-image" />
                <div class="card-meta">
                    <span class="tag">Photos</span>
                    <span class="date"><span>27 <em>Mar</em></span></span>
                </div>
                <div class="card-details">
                    <h2>City Lights in New York</h2>
                    <h3>The city that never sleeps.</h3>
                    <p>New York, the largest city in the U.S., is an architectural marvel with plenty of historic monuments, magnificent buildings and countless dazzling skyscrapers.</p>
                    <div class="post-meta">
                        <span class="timestamp">
                            <i class="fa fa-clock-o"></i>
                            6 mins ago
                        </span>
                        <span class="comments">
                            <i class="fa fa-comments"></i>
                            <a href="#">39 comments</a>
                        </span>
                    </div>
                </div>
            </div> -->
    </div>
</template>

<script>

export default {
    props: ["currentStartup"],
    data() {
        return { 
        }
    },
}
</script>

<style>
    @import "../styles/StartupListItemStyle.sass";
</style>