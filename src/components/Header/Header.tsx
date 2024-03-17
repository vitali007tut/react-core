import Logo from "../Logo/Logo.tsx";
import s from "./header.module.css";
import Logouted from "../Navigation/Logouted/Logouted.tsx";
import SearchIcon from "@mui/icons-material/Search";
import { useSearchPhotosQuery } from "../../store/unsplash/unsplach.api.ts";
import { useCallback, useEffect, useState } from "react";
import { IconButton, TextField } from "@mui/material";
import { useDebounce } from "../../hooks/debounce.ts";
import { useActions } from "../../hooks/actions.ts";
import { useAuthSelector } from "../../hooks/redux.ts";
import Logined from "../Navigation/Logined/Logined.tsx";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
    const [search, setSearch] = useState("");
    const [dropdown, setDropdown] = useState(false);
    const [isSuggestionsListShow, setIsSuggestionsListShow] = useState<boolean>(false);
    const debounced = useDebounce(search);
    const navigate = useNavigate();
    const { isLoading, isError, data } = useSearchPhotosQuery(
        { search: debounced, per_page: "5" },
        {
            skip: debounced.length < 3,
        },
    );
    // const [fetchSearch, { isLoading: isSearchLoadin, data: searchData }] = useLazySearchPhotosQuery();
    const { isAuth } = useAuthSelector((state) => state.userAuth);
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
        navigate("/react-core/");
    };

    return (
        <div className={s.header}>
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
                                    <Link
                                        to={`/react-core/details/${item.id}`}
                                        className={s.linkItem}
                                    >
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
        </div>
    );
};

export default Header;
