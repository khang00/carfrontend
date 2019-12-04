<template>
  <div id="form">
    <h2 class="title">{{ this.title }}</h2>
    <div class="form-wrapper">
      <div class="form-object">
        <div
          class="form-item"
          v-bind:key="key"
          v-for="(value, key) in this.renter"
        >
          <p>{{ key }} :</p>
          <input type="text" />
        </div>

        <div class="form-item">
          <p>Gender :</p>
          <div class="radio">
            <input type="radio" name="Gender" value="Male" />
            <p>Male</p>
            <input type="radio" name="Gender" value="Female" />
            <p>Female</p>
          </div>
        </div>
      </div>

      <div id="image">
        <img src="http://35.198.247.39/images/car.jpg" alt="" />
        <label for="file"><i class="fas fa-file-upload"></i></label>
        <input style="display:none" id="file" type="file" />
      </div>
    </div>
    <div class="button">
      <button class="submit" v-on:click="submit">Submit</button>
      <button class="cancel">Cancel</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Form",
  props: {
    title: {
      type: String,
      default: "Request Car"
    }
  },
  data: function() {
    return {
      renter: {
        Name: "",
        Address: "",
        Phone: "",
        "Date Of Birth": ""
      }
    };
  },
  methods: {
    submit: function() {
      this.$emit('request', this.renter);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#form {
  width: 100%;

  h2.title {
    font-size: 40px;
  }

  .form-wrapper {
    display: flex;
    width: 100%;
    justify-content: space-between;

    .form-object {
      width: 50%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      .form-item {
        display: flex;
        width: 100%;
        height: 37px;
        white-space: nowrap;

        p {
          margin-right: 3%;
          height: 100%;
        }

        input {
          width: 100%;
          border-left-style: none;
          border-right-style: none;
          border-bottom-style: ridge;
          border-top-style: none;
        }

        .radio {
          display: flex;

          p {
            margin-right: 15%;
          }
        }
      }
    }

    #image {
      display: flex;
      width: 40%;

      i.fas.fa-file-upload {
        font-size: 30px;
      }

      img {
        border-radius: 50px;
      }
    }
  }

  .button {
    display: flex;
    margin: 2% 0%;
    width: 100%;
    justify-content: center;

    button {
      padding: 1% 2%;
      border-radius: 10px;
    }

    .submit {
      margin-right: 1%;
      border-style: none;
    }

    .cancel {
      margin-left: 1%;
      background: white;
      border-style: solid;
    }
  }
}
</style>
