import React from 'react'
import Header from '../components/Header'


const AIchat = () => {
  return (
    <div>
        <Header/>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <iframe 
                src="https://huggingface.co/spaces/EmeraldUser1/bottest2" 
                title="Travel Bot"
            style={{ width: '100%', height: '100%', border: 'none' }}
            />
        </div>
       
    </div>
  )
}

export default AIchat