import emailjs from '@emailjs/browser';

// EmailJS Credentials - Replace with your actual IDs
const SERVICE_ID = "YOUR_SERVICE_ID";
const TEMPLATE_ID = "YOUR_AVAILABILITY_TEMPLATE_ID";
const PUBLIC_KEY = "YOUR_PUBLIC_KEY";

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
