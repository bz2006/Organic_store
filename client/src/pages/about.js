import React from 'react'
import Layout from "./../components/Layout/Layout";
import "./about.css"

function Whoarewe() {
  var hosturl = window.location.protocol + "//" + window.location.host + "/uploads/"
  return (
    <Layout>
      <div>
        
        <img src={hosturl+"about.png"} className='abbanner' style={{width:"100%"}} />
        <img src={hosturl+"aboutCopy.png"} className='mobabbanner' style={{width:"100%"}} />

        <div id="bd" style={{ width: '100%',  marginBottom: '-23px', fontFamily: "Rubik" }}>
          <h1 id="waw3" style={{ fontFamily: 'arial', paddingTop: '50px', fontFamily: "Rubik" }}>Explore the World of Organic Foods</h1>
          <p id="waw3" style={{ fontSize: '25px', fontFamily: 'arial', fontWeight: 200, fontFamily: "Rubik" }}>
          Organic food is a concept that refers to foods that are raised or grown using the methods and standards of organic agriculture, which do not use: Artificial chemicals pesticides…
          </p>
          <br />
          <p id="waw3" style={{ fontSize: '25px', fontFamily: 'arial', fontWeight: 200, fontFamily: "Rubik" }}>
          Certainly, consumers choose organic food because of safety, avoiding artificial chemicals, and reducing pesticide residue.
          </p>
          <br />
          <h1 id="waw3" style={{ fontFamily: 'arial', paddingTop: '15px', fontSize: '50px', fontFamily: "Rubik" }}>Higher Nutrition</h1>
          <p id="waw3" style={{ fontSize: '25px', fontFamily: 'arial', fontWeight: 200 }}>
          Organic food contains 40% more antioxidants than conventional products, which is effective in reducing the risk of heart disease,…
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default Whoarewe