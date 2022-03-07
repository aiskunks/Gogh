import { ChangeEvent, SyntheticEvent, useState } from 'react';
import axios from 'axios';
import utilStyles from '../styles/utils.module.css'
import contactStyles from '../styles/Contact.module.css';

const [form, setForm] = useState({});
const handleChange = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
) => {
    const { value, name } = e.target;
    setForm({ ...form, [name]: value });
};


export default function Contact(){
    return(
        <div className={`${'content'} ${utilStyles.center} ${contactStyles.container}`}>
            <h1>Contact</h1>
            <div>
                <form className={contactStyles.contactform}>
                    <div className={contactStyles.form_group}>
                        <label className={contactStyles.label} htmlFor='name'>
                            Name
                        </label>
                        <br />
                        <input
                            onChange={handleChange}
                            className={contactStyles.inputfield}
                            type='text'
                            name='name'
                            id='name'
                        />
                    </div>
                    <div className={contactStyles.form_group}>
                        <label className={contactStyles.label} htmlFor='email'>
                            Email
                        </label>
                        <br />
                        <input
                            onChange={handleChange}
                            className={contactStyles.inputfield}
                            type='email'
                            name='email'
                            id='email'
                        />
                    </div>
                    <div className={contactStyles.form_group}>
                        <label className={contactStyles.label} htmlFor='subjet'>
                            Subject
                        </label>
                        <br />
                        <input
                            onChange={handleChange}
                            className={contactStyles.inputfield}
                            type='text'
                            name='subject'
                            id='subject'
                        />
                    </div>
                    <div className={contactStyles.form_group}>
                        <label className={contactStyles.label} htmlFor='message'>
                            Message
                        </label>
                        <br />
                        <textarea
                            onChange={handleChange}
                            className={contactStyles.inputfield}
                            name='message'
                            id='message'
                            cols={30}
                            rows={10}></textarea>
                    </div>
                    <div
                        className=
                            {`${contactStyles.form_group}
                ${contactStyles.submit_button_div}`}>
                        <button className=
                                    {contactStyles.submit_button}>Send</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
