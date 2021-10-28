$(function(){
    var $slider = $('.slider')
    var $slide_image = $slider.find('.slide-images')
    var current_image = 1
    
    setInterval(function(){
        $slide_image.animate({'margin-left': '-=60vw'}, 1000, function(){
            current_image++;
            if(current_image == 4){
                current_image = 1;
                $slide_image.css('margin-left', '0px')
            }
        })
    }, 3000)

    var payment = document.getElementById('payment-method').value;
    if(payment == '1'){
        $('#visa-detail').slideDown(500)
    }else{
        $('#visa-detail').slideUp(0)
    }
})

function validateContact(){
    var name = document.getElementById("name-field").value;
    var message = document.getElementById("message").value;
    var email = document.getElementById("email").value;
    if(name == ""){
        alert("Name cannot be empty!");
        return false;
    }else if(email.endsWith('.com') == false){
        alert("Email cannot be empty and must ends with '.com'!");
        return false;
    }else if(message.length <= 5){
        alert("Message must be more than FIVE characters!");
        return false;
    }
}

function getPaymentType(){
    var payment = document.getElementById('payment-method').value;
    console.log(payment)
    if(payment == '1'){
        $('#visa-detail').slideDown(500)
    }else{
        $('#visa-detail').slideUp(500)
    }
}

function validateIdentity(){
    var name = document.getElementById("name-field").value;
    var email = document.getElementById("email").value;
    var city = document.getElementById("city").value;
    var address = document.getElementById("address").value;
    var cardNumber = document.getElementById("card-number").value;
    var cardValidity = document.getElementById("card-validity").value;
    var cardCvv = document.getElementById("card-cvv").value;
    var agreement = document.getElementById("agree-box").checked;

    var payment = document.getElementById('payment-method').value;
    if(name == ""){
        alert("Name cannot be empty!");
        return false;
    }else if(email.endsWith('.com') == false){
        alert("Email cannot be empty and must ends with '.com'!");
        return false;
    }else if(city == ""){
        alert("City cannot be empty!");
        return false;
    }else if(!address.includes('street')){
        alert("Address must contain 'street' word!");
        return false;
    }else if(payment == "1"){
        if(isNaN(cardNumber) || cardNumber == ""){
            alert("Card Number cannot be empty and must in number!");
            return false;
        }else if(validDate() == false){
            alert("Card Validity must not be empty and valid!");
            return false;
        }else if(isNaN(cardCvv) || cardCvv == ""){
            alert("CVV cannot be empty and must in number!");
            return false;
        }
    }
    if(agreement == false){
        alert("Terms and Condition must be agreed!");
        return false;
    }
}

function validDate(){
    var x = document.getElementById("card-validity").value;
    var d = new Date()
    if(x.substring(0, 4) < d.getFullYear()){
        console.log('n1');
        return false
    }else{
        console.log('y1');
    }
    if(x.substring(5, 8) < d.getMonth()+1){
        console.log('n2');
        return false
    }else{
        console.log('y2');
    }
    return true;
}