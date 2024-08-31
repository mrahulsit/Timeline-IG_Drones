// Javascript File

document.addEventListener('DOMContentLoaded', function () {
    const timelineSpans = document.querySelectorAll('.timeline span');
    const contents = document.querySelectorAll('.content');
    timelineSpans.forEach(span => {
        span.addEventListener('click', function () {
            timelineSpans.forEach(s => s.classList.remove('active'));
            contents.forEach(c => {
                c.classList.remove('active');
                c.style.opacity = '0';
                c.style.display = 'none';
            });
            this.classList.add('active');
            const targetId = this.getAttribute('data-target');
            const targetContent = document.getElementById(targetId);
            targetContent.style.display = 'flex';
            setTimeout(() => {
                targetContent.classList.add('active'); 
                targetContent.style.opacity = '1';
            },5);
        });
    });
});
