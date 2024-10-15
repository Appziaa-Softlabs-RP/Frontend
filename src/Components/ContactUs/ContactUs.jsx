import React, { useState } from 'react'
import { getContactUsAdminEmailTemplate, getContactUsUserEmailTemplate } from '../../assets/email-templates/contact-us'
import { enviroment } from "../../enviroment"
import ApiService from '../../services/ApiService'
import { AppNotification } from '../../utils/helper'

export default function ContactUs() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [message, setMessage] = useState('')
    const [loading, setLoading] = useState(false)
    const [isSent, setIsSent] = useState(false)


    const handleSubmit = (e) => {
        e.preventDefault()

        try {
            setLoading(true)
            const payload = {
                'subjectUser': `Thank You for Contacting ${enviroment.BUSINESS_NAME}! 🎨`,
                'subjectAdmin': `New Contact Form Submission on ${enviroment.BUSINESS_NAME} Website`,
                'userEmail': email,
                'phone': phone,
                'adminEmail': enviroment.EMAIL_ADDRESS,
                'adminHtmlTemplate': getContactUsAdminEmailTemplate({ name, email, phone, message }),
                'userHtmlTemplate': getContactUsUserEmailTemplate({ name }),
            };
            ApiService.sendContactUsEmail(payload)
                .then((res) => {
                    if (res.message === "Otp send successfully.") {
                        AppNotification(
                            "Sucess",
                            "Mail Sent Successfully.",
                            "success"
                        );
                    }
                })
            AppNotification("Success", "Thank you for contacting us. We will get back to you soon.", "success");
            setIsSent(true)
            setName('')
            setEmail('')
            setPhone('')
            setMessage('')
                .catch((err) => {
                    setIsSent(false)
                    AppNotification("Error", "Failed to send mail", "danger");
                }).finally(() => {
                    setLoading(false)
                });
        } catch (err) {
            console.log(err)
        }
    };

    return (
        <div className="col-12">
            <form onSubmit={handleSubmit} className="p-4">
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="phone" className="form-label">Phone</label>
                    <input
                        type="tel"
                        className="form-control"
                        id="phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="message" className="form-label">Message</label>
                    <textarea
                        className="form-control"
                        id="message"
                        rows={4}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                    ></textarea>
                </div>
                <button type="submit"
                    disabled={loading || isSent}
                    className="border-0 p-2 px-4 rounded saveAddrsBtn primaryColor text-white">Submit</button>
            </form>
        </div>
    )
}