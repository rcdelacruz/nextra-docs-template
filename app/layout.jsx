import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import { ThemeToggle } from '../components/ThemeToggle'
import './globals.css'

// Load DM Sans font
const fontLinks = (
  <>
    <link
      href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&display=swap"
      rel="stylesheet"
    />
  </>
)

// TODO: Update these metadata fields for your project
export const metadata = {
  title: {
    template: '%s – Your Project Name',
    default: 'Your Project Name'
  },
  description: 'Your project description goes here',
  icons: {
    icon: '/icon.svg',
  },
}

const navbar = (
  <Navbar
    logo={
      <span style={{ fontWeight: 600, fontSize: '1rem', letterSpacing: '-0.01em' }}>
        Your Project Name
      </span>
    }
    projectLink="https://github.com/yourusername/your-repo"
  >
    <ThemeToggle />
  </Navbar>
)

const footer = (
  <Footer>
    {/* TODO: Update footer content */}
    <div style={{ display: 'flex', gap: '1rem', fontSize: '0.75rem', color: 'var(--text-secondary)', padding: '0.5rem 0' }}>
      <span>MIT {new Date().getFullYear()} © Your Project Name</span>
    </div>
  </Footer>
)

export default async function RootLayout({ children }) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head>
        {fontLinks}
      </Head>
      <body>
        <style dangerouslySetInnerHTML={{__html: `
          :root {
            --nextra-primary-hue: 15 !important;
            --nextra-primary-saturation: 55.6% !important;
            --nextra-primary-lightness: 52.4% !important;
            --nextra-bg: 253, 253, 247 !important;
          }
          .dark {
            --nextra-primary-hue: 15 !important;
            --nextra-primary-saturation: 63.1% !important;
            --nextra-primary-lightness: 59.6% !important;
            --nextra-bg: 9, 9, 11 !important;
          }
          .dark body,
          .dark html {
            background-color: rgb(9, 9, 11) !important;
          }
        `}} />
        <div suppressHydrationWarning>
          <Layout
          navbar={navbar}
          pageMap={await getPageMap()}
          // TODO: Update with your repository URL
          docsRepositoryBase="https://github.com/yourusername/your-repo/tree/main"
          footer={footer}
          editLink="Edit this page"
          feedback={{
            content: "Question? Give us feedback →",
            labels: "feedback"
          }}
          sidebar={{
            toggleButton: false
          }}
          toc={{
            title: "On This Page"
          }}
        >
          {children}
        </Layout>
        </div>
      </body>
    </html>
  )
}
