<template>
  <div class="about">
	<div class="menue">
		<Menue/>
	</div>
	<div >
		<h1>{{ user.nom }}  {{ user.prenom }}</h1>
	</div>
    
    <div class="container">
		<div class="main-body">
			<div class="row">
				<div class="col-lg-4">
					<div class="card">
						<div class="card-body">
							<div class="d-flex flex-column align-items-center text-center">
								<img v-bind:src="user.user_github_pic" alt="Admin" class="rounded-circle p-1 bg-primary" width="110">
								<div class="mt-3">
									<h4>{{ user.appelataion }}</h4>
									<p class="text-secondary mb-1">{{ user.fonction }}</p>
									<p class="text-muted font-size-sm">{{ user.adresse}}</p>
									<!--
									<button class="btn btn-primary">Follow</button>
									<button class="btn btn-outline-primary">Message</button>
									-->
								</div>
							</div>
							<hr class="my-4">
							<ul class="list-group list-group-flush">
								<li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
									<a target="_blank" v-bind:href="'http://'+user.prenom_usuel+'.iteam-s.mg/'"><h6 class="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-globe me-2 icon-inline"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>Website </h6></a>
								</li>
								<li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
									<a target="_blank" v-bind:href="'https://github.com/'+user.user_github" ><h6 class="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github me-2 icon-inline"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>Github</h6></a>
								</li>
								<li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
									<a target="_blank" v-bind:href="'https://www.linkedin.com/in'+user.linkedin" ><h6 class="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-twitter me-2 icon-inline text-info"><path d="M1.15 21.7h13V61h-13zm46.55-1.3c-5.7 0-9.1 2.1-12.7 6.7v-5.4H22V61h13.1V39.7c0-4.5 2.3-8.9 7.5-8.9s8.3 4.4 8.3 8.8V61H64V38.7c0-15.5-10.5-18.3-16.3-18.3zM7.7 2.6C3.4 2.6 0 5.7 0 9.5s3.4 6.9 7.7 6.9 7.7-3.1 7.7-6.9S12 2.6 7.7 2.6z"></path></svg>Linkedin</h6></a>
								</li>
								<li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
									<a target="_blank" v-bind:href="'https://www.facebook.com'+user.facebook" ><h6 class="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-facebook me-2 icon-inline text-primary"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>Facebook</h6></a> 
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div class="col-lg-8">
					<div class="card">
						<div class="card-body">
							<div class="row mb-3">
								<div class="col-sm-3">
									<h6 class="mb-0">Nom</h6>
								</div>
								<div class="col-sm-9 text-secondary">
									<input type="text" class="form-control" v-model="user.nom" >
								</div>
							</div>
							<div class="row mb-3">
								<div class="col-sm-3">
									<h6 class="mb-0">Prénom</h6>
								</div>
								<div class="col-sm-9 text-secondary">
									<input type="text" class="form-control" v-model=" user.prenom ">
								</div>
							</div>
							<div class="row mb-3">
								<div class="col-sm-3">
									<h6 class="mb-0">Appelation</h6>
								</div>
								<div class="col-sm-9 text-secondary">
									<input type="text" class="form-control" v-model=" user.prenom_usuel ">
								</div>
							</div>
							<div class="row mb-3">
								<div class="col-sm-3">
									<h6 class="mb-0">Username github</h6>
								</div>
								<div class="col-sm-9 text-secondary">
									<input type="text" class="form-control" v-model=" user.user_github ">
								</div>
							</div>
							<div class="row mb-3">
								<div class="col-sm-3">
									<h6 class="mb-0">Email</h6>
								</div>
								<div class="col-sm-9 text-secondary">
									<input type="text" class="form-control" v-model=" user.mail ">
								</div>
							</div>
							<div class="row mb-3">
								<div class="col-sm-3">
									<h6 class="mb-0">Phone</h6>
								</div>
								<div class="col-sm-9 text-secondary">
									<input type="text" class="form-control" v-model=" user.tel1 ">
								</div>
							</div>
							<div class="row mb-3">
								<div class="col-sm-3">
									<h6 class="mb-0">Mobile</h6>
								</div>
								<div class="col-sm-9 text-secondary">
									<input type="text" class="form-control" v-model=" user.tel2 ">
								</div>
							</div>
							<div class="row mb-3">
								<div class="col-sm-3">
									<h6 class="mb-0">Address</h6>
								</div>
								<div class="col-sm-9 text-secondary">
									<input type="text" class="form-control" v-model=" user.adresse ">
								</div>
							</div>
							<div class="row mb-3">
								<div class="col-sm-3">
									<h6 class="mb-0">Facebook</h6>
								</div>
								<div class="col-sm-9 text-secondary">
									<input type="text" class="form-control" v-model=" user.facebook ">
								</div>
							</div>
							<div class="row mb-3">
								<div class="col-sm-3">
									<h6 class="mb-0">Linkedin</h6>
								</div>
								<div class="col-sm-9 text-secondary">
									<input type="text" class="form-control" v-model=" user.linkedin ">
								</div>
							</div>
							<div class="row mb-3">
								<div class="col-sm-3">
									<h6 class="mb-0">Actif</h6>
								</div>
								<div class="col-sm-9 text-secondary">
									<input type="text" class="form-control" v-model=" val_actif ">
								</div>
							</div>
							<div class="row mb-3">
								<div class="col-sm-3">
									<h6 class="mb-0">Description</h6>
								</div>
								<div class="col-sm-9 text-secondary">
									<textarea class="form-control rounded-0" id="exampleFormControlTextarea2" rows="3" v-model=" user.description "></textarea>
								</div>
							</div>
							<div class="row mb-3">
								<div class="col-sm-3">
									<h6 class="mb-0">Fonction</h6>
								</div>
								<div class="col-sm-9 text-secondary">
									<input type="text" class="form-control" v-model=" user.fonction ">
								</div>
							</div>
							<div class="row mb-3">
								<div class="col-sm-3">
									<h6 class="mb-0">Mode dark</h6>
								</div>
								<div class="col-sm-9 text-secondary">
									<input type="text" class="form-control" v-model=" mode_dark ">
								</div>
							</div>
							<div class="row mb-3">
								<div class="col-sm-3">
									<h6 class="mb-0">Mon CV</h6>
								</div>
								<div class="col-sm-9 text-secondary">
									<a v-if="file" v-bind:href="file"><button class="btn"><i class="fa fa-download"></i> Download</button></a>
									<input type="file" class="form-control" @change="handleFileUpload($event)">
								</div>
							</div>
							<h4 v-if="notif_success"><label class="badge badge-success px-4" >{{ notif_success }}</label></h4>
							<h4 v-if="notif_erreur"><label class="badge badge-danger px-4">{{ notif_erreur }}</label></h4>
							<div class="row" v-if="this_id === user.id">
								<div class="col-sm-3"></div>
								<div class="col-sm-9 text-secondary">
									<input type="button" class="btn btn-primary px-4" @click="save_changes" value="Save Changes">
								</div>
							</div>
						</div>
					</div>
					<div class="row">
						<div class="col-sm-12">
							<div class="card">
								<div class="card-body">
									<h5 class="d-flex align-items-center mb-3">Project Status</h5>
									<p>Web Design</p>
									<div class="progress mb-3" style="height: 5px">
										<div class="progress-bar bg-primary" role="progressbar" style="width: 80%" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
									</div>
									<p>Website Markup</p>
									<div class="progress mb-3" style="height: 5px">
										<div class="progress-bar bg-danger" role="progressbar" style="width: 72%" aria-valuenow="72" aria-valuemin="0" aria-valuemax="100"></div>
									</div>
									<p>One Page</p>
									<div class="progress mb-3" style="height: 5px">
										<div class="progress-bar bg-success" role="progressbar" style="width: 89%" aria-valuenow="89" aria-valuemin="0" aria-valuemax="100"></div>
									</div>
									<p>Mobile Template</p>
									<div class="progress mb-3" style="height: 5px">
										<div class="progress-bar bg-warning" role="progressbar" style="width: 55%" aria-valuenow="55" aria-valuemin="0" aria-valuemax="100"></div>
									</div>
									<p>Backend API</p>
									<div class="progress" style="height: 5px">
										<div class="progress-bar bg-info" role="progressbar" style="width: 66%" aria-valuenow="66" aria-valuemin="0" aria-valuemax="100"></div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from "axios";
import { mapState } from "vuex"
import FormData from 'form-data'

import Menue from '../components/Menue.vue'

const headers = { 'Content-Type': 'multipart/form-data' };

export default {
  name: 'Show',
  components: {
	Menue
  },
  data() {
      return {
        user:{},
		val_actif:"Oui",
		mode_dark:"Non",
		notif_success:"",
		notif_erreur:"",
		file:'',
	}
  },
  computed: {
    ...mapState('user', ["baseUrl", "token", "this_id"])
    
  },
  async created(){
    try {
		const res = await axios.get(this.baseUrl +"/membre/details/"+ this.$route.params.id);
		this.user = res.data;
		this.val_actif = this.user.actif ? "Oui":"Non";
		this.mode_dark = this.user.dark ? "Oui" : "Non";
		this.file = this.user.cv ? "https://portfolio.iteam-s.mg"+ this.user.cv.substr(2) : ""
    } catch (error) {
      console.log(error.message);
    }
  },
  methods:{
	async save_changes(){
		this.notif_success = "";
		const formData = new FormData();
		this.user.actif = this.val_actif != "Oui" ? 0:1;
		this.user.dark = this.mode_dark != "Oui" ? 0:1;
		let data = this.user;
		Object.keys(data).forEach(key => {
			formData.append(key, data[key]);
		});
		if(this.file)formData.append('file_cv', this.file);        
		
		try {
			const res = await axios.post(this.baseUrl +"/membre/update", formData, {headers});
			if(res.data.id){
				this.notif_success = "Modification réussie"
				this.notif_erreur =""
				this.$router.push({name: 'show',params:{id:res.data.id}})
			} 
		} catch (error) {
			console.log(error.message)
			this.notif_erreur = "Modification non autorisée"
			this.notif_success = ""
		}
	},

	handleFileUpload(event){
		this.file = event.target.files[0];
		console.log(this.file)
	}
  }
}
</script>

<style scoped>
body{
    background: #f7f7ff;
    margin-top:20px;
}
.card {
    position: relative;
    display: flex;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-color: #fff;
    background-clip: border-box;
    border: 0 solid transparent;
    border-radius: .25rem;
    margin-bottom: 1.5rem;
    box-shadow: 0 2px 6px 0 rgb(218 218 253 / 65%), 0 2px 6px 0 rgb(206 206 238 / 54%);
}
.me-2 {
    margin-right: .5rem!important;
}

a { color: inherit; } 

.menue{
	position: relative;
	margin-bottom: 10%;
}
</style>