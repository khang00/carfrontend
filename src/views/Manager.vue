<template>
  <div class="manager-wrapper">
    <div class="employee-frame-wrapper">
      <employee-frame v-bind:navInfo="navInfo" v-bind:employeeInfo="employeeInfo" />
    </div>

    <div v-if="navInfo[0].selected" class="cars">
      <car />
    </div>
    <div v-if="navInfo[1].selected" class="activities"></div>
    <div v-if="navInfo[2].selected" class="add">
      <input-form class="form" v-bind:formInfo="owner" title="Owner" imageSize="15" key="1" />
      <input-form class="form" v-bind:formInfo="car" title="Car" key="2" />
      <div class="button">
        <button id="approve">Submit</button>
        <button id="cancel">Cancel</button>
      </div>
    </div>
  </div>
</template>

<script>
import EmployeeFrame from "./../components/EmployeeFrame.vue";
import Form from "./../components/Form.vue";
import Car from "./../components/Car.vue";
export default {
  components: {
    "employee-frame": EmployeeFrame,
    "input-form": Form,
    car: Car
  },
  data: function() {
    return {
      navInfo: [
        {
          title: "Cars",
          selected: true
        },
        {
          title: "Activities",
          selected: false
        },
        {
          title: "Add",
          selected: false
        }
      ],
      employeeInfo: {
        name: "Huy Ha",
        position: "Manager",
        image: ""
      },
      owner: {
        text: [
          {
            title: "Name",
            value: ""
          },
          {
            title: "Contact Number",
            value: ""
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
      }
    };
  }
};
</script>

<style lang="scss" scoped>
.manager-wrapper {
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