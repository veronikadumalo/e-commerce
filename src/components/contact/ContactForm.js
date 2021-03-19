import {useForm} from 'react-hook-form';

const ContactFrom =()=>{
    const {register, errors, handleSubmit, reset} = useForm();
    const onSubmit =async(data) => {
        console.log('name', data.name);
        console.log('email', data.email);
        console.log('message', data.message);
        }
    return(
        <div className="">
                    <div className="container">
                        <div className="row">
                            <div className="col-8 mx-auto text-capitalize">
                                <form id="contact-form" onSubmit={handleSubmit(onSubmit)} noValidate>
                                    <div className="form-group">
                                        <label for="name-input">name:</label>
                                        <input type="text" 
                                        name="name"
                                        ref={register({
                                            required: {value:true, message:"Please enter your name"},
                                            maxLength:{
                                                value:30,
                                                message:"Please use 30 charter or less"
                                            }
                                        })}
                                        id="name-input" className="form-control formInput"></input>
                                        {errors.name &&
                                        <span className="errorMessage">
                                            {errors.name.message}
                                        </span>}
                                    </div>
                                    <div className="form-group">
                                        <label for="email-input">email:</label>
                                        <input type="email" 
                                        name="email"
                                        ref={register({
                                            required: true,
                                            pattern: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
                                        })}
                                        id="email-input" className="form-control formInput"></input>
                                        {errors.email &&(
                                            <span className="errorMessage">
                                                Please enter a valid email address
                                            </span>
                                        )}
                                    </div>
                                    <div className="form-group">
                                        <label for="message">message:</label>
                                        <textarea
                                        name="message"
                                        ref={register({
                                            required:true
                                        })}
                                        rows={3}
                                        id="message" className="form-control formInput"></textarea>
                                        {errors.message && (
                                            <span className="errorMessage">
                                                Please enter a message
                                            </span>
                                        )}
                                    </div>
                                    <button type="submit" className="detail-button">send</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
    )
}
export default ContactFrom;