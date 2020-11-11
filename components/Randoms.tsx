import useSWR from 'swr'

function Profile() {
  const { data, error } = useSWR('https://tektas.herokuapp.com/random')

  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>
  return (<div>
      <h1>{data.name}!</h1>
      <h2>{data.author}</h2>
      <h6>{data.about}</h6>
      <h3>{data.rate}</h3>
      
  </div>);
}

export default Profile;