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
                  <v-layout row>
                  <v-flex xs12 md9 lg9 xl9>
                    <div>
                      <div class="body-1">{{item.title}}</div>
                      <div class="user pt-1 pb-2">{{item.user}}</div>
                      <div class="upvotes">赞同 · {{item.upvotes}}</div>
                    </div>
                  </v-flex>
                  <v-flex xs0 md3 lg3 l3>
                      <v-layout align-center wrap>
                          <span style="font-size:16px;">{{item.star}}</span>
                      </v-layout>
                      <v-layout pt-4>
                      </v-layout>
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
.upvotes{
    font-size: 10px;
    color: gray;
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
        this.$http.get('/zhihu').then(response => {
 
    // get body data 
        let data = response.body;
        let parser = new DOMParser();
        let dom = parser.parseFromString(data, 'text/xml');
        let questions = dom.getElementsByTagName('question');

        for(let question of questions){
            let item = {};
        
            item.title = question.children[0].innerHTML;
            item.url = question.children[1].innerHTML;
            item.upvotes = question.children[2].innerHTML;
            item.commentCount = question.children[3].innerHTML;
            item.answerUrl = question.children[4].innerHTML;
            item.user = question.children[5].children[0].innerHTML;
            this.items.push(item);
        }
        }, response => {});

  }
}
</script>
