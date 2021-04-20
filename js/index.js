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

// $('select[name="form-change"]').change(function() {
//     if ($(this).val() === "Add") {
//         $('#addCall').show();
//         $('#updateCall').hide();
//     } else {
//         $
//     }
// })