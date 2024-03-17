import HistoryCard from "../../components/HistoryCard/HistoryCard";
import { getHistoryArray } from "../../hooks/lsService";
import { useArrayUsersSelector } from "../../hooks/redux";
import s from "./HistoryPage.module.css";

function HistoryPage() {
    let history: string[] = [];
    const users = useArrayUsersSelector((state) => state.arrayUsers);
    history = getHistoryArray(users);

    return (
        <>
            <ul className={s.list}>
                {!history.length && (
                    <p style={{ textAlign: "center", fontSize: "1.5rem" }}>
                        You don't have search history
                    </p>
                )}
                {!!history.length &&
                    history.map((item) => (
                        <li key={item} className={s.liItem}>
                            <HistoryCard item={item} />
                        </li>
                    ))}
            </ul>
        </>
    );
}

export default HistoryPage;
