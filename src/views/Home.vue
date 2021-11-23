<template>  
  <div class="home">
    <div>
      <Menue/>
    </div>
    <!--<HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <div>
      <p>{{ baseUrl }}</p>
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col">Appelation</th>
            <th scope="col">Username github</th>
            <th scope="col">Email</th>
            <th scope="col">Poste</th>
            <th scope="col">Option</th>
          </tr>
        </thead>
        <tbody>
          <ListItem
            v-for="item in list"
            :id="item.id"
            :numero="list.indexOf(item)+1"
            :appelation="item.prenom_usuel"
            :email="item.mail"
            :poste="item.nom_poste"
            :user_github="item.user_github"
            :key="item.prenom_usuel"
          />
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from "axios";
import { mapState } from "vuex"

import ListItem from '../components/ListItem.vue'
import Menue from '../components/Menue.vue'


export default {
  name: 'Home',
  components: {
    ListItem,
    Menue
  },
  data() {
      return {
          list:[],
      }
  },
  computed: {
    ...mapState('user', {
      baseUrlApi: "baseUrl"
    }),
    
  },
  async created(){
    try {
      const res = await axios.get(this.baseUrlApi +"/membre/list");
      this.list = res.data;
    } catch (error) {
      console.log(error.message);
    }
  }
}
</script>
