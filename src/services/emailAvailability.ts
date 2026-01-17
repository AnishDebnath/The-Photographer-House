import emailjs from '@emailjs/browser';

// EmailJS Credentials - Replace with your actual IDs
const SERVICE_ID = "service_u70mbeg";
const TEMPLATE_ID = "template_i6refsd";
const PUBLIC_KEY = "C0yz8u3KR5wLj-aN1";

/**
 * Sends short availability inquiry from the Home Page
 */
export const sendAvailabilityInquiry = async (data: {
    shootType: string;
    location: string;
    date: string;
    phone: string;
}) => {
    try {
        const templateParams = {
            from_name: "Website Visitor (Availability)",
            shoot_type: data.shootType,
            location: data.location,
            event_date: data.date,
            phone_number: data.phone,
            reply_to: "", // Availability form doesn't have email yet, but we can add it if needed
        };

        const response = await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);
        return response;
    } catch (error) {
        console.error('EmailJS Availability Error:', error);
        throw error;
    }
};
