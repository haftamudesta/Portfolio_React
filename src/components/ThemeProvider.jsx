import { useSelector } from "react-redux";

const ThemeProvider = ({children}) => {
  const theme=useSelector(state=>state.theme);
  console.log(theme)
  return (
    <div className={theme}>
        <div className={theme}>
          {children}
        </div>
    </div>
  )
}

export default ThemeProvider