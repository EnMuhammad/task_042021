$(function () {
    $.fn.Sabafon_Phone_Len = function (){
         let number = $(this).val();
        if(number.length === 9){
            return true;
        }else{
            return false;
        }
    }
    $.fn.Sabafon_GetType = function (){
        let number = $(this).val().toString().substring(2);
        let counts = 0;
        let collation = [];
        let d = [];
        for(let i =0;i < number.length;i +=1){
            if(number.charAt(i) === '8'){
                collation.push('X');
            }else if(number.charAt(i) === '0'){
                collation.push('Y');
            }else{
                collation.push(number.charAt(i));
            }
        }
       let YX =  (collation.filter(x => x === 'X').length) + (collation.filter(x => x=== 'Y').length);
        if(YX > 3){
            return 'Gold';
        }else{
            return 'Silver';
        }
    }

$('.phone_check').on('keyup',function (){
    let x = $(this);
    if(x.Sabafon_Phone_Len()){
      $('.phone_type').html(x.Sabafon_GetType());
    }else{
        $('.phone_type').html('Type phone number');
    }
})
});
function NumberChecker(){

}