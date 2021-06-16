function nama () {
    const ubah = document.querySelector(".isi")
    ubah.innerHTML = `<div class="foto">
    <img src="gambar.jpg" alt="">
</div>
<div class="bio">
    <table>
        <tr>
            <td class="cell">Nama</td>
            <td>: Zaky jamaluddin</td>
        </tr>
        <tr>
            <td class="cell">Kelas</td>
            <td>: TI - C Semester 3</td>
        </tr>
        <tr>
            <td class="cell">NIM</td>
            <td>: 2120190278</td>
        </tr>
        <tr>
            <td class="cell">Alamat</td>
            <td>: Balen, Bojonegoro</td>
        </tr>
        <tr>
            <td class="cell">Hobby</td>
            <td>: Bulu Tangkis</td>
        </tr>
    </table>
    <img src="ttd.png" class="ttd" alt="">
</div>`
}
function pendidikan () {
    const ubah = document.querySelector(".isi")
    ubah.innerHTML = `<table class="tabel-pendidikan">
    <tr>
        <td><img src="himati.png" width="90px" alt=""></td>
        <td class="pendidikan">
            Madrasah Ibtidaiyah <br>
            <b><big>MANBAUL HUDA SEKARAN</big></b> <BR>
            <small>2006 s/d 2012</small> </BR>
        </td>
    </tr>
    <tr>
        <td><img src="pkkmb.png" width="90px" alt=""></td>
        <td class="pendidikan">
            Madrasah Tsanawiyah <br>
            <b><big>MANBAUL HUDA SEKARAN</big></b> <BR>
            <small>2012 s/d 2015</small> </BR>
        </td>
    </tr>
    <tr>
        <td><img src="madin.png" width="90px" alt=""></td>
        <td class="pendidikan">
            Madrasah Aliyah <br>
            <b><big>MA ISLAMIYAH BALEN</big></b> <BR>
            <small>2012 s/d 2018</small> </BR>
        </td>
    </tr>
    <tr>
        <td><img src="unugiri.png" width="90px" alt=""></td>
        <td class="pendidikan">
            Perguruan Tinggi <br>
            <b><big>UNU SUNAN GIRI BOJONEGORO</big></b> <BR>
            <small>2019 s/d . . .</small> </BR>
        </td>
    </tr>
</table>`
}
function organisasi () {
    const ubah = document.querySelector(".isi")
    ubah.innerHTML = `<table>
    <tr>
        <td>
            <div class="wadah">
                <img class="logo" src="himati.png" width="100px" alt="">
                <h5>HIMA TI UNUGIRI</h5>
            </div>
        </td>
        <td>
            <div class="wadah">
                <img class="logo" src="himati.png" width="100px" alt="">
                <h5>HIMA TI UNUGIRI</h5>
            </div>
        </td>
        <td>
            <div class="wadah">
                <img class="logo" src="himati.png" width="100px" alt="">
                <h5>HIMA TI UNUGIRI</h5>
            </div>
        </td>
    </tr>
    <tr>
        <td>
            <div class="wadah">
                <img class="logo" src="himati.png" width="100px" alt="">
                <h5>HIMA TI UNUGIRI</h5>
            </div>
        </td>
        <td>
            <div class="wadah">
                <img class="logo" src="himati.png" width="100px" alt="">
                <h5>HIMA TI UNUGIRI</h5>
            </div>
        </td>
    </tr>
</table>`
}
function kontak () {
    const ubah = document.querySelector(".isi")
    ubah.innerHTML = `<div class="kanan">
    <label for="nama">Nama</label><br>
    <input type="text" id="nama"><br><br>
    <label for="email">Email</label><br>
    <input type="email" id="email"><br><br>
    <label for="pesan">Pesan</label><br>
    <textarea name="pesan" id="pesan" >
      
    </textarea><br>
    <div class="submit">
        KIRIM
    </div>
</div>`
}