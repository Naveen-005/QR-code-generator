var qr_url
function generate()
{  
    console.log(qr_url) ;
    qr_url= "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=";
    qr_url+=document.getElementById("content").value;
    document.getElementById("qr").src=qr_url;
}