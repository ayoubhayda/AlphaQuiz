import ArcjetLogo from "@/assets/public/arcjet.jpg";
import XLogo from "@/assets/public/x.jpeg";
import NextLogo from "@/assets/public/next.jpeg";
import NeonLogo from "@/assets/public/neon.jpeg";
import ShareFileLogo from "@/assets/public/sharfile.jpeg";
import AppleLogo from "@/assets/public/apple.png";

export const companies = [
    {id: 0, name: "Apple", logo: AppleLogo},
    {id: 1, name: "ArcJet", logo: ArcjetLogo},
    {id: 2, name: "Neon", logo: NeonLogo},
    {id: 3, name: "X", logo: XLogo},
    {id: 4, name: "Next", logo: NextLogo},
    {id: 5, name: "ShareFile", logo: ShareFileLogo},  
]

export const testimonials = [
  {
    quote: "We found our ideal candidate within 48 hours of posting. The quality of applicants was exceptional!",
    author: "Sarah Chen",
    company: "TechCorp",
  },
  {
    quote: "This platform revolutionized our hiring process. We filled three critical roles in under a week.",
    author: "David Leblanc",
    company: "Innova Solutions",
  },
  {
    quote: "As a small startup, finding talent was a challenge—until we discovered this platform. Game changer.",
    author: "Lina Patel",
    company: "BrightForge",
  },
  {
    quote: "The interface is intuitive and the matching algorithm is spot-on. We saved time and hired smarter.",
    author: "Martin Rodriguez",
    company: "CoreDelta",
  },
  {
    quote: "We were able to attract qualified candidates quickly. The platform’s reach is truly impressive.",
    author: "Amina El-Hassan",
    company: "BlueOrbit Logistics",
  },
  {
    quote: "Not only did we find top talent, but we also improved our employer brand with our listings.",
    author: "Tom Walker",
    company: "Nimbus AI",
  },
  {
    quote: "I found my dream job here. The process was smooth and professional from start to finish.",
    author: "Emily Tran",
    company: "Hired as UX Designer",
  },
];

export const stats = [
  { value: "10k+", label: "Monthly active job seekers" },
  { value: "48h", label: "Average time to hire" },
  { value: "95%", label: "Employer satisfaction rate" },
  { value: "500+", label: "Companies hiring monthly" },
];

export const jobTypes = [
  { id: 1, value: "full-time", label: "Full Time" },
  { id: 2, value: "part-time", label: "Part Time" },
  { id: 3, value: "contract", label: "Contract" },
  { id: 4, value: "internship", label: "Internship" },
]
