<template>
  <div class="request-car">
    <h2>Request</h2>
    <p>
      <strong>Day rent:</strong>
      {{ dayRent }}
    </p>
    <p>
      <strong>Day return:</strong>
      {{ dayReturn }}
    </p>
    <div class="button">
      <button id="approve" v-on:click="approve">Approve</button>
      <button id="cancel">Cancel</button>
    </div>
  </div>
</template>

<script>
import axios from "axios"
export default {
  props: {
    dayRent: Date,
    dayReturn: Date,
    contractId: String,
    salerAccount: String
  },
  data: function() {
    return {

    };
  },
  methods: {
    approve: function() {
      axios({
        method: "PUT",
        url: "https://carredo.herokuapp.com/saler/contract/approve",
        data: {
          contractId: this.contractId,
          salerAccount: this.salerAccount
        },
        config: {
          headers: {
            // set content type
            "content-type": "application/json",
            charset: "utf-8",
            "Access-Control-Allow-Origin": "*"
          }
        }
      }).then(response => {
        /*eslint-disable no-console*/
        console.log(response.data);
        this.$emit('approve');
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.request-car {
  h2 {
    margin-top: 0px;
    text-align: center;
  }
  box-shadow: 3px 3px 25px rgba(0, 0, 0, 0.161);
  height: 50%;
  padding: 2.5%;
  border-radius: 10px;
  p {
    margin: 5px 0;
  }
  .button {
    button {
      margin: 15px 10px 0 10px;
      cursor: pointer;
    }
    #approve {
      border-style: none;
      padding: 11px 25px;
      font-weight: 600;
      border-radius: 10px;
      font-family: Montserrat;
      background: #44c26a;
      text-align: center;
      color: white;
    }
    #cancel {
      border: solid 1px rgba(0, 0, 0, 0.161);

      padding: 11px 25px;
      font-weight: 600;
      border-radius: 10px;
      font-family: Montserrat;
      background: white;
      text-align: center;
      color: black;
    }
    text-align: center;
  }
}
</style>
