$('#formSupplier').submit(function(e){
    e.preventDefault();
    var formData = new FormData(this);
    $.ajax({
        type: 'POST',
        url: host+"input_supplier.php",
        data: formData,
        cache: false,
        contentType: false, 
        processData: false, 
        dataType: 'json',
        success: (result) => {
            alert(result.msg);
            location.href = host_fe + "admin/?page=supplier_data";
        },
    });
})