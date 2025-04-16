export interface Property {
  id: number;
  image: string;
  title: string;
  location: string;
  price: number;
  label?: string;
}

export const sampleHouses: Property[] = [
  {
    id: 1,
    image: "/house-image-1.jpg",
    title: "Palm Harbor",
    location: "2699 Green Valley, Highland Lake, FL",
    price: 3440,
    label: "HOUSE",
  },
  { id: 2, image: "/house-image-2.jpg", title: "St. Crystal", location: "210 US Highway, Highland Lake, FL", price: 6550, label: "HOUSE" },
  { id: 3, image: "/house-image-3.jpg", title: "Faulkner Ave", location: "909 Woodland St, Michigan, IN", price: 4950, label: "HOUSE" },
];

export const sampleApartments: Property[] = [
  { id: 1, image: "/apartment-1.jpg", title: "Tarpon Bay", location: "103 Lake Shores, Michigan, IN", price: 2140, label: "APARTMENTS" },
  { id: 2, image: "/apartment-2.jpg", title: "Cove Red", location: "243 Curlew Road, Palm Harbor, TX", price: 1450, label: "APARTMENTS" },
  {
    id: 3,
    image: "/apartment-3.jpg",
    title: "Beverly Spring",
    location: "2821 Lake Sevilla, Palm Harbor, TX",
    price: 3850,
    label: "APARTMENTS",
  },
];
