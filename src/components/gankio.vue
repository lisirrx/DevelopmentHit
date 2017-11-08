<template>
      <v-container
        fluid
        style="min-height: 0;"
        grid-list-lg
      >
        <v-layout row wrap>
          <v-flex xs12 v-for="(item,i) in items" :key="i">
            <v-card ripple color="white" class="black--text" >
              <v-container fluid grid-list-lg @click="onclick(item)">
                  <v-layout row align-center >
                    
                    <v-flex xs12 md12 lg12 xl12>
                    <div>
                      
                      <div class="body-1">{{item.title}}</div>
                      <div class="user pt-1 pb-2">{{item.who}}</div>
                      <div class="type ">{{item.type}}</div>
                    </div>
                  </v-flex>
                
                  </v-layout>
                  </v-container>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
</template>

<style>
.body-1{
    line-height:14px;
    color:#259;
    font-weight:bold;
}
.type{
    color: gray;
}
.user{
    font-size: 12px;
    font-weight:bold;

}
.content{
    font-size: 12px;
    color: gray;
    overflow: scroll;
}

</style>

<script>
export default {
  data(){
      return {
          someData:'',
          items: [],
      }
  },
  methods: {
      onclick (item) {
        //   this.$store.commit('setPath', item.url);
        //   this.$router.push('detail');

        window.location.href = item.url;
      }
  },

  created(){
    
        this.$http.get('/gankio').then(response => {

    // get body data 
        let data = response.body;
        let results = data.results;
        for(let topic of results){
            let item = {};
        
            item.title = topic.desc;
            item.type = topic.type;
            item.url = topic.url;
            item.who = topic.who;

            this.items.push(item);
        }
        }, response => {});

  }
}
</script>