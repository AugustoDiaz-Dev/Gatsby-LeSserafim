import React from 'react'
import Layout from '../components/Layout'
import '../styles/four-o-four.css'

const NotFound = () => {
    return (
        <Layout>
            <div>
                <h2 className='page404'>404</h2>
                <p className='page404'>Sorry, <br/>that page doesn't exist <br/>(yet)!</p>
            </div>
        </Layout>
    );
}

export default NotFound