import type { JSX } from "react";
import { ContactItem } from "./contact-item"
import { FooterListItems } from "./footer-list-items";
import { FacebookIcon } from "./facebookicon";
import { XIcon } from "./x-icon";
import { InstagramIcon } from "./instagram-icon";


interface ContactInformation {
  text: string;
  iconUrl: string;
  alt: string;
}



const contactInformation: ContactInformation[] = [
  {
    text: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system.",
    iconUrl: "/images/icon-location.svg",
    alt: "location",
  },
  {
    text: "+57 3196300193",
    iconUrl: "/images/icon-phone.svg",
    alt: "icon phone",
  },
  {
    text: "example@gmail.com",
    iconUrl: "/images/icon-email.svg",
    alt: "icon email",
  },
]

const pages: string[] = [
  "About us",
  "Job",
  "Press",
  "Blog"
]

const conditions: string[] = [
  "Contact us",
  "Terms",
  "privacy"
]

interface Media {
  text: string;
  icon: JSX.Element;
}

const medias: Media[] = [
  {
    text: "facebook",
    icon: <FacebookIcon />,
  },
  {
    text: "x",
    icon: <XIcon />,
  },
  {
    text: "instagram",
    icon: <InstagramIcon />
  }

]



export const Footer = () => {
  return (
    <footer className="pt-[260px] pb-[160px] px-6">
      <img className="mb-10" src="/images/logo.svg" alt="logo" />


      <div className="xl:flex xl:gap-24">
        <div className="flex flex-col gap-4 md:flex-row xl:gap-24">

          <ContactItem styles="flex-1" {...contactInformation[0]} />
 
          <div className="flex flex-col gap-4 flex-1 xl:flex-none">
            {contactInformation.slice(1, 4).map((contact: ContactInformation) => (
              <ContactItem key={contact.alt} {...contact} />
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-8 mt-16 md:flex-row  md:gap-24 xl:mt-0">
          <ul>
            <ul>
              {pages.map((page: string) => (
                <FooterListItems key={page} text={page} />
              ))}
            </ul>

          </ul>

          <ul>
            {conditions.map((condition: string) => (
              <FooterListItems key={condition} text={condition} />
            ))}
          </ul>


          <div className="flex justify-center gap-4">
            {
              medias.map((media: Media) => (
                <div key={media.text} className="text-white hover:text-Teal-200 cursor-pointer border rounded-full size-[30px] p-0.5">
                  {media.icon}
                </div>
              ))
            }
          </div>
        </div>
      </div>


    </footer>
  )
}
