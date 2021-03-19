import {useForm} from 'react-hook-form';

const ContactFrom =()=>{
    const {register, error, handleSubmit, reset} = useForm();
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
                                <form>
                                    <div className="form-group">
                                        <label for="name-input">name:</label>
                                        <input type="text" id="name-input" className="form-control"></input>
                                    </div>
                                    <div className="form-group">
                                        <label for="email-input">email:</label>
                                        <input type="email" id="email-input" className="form-control"></input>
                                    </div>
                                    <div className="form-group">
                                        <label for="message">message:</label>
                                        <textarea id="message" className="form-control"></textarea>
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