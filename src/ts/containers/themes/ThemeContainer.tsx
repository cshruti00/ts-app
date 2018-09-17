import {connect} from "react-redux";
import ThemeSelector from "../../components/themeSelector/ThemeSelector";
import {setTheme} from "../../actions/ThemeAction";

const mapDispatchToProps = {
    setTheme
};

export default connect(undefined, mapDispatchToProps)(ThemeSelector);