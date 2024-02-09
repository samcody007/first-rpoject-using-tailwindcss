import { styles } from "./util/style"
const App = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.paddingY}`}>
        <p className="text-white">Navbar</p>
      </div>
    </div>
  )
}

export default App
