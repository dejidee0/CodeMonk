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
Hi! 👋 I’d like to enroll in the course:

• Title: ${course.title}
• Level: ${course.level}
• Duration: ${course.duration}
• Price: $${course.price.toFixed(2)}

Please send me the next steps.
  `.trim();

  return `https://wa.me/${"+2349153897950"}?text=${encodeURIComponent(text)}`;
};
