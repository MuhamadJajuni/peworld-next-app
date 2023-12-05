export default function workersPage() {
    return (
        <main>
            <nav className="flex bg-slate-500 py-5 px-5">
                <ul className="flex ml-3 gap-2">
                    <li className="text-white">Home</li>
                    <li className="text-white">Profile</li>
                </ul>
            </nav>
            <section className="grid grid-cols-2 h-52">
                <div className="bg-red-300">01</div>
                <div className="bg-blue-300">02</div>
            </section>
            <section className="grid grid-cols-4 h-52">
                <div className="bg-red-400">1</div>
                <div className="bg-yellow-400">2</div>
                <div className="bg-green-400">3</div>
                <div className="bg-blue-400">4</div>
            </section>
        </main>
    );
}