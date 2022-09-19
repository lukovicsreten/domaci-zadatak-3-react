import { Navbar } from "../reusable-components/Navbar/navbar";
import { Form } from "../reusable-components/Form/form";

// 3. Ova komponenta prosledjuje atribute child komponenti
export const LoginPage = (props) => {
    const setName = (name) => {
        props.setName(name);
    }
    return (
        <div>
            <Navbar 
                isHomePage={false}
                isLoginPage={true}
            />
            <Form setName={setName}/>
        </div>
    );
};