const overlayBackgroundColor = "#FFFFFF"; //#0072FF
const progressBarFillColor = "#e69926";  //#FFFFFF
const progressBarBackgroundColor = "";
const progressBarBorderColor = "";
const backgroundFileName = "";



//set..
const buildUrl = `${window.baseUrl}/Build`; // "Build";
console.log(window.baseUrl);

const loaderUrl = buildUrl + "/255f2b5875899e334101eb9ff3c0b277.loader.js";
const config = {
    dataUrl: buildUrl + "/9241caaced77caa5625fc95fb1d3ce43.data.unityweb",
    workerUrl: buildUrl + "/9241caaced77caa5625fc95fb1d3ce43.data.unityweb",
    frameworkUrl: buildUrl + "/80e1d05b105137f4fabe796340ad4f91.framework.js.unityweb",
    codeUrl: buildUrl + "/69842a304dfcdadfae1577e4de5bedc0.wasm.unityweb",
    // #if MEMORY_FILENAME
    //   memoryUrl: buildUrl + "/",
    // #endif
    // #if SYMBOLS_FILENAME
    //   symbolsUrl: buildUrl + "/",
    // #endif
    streamingAssetsUrl: "StreamingAssets",
    companyName: "Libfront",
    productName: "Grandfather with AK: Pursuit on Car",
    productVersion: "1.5.8",
};

const container = document.querySelector("#unity-container");
const canvas = document.querySelector("#unity-canvas");
const loadingCover = document.querySelector("#loading-cover");
const progressBarEmpty = document.querySelector("#unity-progress-bar-empty");
const progressBarFull = document.querySelector("#unity-progress-bar-full");
const spinner = document.querySelector('.spinner');

if (overlayBackgroundColor !== " " && overlayBackgroundColor !== "") {
    canvas.style.background = overlayBackgroundColor;
}

if (progressBarFillColor !== " " && progressBarFillColor !== "") {
    progressBarFull.style.background = progressBarFillColor;
}

if (progressBarBackgroundColor !== " " && progressBarBackgroundColor !== "") {
    progressBarEmpty.style.background = progressBarBackgroundColor;
}

if (progressBarBorderColor !== " " && progressBarBorderColor !== "") {
    progressBarEmpty.style.border.color = progressBarBorderColor;
}

if (backgroundFileName !== " " && backgroundFileName !== "") {
    canvas.style.background = "url('" + backgroundFileName + "') center / cover";
}

if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
    container.className = "unity-mobile";
}

// #if BACKGROUND_FILENAME
// canvas.style.background = "url('" + buildUrl + "/') center / cover";
// #endif

loadingCover.style.display = "";

// Выключаем появление меню при правом клике мыши
document.addEventListener('contextmenu', event => event.preventDefault());

// Возвращаем фокус, если кликнули по экрану
function FocusGame() {
    window.focus();
    canvas.focus();
}

window.addEventListener('pointerdown', () => {
    FocusGame();
});
window.addEventListener('touchstart', () => {
    FocusGame();
});

const unityLoader = document.createElement("script");
unityLoader.src = loaderUrl;
unityLoader.onload = async () => {
    createUnityInstance(canvas, config, (progress) => {
        spinner.style.display = "none";
        progressBarEmpty.style.display = "";
        progressBarFull.style.width = `${100 * progress}%`;
    }).then((unityInstance) => {
        window.unityInstance = unityInstance;
        loadingCover.style.display = "none";
    }).catch((message) => {
        alert(message);
    });
};
document.body.appendChild(unityLoader);

document.addEventListener("pointerdown", () => {
    container.focus();
    window.focus();
    canvas.focus();
});