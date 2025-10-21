import { TestimonialCard } from "./testimonial-card";

interface Testimonial {
    name: string;
    role: string;
    image: string;
    quote: string;
}

const testimonials: Testimonial[] = [
    {
        name: "satish Patel",
        role: "Founder y CEO, Huddle",
        image: "/images/profile-1.jpg",
        quote: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness",
    },
     {
        name: "Bruce mckenzie",
        role: "Founder y CEO, Huddle",
        image: "/images/profile-2.jpg",
        quote: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness",
    },
     {
        name: "Iba Boyd",
        role: "Founder y CEO, Huddle",
        image: "/images/profile-3.jpg",
        quote: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness",
    },
]

export const Testimonials = () => {
  return (
    <div className="flex flex-col gap-6 items-center pt-6 relative w-[320px] md:w-[480px] mx-auto xl:flex-row xl:w-[920px]">
        <img className="size-6 absolute top-0 left-8" src="/images/bg-quotes.png" alt="bg quotes"></img>
        {
            testimonials.map((testimonial: Testimonial) =>(
               <TestimonialCard key={testimonial.name} {...testimonial} />
            ))
        }
    </div>
  )
}
