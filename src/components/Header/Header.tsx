import Logo from "../Logo/Logo.tsx";
import s from "./header.module.css";
import Logouted from "../Navigation/Logouted/Logouted.tsx";
import SearchIcon from "@mui/icons-material/Search";
import { useSearchPhotosQuery } from "../../store/unsplash/unsplach.api";
import { useCallback, useEffect, useState } from "react";
import { IconButton, Switch, TextField } from "@mui/material";
import { useDebounce } from "../../hooks/debounce";
import { useActions } from "../../hooks/actions";
import { useTypedSelector } from "../../hooks/redux";
import Logined from "../Navigation/Logined/Logined.tsx";
import { Link, useNavigate } from "react-router-dom";
import { useTheme } from "../../hooks/useTheme";

const Header = () => {
    const [search, setSearch] = useState("");
    const [dropdown, setDropdown] = useState(false);
    const [isSuggestionsListShow, setIsSuggestionsListShow] = useState<boolean>(false);
    const { theme, toggleTheme } = useTheme();
    const debounced = useDebounce(search);
    const navigate = useNavigate();
    const { isLoading, isError, data } = useSearchPhotosQuery(
        { search: debounced, per_page: "5" },
        {
            skip: debounced.length < 3,
        },
    );

    const { isAuth } = useTypedSelector((state) => state.userAuth);
    const { changeSearch, addSearchToCurrentUser } = useActions();

    const handleFocus = useCallback(() => {
        setIsSuggestionsListShow(true);
    }, []);

    const handleBlur = useCallback(() => {
        setTimeout(() => {
            setIsSuggestionsListShow(false);
        }, 300);
    }, []);

    useEffect(() => {
        setDropdown(debounced.length >= 3);
    }, [debounced, data]);

    const onFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setDropdown(false);
        changeSearch(search);
        setSearch("");
        if (isAuth) addSearchToCurrentUser(search);
        navigate(`/?query=${search}`);
    };

    const color = theme === "light" ? "chocolate" : "burlywood";

    return (
        <div className={s.header} style={{ background: color }}>
            {isError && <p className="errorText">Something went wrong...</p>}
            <Logo />

            <form onSubmit={onFormSubmit}>
                <div style={{ display: "flex" }}>
                    <TextField
                        className={s.searchArea}
                        type="text"
                        label="Search"
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        required
                    />

                    {dropdown && isSuggestionsListShow && (
                        <ul className={s.dropDownArea}>
                            {isLoading && <p className="text-center">Loading...</p>}
                            {data?.map((item) => (
                                <li key={item.id} className={s.dropCard}>
                                    <Link to={`details/${item.id}`} className={s.linkItem}>
                                        <img className={s.dropDownImg} src={item.urls.thumb}></img>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    )}
                    <IconButton type="submit" className={s.buttonIcon}>
                        <SearchIcon />
                    </IconButton>
                </div>
            </form>
            {isAuth ? <Logined /> : <Logouted />}
            <Switch defaultChecked onChange={toggleTheme} />
        </div>
    );
};

export default Header;
