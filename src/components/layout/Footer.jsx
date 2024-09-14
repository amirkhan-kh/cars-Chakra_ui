import './_footer.scss'
export const Footer = () => {
    const currentYear = new Date().getFullYear();
  return (
    <footer >
        <div className="container py-20 px-14">
            <div className="flex items-center justify-between w-full">
                <div>
                    <h1>zetmarket</h1>
                    <h3>Our vision is to provide convenience <br />and help increase your sales business.</h3>
                </div>
                <div className="flex items-center gap-16">
                    <ul>
                        <li className="font-bold"><strong>About</strong></li>
                        <li>How it works</li>
                        <li>Featured</li>
                        <li>Partnership</li>
                        <li>Bussiness Relation</li>
                    </ul>
                    <ul>
                        <li className="font-bold"><strong>Community</strong></li>
                        <li>Events</li>
                        <li>Blog</li>
                        <li>Podcast</li>
                        <li>Invite a friend</li>
                    </ul>
                    <ul>
                        <li className="font-bold"><strong>Socials</strong></li>
                        <li>Discord</li>
                        <li>Instagram</li>
                        <li>Twitter</li>
                        <li>Facebook</li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="flex items-center justify-between w-full pb-6">
           <h2> {currentYear}. MORENT. All rights reserved</h2>
           <div className="flex gap-14">
            <h2>Privacy & Policy</h2>
            <h2>Terms & Condition</h2>
           </div>
        </div>
    </footer>
  )
}
