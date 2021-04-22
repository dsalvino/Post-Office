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

//show packages
$(document).ready(function () {
    var API_URL = "https://dw5ii1jbse.execute-api.us-east-2.amazonaws.com/test/list-packages";
    $.ajax({
        url: API_URL, success: function (res) {
            for (var i = 0; i < res.length; i++) {
                $("#package-table").append("<tr>");
                for (var j = 0; j < res[i].length; j++)
                    $("#package-table tr:last").append("<td>" + res[i][j] + "</td>");
                $("#package-table").append("</tr>")
            }
        }
    });
});

//po viewer
$(document).ready(function () {
    var API_URL = "https://dw5ii1jbse.execute-api.us-east-2.amazonaws.com/test/post-offices";
    $.ajax({
        url: API_URL, success: function (res) {
            for (var i = 0; i < res.length; i++) {
                $("#post-office-table").append("<tr>");
                for (var j = 0; j < res[i].length; j++)
                    $("#post-office-table tr:last").append("<td>" + res[i][j] + "</td>");
                $("#post-office-table tr:last").append("<td><a href=\'./showpackages.html?id=" + res[i][0] + "\'>" + "Show Packages" + "</a></td>")
                $("#post-office-table").append("</tr>")
            }
        }
    });
});
