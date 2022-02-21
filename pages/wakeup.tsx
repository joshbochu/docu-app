const Wakeup = ({times}) => {
    return (
        <>
            <ul>
                {times.map((times) => (
                    <li>{times}</li>
                ))}
            </ul>
        </>
    )
}

export async function getStaticProps() {
    const res = null
    const times = ['time1', 'time2']
    return {
        props: {
            times,
        }
    }
}

export default Wakeup
