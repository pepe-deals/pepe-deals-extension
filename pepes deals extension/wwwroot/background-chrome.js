chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {

    if (msg.action === "ObtenerHtml") {
        fetch(msg.enlace, { cache: "no-store" })
            .then(res => res.json())
            .then(data => sendResponse(data));

        return true; 
    }
});

chrome.runtime.onInstalled.addListener((details) => {
    if (details.reason === "install") {
        chrome.tabs.create({ url: chrome.runtime.getURL("welcome.html") });
    }
});

chrome.storage.local.get(['idioma', 'mostrarNoOficiales'], (result) => {
    console.debug('[pepe-deals] preferencias cargadas', result);
});