// utils/whatsApp.ts
export const createWhatsAppLink = (
  phone: string,
  course: {
    title: string;
    price: number;
    level: string;
    duration: string;
  }
) => {
  const text = `
Hi! 👋 I'd like to enroll in the course:

• Title: ${course.title}
• Level: ${course.level}
• Duration: ${course.duration}
• Price: ₦${course.price.toLocaleString()}

Please send me the next steps.
  `.trim();

  return `https://wa.me/${"+2348062907833"}?text=${encodeURIComponent(text)}`;
};