$('select[name="form-change"]').on('change', function () {
    const switchForms = $(this).val();
    switch (switchForms) {
        case 'Add':
            $('.updateCall').hide();
            $('.addCall').show();
            break;
        case 'Update':
            $('.updateCall').show();
            $('.AddCall').hide();
            break;
        default:
            $('.updateCall').hide();
            $('.AddCall').hide();
    }
});