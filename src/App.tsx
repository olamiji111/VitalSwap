import Header from "./sections/header";
import Footer from "./sections/footer";
import Hero from "./sections/hero";
import AccountsBlock from "./sections/accountsblock";
import Sidebar from "./components/sidebar";

function App() {


  return (
    <main>
      <Header />
      <div className=" grid grid-cols-[240px_1px_1fr] min-h-screen">
        <aside className="px-4 py-6 min-h-full bg-[#fafafa]">
          <Sidebar />
        </aside>
        <div className="bg-zinc-300 " />
        <div className="mt-hero padding-x overflow-y-auto">
          <Hero />
          <AccountsBlock />
        </div>

      </div>
      <Footer />
    </main>
  )
}

export default App
