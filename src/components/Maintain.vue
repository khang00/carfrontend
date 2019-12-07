<template>
  <div id="maintain">
    <div id="employee">
      <img src="../assets/car.png" alt="">
          <p style="color:red">{{maintaindata[0].Pos}}</p>
          <h3>{{maintaindata[0].Name}}</h3>
        <div id="info">
                <p>Time: <span class="cus-info">{{maintaindata[0].Time}}</span></p>
                <P>Date: <span class="cus-info">{{maintaindata[0].Date}}</span></P>
                <p>Detail: <span class="cus-info">{{maintaindata[0].Detail}}</span></p>
        </div>
        <button style="background: green;">Finish</button>
    </div>
  </div>
</template>

<script>
export default {
    name:'Maintain',
    data: function(){
        return{
        maintaindata:[
            {
                Name:'Huy Ha',  
                Pos:'Maintance',
               Time: "17h15",
               Date: "30/10/2019",
               Detail: "Broken"     
            }
        ]
        }
    }
}
</script>
<style >
@import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');
#maintain{
    filter: drop-shadow(3px 3px 25px rgba(0,0,0,0.161));
    box-shadow: 0px 0px 15px -10px;
    width: 13%;
    border-radius: 10px;
    
}
img {
    border-radius: 50%;
    height: 60px;
    width: 70px;
    margin-top: 5%;
}

div#employee {
    font-size: 11px;
    text-align: center;
    line-height: 3px;
}

div#employee p {
    font-size: 11px;
}

div#employee #info p{
   text-align: left;
   margin-left: 15px;
   font-weight: bold;
   line-height: 6px;
   font-size: 12px;
}

.cus-info{
     word-wrap:break-word;
     font-weight: normal;
}

div#info {
    margin-top: 10%;
}

button{
    border-radius: 7px;
    width: 40%;
    font: 500 15px Montserrat;
    margin: 5px 0;
    color: white;
    font-size: 12px;
}
</style>