<template>
  <v-app light>
    <v-navigation-drawer
      persistent
      :clipped="clipped"
      v-model="drawer"
      enable-resize-watcher
      app
    >
      <v-list>
        <v-list-tile
          value="true"
          v-for="(item, i) in items"
          :key="i"
          @click="onclick(item)"
        >
          <v-list-tile-action>
            <v-icon light v-html="item.icon"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
          </v-list-tile-content>
          
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    
    <v-toolbar fixed app :clipped-left="clipped">
      <v-toolbar-side-icon @click.stop="drawer = !drawer" light></v-toolbar-side-icon>

      <v-toolbar-title v-text="title"></v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>


  
    <v-content>
      <keep-alive>
      <router-view>
      </router-view>
      </keep-alive>
    </v-content>
  

  
    <v-footer :fixed="fixed" app>
      <span>&copy; 2017</span>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    data () {
      return {
        clipped:false,
        drawer: true,
        fixed: false,
        items: [
          { icon: 'bubble_chart', title: 'Github', path:'/' },
          { icon: 'bubble_chart', title: 'Zhihu', path:'/zhihu' },
          { icon: 'bubble_chart', title: 'V2ex', path:'/v2ex' },
          { icon: 'bubble_chart', title: 'Gank.io', path:'/gankio' }
        ],
        title: 'DevelopmentHit'
      }
    },

    methods:{
      onclick(item){
        this.$router.push(item.path);
      }
    },

  
    components:{
    }
  }
</script>
