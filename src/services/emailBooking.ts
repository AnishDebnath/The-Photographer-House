import emailjs from '@emailjs/browser';

// EmailJS Credentials - Replace with your actual IDs
const SERVICE_ID = "service_jzhgu32";
const TEMPLATE_ID = "template_dvp2of9";
const PUBLIC_KEY = "C0yz8u3KR5wLj-aN1";

/**
 * Sends detailed booking inquiry from the Book Now page
 */
export const sendBookingInquiry = async (data: {
    name: string;
    email: string;
    phone: string;
    shootType: string;
    location: string;
    dateStr: string;
    message: string;
}) => {
    try {
        const templateParams = {
            from_name: data.name,
            from_email: data.email,
            phone_number: data.phone,
            shoot_type: data.shootType,
            location: data.location,
            event_date: data.dateStr,
            message: data.message,
            reply_to: data.email,
        };

        const response = await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);
        return response;
    } catch (error) {
        console.error('EmailJS Booking Error:', error);
        throw error;
    }
};
