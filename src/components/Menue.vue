<template>
        <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <a class="navbar-brand" href="#"><img src="../assets/LOGO_.png" alt="..." height="36"></a>

      <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
          <li class="nav-item">
            <router-link to="/home" class="nav-link">Home</router-link> 
          </li>
          <li class="nav-item">
            <router-link to="/" class="nav-link">Accueil</router-link>
          </li>
        </ul>
        <form class="form-inline my-2 my-lg-0">
          <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
      </div>
        <div class="col-2 ml-auto text-right">
            <div class="btn-group">
                <button type="button" class="btn btn-danger" @click="logout">Logout</button>
            </div>
        </div>
    </nav>
    </div>

    
</template>

<script>
//https://blog.sqreen.com/authentication-best-practices-vue/
import { mapActions } from "vuex"

export default {
    name: 'Menue',
    data() {
        return {
        }
    },

    methods: {
        ...mapActions('user', ['auth_logout']),

        async logout(){
            try {
              let reponse = await this.auth_logout();
              if(reponse) this.$router.push('/')
            } catch (error) {
              console.log("Erreur logout");
            }
            
      }
  },
}
</script>
