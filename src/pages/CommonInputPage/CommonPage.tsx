import { InputField } from "../../components/Utils/InputField.tsx";
import s from "./CommonPage.module.css";
import { Button } from "../../components/Button/Button.tsx";

type PropsType = {
    tittle: string;
};
function CommonPage(props: PropsType) {
    return (
        <div className={s.container}>
            <div className={s.title}>{props.tittle}</div>
            <div className={s.elements}>
                <InputField label="email" />
                <InputField label="password" />
                <Button>Enter</Button>
            </div>
        </div>
    );
}

export default CommonPage;