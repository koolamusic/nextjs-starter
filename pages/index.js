// Import the Next Link API
import React from 'react'
import Link from "next/link"
// import FormEmber
//

// Import Header Component
import Layout from "../components/Layout.js"
import FormEmber from '../lib/formEmber.js';


const Index = () => (
	<Layout>

	<FormEmber src="https://form.myjotform.com/alexare/write-a-letter" />



	 <h2>Hello Next.js</h2>
	  <a href="/about">About Link using HREF</a>
	<br />

	<Link href="/about" style={{ fontSize: 40, fontWeight: 700 }}>
	 <a>About Page Next/Link</a>
	</Link>
	<br />


	</Layout>
)

export default Index
