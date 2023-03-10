import { useAppSelector } from "app/hooks";
import { IntlProvider } from "react-intl";
import { RouterProvider } from "react-router-dom";
import { router } from "router";
import "styles/App.scss";
import enLanguage from "translations/en.json";
import viLanguage from "translations/vi.json";
import "./App.css";
const messages = {
  en: enLanguage,
  vi: viLanguage,
};
function App() {
  const { language } = useAppSelector((state) => state.language);

  return (
    <IntlProvider
      locale={language}
      defaultLocale="en"
      messages={messages[language as "vi" | "en"]}
    >
      <RouterProvider router={router} />
    </IntlProvider>
  );
}

export default App;
