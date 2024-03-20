import HistoryCard from "../../components/HistoryCard/HistoryCard";
import { getUserHistory } from "../../hooks/lsService";
import { useTypedSelector } from "../../hooks/redux";
import s from "./HistoryPage.module.css";

function HistoryPage() {
    let history: string[] = [];
    const users = useTypedSelector((state) => state.arrayUsers);
    history = getUserHistory(users);

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
