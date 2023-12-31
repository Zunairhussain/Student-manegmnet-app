import Link from "next/link";
function AdminPanelCards(props) {
    let card = props.card;
    let temp = [{ component: "component1", path: "/home" }, { component: "component1", path: "/home" }]
    return (
        /* an admin panel card */
        <div className="flex flex-col justify-around w-48 bg-cyan-200 text-black shadow-md mb-7 text-left py-3 pl-6">
            <h1 className="font-semibold">{card.title}</h1>
            {
                card.links.map((value,index) => {
                    return <Link href={value.path} className="hover:text-gray-500" key={index}>{value.componentName}</Link>
                })
            }
        </div>
    )
}
export default AdminPanelCards 