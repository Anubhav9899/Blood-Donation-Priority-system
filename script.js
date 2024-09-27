document.getElementById("clientBtn").addEventListener("click", function () {
  document.getElementById("donorSection").classList.add("hidden");
  document.getElementById("clientSection").classList.remove("hidden");
  document.getElementById("idVerification").classList.remove("hidden");
});

document.getElementById("donorBtn").addEventListener("click", function () {
  document.getElementById("clientSection").classList.add("hidden");
  document.getElementById("donorSection").classList.remove("hidden");
  document.getElementById("idVerification").classList.remove("hidden");
});

document.getElementById("verifyIDBtn").addEventListener("click", function () {
  const userID = document.getElementById("userID").value;
  const verificationResult = document.getElementById("verificationResult");

  if (userID) {
    verificationResult.textContent = "ID Verified: " + userID;
    verificationResult.style.color = "green";
  } else {
    verificationResult.textContent = "Please enter a valid ID.";
    verificationResult.style.color = "red";
  }
});

document.getElementById("clientForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const bloodType = document.getElementById("clientBloodType").value;
  const medicalCondition = document.getElementById("medicalHistory").value;
  const address = document.getElementById("address").value;

  const clientResult = document.getElementById("clientResult");
  clientResult.innerHTML = `Request Submitted: Blood Type: ${bloodType}, Condition: ${medicalCondition}, Address: ${address}.<br>`;
  clientResult.innerHTML += `Nearest Hospital: ${getRandomHospital()}`;
});

document.getElementById("donorForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const donorName = document.getElementById("donorName").value;
  const donorBloodType = document.getElementById("donorBloodType").value;
  const donorAddress = document.getElementById("donorAddress").value;

  const donorResult = document.getElementById("donorResult");
  donorResult.innerHTML = `Donor Registered: Name: ${donorName}, Blood Type: ${donorBloodType}, Address: ${donorAddress}.<br>`;
  donorResult.innerHTML += `Nearest Hospital: ${getRandomHospital()}`;
});

// Function to return a random hospital
function getRandomHospital() {
  const hospitals = [
    "Apollo Hospital, Sarita Vihar",
    "Fortis Hospital, Shalimar Bagh",
    "Max Super Specialty Hospital, Saket",
    "AIIMS, Ansari Nagar",
    "Medanta Hospital, Gurgaon",
    "Safdarjung Hospital, Safdarjung Enclave",
  ];
  return hospitals[Math.floor(Math.random() * hospitals.length)];
}
