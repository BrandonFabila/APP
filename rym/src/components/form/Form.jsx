import { useState } from "react";
import style from "./form.module.css";
import validation from "./validation";

const Form = ({ login }) => {
    //state
    const [userData, setUserData] = useState({//datos
        username: '',
        password: '',
    })
    const [errors, setErrors] = useState({//errores
        username: '',
        password: '',
    })
    const handleInputChange = (event) => {//eventos
        setUserData({
            ...userData,//copia para no perder otras props
            [event.target.name]: event.target.value//event{target:{name: input?, password: input?}}
        })
        setErrors(validation({
            ...userData,
            [event.target.name]: event.target.value//event{target:{name: input?, password: input?}}
        }))
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        login(userData);
    }

    return(
        <div className={style.cont} >
            <form className={style.campos} onSubmit={handleSubmit} >
                <div className={style.text} >
                    <label htmlFor="username">Username</label>
                </div>
                <div >
                    <input className={style.input} type="text" name="username" value={userData.username} onChange={handleInputChange}/>
                    {errors.username && <p className={style.errors} >{errors.username}</p>}
                </div>
                <div className={style.text} >
                    <label htmlFor="password">Password</label>
                </div>
                <div >
                    <input className={style.input} type="password" name="password" value={userData.password} onChange={handleInputChange}/>
                    {errors.password && <p className={style.errors} >{errors.password}</p>}
                </div>
                <div>
                    <button className={style.button} >LOGIN</button>
                </div>
            </form>
        </div>
    )
}

export default Form