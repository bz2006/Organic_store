import React, { useState, useEffect } from 'react';
import Layout from './../components/Layout/Layout.js';
import { useAuth } from '../context/auth.js';
import "./home.css"
import Featuredproducts from './featuredproducts.js';


function HomePage() {
    var hosturl = window.location.protocol + "//" + window.location.host + "/uploads/"
    const [auth] = useAuth()
    var mainUrl = window.location.protocol + "//" + window.location.host;
    return (
        <Layout>
            <>
                <img src={hosturl+"banner.png"} className="responsive" />
                <img src={hosturl+"bannerCopy.png"} className="responsive1" />
            </>
          <Featuredproducts/>
        </Layout>
    )
}

export default HomePage