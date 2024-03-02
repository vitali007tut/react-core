
// type Props = {
//
// };
import Logo from "../Logo/Logo.tsx";
import s from './header.module.css'
import SearchField from "../Search/SearchField.tsx";
import Logouted from "../Navigation/Logouted/Logouted.tsx";

const Header = (/*props: Props*/) => {
    return (
        <div className={s.header}>
            <Logo/>
            <SearchField/>
            <Logouted />
        </div>
    );
};

export default Header