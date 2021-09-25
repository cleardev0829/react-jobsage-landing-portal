import { useContext } from "react";
import { AuthContext } from "../contexts/FirebaseContext";

const useAuth = () => useContext(AuthContext);

export default useAuth;
