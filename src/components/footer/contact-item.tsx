interface Props {
    text: string;
    iconUrl: string;
    alt: string;
    styles?: string;

}

export const ContactItem = ({text, iconUrl, alt, styles=""}: Props) => {
  return (
    <div>
        <div className={`flex items-start gap-12 ${styles}`}>
            <img className="mt-1" src={iconUrl} alt={alt}></img>
            <p>{text}</p>
        </div>

    </div>
  )
}
