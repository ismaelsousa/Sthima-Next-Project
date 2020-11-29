import React from 'react';

function ServerSide({name}) {
  return (
    <div >
      <strong>{name}</strong>
      <button onClick={async ()=>{
        const MyAlert = (await import('../utils/alert')).default
        MyAlert('nice!')
      }} >Throw Alert</button>
    </div>
  )
}

export default ServerSide;

export const getServerSideProps = async ()=>{
  // Some fetch here!
  return {
    props:{
      name:'ismael'
    }
  }
}