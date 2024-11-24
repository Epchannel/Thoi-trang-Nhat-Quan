document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll(".counter");
  
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const counter = entry.target;
  
          // Lấy giá trị đích từ thuộc tính data-target
          const target = counter.getAttribute("data-target");
  
          // Đặt lại giá trị đếm ban đầu
          counter.style.setProperty("--num", 0);
  
          // Thêm hiệu ứng chạy số
          setTimeout(() => {
            counter.style.transition = `--num 2s ease-out`; // Thời gian hiệu ứng
            counter.style.setProperty("--num", target); // Đặt giá trị đích
          }, 100);
  
          // Thêm lớp visible để hiển thị
          counter.classList.add("visible");
  
          observer.unobserve(counter); // Ngừng theo dõi mục này
        }
      });
    }, { threshold: 0.5 });
  
    counters.forEach(counter => {
      observer.observe(counter);
    });
  });
  