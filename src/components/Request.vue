<template>
  <div class="request-car">
    <h2>Request</h2>
    <p>
      <strong>Day rent:</strong>
      {{requestdata.dayRent}}
    </p>
    <p>
      <strong>Day return:</strong>
      {{requestdata.dayReturn}}
    </p>
    <div class="button">
      <button id="approve">Approve</button>
      <button id="cancel">Cancel</button>
    </div>
  </div>
</template>
<script>
export default {
  data: function() {
    return {
      requestdata: {
        dayRent: "28/07/2019",
        dayReturn: "30/10/2019"
      }
    };
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