<template>
  <div id="checking">
     <div id="employee">
      <img src="../assets/car.png" alt="">
          <p style="color:red">{{checkingdata[0].Pos}}</p>
          <h3>{{checkingdata[0].Name}}</h3>
        <div id="form-checking">
            <div class="row">
               <p>Time:<input type="text" name="time"></p>
            </div>
            <div class="row">
                <p>Date:<input type="text" name="date"></p>       
            </div>
             <div class="row">  
                <p>Detail:<textarea type="text" name="detail"></textarea></p> 
            </div>
        </div>
        <button style="background: green;">Finish</button>
    </div>
    </div>
</template>

<script>
export default {
    name:'Checking',
    data: function(){
        return{
        checkingdata:[
            {
               Name:'Huy Ha',  
               Pos:'Maintance'    
            }
        ]
        }
    }
}
</script>
<style >
@import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');
#checking{
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


button{
    border-radius: 7px;
    width: 40%;
    font: 500 15px Montserrat;
    margin: 5px 0;
    color: white;
    font-size: 12px;
}

div#form-checking input{
    border-bottom: 1px solid black;
}

div#form-checking p{
    font-weight: bold;
    line-height: 8px;
}

div#form-checking textarea{
    margin-top: 10px;
    border: 1px solid #a59f9f;
    background: whitesmoke;
}

*{
    border:none;
}

input[type="text"] {
    width: 60%;
    margin-left: 10px;
    background: whitesmoke;
}

.row {
    text-align: left;
    margin-left: 10px;
}
</style>