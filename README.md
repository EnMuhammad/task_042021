How to use 
import saba_script.js, after jquery on your html page.
use Sabafon_Phone_Len (Return boolean) to check if sabafon number.
then use Sabafon_GetType to get type as html

Example:
`$('.phone_check').on('keyup',function (){
let x = $(this);
if(x.Sabafon_Phone_Len()){
$('.phone_type').html(x.Sabafon_GetType());
}else{
$('.phone_type').html('Type phone number');
}
})`
![caption](Title.webm)

