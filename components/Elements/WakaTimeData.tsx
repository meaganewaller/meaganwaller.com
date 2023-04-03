const WAKATIME_API = "https://wakatime.com/share/@meaganewaller/c8afbb18-4262-45e7-a4ca-4a1c03bb56dc.json"

export default function WakaTimeData({ data }) {
  console.log('data', data);
  return (
    <></>
  )
}

export async function getServerSideProps() {
  const res = await fetch(`${WAKATIME_API}`)
  const data = await res.jsonp();
  return {
    props: {
      data
    }
  }
}
