import { H } from "../components";
import { withLayout } from "../layout/Layout";

export function Error500(): JSX.Element {


    return (
        <>
            <H tag='h1'>Ошибка 500</H>
        </>
    );
}


export default withLayout(Error500);