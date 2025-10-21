import { Navbar } from "./navbar"

export const Header = () => {
  return (
    <header className="flex justify-between px-10 ">
      <a href="/">
        <img className="w-30 md:w-40 lg:w-28 drop-shadow-md" src="/images/logo-img.svg" alt="logo"></img>
      </a>
      <Navbar />
    </header>
  )
}
