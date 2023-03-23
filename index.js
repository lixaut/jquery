
/* 页面加载完毕执行 */

// 方式 1
$(document).ready(function() {
  $('.div1').css('background-color', 'red');
});
// 方式 2
$(function() {
  $('.div2').css('background-color', 'green');
});

// jquery对象 -> DOM对象
$('div')[0];
$('div').get(0);
// DOM对象 -> jquery对象
$(document.querySelector('#id'));

// 隐式迭代: 已选择元素的类数组默认循环
$('ul li').css('background', 'pink');

// 选择器
$('ul li:first').css('background', 'red');
$('ul li:last').css('background', 'red');
$('ul li:eq(2)').css('background', 'red');
$('ul li:odd').css('background', 'red');
$('ul li:even').css('background', 'red');

/* 筛选方法 */

// 父元素
$('div').parent();
// 子元素
$('div').children('li');
// 后代元素
$('div').find('li');
// 兄弟元素（除了自身）
$('div').siblings('div');
// 前面的兄弟元素
$('div').prevAll();
// 后面的兄弟元素
$('div').nextAll();
// 检查是否有某个类
$('div').hasClass('name');

/* 样式操作 */ 

// 获取属性值
$('div').css('width');
// 设置属性值
$('div').css('width', '200px');
// 复合属性 -> 驼峰命名
// 非数字值 -> 加引号
$('div').css({
  width: 200,
  height: 200,
  backgroundColor: 'red'
});

/* 操作类 */ 

// 添加类
$('div').addClass('current');
// 删除类
$('div').removeClass('current');
// 切换类
$('div3').toggleClass('div3');

/* 动画效果 */ 

// 显示 隐藏
show([speed, [easing], [fn]]);
hide([speed, [easing], [fn]]);
toggle([speed, [easing], [fn]]);
// 上滑 下滑
slideDown([speed, [easing], [fn]]);
slideUp([speed, [easing], [fn]]);
slideToggle([speed, [easing], [fn]]);
// 鼠标经过 鼠标离开
hover(function() {/* 鼠标经过 */}, function() {/* 鼠标离开 */});
hover(function() {/* 鼠标经过&离开 */});
