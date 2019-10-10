$(function(){
    $( ".form__custom" ).submit(function( event ) {
        var name = $("#name");
        var email = $("#email");
        var messages = $("#messages");


        if (!IsEmail(email.val())) {
            email.css({border:"2px solid #BE0707"});
            email.focus();
            return false;
        } else {
            $('.form__box').html('<br/><br/><div class="btn__ftext"><b>Спасибо за заявку!</b><br/> В ближайшее время мы свяжемся с Вами!</div><br/><br/>').css({
                maxWidth: "570px",
                height: "300px",
                backgroundColor: "#313131",
                borderRadius: "9px",
                padding: "10px 50px",
                color: "#ffffff",
                fontFamily: "A Futurica Lt Thin",
                fontSize: "32px",
                textAlign: "center",
            });
        }

        dataString = {
            'name' : name.val(),
            'email' : email.val(),
            'messages' : messages.val(),
            'title' : title,
        };
        return false;
        event.preventDefault();
    });

    function IsEmail(email) {
        var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        return regex.test(email);
    }
});
