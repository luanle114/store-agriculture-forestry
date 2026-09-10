"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ChevronDown, Menu, Search, X } from "lucide-react";
import { categories, formatPrice, Product } from "../data";
export function Header() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navLinks = [
    { href: "/", label: "Trang chủ", active: true },
    { href: "/category", label: "Gia vị nấu ăn" },
    { href: "/category", label: "Cooking Wine" },
    { href: "/category", label: "Gia vị nấu lẩu" },
    { href: "/category", label: "Mì & Noodle" },
    { href: "/category", label: "Tin tức" },
    { href: "/category", label: "Liên hệ" },
  ];

  return (
    <>
      <div className="topbar">
        <div className="top-inner">
          <span>
            Địa chỉ: 185M Mai Xuân Thưởng, Phường Bình Tây, Hồ Chí Minh
          </span>
          <nav>
            {[
              "Theo dõi đơn hàng",
              "Hỗ trợ",
            ].map((x) => (
              <Link href="/category" key={x}>
                {x}
              </Link>
            ))}
          </nav>
        </div>
      </div>
      <header className="site-header">
        <div className="header-inner">
          <Link href="/" className="brand">
            <span>
              YU
              <br />
              MEI
            </span>
            <small>ONESE SPICES AND SAUCES</small>
          </Link>
          <div className="benefits">
            <div>
              🚚{" "}
              <span>
                63 Tỉnh thành
                <br />
                <b>GIAO HÀNG TRÊN TOÀN...</b>
              </span>
            </div>
            <div>
              ♨️{" "}
              <span>
                Thanh toán tận nhà
                <br />
                <b>NHẬN HÀNG TRẢ...</b>
              </span>
            </div>
            <div>
              ↔️{" "}
              <span>
                Cam kết hàng mới
                <br />
                <b>CAM KẾT SẢN PHẨM DATE...</b>
              </span>
            </div>
          </div>
          <div className="hotline">
            ☎️{" "}
            <span>
              Hotline hỗ trợ 24/7:<b>0327627473</b>
            </span>
          </div>
        <div className="search search-modern">
          <input placeholder="Tìm kiếm gia vị, nước sốt, mì..." />
          <select defaultValue="">
            <option value="">Tất cả danh mục</option>
            <option>Gia vị nấu ăn</option>
            <option>Cooking Wine</option>
          </select>
          <button><Search size={17} strokeWidth={2.5} /> TÌM KIẾM</button>
        </div>
        </div>
      </header>
      <nav className="main-nav">
        <div className="nav-inner">
          <button
            className="mobile-menu-trigger"
            type="button"
            aria-label="Mở menu"
            aria-expanded={sidebarOpen}
            onClick={() => setSidebarOpen(true)}
          >
            <Menu size={21} />
            <span>Danh mục</span>
          </button>
          <div className="category-dropdown">
            <Link href="/category" className="all-categories">
              ☰ &nbsp; DANH MỤC SẢN PHẨM <ChevronDown size={15} />
            </Link>
            <div className="category-dropdown-list">
              {categories.map((c) => (
                <Link href="/category" key={c}>
                  {c}
                  <span>›</span>
                </Link>
              ))}
            </div>
          </div>
          <div className="desktop-nav-links">
            {navLinks.map((link) => (
              <Link
                href={link.href}
                className={link.active ? "active" : undefined}
                key={link.label}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>
      <div
        className={`mobile-nav-overlay${sidebarOpen ? " open" : ""}`}
        onClick={() => setSidebarOpen(false)}
      />
      <aside
        className={`mobile-sidebar${sidebarOpen ? " open" : ""}`}
        aria-hidden={!sidebarOpen}
      >
        <div className="mobile-sidebar-head">
          <Link href="/" className="brand" onClick={() => setSidebarOpen(false)}>
            <span>
              YU
              <br />
              MEI
            </span>
            <small>ONESE SPICES AND SAUCES</small>
          </Link>
          <button
            type="button"
            aria-label="Đóng menu"
            onClick={() => setSidebarOpen(false)}
          >
            <X size={21} />
          </button>
        </div>
        <div className="mobile-sidebar-section">
          <strong>Danh mục sản phẩm</strong>
          {categories.map((c) => (
            <Link href="/category" key={c} onClick={() => setSidebarOpen(false)}>
              {c}
              <span>›</span>
            </Link>
          ))}
        </div>
        <div className="mobile-sidebar-section">
          <strong>Điều hướng</strong>
          {navLinks.map((link) => (
            <Link
              href={link.href}
              className={link.active ? "active" : undefined}
              key={link.label}
              onClick={() => setSidebarOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </aside>
    </>
  );
}
export function Footer() {
  return (
    <>
      <section className="newsletter">
        <div>
          <strong>ĐĂNG KÝ NHẬN TIN</strong>
          <span>
            Đăng ký liên lạc với chúng tôi để
            <br />
            được tư vấn và hỗ trợ tốt nhất
          </span>
        </div>
        <input placeholder="Họ tên..." />
        <input placeholder="Điện thoại..." />
        <input placeholder="Email..." />
        <button>ĐĂNG KÝ</button>
      </section>
      <footer>
        <div>
          <h3>HỘ KINH DOANH CỬA HÀNG YUMEI</h3>
          <p>
            Người đại diện: LƯU NGỌC MAI
            <br />
            Địa chỉ mua hàng trực tiếp: 185M Mai Xuân Thưởng, Phường Bình Tây,
            HCM
            <br />
            Mở cửa: 8h30 đến 17h30 từ T2 đến T7
            <br />
            Điện thoại: 0327.62.7473 (zalo)
            <br />
            Email: info.yumeifoods@gmail.com
          </p>
        </div>
        <div>
          <h3>CHÍNH SÁCH</h3>
          <p>
            Chính sách bảo mật thông tin
            <br />
            <br />
            Hướng dẫn đặt hàng
            <br />
            <br />
            Phương thức vận chuyển
          </p>
        </div>
        <div className="social">
          YU
          <br />
          MEI
          <br />
          <small>Facebook / Youtube</small>
        </div>
      </footer>
      <div className="copyright">
        Copyright © 2020 YUMEIFOODS. Design by : Nasani Co.,Ltd
      </div>
    </>
  );
}
export function CategoryMenu() {
  return (
    <aside className="category-menu">
      <h3>☰ &nbsp; DANH MỤC</h3>
      {categories.map((c) => (
        <Link href="/category" key={c}>
          › &nbsp;{c}
        </Link>
      ))}
    </aside>
  );
}
export function ProductCard({ product }: { product: Product }) {
  return (
    <Link className="product-card" href={`/product/${product.id}`}>
      <div className="product-image">
        <img src={product.image} alt={product.name} />
        <span className="logo-stamp">
          YU
          <br />
          MEI
        </span>
      </div>
      <div className="product-name">{product.name}</div>
      <div>
        Giá: <strong>{formatPrice(product.price)}</strong>
        {product.oldPrice && <del>{formatPrice(product.oldPrice)}</del>}
      </div>
      {product.code && <small>Mã SP: {product.code}</small>}
    </Link>
  );
}
export function Section({
  title,
  items,
  sidebar = true,
}: {
  title: string;
  items: Product[];
  sidebar?: boolean;
}) {
  return (
    <section className="product-section">
      <div className="section-title">
        <span>▪ &nbsp;{title}</span>
        <Link href="/category">Xem tất cả</Link>
      </div>
      <div className={sidebar ? "section-body" : "section-body no-sidebar"}>
        {sidebar && (
          <div className="subcats">
            {[
              "Nước Sốt / Sauces",
              "Nước Tương, Xì Dầu / Soy...",
              "Hắc Xì Dầu / Dark Soy Sauce",
              "Dầu Hào / Oyster Sauce",
              "Sa Tế / Satay",
              "Giấm, Dấm / Vinegar",
              "Khác",
            ].map((x) => (
              <div key={x}>
                › &nbsp;{x}
                <b>›</b>
              </div>
            ))}
          </div>
        )}
        <div className="product-grid">
          {items.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
export function Slideshow() {
  const [hero, setHero] = useState(0);
  const [news, setNews] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setHero((v) => (v + 1) % 3), 4500);
    return () => clearInterval(t);
  }, []);
  const imgs = [
    "https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7?auto=format&fit=crop&w=1200&q=85",
    "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1200&q=85",
    "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=1200&q=85",
  ];
  return (
    <div className="hero-row">
      <div className="hero">
        <img src={imgs[hero]} alt="Chinese spices" />
        <div className="hero-copy">
          <small>YUMEI FOODS</small>
          <h1>
            Set gia vị
            <br />
            <em>Tứ Truyện</em>
          </h1>
          <p>Chinese spices and sauce</p>
        </div>
        <div className="dots">
          {[0, 1, 2].map((i) => (
            <button
              className={i === hero ? "active" : ""}
              onClick={() => setHero(i)}
              key={i}
            />
          ))}
        </div>
      </div>
      <div className="news">
        <h3>
          ▤ &nbsp; TIN TỨC <span>•••</span>
        </h3>
        {[
          "Món Hay Mỗi Ngày - Bí Quyết Nấu Ăn",
          "Sự khác biệt giữa tương và sốt",
          "7 Món Ăn Nổi Tiếng Từ Trung Quốc",
        ].map((n, i) => (
          <article key={n}>
            <div
              className="news-pic"
              style={{ backgroundImage: `url(${imgs[(i + 1 + news) % 3]})` }}
            />
            <p>
              {n}
              <br />
              <a>Xem thêm</a>
            </p>
          </article>
        ))}
      </div>
    </div>
  );
}
export function StoreLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <div className="gold-line" />
      {children}
      <Footer />
      <button
        className="back-top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        ⌃
      </button>
    </>
  );
}
