<template>
  <div>
    <h1>Create a Prize</h1>
    <form v-on:submit.prevent="addPrize">
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
    
              <textarea class="form-control col-md-6" name="" id="" cols="30" rows="10" v-model="prize.description"></textarea>
            </div>
          </div>
        </div>
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label>Prize Image:</label>
            <input type="text" class="form-control col-md-6" v-model="prize.image_url" />
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label>Prize Quantity:</label>
            <input type="number" min="1" class="form-control col-md-6" v-model="prize.quantity" />
          </div>
        </div>
      </div>
      <br />
        <div class="form-group">
          <button class="btn btn-primary">Add Prize</button>
        </div>
    </form>
  </div>
</template>
<script>
  export default {
    data(){
        return{
          prize:{}
        }
    },
    methods: {
      addPrize(){
        let uri = 'http://localhost:4000/prizes/add';
        this.axios.post(uri, this.prize).then((response) => {
          this.$router.push({name: 'DisplayPrize'})
        })
    }
  }
}
</script>
