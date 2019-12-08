<template>
  <div class="about">
    <input
      style="display:none"
      id="file"
      type="file"
      multiple
      accept="image/*"
      @change="onChange"
    />
    <!-- Hình chính -->
    <div id="bigPic">
      <img
        src="https://media.wired.com/photos/5d09594a62bcb0c9752779d9/master/pass/Transpo_G70_TA-518126.jpg"
      />
    </div>

    <!--Cuối hình chính -->

    <div id="preview">
      <div class="pic">
        <img :key="index" v-for="(app, index) in apps.slice(0, 3)" :src="app" />
      </div>
      <label v-if="num < 3" for="file"><i class="fas fa-plus"></i></label>
    </div>

    <button v-on:click="sendImage"></button>

    <form
      action="http://localhost:8080/image/image"
      method="post"
      enctype="multipart/form-data"
    >
      Select image to upload:
      <input type="file" name="file" id="fileToUpload" />
      <input type="submit" value="Upload Image" name="submit" />
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "imageUpload",
  data() {
    return {
      num: 0,
      num1: 0,
      apps: [],
      item: ""
    };
  },
  methods: {
    onChange(e) {
      let files = e.target.files;
      for (let i = 0; i < files.length; i++) {
        this.apps.push(files[i]);
      }
      this.num += files.length;
    },
    sendImage() {
      let car = {
        owner: {
          name: "Khang",
          phone: "0913654535",
          address: "Ho chi minh",
          dob: "1575784785",
          gender: "male",
          totalImage: 1
        },
        car: {
          model: "2019 Base 4MATIC",
          brand: "honda",
          color: "red",
          price: 1000000,
          location: "da nang",
          seat: 12,
          description: "best car ever",
          totalImage: 3
        }
      };
      
      axios({
        method: "POST",
        url: "http://35.198.247.39/CarRentalManagement/manager/car",
        data: car,
        config: {
          headers: {
            // set content type
            "content-type": "application/json",
            charset: "utf-8",
            "Access-Control-Allow-Origin": "*"
          }
        }
      })
        .then(response => {
          /* eslint-disable no-console */
          console.log(response);
          let formdata = new FormData();
          let id = new Blob([response.data.id], {
            type: "text/plain"
          });

          let type = new Blob(["car"], {
            type: "text/plain"
          });

          for (var i = 0; i < this.apps.length; i++) {
            let file = this.apps[i];
            formdata.append("files", file, file.name);
          }
          /* eslint-disable no-console */
          console.log(formdata.getAll("files"));

          formdata.append("id", id);

          console.log(formdata.get("id"));

          formdata.append("type", type);

          console.log(formdata.get("type"));
          axios({
            method: "POST",
            url: "http://35.198.247.39/image/image",
            data: formdata,
            config: {
              headers: {
                // set content type
                "content-type": undefined,
                charset: "utf-8",
                "Access-Control-Allow-Origin": "*"
              }
            }
          })
            .then(response => {
              /* eslint-disable no-console */
              console.log(response);
            })
            .catch(error => {
              /* eslint-disable no-console */
              console.log(error);
              console.log(error.response.data);
              console.log(error.response.status);
              console.log(error.response.headers);
              console.log(error.message);
            });
        })
        .catch(error => {
          /* eslint-disable no-console */
          console.log(error);
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
          console.log(error.message);
        });
    }
  }
};
</script>

<style scoped>
.about {
  width: 515.5px;
  height: 415.3px;
}
.pic {
  width: 133px;
  height: 82px;
  display: flex;
}
#bigPic {
  width: 100%;
  height: 317.89px;
}
#bigPic img {
  width: 100%;
  height: 100%;
  border-radius: 10px;
}

.pic img {
  object-fit: fill;
  width: 100%;
  height: 100%;
  margin-top: 10px;
  margin-right: 11.5px;
  border-radius: 10px;
}
.fas {
  font-size: 55px;
  padding-top: 20px;
}
#preview {
  display: grid;
  grid-template-columns: 440px 55px;
}
</style>
