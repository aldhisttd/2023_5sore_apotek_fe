$(document).ready(function () {
    // api read
    $.ajax({
        type: "GET",
        url: host + "read_obat.php",
        dataType: "json",
        async: true,
        cache: false,
        contentType: false,
        processData: false,
        success: function (data) {
            var dataObat = data.body.data;
            for (var i = 0; i < dataObat.length; i++) {
                $("#tableObat").append(
                    `
                    <tr>
                        <td>` +
                        (i + 1) +
                        `</td>
                        <td>
                            <img src="` +
                        host +
                        dataObat[i].gambar +
                        `" width="100" />
                        </td>
                        <td>` +
                        dataObat[i].kode +
                        `</td>
                        <td>` +
                        dataObat[i].obat +
                        `</td>
                        <td>` +
                        dataObat[i].supplier +
                        `</td>
                        <td>` +
                        dataObat[i].kategori +
                        `</td>
                        <td>` +
                        dataObat[i].harga +
                        `</td>
                        <td>
                            <button id="hapus" class="btn btn-danger" value="` +
                        dataObat[i].id +
                        `">
                            Hapus
                            </button>
                            <button id="edit" class="btn btn-primary">
                                <a class="text-light" href="?page=obat_edit&id=` +
                        dataObat[i].id +
                        `">Edit</a>
                            </button>
                        </td>
                    </tr>
                    `
                );
            }
        },
    });

    // api hapus
    $(document).on("click", "#hapus", function () {
        var kode = $(this).val();

        if (confirm("Yakin ingin hapus data dengan kode=" + kode + "?")) {
            $.ajax({
                type: "POST",
                url: host + "hapus_obat.php",
                data: { kode: kode },
                dataType: "json",
                async: true,
                cache: false,
                contentType: false,
                processData: false,
                success: function (response) {
                    alert(response.msg);
                },
            });
        }
    });
});