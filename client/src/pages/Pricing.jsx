import logo from '../pricing.png'

export const Pricing = () => {
    return <>

        <div className="container">
            <div className="section1 d-flex">
                <div className="p-4">
                    <div >
                        <h2 className='display-6 '>The average user saves
                            over $1600 a year.</h2>
                        <p className='w-75'>First, your first 15 signings are 100% free - <span className="text-danger"> regardless of how long it takes you! </span> You get complete access to all of NotaryGadget's features with no strings attached and no credit card is required.</p>
                        <p className='w-75'>The average user saves over $1600 a year.  NotaryGadget tracks all your expenses and notarial acts on each signing.  Then it automatically calculates the amount you will save on self-employment taxes -
                        </p>
                        <p className='w-75'>NotaryGadget is tax deductible too.  This means the real cost is actually 15-35% less depending your tax bracket -</p>
                    </div>
                </div>
                <div className="img1">
                    <img src={logo} alt="" srcset="" />
                </div>
            </div>
        </div>

        <hr/>


    </>
}