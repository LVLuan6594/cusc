import React, { useRef, useEffect, useState, ReactNode } from "react";
import {
  Typography,
  Stack,
  Button,
  IconButton,
  Box,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";
import { Link } from "react-router-dom";
import PhoneIcon from "@mui/icons-material/Phone";
import ChatIcon from "@mui/icons-material/Chat";
import EmailIcon from "@mui/icons-material/Email";

// Simple Reveal-on-scroll wrapper using IntersectionObserver
const Reveal: React.FC<{ children: ReactNode; className?: string }> = ({
  children,
  className,
}) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} className={`${className || ""} reveal ${visible ? "visible" : ""}`}>
      {children}
    </div>
  );
};

const services = [
  {
    title: "Hạ tầng mạng",
    img: "https://images.unsplash.com/photo-1542223616-8dd0b6f7b0a8?auto=format&fit=crop&w=800&q=60",
  },
  {
    title: "Quản trị máy chủ",
    img: "https://images.unsplash.com/photo-1508873699372-7ae4f1c8f9d5?auto=format&fit=crop&w=800&q=60",
  },
  {
    title: "Thiết bị CNTT",
    img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=60",
  },
];

const Home: React.FC = () => {
  return (
    <div>
      <section className="hero">
        <div className="hero-overlay" />
        <div className="hero-inner container">
          <Reveal className="hero-text">
            <Typography variant="h5" className="eyebrow">
              Dịch vụ cung cấp
            </Typography>
            <Typography variant="h2" component="h1" className="hero-title">
              <span className="highlight">hạ tầng công nghệ thông tin</span>
              <br /> nền tảng của chúng tôi
            </Typography>
            <Typography variant="body1" className="hero-desc">
              Dịch vụ cung cấp hạ tầng công nghệ thông tin toàn diện từ xây dựng hệ thống cáp,
              triển khai hệ thống mạng, tối ưu cơ sở hạ tầng nền tảng... quản lý ít tốn kém,
              vận hành hiệu quả cho hơn 10,000+ tổ chức và doanh nghiệp.
            </Typography>
            <Stack direction="row" spacing={2} sx={{ mt: 3 }}>
              <Button variant="contained" color="primary" component={Link} to="/dashboard">
                Tìm hiểu thêm
              </Button>
              <Button variant="outlined" component={Link} to="/product/alpha">
                Sản phẩm
              </Button>
            </Stack>
          </Reveal>

          <Reveal className="hero-image">
            <img
              src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1400&q=60"
              alt="network"
            />
          </Reveal>
        </div>
      </section>

      <main className="container">
        <Reveal>
          <Typography variant="h4" className="section-title">
            CÁC DỊCH VỤ CUNG CẤP HẠ TẦNG CÔNG NGHỆ THÔNG TIN NỀN TẢNG CỦA CHÚNG TÔI
          </Typography>
        </Reveal>

        <div className="services-row">
          {services.map((s, i) => (
            <Reveal key={s.title} className="service-col">
              <Card className="service-card">
                <CardMedia component="img" height="160" image={s.img} alt={s.title} />
                <CardContent>
                  <Typography variant="h6">{s.title}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    Dịch vụ triển khai, bảo trì và tối ưu hạ tầng cho doanh nghiệp.
                  </Typography>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </main>

      <div className="float-tools">
        <IconButton color="primary" className="float-btn">
          <EmailIcon />
        </IconButton>
        <IconButton color="primary" className="float-btn">
          <ChatIcon />
        </IconButton>
        <IconButton color="primary" className="float-btn">
          <PhoneIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default Home;
