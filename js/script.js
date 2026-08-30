const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

menuToggle.addEventListener("click", function () {
  mainNav.classList.toggle("is-open");
});

const cookieBanner = document.getElementById("cookieBanner");
const cookieAccept = document.getElementById("cookieAccept");
const cookieReject = document.getElementById("cookieReject");
const consent = localStorage.getItem("cookieConsent");

if (cookieBanner) {
  if (!consent) {
    cookieBanner.classList.remove("is-hidden");
  }

  if (consent === "granted") {
    gtag('consent', 'update', { analytics_storage: 'granted' });
  }

  cookieAccept.addEventListener("click", function () {
    localStorage.setItem("cookieConsent", "granted");
    gtag('consent', 'update', { analytics_storage: 'granted' });
    cookieBanner.classList.add("is-hidden");
  });

  cookieReject.addEventListener("click", function () {
    localStorage.setItem("cookieConsent", "denied");
    cookieBanner.classList.add("is-hidden");
  });
}