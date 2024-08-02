import AppNavigation from "./components/AppNavigation";
import ScrollToTop from "./components/ScrollToTop";
import AppHeader from "./components/AppHeader";
import AppFooter from "./components/AppFooter";

const App = () => {
  return (
    <div>
      <AppHeader/>
      <main>
        <ScrollToTop/>
        <AppNavigation/>
      </main>
      <AppFooter/>
    </div>
  );
};

export default App;