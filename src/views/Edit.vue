<template>
  <div class="edit">
    <div class="employee-frame-wrapper">
      <employee-frame v-bind:employeeInfo="employeeInfo" />
    </div>
    <input-form class="form" v-bind:formInfo="owner" title="Owner" imageSize="15" key="1" />
    <input-form class="form" v-bind:formInfo="car" title="Car" key="2" />
    <div class="button">
      <button id="approve">Submit</button>
      <button id="cancel">Cancel</button>
    </div>
  </div>
</template>

<script>
import EmployeeFrame from "./../components/EmployeeFrame.vue";
import Form from "./../components/Form.vue";

export default {
  components: {
    "employee-frame": EmployeeFrame,
    "input-form": Form
  },
  data: function() {
    return {
      owner: {
        text: [
          {
            title: "Name",
            value: "dasd"
          },
          {
            title: "Contact Number",
            value: "asd"
          },
          {
            title: "Address",
            value: ""
          },
          {
            title: "Date of Birth",
            value: ""
          }
        ],
        radio: [
          {
            title: "Gender",
            choice: ["Male", "Female"],
            value: ""
          }
        ],
        image: {
          raw: [null],
          url: [""]
        }
      },
      car: {
        text: [
          {
            title: "Brand",
            value: ""
          },
          {
            title: "Model",
            value: ""
          },
          {
            title: "Color",
            value: ""
          },
          {
            title: "Price",
            value: ""
          },
          {
            title: "Location",
            value: ""
          }
        ],
        image: {
          raw: [null, null, null],
          url: ["", "", ""]
        }
      },
      navInfo: [
        {
          title: "Checking Cars",
          selected: true
        },
        {
          title: "Maintaining Cars",
          selected: false
        }
      ],
      employeeInfo: {
        name: "Huy Ha",
        position: "Manager",
        image: ""
      },
    };
  }
};
</script>

<style lang="scss" scoped>
.edit {
  width: 80%;
  margin: 0 10%;
  .form {
    margin: 80px 0;
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
      background: rgba(0, 0, 0, 0.091);
      text-align: center;
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