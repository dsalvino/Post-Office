var API_URL = "https://i645of8oc3.execute-api.us-east-2.amazonaws.com/Beta/customers";

$('select[name="form-change"]').on('change', function () {
    const switchForms = $(this).val();
    switch (switchForms) {
        case 'Add':
            $('.addCall').show();
            $('.updateCall').hide();
            break;
        case 'Update':
            $('.addCall').hide();
            $('.updateCall').show();
            break;
        default:
            $('.updateCall').hide();
            $('.AddCall').hide();
    }
});

$("#customer-form").on("submit", function (e) {
    $.ajax({
        type: 'POST',
        url: API_URL,
        data: $("#customer-form").serialize(),
        datatype: 'json',
        success: function (data) {
            alert($("#customer-form").serialize());
        }
    });
    e.preventDefault();
});