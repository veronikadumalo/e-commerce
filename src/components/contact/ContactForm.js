import {useForm} from 'react-hook-form';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactFrom =()=>{
    const {register, errors, handleSubmit, reset} = useForm();
    const toastifySuccess = () => {
        toast('your email was successfully sent!', {
          position: 'top-center',
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: false,
          className: 'submit-feedback success text-uppercase notification',
          toastId: 'notifyToast'
        });
      };
    
        const onSubmit = async (data) => {
            try {
                const templateParams = {
                    name: data.name,
                    email: data.email,
                    message: data.message
                };
                await emailjs.send('service_8v0rzxv', 'template_56ivcrq', templateParams, 'user_KRrg2nnLUTABqmaan9HXd');
                reset();
                toastifySuccess();
            } catch (e) {
                console.log(e);
            }
          };
    return(
        <div className="">
                    <div className="container">
                        <div className="row">
                            <div className="col text-capitalize">
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
                                        id="name-input" className="form-control "></input>
                                        {errors.name &&
                                        <span className="errorMessage text-lowercase ">
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
                                        id="email-input" className="form-control "></input>
                                        {errors.email &&(
                                            <span className="errorMessage text-lowercase">
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
                                        id="message" className="form-control"></textarea>
                                        {errors.message && (
                                            <span className="errorMessage text-lowercase">
                                                Please enter a message
                                            </span>
                                        )}
                                    </div>
                                    <div className="d-flex">
                                        <button type="submit" className="detail-button mx-auto px-5">send</button>
                                    </div>
                                    
                                </form>
                                <ToastContainer />
                            </div>
                        </div>
                    </div>
                </div>
    )
}
export default ContactFrom;