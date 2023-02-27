import { StoryList } from "./components";

import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.app}>
      <header className={styles.appHeader}>Stories</header>
      <StoryList />
    </div>
  );
}
export default App;
