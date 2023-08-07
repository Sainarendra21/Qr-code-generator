function generateqr() {
  // Get the selected size from the dropdown
  var selectedSize = document.getElementById("size").value;

  // Get the text input from the textarea
  var qrCodeText = document.getElementById("qrcodetext").value;

  // Construct the API URL to generate the QR code
  var apiUrl = `https://chart.googleapis.com/chart?chs=${selectedSize}x${selectedSize}&cht=qr&chl=${encodeURIComponent(
    qrCodeText
  )}`;

  // Get the img element by id
  var qrCodeImage = document.getElementById("img");

  // Set the src attribute of the img element to the generated QR code URL
  qrCodeImage.src = apiUrl;
}
