import React from 'react';
import  {useRouter} from 'next/router'

function pages({name}) {
  const router = useRouter()
  if(router.isFallback){
    return <span>Loading...</span>
  }
  return (
    <div >
      <h1>Hi, sthimer!</h1>
        <>
          <strong>{name}</strong>
          <br/>
        </>
    </div>
  )
}
export async function getStaticPaths (){
  return { 
    paths:[{
      params:{name:'joao'}
    }],
    fallback:true // if the page not exist, with fallback=true, it will be generated
  }
}
export default pages;
export async function getStaticProps(context) {
  const {name} = context.params
  return {
    props: {name}, 
    revalidate:60
  }
}