<template>
  <div id="form">
    <h2 class="title">{{ this.title }}</h2>
    <div class="form-wrapper">
      <div class="form-object">
        <div class="form-item" v-bind:key="info.title" v-for="info in formInfo.text">
          <p>{{ info.title }} :</p>
          <input type="text" v-model="info.value" />
        </div>

        <div class="form-item" v-bind:key="info.title" v-for="info in formInfo.radio">
          <p>{{info.title}} :</p>
          <div class="radio">
            <div class="choice" v-bind:key="choice" v-for="choice in info.choice">
              <input
                type="radio"
                v-bind:name="info.title"
                v-bind:value="choice"
                v-model="info.value"
              />
              <p>{{choice}}</p>
            </div>
          </div>
        </div>
      </div>
      <div id="image">
        <div class="image-display">
          <img v-bind:src="image" v-for="image in formInfo.image.url" v-bind:key="image" v-bind:style="{ width: imageSize + 'vw', height: imageSize + 'vw' }" alt />
        </div>
        <label for="file">
          <i class="fas fa-camera" id="upload"></i>
        </label>
        <input style="display:none" id="file" ref="myFile" type="file" @change="loadImage" multiple />
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
    formInfo: Object,
    imageSize: String
  },
  data: function() {
    return {
      
    };
  },
  computed: {
    
  },
  methods: {
    loadImage: function() {
      var images = this.$refs.myFile.files;
      for (var i = 0; i < images.length; i++) {
        this.formInfo.image.raw.unshift(this.$refs.myFile.files[i]);
        this.formInfo.image.raw.pop();
        this.formInfo.image.url.unshift(URL.createObjectURL(this.$refs.myFile.files[i]));
        this.formInfo.image.url.pop();
      }
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
        border-radius: 10%;
        border: solid 0.5px grey;
        height: 8vw;
        width: 8vw;
        object-fit: contain;
        margin: 10px;
      }
    }
  }
  #upload {
    cursor: pointer;
    font-size: 20px;
  }
  .choice {
    display: flex;
    margin: 0 5px;
    align-items: center;
  }
}
</style>
