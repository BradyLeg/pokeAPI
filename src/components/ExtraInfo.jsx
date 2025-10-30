export default function ExtraInfo(prop) {

    //base stats
    const statData = prop.stats.map(stat => {
        return (
            <p>{stat.stat.name}: {stat.base_stat}</p>
        )
    })

    console.log(statData);

    return (
        <aside>
            <h3>Base Stat</h3>
            {statData}
        </aside>
    )
}