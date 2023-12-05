type detailWorkersProps = {params: {slug: string}}
export default function detailWorkersPage(props: detailWorkersProps) {
    const { params } = props
    return (
        <main>
            <nav className="flex bg-slate-700 py-2 px-5">
                <h1 className="text-white">Peworld</h1>
                <ul className="flex ml-5">
                    <li className="mr-3">Menu</li>
                    <li className="mr-3">Profile</li>
                </ul>
            </nav>
            <h1>Detail Workers</h1>
            <h2 className="text-blue-300 flex justify-center text-5xl">{params.slug}</h2>
        </main>
    )
}