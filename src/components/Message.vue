<template>
 <div>
    <h3>Messages</h3>
    <div class="container">
     <form @submit="validateAndSubmit">

       <fieldset class="form-group">
          <label>Auteur</label>
          <input type="text" class="form-control" v-model="auteur">
        </fieldset>
        <fieldset class="form-group">
          <label>Message</label>
          <input type="text" class="form-control" v-model="message">
        </fieldset>
        <button class="btn btn-success" type="submit" >Save</button>
      </form>
    </div>
  </div>
</template>
<script>
import MsgDataService from "../service/MsgDataService";
export default {
  name: "Message",
  data() {
    return {
      message: "",
      auteur:"",
      INSTRUCTOR: "wepapi",
      errors: []
    };
  },
  
  computed: {
    id() {
      return this.$route.params.id;
    }
  },
  methods: {
    refreshMsgDetails() {
        MsgDataService.retrieveMsg(this.INSTRUCTOR, this.id).then(res => {
          this.message = res.data.msg;
          this.auteur = res.data.auth;
        });
    },
    validateAndSubmit(e)  {
        e.preventDefault();
        
         if (this.id == -1) {
                MsgDataService.createMsg(this.INSTRUCTOR, {
                    auth: this.auteur,
                    msg: this.message
                })
                .then(() => {
                    this.$router.push('/messages');
                });
           }
     else  {  MsgDataService.updateMsg(this.INSTRUCTOR, this.id, {
                    auth: this.auteur,
                    msg: this.message
                })
                .then(() => {
                    this.$router.push('/messages');
                });
    }
    }
  
  },
  created() {
    this.refreshMsgDetails();
  }
};
</script>