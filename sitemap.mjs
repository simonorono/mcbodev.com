import { SitemapStream, streamToPromise } from 'sitemap'
import { Readable } from 'stream'
import fs from 'fs'

const now = new Date;

const links = [
  {
    url: '/',
    changefreq: 'weekly',
    priority: 1.0,
    lastmod: now
  },
  {
    url: '/projects',
    changefreq: 'weekly',
    priority: 1.0,
    lastmod: now
  },
]

const stream = new SitemapStream({
  hostname: 'https://mcbodev.com'
})

const xml = await streamToPromise(Readable.from(links).pipe(stream)).then(data => data.toString())

fs.writeFileSync('./public/sitemap.xml', xml, { flag: 'w+' })
