import * as React from 'react';
import { json } from '../../utils/api';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';


const MailgunForm: React.FC<FormProps> = props => {

    const history = useHistory();

    const [email, setEmail] = useState<string>('');
    const [subject, setSubject] = useState<string>('');
    const [message, setMessage] = useState<string>('');
    const [processing, setProcessing] = useState(false);


    const onSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        setProcessing(true);
        try {
            await json('/feedback', 'POST', { email, subject, message });
            history.push('/');
        } catch (e) {
            throw e;
        }
    }

    return (
        <main className="container my-5">
            <h1 className="text-center my-4">Submit Feedback!</h1>
            <form className="form-group mt-5 border border-primary rounded p-3 shadow-lg"
                onSubmit={onSubmit}
            >
                <label>Email</label>
                <input type="text" className="input-group my-1 p-1"
                    onChange={e => setEmail(e.target.value)}
                />
                <label>Subject</label>
                <input type="text" className="input-group my-1 p-1"
                    onChange={e => setSubject(e.target.value)}
                />
                <label>Message</label>
                <input type="text" className="input-group my-1 p-1"
                    onChange={e => setMessage(e.target.value)}
                />
                <button
                    className="btn btn-info mt-2 shadow"
                    disabled={processing}
                >{processing ? 'Sending...' : 'Submit'}</button>
            </form>
        </main>
    );
}


interface FormProps { }

export default MailgunForm;
