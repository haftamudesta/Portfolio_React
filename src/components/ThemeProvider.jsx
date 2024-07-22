import { useSelector } from "react-redux";
import propTypes from "prop-types"

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
ThemeProvider.propTypes={
  children:propTypes.string,
}
export default ThemeProvider