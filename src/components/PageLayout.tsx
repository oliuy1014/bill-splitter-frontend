import { PropsWithChildren } from "react"
import Footer from "./Footer";

type PageLayoutProps = PropsWithChildren;

export default function PageLayout({children}: PageLayoutProps) {
  return (
    <div className="body-container">
      {children}
      <Footer/>
    </div>
  )
}
