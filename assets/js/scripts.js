//Notification
$(".alert").delay(30000).fadeOut(10000);

$(document).ready(function () {
    // $(":submit").attr("disabled", true);

    $('.wizard-content-details').show(500);
    $('.wizard-content-instructions').hide();
    $('.wizard-content-calculator').hide();
    $('.wizard-content-login').hide();
    $('.wizard-content-add').hide();

    $('.wizard-heading-details-after').hide();
    $('.wizard-heading-instructions-active').hide();
    $('.wizard-heading-instructions-after').hide();
    $('.wizard-heading-calculations-active').hide();
    $('.wizard-heading-calculations-after').hide();
    $('.wizard-heading-login-after').hide();
    $('.wizard-heading-login-active').hide();
    $('.wizard-heading-add-after').hide();
    $('.wizard-heading-add-active').hide();

    $('.next-details').click(function () {
        $('.wizard-content-details').hide();
        $('.wizard-content-instructions').show(1500);

        $('.wizard-heading-details-active').hide();
        $('.wizard-heading-details-after').show();
        $('.wizard-heading-instructions-active').show();
        $('.wizard-heading-instructions-before').hide();
    });

    $('.next-instructions').click(function () {
        $('.wizard-content-instructions').hide();
        $('.wizard-content-calculator').show(1500);

        $('.wizard-heading-instructions-active').hide();
        $('.wizard-heading-instructions-after').show();
        $('.wizard-heading-calculations-active').show();
        $('.wizard-heading-calculations-before').hide();

    });

    $('.next-add').click(function () {
        $('.wizard-content-add').hide();
        $('.wizard-content-login').show(1500);

        $('.wizard-heading-add-active').hide();
        $('.wizard-heading-add-after').show();
        $('.wizard-heading-login-active').show();
        $('.wizard-heading-login-before').hide();

    });

    $('.next-calculator').click(function () {
        $('.wizard-content-details').hide();
        $('.wizard-content-instructions').hide();
        $('.wizard-content-calculator').hide();
        $('.wizard-content-add').show(1500);

        $('.wizard-heading-calculations-active').hide();
        $('.wizard-heading-calculations-after').show();
        // $('.wizard-heading-add-after').show();
        $('.wizard-heading-add-before').hide();
        $('.wizard-heading-login-before').show();
        $('.wizard-heading-add-active').show();

    });

    $('.wizard-heading-details-after').click(function () {
        $('.wizard-content-details').slideToggle('slow');
        $('.wizard-content-add').hide();
        $('.wizard-content-calculator').hide();
        $('.wizard-content-login').hide();
        $('.wizard-content-instructions').hide();
        $('.wizard-content-calculator').hide();
    });

    $('.wizard-heading-instructions-after').click(function () {
        $('.wizard-content-instructions').slideToggle('slow');
        $('.wizard-content-add').hide();
        $('.wizard-content-details').hide();
        $('.wizard-content-calculator').hide();
        $('.wizard-content-login').hide();
        $('.wizard-content-calculator').hide();
    });

    $('.wizard-heading-calculations-after').click(function () {
        $('.wizard-content-calculator').slideToggle('slow');
        $('.wizard-content-add').hide();
        $('.wizard-content-login').hide();
        $('.wizard-content-details').hide();
        $('.wizard-content-instructions').hide();
    });

    $('.wizard-heading-add-after').click(function () {
        $('.wizard-content-add').slideToggle('slow');
        $('.wizard-content-login').hide();
        $('.wizard-content-details').hide();
        $('.wizard-content-calculator').hide();
        $('.wizard-content-instructions').hide();
    });

    $('.wizard-heading-login-after').click(function () {
        $('.wizard-content-login').slideToggle('slow');
    });

});
// Check promotional amount
function checkAmount() {
    var promoAmount = document.getElementById("promoCode").value;

    if (promoAmount) {
        $.ajax({
            type: 'post',
            url: 'php/percentage.php',
            data: {
                promoAmount: promoAmount,
            },
            success: function (response) {
                // calculator()
                var amnt = response;
                $('#promoAmount').html(amnt);
                if (response == "Promotional code exists") {
                    return true;
                } else {
                    return false;
                }
            }
        });


    } else {
        $('#promoAmount').html("");
        return false;
    }

}
// Check promotional amount

var forceSubmit = false;

function calculator(idseli) {

    // Hish School
    var acadlvl = ""; //Academic level
    var typ = ""; //Type Of Work
    var num = ""; //Number Of pages
    var deadline = ""; //date
    var sp = ""; // spacing
    var specificWriter = ""; // specific writer
    var digitalSources = ""; // Digital sources
    var promoCode = ""; // Promotional Code
    var promoCodes = $('#promoCode').val();
    $.post("php/percentage.php", {
        "promoCode": promoCodes
    }, function (data) {
        //alert(data);
        if (idseli == "#typeOfWork") {


            typ = $(idseli + " option:selected").val();
            acadlvl = document.querySelector('input[name="level"]:checked').value;
            num = $("#pages").val();
            deadline = $("#deadline").val();
            digitalSources = $("#digitalSources").val();
            sp = document.querySelector('input[name="spacing"]:checked').value;
            if ($("#specificWriter").val() == '') {
                specificWriter = 0;
            } else {
                specificWriter = 5;
            }
            if (data == 1) {
                promoCode = parseInt(data);
            } else {
                promoCode = (1 - parseInt(data) / 100);
            }




        }
        if (idseli == "#deadline") {
            deadline = $(idseli + " option:selected").val();
            acadlvl = document.querySelector('input[name="level"]:checked').value;
            num = $("#pages").val();
            typ = $("#typeOfWork").val();
            digitalSources = $("#digitalSources").val();
            sp = document.querySelector('input[name="spacing"]:checked').value;
            if ($("#specificWriter").val() == '') {
                specificWriter = 0;
            } else {
                specificWriter = 5;
            }
            if (data == 1) {
                promoCode = parseInt(data);
            } else {
                promoCode = (1 - parseInt(data) / 100);
            }


        }
        if (idseli == "#pages") {
            num = $(idseli + " option:selected").val();
            deadline = $("#deadline").val();
            acadlvl = document.querySelector('input[name="level"]:checked').value;
            typ = $("#typeOfWork").val();
            digitalSources = $("#digitalSources").val();
            sp = document.querySelector('input[name="spacing"]:checked').value;
            if ($("#specificWriter").val() == '') {
                specificWriter = 0;
            } else {
                specificWriter = 5;
            }
            if (data == 1) {
                promoCode = parseInt(data);
            } else {
                promoCode = (1 - parseInt(data) / 100);
            }


        }
        if (idseli == "#spacing") {
            sp = document.querySelector('input[name="spacing"]:checked').value;
            deadline = $("#deadline").val();
            acadlvl = document.querySelector('input[name="level"]:checked').value;
            typ = $("#typeOfWork").val();
            digitalSources = $("#digitalSources").val();
            num = $("#pages").val();
            if ($("#specificWriter").val() == '') {
                specificWriter = 0;
            } else {
                specificWriter = 5;
            }
            if (data == 1) {
                promoCode = parseInt(data);
            } else {
                promoCode = (1 - parseInt(data) / 100);
            }

        }
        if (idseli == "#level") {
            acadlvl = document.querySelector('input[name="level"]:checked').value;
            deadline = $("#deadline").val();
            sp = document.querySelector('input[name="spacing"]:checked').value;
            typ = $("#typeOfWork").val();
            num = $("#pages").val();
            digitalSources = $("#digitalSources").val();
            if ($("#specificWriter").val() == '') {
                specificWriter = 0;
            } else {
                specificWriter = 5;
            }
            if (data == 1) {
                promoCode = parseInt(data);
            } else {
                promoCode = (1 - parseInt(data) / 100);
            }


        }
        if (idseli == "#specificWriter") {
            acadlvl = document.querySelector('input[name="level"]:checked').value;
            deadline = $("#deadline").val();
            sp = document.querySelector('input[name="spacing"]:checked').value;
            typ = $("#typeOfWork").val();
            num = $("#pages").val();
            digitalSources = $("#digitalSources").val();
            if ($("#specificWriter").val() == '') {
                specificWriter = 0;
            } else {
                specificWriter = 5;
            }
            if (data == 1) {
                promoCode = parseInt(data);
            } else {
                promoCode = (1 - parseInt(data) / 100);
            }

        }
        if (idseli == "#promoCode") {
            acadlvl = document.querySelector('input[name="level"]:checked').value;
            deadline = $("#deadline").val();
            sp = document.querySelector('input[name="spacing"]:checked').value;
            typ = $("#typeOfWork").val();
            num = $("#pages").val();
            digitalSources = $("#digitalSources").val();
            if ($("#specificWriter").val() == '') {
                specificWriter = 0;
            } else {
                specificWriter = 5;
            }
            if (data == 1) {
                promoCode = parseInt(data);
            } else {
                promoCode = (1 - parseInt(data) / 100);
            }


        }
        if (idseli == "#digitalSources") {
            digitalSources = $(idseli + " option:selected").val();
            acadlvl = document.querySelector('input[name="level"]:checked').value;
            deadline = $("#deadline").val();
            sp = document.querySelector('input[name="spacing"]:checked').value;
            typ = $("#typeOfWork").val();
            num = $("#pages").val();
            if ($("#specificWriter").val() == '') {
                specificWriter = 0;
            } else {
                specificWriter = 5;
            }
            if (data == 1) {
                promoCode = parseInt(data);
            } else {
                promoCode = (1 - parseInt(data) / 100);
            }

        }

        result1 = parseFloat(promoCode) * parseFloat(typ) * parseFloat(acadlvl) * parseFloat(num) * parseFloat(deadline) * parseFloat(sp) + parseFloat(specificWriter) + parseFloat(digitalSources) + parseFloat('2.0');

        result = parseFloat(result1).toFixed(0);
        //alert(result);
        $("#amount").attr("value", result);
        $("#amount2").attr("value", result);
        $("#grand_total").attr("value", result);
        $("#grand_total2").attr("value", result);

    });

}

function randomString() {
    var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    //abcdefghiklmnopqrstuvwxyz
    //ABCDEFGHIJKLMNOPQRSTUVWXYZ
    var string_length = 8;
    var randomstring = '';
    for (var i = 0; i < string_length; i++) {
        var rnum = Math.floor(Math.random() * chars.length);
        randomstring += chars.substring(rnum, rnum + 1);
    }
    document.order.regId.value = randomstring;
}

// Check email
function checkemail() {
    var email = document.getElementById("email").value;

    if (email) {
        $.ajax({
            type: 'post',
            url: 'php/checkdata.php',
            data: {
                user_email: email,
            },
            success: function (response) {
                $('#email_status').html(response);
                if (response == "email is ok") {
                    return true;
                } else {
                    return false;
                }
            }
        });


    } else {
        $('#email_status').html("");
        return false;
    }

}
// Check email

// password
$(function () {
    $("#password_Match").keyup(function () {
        var password = $("#password").val();
        $("#divCheckPasswordMatch").html(password == $(this).val() ? "<span style='color: #0f0;'>Passwords match.</span>" : "<span style='color: #f00;'>Passwords do not match!</span>");
    });
});

// Returning customer
function checkemail2() {
    var email2 = document.getElementById("email2").value;

    if (email2) {
        $.ajax({
            type: 'post',
            url: 'php/checklogin.php',
            data: {
                user_email: email2,
            },
            success: function (response) {
                $('#email2_status').html(response);
                if (response == "email is ok") {
                    return true;
                } else {
                    return false;
                }
            }
        });


    } else {
        $('#email_status').html("");
        return false;
    }

}
// Returning customer

function check_password_safety(password) {

    var msg = "";
    var points = password.length;
    var password_info = document.getElementById('password_info');

    var has_letter = new RegExp("[a-z]");
    var has_caps = new RegExp("[A-Z]");
    var has_numbers = new RegExp("[0-9]");
    var has_symbols = new RegExp("\\W");

    if (has_letter.test(password)) {
        points += 4;
    }
    if (has_caps.test(password)) {
        points += 4;
    }
    if (has_numbers.test(password)) {
        points += 4;
    }
    if (has_symbols.test(password)) {
        points += 4;
    }


    if (points >= 24) {
        msg = '<span style="color: #0f0;">Your password is strong!</span>';
    } else if (points >= 16) {
        msg = '<span style="color: #00f;">Your password is medium!</span>';
    } else if (points >= 12) {
        msg = '<span style="color: #fa0;">Your password is weak!</span>';
    } else {
        msg = '<span style="color: #f00;">Your password is very weak!</span>';
    }

    password_info.innerHTML = msg;
}

// Check password
function checkpass() {
    var email2 = document.getElementById("email2").value;
    var password2 = document.getElementById("password2").value;
    if (password2) {
        $.ajax({
            type: 'post',
            url: 'php/user_login.php',
            data: {
                user_email: email2,
                user_password: password2,
            },
            success: function (response) {
                $('#pass_status').html(response);
                if (response == "password is ok") {
                    return true;
                } else {
                    return false;
                }
            }
        });


    } else {
        $('#email_status').html("");
        return false;
    }

}
// paypal skrill checker
$(document).ready(function () {
    $(".cb-enable").click(function () {
        var parent = $(this).parents('.switch');
        $('.cb-disable', parent).removeClass('selected');
        $(this).addClass('selected');
        $('.checkbox', parent).attr('checked', true);
    });
    $(".cb-disable").click(function () {
        var parent = $(this).parents('.switch');
        $('.cb-enable', parent).removeClass('selected');
        $(this).addClass('selected');
        $('.checkbox', parent).attr('checked', false);
    });
});

$(document).ready(function () {
    $('[data-toggle="tooltip"]').tooltip();
});

// Check writer
function checkwriter() {
    var writer = document.getElementById("specificWriter").value;

    if (writer) {
        $.ajax({
            type: 'post',
            url: 'php/writer.php',
            data: {
                writer_id: writer,
            },
            success: function (response) {
                $('#chooseWriter').html(response);
                if (response == "writer Id exists..") {
                    return true;
                } else {
                    return false;
                }
            }
        });


    } else {
        $('#chooseWriter').html("");
        return false;
    }

}
// Check writer

// Check promotional code
function checkcode() {
    var promoCode = document.getElementById("promoCode").value;

    if (promoCode) {
        $.ajax({
            type: 'post',
            url: 'php/checkcode.php',
            data: {
                promoCode: promoCode,
            },
            success: function (response) {
                $('#checkcode').html(response);
                if (response == "Promotional code exists") {
                    return true;
                } else {
                    return false;
                }
            }
        });


    } else {
        $('#checkcode').html("");
        return false;
    }

}
// Check promotional code
