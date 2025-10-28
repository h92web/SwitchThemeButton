import React, {useState} from 'react';
import SwitchButton from './SwitchButton.tsx'

export default function App() {
  const [theme, setTheme] = useState<"light" | "dark">(
  () => (localStorage.getItem("theme") as "light" | "dark") || "light"
);

React.useEffect(() => {
    localStorage.setItem("theme", theme);
    }, [theme]);

  return (
    <div
      className='App'
      style={{
        width: '100vw',
        height: "100vh",
        display: "flex",
        flexDirection: 'column',
        justifyContent: "center",
        alignItems: "center",
        background: theme === "light" ? "#eee" : "#222",
        color: theme === "light" ? "#222" : "#fff",
      }}
    >
 
    
      <h1>Switch Button Theme</h1>
      <h2>Change theme</h2>
      <SwitchButton theme={theme} setTheme={setTheme} />
    </div>
  );
}