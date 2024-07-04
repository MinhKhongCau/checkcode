// -- quyery form

// confirm form in to google sheet
document.querySelector('.email-form').onsubmit = function (e) {
    e.preventDefault();
    // get element 
    var fullNameOj = document.querySelector('input[name="name"]');
    var  phoneOj = document.querySelector('input[name="phone"]');
    var emailOj = document.querySelector('input[name="email"]');
    var text_formOj = document.querySelector('textarea[name ="message"]');

    var fullName = fullNameOj.value;
    var phone = phoneOj.value;
    var email = emailOj.value;
    var text_form = text_formOj.value;

    var msgOj = document.querySelector('.is-success');
    // check value not space
    var items = document.querySelectorAll('.required');
    if (items.length > 0) {
        for (var item of items) {
            item.innerHTML = '';
        }
    }
    var error = {};
    if (fullName == "") {
        error['fullname'] = "Không được để trống";
        fullNameOj.parentElement.querySelector('.required').innerHTML = `<div class="error-message">Họ và tên không được để trống</div>`;
    }
    if (phone == "") {
        error['phone'] = "Không được để trống";
        phoneOj.parentElement.querySelector('.required').innerHTML = `<div class="error-message">Số điện thoại không được để trống</div>`;
    }
    if (email == "") {
        error['email'] = "Không được để trống";
        emailOj.parentElement.querySelector('.required').innerHTML = `<div class="error-message">Email không được để trống</div>`;
    }
    // check to confirm form
    if (Object.keys(error).length == 0) {
        var data  = {
            'entry.726960525':email,
            'entry.1684352988':phone,
            'entry.654110982':fullName,
            'entry.1132851816': text_form
        }

        let convert_data_to_string = new URLSearchParams(data);
        convert_data_to_string = convert_data_to_string.toString();
        
        const xhr = new XMLHttpRequest();
        xhr.open("POST", "https://docs.google.com/forms/u/1/d/e/1FAIpQLSew79ueTRWlIqH7ewPX0iH14af3zRVnobDOtT0_o-2l7amRJA/formResponse", true);

        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.send(convert_data_to_string);

        document.querySelector('.require').innerHTML = `<div class="sent-message">Compelete</div>`
        
        fullNameOj.value = '';
        phoneOj.value = '';
        emailOj.value = '';
        text_formOj.value = '';
    }
}

// -- end query form 