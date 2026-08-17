// 设置毕业日期为 2025年11月20日
const graduationDate = new Date('2025-11-20T00:00:00').getTime();

function updateCountdown() {
    // 获取当前时间
    const now = new Date().getTime();
    
    // 计算时间差
    const distance = graduationDate - now;
    
    // 计算天、小时、分钟、秒
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // 更新HTML
    document.getElementById('days').textContent = String(days).padStart(2, '0');
    document.getElementById('hours').textContent = String(hours).padStart(2, '0');
    document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
    document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
    
    // 如果倒数结束
    if (distance < 0) {
        clearInterval(countdownInterval);
        document.getElementById('days').textContent = '00';
        document.getElementById('hours').textContent = '00';
        document.getElementById('minutes').textContent = '00';
        document.getElementById('seconds').textContent = '00';
    }
}

// 初始化倒数
updateCountdown();

// 每秒更新一次
const countdownInterval = setInterval(updateCountdown, 1000);