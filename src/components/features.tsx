interface Feature {
  title: string;
  description: string;
  iconUrl: string;

}

const features: Feature[] = [
  {
    title: "Access your files, anywhere",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    iconUrl:"/images/icon-access-anywhere.svg"
  },
  {
    title: "Access your files, anywhere",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    iconUrl:"/images/icon-any-file.svg"
  },
  {
    title: "Access your files, anywhere",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    iconUrl:"/images/icon-arrow.svg"
  },
  {
    title: "Access your files, anywhere",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    iconUrl:"/images/icon-collaboration.svg"
  },
  {
    title: "Access your files, anywhere",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    iconUrl:"/images/icon-email.svg"
  },
  {
    title: "Access your files, anywhere",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    iconUrl:"/images/icon-location.svg"
  },
  {
    title: "Access your files, anywhere",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    iconUrl:"/images/icon-phone.svg"
  },
  {
    title: "Access your files, anywhere",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    iconUrl:"/images/icon-security.svg"
  },
]

export const Features = () => {
  return (
    <div className="grid grid-cols-1 gap-20 mt-[140px] md:grid-cols-2 max-w-[920px] mx-auto">
      {
        features.map(({title, description, iconUrl} : Feature) =>
        (
          <div key={title} className="flex flex-col items-center text-center">
            <img src={iconUrl} alt={title}/>
            <div>
              <h3 className="font-bold mb-2">{title}</h3>
              <p>{description}</p>
            </div>
          </div>

        ))
      
        
      }
    </div>
  )
}
