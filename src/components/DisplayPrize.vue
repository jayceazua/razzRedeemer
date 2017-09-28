<template>
    <div>
        <h1>Redeem Prizes</h1>
        <div class="row">
            <div class="col-md-10"></div>
            <div class="col-md-2">
                <router-link :to="{ name: 'CreatePrize' }" class="btn btn-primary">Create Prize</router-link>
            </div>
        </div>
        <br/>
        <div class="row" >
            <div v-for="prize in prizes">
                    <div class="col-lg-4 col-md-6" style="margin-bottom: 20px;">
                        <div class="card">
                            <div class="text-center" >
                                  <img class="card-img-top" :src="prize.image_url"  style="height: 180px; width: 100%; display: block;" data-holder-rendered="true">
                            </div>
                            <div class="card-block">
                            <h4 class='card-title' style="text-align: center;">{{ prize.name }}</h4>
                            
                                
                             <router-link :to="{name: 'DetailPrize', params: { id: prize._id }}" class="btn btn-warning col-lg-3" style="float: left; margin-right: 10px">Redeem</router-link>

                             <router-link :to="{name: 'EditPrize', params: { id: prize._id }}" class="btn btn-primary col-lg-3" style="float: left; margin-right: 10px">Edit</router-link>
                            <button class="btn btn-danger col-lg-3" style="float: left" v-on:click="deletePrize(prize._id)">Delete</button>
                           
                               
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            prizes: []
        }
    },

    created: function() {
        this.fetchPrizes();
    },

    methods: {
        fetchPrizes() {
            let uri = '/prizes';
            this.axios.get(uri).then((response) => {
                this.prizes = response.data;
            });
        },
        deletePrize(id) {
            let uri = '/prizes/delete/' + id;
            this.prizes.splice(id, 1);
            this.axios.get(uri);
        }
    }
}
</script>