import nextra from 'nextra'

const withNextra = nextra({
  defaultShowCopyCode: true
})

const isGithubActions = process.env.GITHUB_ACTIONS === 'true'

const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true
  },
  // TODO: Update basePath and assetPrefix for your GitHub Pages deployment
  // Replace 'your-repo-name' with your actual repository name
  ...(isGithubActions && {
    basePath: '/your-repo-name',
    assetPrefix: '/your-repo-name/'
  })
}

export default withNextra(nextConfig)
