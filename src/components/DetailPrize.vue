<template>
    <div>
            <h1>Redeem Prize</h1>
            <div class="row">
              <div class="col-md-10"></div>
              <div class="col-md-2"><router-link :to="{ name: 'DisplayPrize' }" class="btn btn-success" style="margin-bottom: 10px;">Return to Prizes</router-link></div>
            </div>
            <form v-on:submit.prevent="updatePrize">
            </form>
        <section class="content-section-b">
            <div class="row">
                <div class="col-lg-7 ml-auto">
                <img class="img-thumbnail" style="width: 518px; height: 380px;" :src="prize.image_url" alt="">
              </div>
              <div class="col-lg-5 mr-auto">
                <hr class="section-heading-spacer">
                <div class="clearfix"></div>
                <h2 class="section-heading">{{ prize.name }}</h2>
                <p class="lead">{{ prize.description }}</p>
                <div>{{ prize.quantity }} left in stock</div>
                <button type="button" class="btn btn-warning btn-md" style="margin-top: 15px" data-toggle="modal" data-target="#myModal">
  Redeem
</button>
              </div>
          </div>


</section>


<!-- first - Modal could put this into a component-->
<div class="container text-center">
  <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
          <h4 class="modal-title" id="myModalLabel">Are you sure?</h4>
        </div>
        <div class="modal-body">
          <img class="img-circle" width="304" height="236" :src="prize.image_url" alt="">
          <div>Redeem for {{ prize.name }}</div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-success" @click="redeemPrize">YES</button>
          <button type="button" class="btn btn-default" data-dismiss="modal">NO</button>
        </div>
      </div>
    </div>
  </div>
</div>
<!-- second modal - success - could be into a component -->
<div class="container text-center">
  <div class="modal fade" id="secondModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
          <h1 class="modal-title" id="myModalLabel">Congratulations!</h1>
        </div>
        <div class="modal-body">
          <div>You have redeemed {{ prize.name }}</div>
        </div>
        <div class="modal-footer">
          <button class="btn btn-warning" @click="closeOut">More Prizes</button>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- second modal - fail - could be into a component -->
<div class="container text-center">
  <div class="modal fade" id="failModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
          <h1 class="modal-title" id="myModalLabel">Sorry but you cannot redeem this!</h1>
        </div>
        <div class="modal-body">
          <p>Try to redeem another prize sorry for the inconvenience</p>
        </div>
        <div class="modal-footer">
          <button class="btn btn-warning" @click="closeOut">View More Prizes</button>
        </div>
      </div>
    </div>
  </div>
</div>




    </div>
</template>

<script>



    export default{

        data(){
            return{
                prize:{},
                showModal: false
            }
        },

        created: function(){
            this.getPrize();
        },

        methods: {
            getPrize() {
              let uri = 'https://damp-forest-70063.herokuapp.com/prizes/detail/' + this.$route.params.id;
                this.axios.get(uri).then((response) => {
                    this.prize = response.data;
                });
            },

            redeemPrize() {
              $('#myModal').modal('hide');

              var currentQuantity = this.prize.quantity;
              console.log(currentQuantity);

              if (currentQuantity > 0) {
                $('#secondModal').modal('show');
                var newQuantity = currentQuantity - 1;
                this.prize.quantity = newQuantity;
                // console.log(this.prize.quantity);
                let uri = 'https://damp-forest-70063.herokuapp.com/prizes/redeem/' + this.$route.params.id;
                this.axios.post(uri, this.prize).then((response) => {
                  this.$router.push({name: 'DetailPrize'});
                });
              } else if(currentQuantity === 0){
                $('#failModal').modal('show');
              }
            },
            closeOut() {
            $('#secondModal').modal('hide');
            $('#failModal').modal('hide');
            this.$route.router.go({name: 'DisplayPrize'});
            }
        }
    }


</script>
<style scoped>

body, html {
  width: 100%;
  height: 100%;
}

body, h1, h2, h3, h4, h5, h6 {
  font-family: "Lato", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-weight: 700;
}
.content-section-b {
  padding: 50px 0;
  border-top: 1px solid #e7e7e7;
  border-bottom: 1px solid #e7e7e7;
}
.section-heading {
  margin-bottom: 30px;
}

.section-heading-spacer {
  float: left;
  width: 200px;
  border-top: 3px solid #e7e7e7;
}

h2 {
  margin: 0;
  text-shadow: 2px 2px 3px rgba(0, 0, 0, 0.6);
  font-size: 3em;
}





</style>
