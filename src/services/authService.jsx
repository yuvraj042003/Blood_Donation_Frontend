import { userLogin, userRegister } from '../redux/features/auth/AuthAction';
import store from '../redux/store';
export const handleLogin = (e, email, password, role) => {
    e.preventDefault()
    try {
        if (!role || !email || !password) {
            return alert("Please Privde All Feilds");
        }
        store.dispatch(userLogin({ email, password, role }))
    } catch (error) {
        console.log(error)
    }
}
export const handleRegister = ({e, name, email, password, role, organisationName, hospitalName, website, address, phone}) => {
    e.preventDefault()
    try {
        // if (!organisationName) {
        //     return alert("Ghar ka pta nhi hai kya");
        // }
        console.log(name, email, password, role, address,phone, website);

        store.dispatch(userRegister({
            name,
            email,
            password,
            role,
            organisationName,
            hospitalName,
            website,
            address,
            phone
        }))
    } catch (error) {
        console.log(error)
    }
}


