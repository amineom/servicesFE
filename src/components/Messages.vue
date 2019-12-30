<template>
  <div class="container">
    <h3>All Messages</h3>
    <div v-if="message" class="alert alert-success">
  {{message}}
</div>
    <div class="container">
      <table class="table">
        <thead>
          <tr>
            <th>Auteur</th>
            <th>Date</th>
            <th>Id</th>
            <th>Message</th>
            <th>utl_id</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="ms in msg" v-bind:key="ms.id">
            <td>{{ms.auth}}</td>
            <td>{{ms.dte}}</td>
            <td>{{ms.id}}</td>
            <td>{{ms.msg}}</td>
            <td>{{ms.utl_id}}</td>
            <td>
  <button class="btn btn-warning" v-on:click="deleteMsgClicked(ms.id)">
    Delete
  </button>
</td>
<td><button class="btn btn-success" v-on:click="updateMsg(ms.id)">Update</button></td>

          </tr>
        </tbody>
        <div class="row">
    <button class="btn btn-success" v-on:click="addCourseClicked()">Add</button>
</div>
      </table>
    </div>
  </div>
</template>

<script>
import MsgDataService from '../service/MsgDataService';
export default {
    
  name: "Msglist",
  data() {
      return {
          msg: [],
          message: null,
          INSTRUCTOR: "webapi"
      };
  },
  methods: {
      refreshMsg() {
      MsgDataService.retrieveAllMsg(this.INSTRUCTOR) //HARDCODED
        .then(response => {
          this.msg = response.data;
        });
    },
   deleteMsgClicked(id) {
       console.log(id);
        MsgDataService.deleteMsg(this.INSTRUCTOR, id).then(response => {
          this.message = `Delete of message ${id} Successful`;
          this.refreshMsg();
        });
      },
      updateMsg(id) {
            this.$router.push(`/Messages/${id}`);
        },
        addCourseClicked() {
    this.$router.push(`/Messages/-1`);
  }
    
  },
  created() {
    this.refreshMsg();
  }
};
</script>

<style>
</style>