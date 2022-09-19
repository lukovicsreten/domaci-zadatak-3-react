import { Navbar } from "../reusable-components/Navbar/navbar";

// 3. Ova komponenta prosledjuje atribute child komponenti

export const HomePage = (props) => {
    return (
        <div>
            <Navbar 
                isHomePage={true}
                isLoginPage={false}
            />
            <h1 style={{marginLeft: '2rem'}}>Welcome {props.username} to Home Page</h1>
        </div>
    );
};