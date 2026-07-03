export interface Department {
  id: string;
  slug: string;
  name: string;
  icon: string;
  description: string;
  longDescription: string;
  conditionsTreated: string[];
  services: string[];
}

export interface Doctor {
  id: string;
  slug: string;
  name: string;
  title: string;
  departmentId: string;
  photo: string;
  bio: string;
  education: string[];
  certifications: string[];
  languages: string[];
  yearsExperience: number;
  specialties: string[];
}

export interface BlogArticle {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: 'Wellness' | 'Nutrition' | 'Chronic Disease Management' | 'Maternal Health' | 'Preventive Care';
  author: string;
  publishDate: string;
  readTime: number;
}

export interface Testimonial {
  id: string;
  patientName: string;
  content: string;
  rating: number;
  department?: string;
}

export interface AppointmentFormData {
  departmentId: string;
  doctorId?: string;
  date: Date;
  time: string;
  patientName: string;
  email: string;
  phone: string;
  dateOfBirth: Date;
  reasonForVisit: string;
  isReturningPatient: boolean;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface NewsletterData {
  email: string;
}
