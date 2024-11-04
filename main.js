document.getElementById("open-share-mobile").addEventListener('click', function(event) {
    document.getElementById("author-section-mobile").classList.add("hidden");
    document.getElementById("share-section").classList.remove("hidden");
});

document.getElementById("close-share").addEventListener('click', function(event) {
    document.getElementById("author-section-mobile").classList.remove("hidden");
    document.getElementById("share-section").classList.add("hidden");
});

document.getElementById("open-share-desktop").addEventListener('click', function(event) {
    document.getElementById("share-pointer").classList.toggle("hidden");
    document.getElementById("share-section").classList.toggle("hidden");
});