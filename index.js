const crow_image = document.getElementById("crowupload").addEventListener("change", (event) => {handleImageUpload(event)});

function handleImageUpload(event) {
  const files = event.target.files;
  const formData = new FormData();
  formData.append("image", files[0]);
  console.log(formData)

  fetch("https://asia-northeast1-croworraven.cloudfunctions.net/crows", {
    method: "POST",
    body: formData,
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error(error);
    });
};