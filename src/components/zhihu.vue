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
                  <v-flex xs9>
                    <div>
                      <div class="title blue--text">{{item.name}}</div>
                      <div class="grey--text pt-1 pb-2">Owner : {{item.owner}}</div>
                      <div class="pt-1">{{item.descriptions}}</div>
                    </div>
                  </v-flex>
                  <v-flex xs3>
                      <v-layout align-center wrap>
                         <img src="../../static/img/icons/star.svg" alt="" height="16px" style="padding-bottom:1px"/>
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
.card-hover:hover{
    color: grey;

}

.card-hover:active{
        color: grey;

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
        this.someData = dom;
        let projects = dom.getElementsByTagName('project');

        for(let project of projects){
            let item = {};
        
            item.name = project.children[0].innerHTML;
            item.owner = project.children[1].innerHTML;
            item.repository_name = project.children[2].innerHTML;
            item.descriptions = project.children[3].innerHTML;
            item.language = project.children[4].innerHTML;
            item.star = project.children[5].innerHTML;
            item.url = project.children[6].innerHTML;
            this.items.push(item);
        }
        }, response => {});

  }
}
</script>
