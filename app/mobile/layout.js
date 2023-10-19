import MainBar from "../components/mobile/MainBar";
import AppProvider from "../context/AppProvider";

export const metadata = {
  title: "Mobile",
  description: "Aplicacion de Menu",
};

export default function MobileLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AppProvider>
          <MainBar />
          {children}
        </AppProvider>
      </body>
    </html>
  );
}
