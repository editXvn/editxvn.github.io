function decodeBase64(str) {
    try {
        return decodeURIComponent(escape(window.atob(str)));
    } catch (e) {
        console.error("Decode error:", e);
        return str;
    }
}
document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll('.info div span.encoded').forEach(el => {
        const decoded = decodeBase64(el.dataset.encoded);
        el.textContent = decoded;
    });
});
