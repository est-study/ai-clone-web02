// script.js
$(document).ready(function() {
    // Header template
    const header = `
      <header class="header">
        <div class="container">
          <div class="logo">
            <a href="index.html"> EST<span>.</span></a>
          </div>
          <nav class="navbar">
            <ul>
              <li><a href="index.html" class="active">홈</a></li>
              <li><a href="services.html">서비스</a></li>
              <li><a href="portfolio.html">포트폴리오</a></li>
              <li><a href="blog.html">블로그</a></li>
              <li><a href="contact.html">문의하기</a></li>
            </ul>
          </nav>
          <div class="nav-button">
            <button class="contact-btn">Contact Us</button>
          </div>
        </div>
      </header>
    `;
  
    // Footer template
    const footer = `
      <footer class="footer">
        <div class="container">
          <div class="footer-content">
            <div class="footer- EST">
              <h3> EST<span>.</span></h3>
              <p>혁신적인 디지털 솔루션을 제공하는<br>글로벌 테크 파트너</p>
            </div>
            <div class="footer-links">
              <div class="link-group">
                <h4>Company</h4>
                <ul>
                  <li><a href="#">About Us</a></li>
                  <li><a href="#">Services</a></li>
                  <li><a href="#">Careers</a></li>
                </ul>
              </div>
              <div class="link-group">
                <h4>Support</h4>
                <ul>
                  <li><a href="#">Help Center</a></li>
                  <li><a href="#">Terms of Service</a></li>
                  <li><a href="#">Privacy Policy</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="footer-bottom">
            <p>&copy; 2025  EST. All rights reserved.</p>
            <div class="social-links">
              <a href="#"><i class="fab fa-twitter"></i></a>
              <a href="#"><i class="fab fa-facebook"></i></a>
              <a href="#"><i class="fab fa-instagram"></i></a>
              <a href="#"><i class="fab fa-linkedin"></i></a>
            </div>
          </div>
        </div>
      </footer>
    `;
  
    // Insert header and footer
    $('#header').html(header);
    $('#footer').html(footer);
  
    // Active nav link
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    $('.navbar a').removeClass('active');
    $(`.navbar a[href="${currentPage}"]`).addClass('active');
  
    // Mobile menu toggle
    $('.mobile-menu-btn').click(function() {
      $('.navbar').toggleClass('active');
    });
  
    // Smooth scroll
    $('a[href^="#"]').click(function(e) {
      e.preventDefault();
      const target = $($(this).attr('href'));
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top - 80
        }, 1000);
      }
    });
  });