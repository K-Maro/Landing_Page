export type TestimonialRole = "Renter" | "Landlord" | "Property Manager";

export interface ITestimonial {
  quote: string;
  name: string;
  role: TestimonialRole;
  avatar: string;
}

export const testimonials: ITestimonial[] = [
  {
    quote:
      "I check Estatery almost every day — whether I'm seriously house hunting or just daydreaming about future getaways. It makes exploring new locations and comparing properties incredibly easy and enjoyable.",
    name: "Mark Brown",
    role: "Renter",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    quote:
      "Estatery turns home shopping into a daily delight. Whether I'm planning for the future or just exploring what's out there, I always find something exciting and new.",
    name: "Emily Johnson",
    role: "Landlord",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    quote:
      "As a property manager, Estatery has helped me connect with the right tenants quickly and with ease. It’s streamlined and effective.",
    name: "James Parker",
    role: "Property Manager",
    avatar: "https://randomuser.me/api/portraits/men/75.jpg",
  },
];
