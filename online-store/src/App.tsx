import AppNavigation from "./components/AppNavigation";
import ScrollToTop from "./components/ScrollToTop";
import AppHeader from "./components/AppHeader";

const App = () => {
  return (
    <div>
      <AppHeader />
      <main>
        <ScrollToTop />
        <AppNavigation />
      </main>
    </div>
  );
};

export default App;