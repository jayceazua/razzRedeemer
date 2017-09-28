<template>
    <div>
        <h1>Update Prize</h1>
        <div class="row">
          <div class="col-md-10"></div>
          <div class="col-md-2"><router-link :to="{ name: 'DisplayPrize' }" class="btn btn-success">Return to Prizes</router-link></div>
        </div>

        <form v-on:submit.prevent="updatePrize">
            <div class="row">
                <div class="col-md-6">
                    <div class="form-group">
                        <label>Prize Name:</label>
                        <input type="text" class="form-control" v-model="prize.name">
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-6">
                    <div class="form-group">
                        <label>Prize Description:</label>
                        <textarea name="" class="form-control" id="" v-model="prize.description" cols="30" rows="10"></textarea>
                    </div>
                </div>
            </div>    
            <div class="row">
                <div class="col-md-6">
                    <div class="form-group">
                        <label>Prize Image URL:</label>
                        <input type="text" class="form-control" v-model="prize.image_url">
                    </div>
                </div>
            </div>    
            <div class="row">
                <div class="col-md-6">
                    <div class="form-group">
                        <label>Prize Quantity:</label>
                        <input type="number" class="form-control" min="1" v-model="prize.quantity">
                    </div>
                </div>
            </div>
            <br/>
            <div class="form-group">
                <button class="btn btn-primary">Update</button>
            </div>
        </form>


    </div>
</template>

<script>

    export default{
        data(){
            return{
                prize:{}
            }
        },

        created: function(){
            this.getPrize();
        },

        methods: {
            getPrize() {
              let uri = 'http://localhost:4000/prizes/edit/' + this.$route.params.id;
                this.axios.get(uri).then((response) => {
                    this.prize = response.data;
                });
            },

            updatePrize() {
              let uri = 'http://localhost:4000/prizes/update/' + this.$route.params.id;
                this.axios.post(uri, this.prize).then((response) => {
                  this.$router.push({name: 'DisplayPrize'});
                  console.log(response)
                });
            }
        }
    }
</script>
