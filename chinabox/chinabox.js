var wok ={
    prise:0,
    calories:0, 
    small:  {
        prise:200,
        calories:250     
    },
    large: {
        prise:280,
        calories:400     
    },
    noodles: {
        prise:0,
        calories:0   
     },
     rice: {
        prise:0,
        calories:0
     },
     pork : {
        prise:40,
        calories: 80 
    },
    beef : {
        prise:60,
        calories:120 
    },
    chicken: {
        prise:20,
        calories:60 
    },
    vegetables :{
        prise:10,
        calories:30 
    },
    teriyaki_sauce: {
        prise:15,
        calories:10
    },
    unagi_sauce: {
        prise:15,
        calories:10
    },
    oyster_sauce: {
        prise:15,
        calories:10
    },
    soy_sauce: {
        prise:15,
        calories:10
    },
    yes: {
        prise:5,
        calories:10
    },
    no: {
        prise:0,
        calories:0
    },
        calculate :function(size, base){
        this.prise=wok[size].prise;
        this.calories=wok[size].calories;

        var checkboxArr = document.querySelectorAll ('input[name="add"]:checked');
        for (var i=0;i<checkboxArr.length;i++){
            var type = checkboxArr[i].id;
            this.prise+= wok[type].prise;
            this.calories+= wok[type].calories;
            
        }
        console.log(this.prise);
        wok.result(this.prise,this.calories);
        
    },
    result: function(prise,calories){
        document.getElementById("prise").innerHTML = prise;
        document.getElementById("calories").innerHTML = calories;
    },
    reset_all: function(){
        this.price=0;
        this.calories=0;
    }
}

    document.getElementById("form").addEventListener('submit', (e)=>{
        e.preventDefault();
        var size_=document.querySelector('input[name="size"]:checked').value;
        var base_=document.querySelector('input[name="base"]:checked').value;
        wok.calculate(size_, base_ );
    })