import { z } from 'zod';

export const appointmentFormSchema = z.object({
  departmentId: z.string().min(1, 'Please select a department'),
  doctorId: z.string().optional(),
  date: z.date().refine(
    (date) => date > new Date(),
    'Please select a future date'
  ),
  time: z.string().min(1, 'Please select a time'),
  patientName: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().regex(/^[\d\s\-\+()]+$/, 'Invalid phone number'),
  dateOfBirth: z.date().refine(
    (date) => {
      const age = new Date().getFullYear() - date.getFullYear();
      return age >= 18;
    },
    'You must be at least 18 years old'
  ),
  reasonForVisit: z.string().min(10, 'Please provide at least 10 characters'),
  isReturningPatient: z.boolean(),
});

export const contactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  subject: z.string().min(5, 'Subject must be at least 5 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

export const newsletterSchema = z.object({
  email: z.string().email('Invalid email address'),
});

export type AppointmentFormSchema = z.infer<typeof appointmentFormSchema>;
export type ContactFormSchema = z.infer<typeof contactFormSchema>;
export type NewsletterSchema = z.infer<typeof newsletterSchema>;
