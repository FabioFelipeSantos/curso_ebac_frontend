import { useState } from "react";
// import Form from "./components/Formulario";
import Perfil from "./components/Perfil";
import ReposList from "./components/ReposList";

function App() {
    const [userName, setUserName] = useState("");

    return (
        <div>
            <input
                type="text"
                onBlur={(e) => setUserName(e.target.value)}
            />
            {userName.length > 4 && (
                <>
                    <Perfil userName={userName} />
                    <ReposList userName={userName} />
                </>
            )}
            {/* {formIsVisible && <Form />}
			<button onClick={() => setFormIsVisible((n) => !n)}>Toggle Form</button>
			<hr /> */}
        </div>
    );
}

export default App;
