

function show_amount(){
            var tip_box=document.getElementById("tip-amount");
            var bill_amount=document.getElementById("bill-amount");
            var number_of_guests=document.getElementById("number-of-guests");
            var service_quality=document.getElementById("service-quality");
            var tip_amount=(bill_amount.value*service_quality.value)/number_of_guests.value;
            
            //window.alert('asdfasdfsd');
          if (isNaN(tip_amount)) {
            tip_amount=0;
            
            
          }
            tip_amount=tip_amount.toFixed(2);
            tip_box.innerHTML=tip_amount;          
            bill_amount.value="";
            number_of_guests.value="";
            service_quality.value="";
           
        tip_box.innerHTML='Tip £'+tip_amount+' Each';          
            
            tip_box.className='show'; 
  
            setTimeout(function(){tip_box.className=tip_box.className.replace("show","");},3000);
    
}
