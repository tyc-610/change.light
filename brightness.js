window.onload = function() {  
    const img = document.getElementById('sourceImage');  
    const canvas = document.getElementById('canvas');  
    const ctx = canvas.getContext('2d');  
    const slider = document.getElementById('brightnessSlider');  
  
    // 图片加载完成后，将其绘制到Canvas上  
    img.onload = function() {  
        canvas.width = img.width;  
        canvas.height = img.height;  
        ctx.drawImage(img, 0, 0);  
  
        // 监听亮度滑块的变化  
        slider.oninput = function() {  
            adjustBrightness(slider.value);  
        };  
  
        // 初始调整亮度  
        adjustBrightness(slider.value);  
    };  
  
    // 调整亮度的函数  
    function adjustBrightness(value) {  
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);  
        const data = imageData.data;  
  
        for (let i = 0; i < data.length; i += 4) {  
            // R, G, B  
            data[i] = clamp(data[i] + 255 * value);  
            data[i + 1] = clamp(data[i + 1] + 255 * value);  
            data[i + 2] = clamp(data[i + 2] + 255 * value);  
            // A  
            data[i + 3] = data[i + 3];  
        }  
  
        ctx.putImageData(imageData, 0, 0);  
    }  
  
    // 确保像素值在0到255之间  
    function clamp(value) {  
        return Math.min(255, Math.max(0, value));  
    }  
  
    // 确保图片有URL  
    if (!img.src) {  
        img.src = 'p1.jpeg'; 
    }  
};
