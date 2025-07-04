import React from 'react'

const TestComp = () => {
  return (
    <>
    <div style={{width:"100%",height:"100vh",background:"red"}}>
        <video width="3200" height="2400" controls preload="none">
      <source src="/video/herobg.mp4" type="video/mp4" />
      <track
        src="/video/herobg.mp4"
        kind="subtitles"
        srcLang="en"
        label="English"
      />
      Your browser does not support the video tag.
    </video>
    </div>
    </>
  )
}

export default TestComp