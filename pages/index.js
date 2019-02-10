// Import the Next Link API
import React from 'react'
import Link from "next/link"


// Import Header Component
import Layout from "../components/Layout.js"


const Index = () => (
	<Layout>


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
