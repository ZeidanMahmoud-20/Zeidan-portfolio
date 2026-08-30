/* Color Palette */
:root {
  --academy-red: #d9232e;
  --academy-green: #087544;
  --academy-dark: #173d2d;
  --academy-cream: #f7f2e9;
}

/* Global Styles */
body {
  background: var(--academy-cream);
  color: var(--academy-dark);
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  scroll-behavior: smooth;
}

/* Navbar Branding */
.logo-badge {
  font-size: 1.1rem;
  background: #fffdf8;
}

.logo-title {
  font-size: 0.95rem;
  line-height: 1;
}

.logo-sub {
  font-size: 0.68rem;
}

/* Hero Sections */
.hero-section {
  background: linear-gradient(135deg, rgba(8, 117, 68, 0.12), rgba(217, 35, 46, 0.12));
  padding: 70px 0;
}

.hero-cafeteria {
  background: linear-gradient(rgba(23, 61, 45, 0.85), rgba(8, 117, 68, 0.85)), 
              url('https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1200&q=80');
  background-size: cover;
  background-position: center;
  color: white;
  padding: 80px 0;
}

.hero-desc {
  max-width: 650px;
}

/* Card Image Sizing */
.card-img-top {
  height: 150px;
  object-fit: cover;
}

/* Button Overrides */
.btn-danger {
  background-color: var(--academy-red);
  border-color: var(--academy-red);
}

.btn-danger:hover {
  background-color: #b91e28;
  border-color: #b91e28;
}
