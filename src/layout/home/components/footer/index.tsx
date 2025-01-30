import { Box, Container, Typography } from '@/components'
import Image from 'next/image'
import Link from 'next/link'
import * as Styles from './styles'

export function Footer () {
  return (
    <>
      <Styles.Container>
        <Container size="lg">
          <Image 
            src="/logo.svg"
            alt="logo"
            width={100}
            height={100}
            style={{ objectFit: 'contain' }}
          />
        </Container>
        <Container size="lg">
          <Box 
            flexDirection={{
              '@initial': 'column',
              '@table-min': 'row'
            }} 
            justifyContent="space-between" 
            gap={2}
          >
            <Box flexDirection="column" gap={1}>
              <Typography fontWeight="500" size="md" color="heading">Categories</Typography>
              <Styles.List>
                <li>
                  <Link href="">Coming Soon</Link>
                </li>
                <li>
                  <Link href="">Accessories</Link>
                </li>
                <li>
                  <Link href="">New Arrivals</Link>
                </li>
              </Styles.List>
            </Box>
            <Box flexDirection="column" gap={1}>
              <Typography fontWeight="500" size="md" color="heading">Our policy</Typography>
              <Styles.List>
                <li>
                  <Link href="">Contact us</Link>
                </li>
                <li>
                  <Link href="">About us</Link>
                </li>
                <li>
                  <Link href="">Shop</Link>
                </li>
              </Styles.List>
            </Box>
            <Box flexDirection="column" gap={1}>
              <Typography fontWeight="500" size="md" color="heading">Get in touch</Typography>
              <Styles.List>
                <li>
                  <Link href="">
                    <span>InkLook Merchandise</span><br />HD-342, WeeWork 247 Park, 13 Floor<br />
                    <span>Vikroli Corporate Park</span><br />
                    <span>Mumbai, MH 400079</span>
                  </Link>
                </li>
                <li>
                  <Link href="">order.inklook@gmail.com</Link>
                </li>
                <li>
                  <Link href="">(+91) 88281 14579</Link>
                </li>
              </Styles.List>
            </Box>
            <Box flexDirection="column" gap={1}>
              <Typography fontWeight="500" size="md" color="heading">follow us</Typography>
              <Styles.List>
                <li>
                  <Link href="">
                  Facebook
                  </Link>
                </li>
                <li>
                  <Link href=""> Twitter</Link>
                </li>
                <li>
                  <Link href="">Instagram</Link>
                </li>
                <li>
                  <Link href="">Pinterest</Link>
                </li>
                <li>
                  <Link href="">Youtube</Link>
                </li>
              </Styles.List>
            </Box>
          </Box>
        </Container>
      </Styles.Container>
      <Container size="lg">
        <Box marginTop={3} marginBottom={3}>
          <Typography size="xsm">
            © InkLook Merchandice {new Date().getFullYear()}. Powered with 🧡  by US !!</Typography>
        </Box>
      </Container>
    </>
  )
}