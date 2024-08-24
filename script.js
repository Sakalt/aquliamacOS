document.addEventListener('DOMContentLoaded', function() {
    openApp('finder'); // 初期表示でFinderを表示

    function openApp(appId) {
        const apps = document.querySelectorAll('.app');
        apps.forEach(app => app.style.display = 'none'); // すべてのアプリを隠す
        document.getElementById(appId).style.display = 'block'; // 指定したアプリを表示
    }

    // 電卓機能
    function calcInput(value) {
        const display = document.getElementById('calc-display');
        display.value += value;
    }

    function calcClear() {
        const display = document.getElementById('calc-display');
        display.value = '';
    }

    function calcCalculate() {
        const display = document.getElementById('calc-display');
        try {
            display.value = eval(display.value);
        } catch (e) {
            display.value = 'Error';
        }
    }

    // ギャラリーの画像切り替え
    function nextImage() {
        const img = document.getElementById('gallery-img');
        const images = ['gallery-image1.jpg', 'gallery-image2.jpg']; // 画像リスト
        let currentIndex = images.indexOf(img.src.split('/').pop());
        currentIndex = (currentIndex + 1) % images.length;
        img.src = images[currentIndex];
    }

    // 設定の背景変更
    function changeBackground() {
        document.body.style.backgroundColor = '#a0a0a0'; // 新しい背景色
    }

    window.openApp = openApp;
    window.calcInput = calcInput;
    window.calcClear = calcClear;
    window.calcCalculate = calcCalculate;
    window.nextImage = nextImage;
    window.changeBackground = changeBackground;
});
