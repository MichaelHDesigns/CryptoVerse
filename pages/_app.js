import '../styles/tailwind.css'
import Link from 'next/link'

function MyApp({ Component, pageProps }) {
  return (
      <div>
          <nav className="border-b p-6">
              <h1 className="text-4xl font-bold">CryptoAsset Marketplace</h1>
              <div className="flex mt-4">
                  <Link href="/">
                      <a className="mr-6 text-blue-800">
                          Home
                      </a>
                  </Link>
                  <Link href="/create-item">
                      <a className="mr-6 text-blue-800">
                          Sell Digital Asset
                      </a>
                  </Link>
                  <Link href="/my-assets">
                      <a className="mr-6 text-blue-800">
                          My Digital Assets
                      </a>
                  </Link>
                  <Link href="/creator-dashboard">
                      <a className="mr-6 text-blue-800">
                          Creator Dashboard
                      </a>
                  </Link>
              </div>
          </nav>
          <Component {...pageProps} />
      </div>
  );
}

export default MyApp;
