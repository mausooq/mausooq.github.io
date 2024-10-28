import React from "react";
import { Link } from "@nextui-org/react";

export default function Contact() {
  const contacts = [
    {
      title: "Email",
      desc: "abdulmausooq@gmail.com",
      link: "mailto:abdulmausooq@gmail.com",
    },
    {
      title: "GitHub",
      link: "https://github.com/mausooq",
      desc: "Mausooq",
      showAnchorIcon: true
    },
    {
      title: "LinkedIn",
      link: "https://www.linkedin.com/in/abdul-mausooq-a26649249/",
      desc: "Mausooq",
      showAnchorIcon: true
    }
  ]
  return <div className="my-12 px-4">
    <h1
      className="hover:text-shadow-3 m-0 font-heading text-[clamp(3rem,_10vw,_4.5rem)] font-black tracking-[-0.2rem] transition-all duration-300">
      Contact Me</h1>
    <div>
      {contacts.map((contact) => (
        <div className="mb-4" key={contact.desc}>
          <h3 className="text-2xl font-bold">{contact.title}</h3>
          <Link href={contact.link} target="_blank" isExternal showAnchorIcon={contact.showAnchorIcon}>{contact.desc}</Link>
        </div>
      ))}
    </div >
  </div >;
}
