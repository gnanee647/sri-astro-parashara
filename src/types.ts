export interface Service {
  id: string;
  title: string;
  teluguTitle: string;
  description: string;
  detailedDescription: string;
  iconName: string;
  benefits: string[];
  idealFor: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  consultationType: string;
  quote: string;
  date: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface ChartFormInput {
  name: string;
  birthDate: string;
  birthTime: string;
  birthPlace: string;
  selectedService: string;
  preferredContact: 'whatsapp' | 'call';
  customNotes: string;
}
