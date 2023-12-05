export default function recruitersPage() {
    return(
        <main>
            <nav className="flex bg-slate-500 py-4 px-4">
                <ul className="flex ml-3 gap-2">
                    <li className="text-white">Home</li>
                    <li className="text-white">Profile</li>
                </ul>
            </nav>
            <section className="flex justify-center">
                <h1 className="bg-red-300">Ini Halaman Recruiters</h1>
            </section>
            <section className="grid grid-rows-3 grid-flow-col gap-2 h-72">
                <div className="row-span-3 bg-red-300">1</div>
                <div className="col-span-2 bg-blue-300">2</div>
                <div className="row-span-2 col-span-2 bg-green-300">3</div>
            </section>
        </main>
    )
}