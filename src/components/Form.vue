<template>
  <div id="FORM">
    <div class="form2">
      <div class="form" v-bind:key="key" v-for="(value, key) in this.form">
        <div class="text">
          <p class="item-01-01">{{ key }}</p>
        </div>
        <div class="item-01">
          <input class="item-01-02" type="text"/>
        </div>
      </div>

      <div class="form">
        <div class="text">
          <p>Gender:</p>
        </div>
        <div class="item-01 tick">
          <input class="item" type="radio" name="gender" id="" />Male
          <input class="item" type="radio" name="gender" id="" />Female
        </div>
      </div>
    </div>
    
    <div id="image">
      <img src="http://35.198.247.39/images/car.jpg" alt="" />
      <label for="file"><i class="fas fa-file-upload"></i></label>
      <input style="display:none" id="file" type="file" />
    </div>

    <div class="button">
      <button id="submit-btn" class="submit" type="submit" value="submit">
        Send
      </button>
      <button id="reset-btn" class="reset" type="reset" value="reset">
        Cancel
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Form",
  props: {
    msg: String
  },
  data: function() {
    return {
      form: {
        Name: "Name : ",
        Address: "Address : ",
        Phone: "Contact Number : ",
        ID: "Social ID : "
      }
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
input.item {
  margin-left: 50px;
}
.submit {
  margin: 10px 40px;
}
.button {
  text-align: right;
}
.file {
  border-radius: 10px 10px 15px 15px;
  background-color: white;
  font-size: 15px;
  border-style: solid;
  border-width: 2px;
}

i.fas.fa-file-upload {
  font-size: 20px;
}

.file {
  border: none;
}

.button button {
  padding: 10px 20px;
  border-radius: 10px;
  background-color: white;
  font-size: 15px;
  border-style: solid;
  border-width: 1px;
}
#submit-btn {
  border: none;
  background-color: #f2f2f2;
}
input:focus {
  outline: none;
}
.tick {
  font-size: 18px;
  text-align: left;
  justify-content: space-between;
}
.text p {
  margin: 0;
  padding: 0;
  white-space: nowrap;
  color: black;
}
.item-01 {
  width: 100%;
  margin-left: 5px;
}
.form {
  display: flex;
  width: 100%;
  margin-bottom: 20px;
}
.item-01-02 {
  width: 100%;
}
.form {
  text-align: left;
}

.form input {
  border-left-style: none;
  border-right-style: none;
  border-bottom-style: ridge;
  border-top-style: none;
}
#form2 {
  width: 700px;
}
#image {
  width: 150px;
  height: 150px;
  text-align: center;
}

#image img {
  border-radius: 50%;
  width: 100%;
  height: 100%;
}
#FORM {
  display: grid;
  grid-template-columns: 500px 30%;
  font-family: "Montserrat", serif;
  grid-column-gap: 80px;
}
</style>
