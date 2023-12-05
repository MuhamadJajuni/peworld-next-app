type detailRecruitersProps = { params: { slug: string } }
export default function detailRecruitersPage(props: detailRecruitersProps) {
    const { params } = props
    console.log(params);
    
    return (
        <main>
            <h1>Detail Recruiters</h1>
            <h2 className="flex text-3xl text-blue-300 justify-center">{params.slug}</h2>
        </main>
    )
}