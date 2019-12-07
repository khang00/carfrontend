<template>
  <div id="form">
    <h2 class="title">{{ this.title }}</h2>
    <div class="form-wrapper">
      <div class="form-object">
        <div class="form-item" v-bind:key="info" v-for="info in formInfo">
          <p>{{ info }} :</p>
          <input type="text" v-model="formInfo[info]" />
        </div>

        <div class="form-item">
          <p>Gender :</p>
          <div class="radio">
            <input type="radio" name="Gender" value="Male" v-model="formInfo['Gender']" />
            <p>Male</p>
            <input type="radio" name="Gender" value="Female" v-model="formInfo['Gender']" />
            <p>Female</p>
          </div>
        </div>
      </div>

      <div id="image">
        <img v-bind:src="customerImageURL" alt />
        <label for="file">
          <i class="fas fa-camera" id="upload"></i>
        </label>
        <input style="display:none" id="file" ref="myFile" type="file" @change="loadImage" />
      </div>
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
    },
    formInfo: Object
  },
  data: function() {
    return {
      renter: {
        Name: "",
        Address: "",
        Phone: "",
        "Date Of Birth": ""
      },
      gender: "",
      customerImageURL: ""
    };
  },
  methods: {
    // submit: function() {
    //   var result = this.formInfo.slice();
    //   result.push({title: "Gender", value: this.gender});
    //   result.push({title: "Image", value: this.customerImageURL});
    //   this.$emit("request", this.formInfo);
    // },
    loadImage: function() {
      this.formInfo = URL.createObjectURL(this.$refs.myFile.files[0]);
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
        align-items: center;
        width: 100%;
        white-space: nowrap;

        p {
          margin-right: 3%;
          font-weight: 500;
          font-size: 18px;
        }

        input {
          width: 100%;
          border-left-style: none;
          border-right-style: none;
          border-bottom-style: ridge;
          border-top-style: none;
          font-family: montserrat;
          font-size: 18px;
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
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 40%;

      i.fas.fa-file-upload {
        font-size: 30px;
      }

      img {
        border-radius: 50%;
        border: solid 0.5px grey;
        height: 12vw;
        width: 12vw;
        object-fit: contain;
        margin: 0 0 20px 0;
      }
    }
  }
  #upload {
    cursor: pointer;
    font-size: 20px;
  }
  
}
</style>
