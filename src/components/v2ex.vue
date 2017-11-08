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
                  <v-layout row align-center>
                    
                    <v-flex xs10 md10 lg10 xl10>
                    <div>
                      
                      <div class="body-1">{{item.title}}</div>
                      <div class="user pt-1 pb-2">{{item.user}}</div>
                      <div class="content" v-html="item.content.substring(0,200)">...</div>
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
        
        this.$http.get('/v2ex').then(response => {
        console.log('v2ex');
        console.log(response.body);
    // get body data 
        let data = response.body;
        for(let topic of data){
            let item = {};
        
            item.title = topic.title;
            item.url = topic.url;
            item.content = topic.content_rendered;
            item.avatar = 'http:' + topic.member.avatar_normal;

            this.items.push(item);
        }
        }, response => {});

  }
}
</script>
