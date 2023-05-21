"use client"

import { useState } from "react"
import useSWR from "swr"
import Image from "next/image"
import { useInView } from "@react-spring/web"

import { MdDesignServices } from "react-icons/md"
import { AiOutlineMail, AiFillInstagram } from "react-icons/ai"

import { ListSpring, Spring, Trail } from "@/components"

import { getApps } from "@/api"

import preview from "@/images/preview.jpg"
import iphoneServices from "@/images/iphone-services.png"
import contactHeroPreview from "@/images/contact-hero.jpg"
import { IAppsData } from "@/api/interfaces"

export default function Home() {
  const [categoryValue, setCategoryValue] = useState("web_app")
  const { data: dataApps, error, isLoading } = useSWR<IAppsData[]>(`get-apps/${categoryValue}`, async () => await getApps(categoryValue))

  const [previewRef, previewInView] = useInView()

  function chooseCategory(value: string) {
    setCategoryValue(value)
  }

  return (
    <main className="bg-fixed bg-cover bg-center" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1519120944692-1a8d8cfc107f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80)" }}>
      <header className="flex items-center justify-center min-h-screen relative">
        <div className="absolute inset-0">
          {/* <div className="absolute inset-0 bg-black opacity-50" /> */}
          {/* <Image className="w-full h-full object-cover" src={preview} alt="preview" /> */}
        </div>

        <div className={"max-w-lg mx-auto text-center"} ref={previewRef}>
          <Trail open={previewInView}>
            <h1 className="text-5xl mb-3">PARTICLE V2 IS HERE</h1>
            <span className="text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
            <span className="text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
          </Trail>
        </div>
      </header>

      <section className="min-h-screen" style={{ background: "linear-gradient(to bottom,transparent,rgb(0,0,0))" }}>
        <Spring rootMargin="-5% 0%" option={{ from: { opacity: 0 }, to: { opacity: 1 } }}>
          <div className="max-w-7xl mx-auto py-2 px-5">
            <h2 className="text-center text-2xl">6 LIGHT AND DARK HOMEPAGE DESIGNS</h2>
            <div className="flex justify-center md:justify-end">
              <ul className="flex gap-4 rounded-full bg-white relative tabs my-10">
                {categories.map(({ key, label, value }) => (
                  <li key={key} className={`${categoryValue === value ? "active text-white text-center" : "hover:bg-slate-500/25"} font-bold rounded-full transition-colors`}>
                    <button
                      className={`w-40 py-2 rounded-full transition-colors`}
                      onClick={() => chooseCategory(value)}
                    >
                      {label}
                    </button>
                  </li>
                ))}
                <span className="tab_switcher"></span>
              </ul>
            </div>
            <ul className="grid gap-4" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))" }}>
              {dataApps && dataApps.map(({ id, name, image, link, category }) => (
                <ListSpring
                  key={id}
                  initial="hidden"
                  animate="visible"
                  variants={{
                    hidden: { opacity: 0, y: -20, scale: 0 },
                    visible: { opacity: 1, y: 0, scale: 1 },
                  }}>

                  <li className="relative">
                    <a href={link} target="__blank">
                      <Image className="w-full h-full max-h-48 object-contain rounded-lg hover:cursor-pointer hover:-translate-y-6 transition-transform" width={1834} height={796} src={image} alt={name} />
                      <p className="text-center text-white py-4 text-xl">{name}</p>
                    </a>
                    {/* <span className="mark absolute top-0 right-0">{category}</span> */}
                  </li>
                </ListSpring>
              ))}
            </ul>
          </div>
        </Spring>
      </section>

      <article className="flex items-center text-white min-h-screen" style={{ backgroundColor: "#101C26" }}>
        <div className="max-w-7xl mx-auto py-2 px-5">
          <h3 className="text-center text-2xl mb-4">What We do, We do Best!</h3>
          <p className="text-center text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris.</p>

          <div className="grid md:grid-cols-3 mt-12">

            <Spring
              className="flex flex-col justify-center gap-9 text-end"
              option={{ from: { x: -1000 }, to: [{ x: 100 }, { x: 0 }] }}
            >
              <div className="flex items-center gap-4">
                <div>
                  <h4 className="text-purple-500 font-bold">Graphic Design</h4>
                  <p>Lorem ipsum dolor sit amet, consecte adipiscing elit. Integer nec odio.</p>
                </div>
                <MdDesignServices className="text-purple-500" size={38} />
              </div>
              <div className="flex items-center gap-4">
                <div>
                  <h4 className="text-purple-500 font-bold">Graphic Design</h4>
                  <p>Lorem ipsum dolor sit amet, consecte adipiscing elit. Integer nec odio.</p>
                </div>
                <MdDesignServices className="text-purple-500" size={38} />
              </div>
              <div className="flex items-center gap-4">
                <div>
                  <h4 className="text-purple-500 font-bold">Graphic Design</h4>
                  <p>Lorem ipsum dolor sit amet, consecte adipiscing elit. Integer nec odio.</p>
                </div>
                <MdDesignServices className="text-purple-500" size={38} />
              </div>
            </Spring>

            <Spring className="flex justify-center" option={{ from: { y: 500 }, to: [{ y: 0 }, { y: 0 }] }}>
              <Image src={iphoneServices} alt="iphoneServices" />
            </Spring>

            <Spring
              className="flex flex-col justify-center gap-9"
              option={{ from: { x: 1000 }, to: [{ x: 100 }, { x: 0 }] }}
            >
              <div className="flex items-center gap-4">
                <MdDesignServices className="text-purple-500" size={38} />
                <div>
                  <h4 className="text-purple-500 font-bold">Graphic Design</h4>
                  <p>Lorem ipsum dolor sit amet, consecte adipiscing elit. Integer nec odio.</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <MdDesignServices className="text-purple-500" size={38} />
                <div>
                  <h4 className="text-purple-500 font-bold">Graphic Design</h4>
                  <p>Lorem ipsum dolor sit amet, consecte adipiscing elit. Integer nec odio.</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <MdDesignServices className="text-purple-500" size={38} />
                <div>
                  <h4 className="text-purple-500 font-bold">Graphic Design</h4>
                  <p>Lorem ipsum dolor sit amet, consecte adipiscing elit. Integer nec odio.</p>
                </div>
              </div>
            </Spring>

          </div>
        </div>
      </article>

      <section className="flex items-center min-h-screen py-40 bg-fixed bg-cover bg-center" style={{ backgroundImage: `url(${contactHeroPreview.src})` }}>
        <div className="max-w-7xl mx-auto px-5">
          <h3 className="text-center text-white text-2xl mb-4">What We do, We do Best!</h3>
          <p className="text-center text-white text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris.</p>

          <div className="flex flex-wrap gap-8 mt-12">

            <Spring rootClassName="grow overflow-hidden" className="overflow-hidden" option={{ from: { x: -1000 }, to: [{ x: 100 }, { x: 0 }] }}>
              <div className="flex flex-col justify-between px-3 py-4 text-white" style={{ minHeight: 426, backgroundColor: "rgba(255, 255, 255, 0.07)" }}>
                <div>
                  <p className="mb-4">Our <b>Info</b></p>
                  <p className="flex items-center gap-2 mb-4">
                    <span><AiOutlineMail size={20} /></span>
                    ch.vova321@gmail.com
                  </p>
                  <p className="flex items-center gap-2 mb-4">
                    <span><AiOutlineMail size={20} /></span>
                    ch.vova321@gmail.com
                  </p>
                  <p className="flex items-center gap-2">
                    <span><AiOutlineMail size={20} /></span>
                    ch.vova321@gmail.com
                  </p>
                </div>

                <div>
                  <p className="my-4"><b>Connect</b> with US</p>

                  <ul className="flex gap-2">
                    <li><AiFillInstagram size={34} /></li>
                    <li><AiFillInstagram size={34} /></li>
                    <li><AiFillInstagram size={34} /></li>
                    <li><AiFillInstagram size={34} /></li>
                  </ul>
                </div>
              </div>
            </Spring>

            <Spring rootClassName="grow overflow-hidden" className="overflow-hidden" option={{ from: { x: 1000 }, to: [{ x: 100 }, { x: 0 }] }}>
              <div className="px-3 py-4 text-white" style={{ backgroundColor: "rgba(255, 255, 255, 0.07)" }}>
                <p>Send us a <b>Message</b></p>

                <form action="" className="flex flex-col gap-4 mt-3">
                  <label htmlFor="name">
                    <p className="mb-2">Name</p>
                    <input
                      className="w-full p-2"
                      style={{ backgroundColor: "rgb(142,151,161,0.13)" }}
                      id="name"
                      type="text"
                    />
                  </label>
                  <label htmlFor="email">
                    <p className="mb-2">Email</p>
                    <input
                      className="w-full p-2"
                      style={{ backgroundColor: "rgb(142,151,161,0.13)" }}
                      id="email"
                      type="email"
                    />
                  </label>
                  <label htmlFor="message">
                    <p className="mb-2">Message</p>
                    <textarea
                      className="w-full px-2 py-5 resize-none"
                      name="message"
                      id="message"
                      style={{ backgroundColor: "rgb(142,151,161,0.13)" }}
                    ></textarea>
                  </label>

                  <button type="submit" className="max-w-xs p-2" style={{ backgroundColor: "rgb(142,151,161,0.13)" }}>Submit</button>
                </form>
              </div>
            </Spring>
          </div>
        </div>
      </section>
    </main>
  )
}

const categories = [
  {
    key: 1,
    label: "Web App",
    value: "web_app"
  },
  {
    key: 2,
    label: "Native App",
    value: "native_app"
  },
]

const data = [
  {
    key: 1,
    label: "Texyty",
    image: preview,
    category: "web_app"
  },
  {
    key: 2,
    label: "Texyty",
    image: preview,
    category: "web_app",
  },
  {
    key: 3,
    label: "Texyty",
    image: preview,
    category: "web_app"

  },
  {
    key: 4,
    label: "Texyty",
    image: preview,
    category: "web_app"

  },
  {
    key: 5,
    label: "Texyty",
    image: preview,
    category: "web_app"

  },
  {
    key: 6,
    label: "Texyty",
    image: preview,
    category: "native_app"
  },
  {
    key: 7,
    label: "Texyty",
    image: preview,
    category: "native_app"
  },
  {
    key: 8,
    label: "Texyty",
    image: preview,
    category: "web_app"

  },
  {
    key: 9,
    label: "Texyty",
    image: preview,
    category: "web_app"

  },
]