<template>
  <div class="request-car">
    <h2>Payment</h2>
    <p>
      <strong>Day rent:</strong>
      {{ dayRent }}
    </p>
    <p>
      <strong>Day return:</strong>
      {{ dayReturn }}
    </p>
    <div class="button">
      <button id="approve" v-on:click="payment">Payment</button>
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
      requestdata: {
        dayRent: "28/07/2019",
        dayReturn: "30/10/2019"
      }
    };
  },
  methods: {
    payment: function() {
      axios({
        method: "PUT",
        url: "http://35.198.247.39/CarRentalManagement/saler/contract/payment",
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
        this.$emit('payment');
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
    }
    #approve {
      border-style: none;
      padding: 11px 25px;
      font-weight: 600;
      border-radius: 10px;
      font-family: Montserrat;
      background: #d33333;
      text-align: center;
      color: white;
      position: relative;
      bottom: 0;
      cursor: pointer;
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
      position: relative;
      bottom: 0;
    }
    text-align: center;
  }
}
</style>
