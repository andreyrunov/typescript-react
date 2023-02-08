import { H } from "../components";
import { withLayout } from "../layout/Layout";

export function Error404(): JSX.Element {


    return (
        <>
            <H tag='h1'>Ошибка 404</H>
        </>
    );
}


export default withLayout(Error404);
