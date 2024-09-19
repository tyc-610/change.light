const displayedImage = document.querySelector('.displayed-img');//主显示区域的图片元素
const thumbBar = document.querySelector('.thumb-bar');//用于展示缩略图的区域
const btn = document.querySelector('button');//按钮元素, 用于控制遮罩层的显示和隐藏
const overlay = document.querySelector('.overlay');//一个遮罩层, 用于遮挡主显示区域的图片，以模拟黑暗和明亮的效果
const images = ['back.jpg', `p1.jpeg`, `p2.jpeg`, `p3.jpeg`, `p4.jpg`];//图片数组
for (const image of images) {
  const newImage = document.createElement('img');
  newImage.setAttribute('src', `images/${image}`);
  thumbBar.appendChild(newImage);
  newImage.addEventListener('click', e => {
    displayedImage.src = e.target.src;
  });
}//for循环遍历images数组，创建相应的img元素，并添加点击事件监听器
btn.addEventListener('click', () => {
  const btnClass = btn.getAttribute('class');//获取按钮当前类名
  //根据不同类实现不同效果，变亮和变暗
  if (btnClass === 'dark') {
    btn.setAttribute('class','light');
    btn.textContent = '变亮';
    overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
  } else {
    btn.setAttribute('class','dark');
    btn.textContent = '变暗';
    overlay.style.backgroundColor = 'rgba(0,0,0,0)';
  }
});//为btn按钮添加点击事件监听器
