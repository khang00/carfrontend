<template>
    <div id="customer" >

            <h3>customer</h3>
            <div class ="pic">
                <img src="https://icon-library.net/images/avatar-icon-png/avatar-icon-png-8.jpg" alt=""> 
            </div>  
            <p v-if="gender == 'Male'" class="Mr">Mr</p>
            <p v-else class="Mr">Ms</p>
            <h2 class="cus-name">{{customer[0].name}}</h2>
            <div id="text">
                <p>Address : <span class="cus-info">{{customer[0].address}}</span> </p>
                <P>Phone : <span class="cus-info">{{customer[0].phone}}</span> </P>
                <p>Date of birth : <span class="cus-info"> {{customer[0].dob}}</span> </p>
            </div>

    </div>
</template>

<script>

export default {
    name:'Customer',
    data: function(){
        return{
            gender:'',
            customer:[
                {
                    name:'BinBin',
                    address:'44/21/19 Phan Xich Long P16 Q11',
                    phone:'0777869159',
                    gender:'Female',
                    dob: '09/04/1999'
                }
            ]
        }
    },

   
}
</script>

<style lang="scss" scoped>
    h3{
        color: #b22e0e;
        margin-top: 0;
    }
    .cus-name{
        margin: 0 0 20px 0;
    }
    
    #customer{
        width : 25%;
        border-radius: 10px;
        padding: 30px;
        font-family: 'Montserrat', serif;
        box-shadow: 3px 3px 25px rgba(0, 0, 0, 0.161);
        text-align: center;
    }
    .cus-info{
         word-wrap:break-word;
         font-weight: normal;
    }
    .pic{
       
        width:45%;
        border-radius: 50%;
        margin: 0 auto;
    }
    .Mr {
        margin: 20px 0 0px 0;
        text-align: center;
        color: #a4a4a4;
    }
    #text p{
        font-size: 15px;
        margin-top: 0px;
        text-align: left;
        margin-bottom: 5px;
        font-weight: bold;
        color: #757575;
    }
    .pic img{
        width: 100%;
        height: 100%;
        border-radius: 50%;
    }
    
    /*
    #customer-2{
         width : 600px;
        height : 600px;
        border: solid;
        border-radius: 20px;
        margin: 0;
        margin-top:2%;
        font-family: 'Roboto Slab', serif;
    }
    .pic1{
        
        width:40%;
        height: 40%;
        border-radius: 50%;
        margin: 0 auto;
    }
     .pic1 img{
        
        margin-top: 20%;
        width: 100%;
        height: 100%;
        border-radius: 50%;
        
    }
    .text {
        padding-top: 10%;
    }
    .name{
        width: 100%;
        border-left-style: none;
        border-right-style: none;
        border-bottom-style: solid;
        border-top-style: none;
    }
    .pic2{
        border-radius: 50%;
    }
    .pic2 img{
        border-radius: 50%;
        width: 100%;
        height: 100%;
    }
    .nhap{
        width: 100%;
    }
    #form{
        display: grid;
        grid-template-columns: 70% 30%;
    
    }
    .cus-info{
        border-bottom-style: dotted;
    }
    .testing{
        text-align: center;
    }
    */
</style>