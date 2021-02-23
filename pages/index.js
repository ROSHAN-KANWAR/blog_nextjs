import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home({data}) {
 
  return (
   <>
   <Head><title>Home</title></Head>
<h1>Home page</h1>
  {data.map((post,i)=>{
    return(
      <div class="post">
<div key={i}>
  <h3>{post.title}</h3>
  <p>{post.body}</p><hr/>
</div></div>
    )
  })}
   </>
  )
}

export async function getStaticProps(){
  const res=await fetch("https://jsonplaceholder.typicode.com/posts/?_limit=12")
  const data=await res.json()
  return{
    props:{
      data
    }
  }
}
