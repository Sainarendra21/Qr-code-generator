function generateqr() {
  var selectedSize = document.getElementById("size").value;
  var qrCodeText = document.getElementById("qrcodetext").value;
  var apiUrl = `https://chart.googleapis.com/chart?chs=${selectedSize}x${selectedSize}&cht=qr&chl=${encodeURIComponent(
    qrCodeText
  )}`;
  var qrCodeImage = document.getElementById("img");
  qrCodeImage.src = apiUrl;

  // Show the Save QR Code button
  var saveButton = document.getElementById("saveButton");
  saveButton.style.display = "block";
  saveButton.addEventListener("click", saveQRCode);
}

function saveQRCode() {
  var canvas = document.createElement("canvas");
  var ctx = canvas.getContext("2d");
  var qrCodeImage = document.getElementById("img");
  canvas.width = qrCodeImage.width;
  canvas.height = qrCodeImage.height;

  ctx.drawImage(qrCodeImage, 0, 0, canvas.width, canvas.height);

  canvas.toBlob(function(blob) {
    var link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "qr_code.png";
    link.click();

    // Clean up the object URL after download
    URL.revokeObjectURL(link.href);
  }, "image/png");
}
