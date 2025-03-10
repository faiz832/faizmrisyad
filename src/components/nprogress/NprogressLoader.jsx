import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import "./nprogress.css";

// Konfigurasi NProgress
NProgress.configure({
  showSpinner: false,
  trickleSpeed: 200,
  minimum: 0.1,
  easing: "ease",
  speed: 500,
});

export default function NProgressLoader() {
  const location = useLocation();

  useEffect(() => {
    NProgress.start();

    // Simulasi loading lebih smooth
    const incrementInterval = setInterval(() => {
      if (NProgress.status < 0.8) {
        NProgress.inc(0.02);
      }
    }, 200);

    // Hentikan progress saat route selesai loading
    const handleStop = () => {
      clearInterval(incrementInterval);
      NProgress.done();
    };

    handleStop(); // Panggil saat komponen di-unmount atau route berubah

    return () => {
      handleStop();
    };
  }, [location.pathname]);

  return null;
}
