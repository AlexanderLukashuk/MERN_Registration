import React, {useState} from 'react';
import './registration.css'
import Input from "../../utils/input/Input";
import {registration} from "../../actions/user";

const Registration = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    return (
        // <div className='registration'>
        //     <div className="registration__header">Регистрация</div>
        //     <Input value={email} setValue={setEmail} type="text" placeholder="Введите email..."/>
        //     <Input value={password} setValue={setPassword} type="password" placeholder="Введите пароль..."/>
        //     <button className="registration__btn" onClick={() => registration(email, password)}>Войти</button>
        // </div>
        <div className="row">
            <section className="section">
                <header>
                    <h1>Register</h1>
                    <h2>Please fill your information in this form</h2>
                </header>
                <main>
                    <form>
                        <div className="form-item box-item">
                            <input type="text" name="name" className="tx1" placeholder="Username" data-required/>
                                <small className="errorReq"><i className="fa" aria-hidden="true"></i> required field</small>
                        </div>
                        <div className="form-item box-item">
                            <input type="email" name="email" className="tx1" placeholder="Email" data-email data-required/>
                                <small className="errorReq"><i className="fa" aria-hidden="true"></i> required field</small>
                                <small className="errorEmail"><i className="fa" aria-hidden="true"></i> email is not valid</small>
                        </div>
                        <div className="form-item box-item">
                            <input type="pass" name="pass" placeholder="Password" data-pass data-required data-count="8"/>
                                <small className="errorReq"><i className="fa" aria-hidden="true"></i> required field</small>
                                <small className="errorChar"><i className="fa" aria-hidden="true"></i> must be with the lenght of 8</small>
                                <small className="errorNum"><i className="fa" aria-hidden="true"></i> must be a number</small>

                        </div>
                        <div className="form-item box-item">
                            <input type="text" name="phone" placeholder="Phone" data-required data-number data-count="10"/>
                                <small className="errorReq"><i className="fa" aria-hidden="true"></i> required field</small>
                                <small className="errorNum"><i className="fa" aria-hidden="true"></i> must be a number</small>
                                <small className="errorChar"><i className="fa" aria-hidden="true"></i> must be 10 digits</small>
                        </div>
                        <div className="form-item">
                            <span id="submit" className="submit">Submit</span>
                        </div>
                    </form>
                </main>
                <i className="wave"></i>
            </section>
        </div>
    );
};

export default Registration;
