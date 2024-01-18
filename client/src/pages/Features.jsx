import '../index.css'
// import MaterialIcon, { colorPalette } from 'material-icons-react';

export const Features = () => {

  return <>

    <div className="container">
      <div className="d-flex flex-column">

        <div className="section1 d-flex">
          <div className="p-5">
            <div >
              <h2 className='display-6'>Used by tens of <br /> thousands of notaries <br /> <span className="px-3 rounded" style={{ backgroundColor: "black", color: "#ffffff" }}> 5.4 million signings </span> <br /> and counting...</h2>
              <p className=''>NotaryGadget is an accounting/manage your <br />entire notary business app for notaries and <br />signing agents.</p>
              <p>It makes just about everything you do faster <br />and easier so you can spend more time <br />earning money and less time doing <br />administrative stuff. It streamlines</p>
              <pre className='font'>
                •	Accounting           •	Tracking Mileage           <br />
                •	Electronic Journal   •	Tracking Notarial Acts   <br />
                •	Invoicing            •	Tracking Expenses    <br />
                •	Calendaring          •	Tracking Payments   <br />
                •	Appointments         •	Taxes


              </pre></div>
          </div>
          <div className="img1">
            <img src="https://www.notarygadget.com/Graphics/Website/AllDevices.png" alt="" srcset="" />
          </div>
        </div>

        <hr />

        <div className="section2 mt-5 d-flex">
          <div className="img1">
            <img src="https://www.notarygadget.com/Graphics/Website/SigningsPage.png" alt="" srcset="" />
          </div>
          <div className="p-5">
            <div >
              <h2 className='display-6'>Manage your notary jobs like a pro.</h2>
              <p className=''>Every experienced notary knows that being organized and on top of your game is the key to getting more signings.</p>
              <p>NotaryGadget helps you do that by organizing your signings and managing every task on each signing.</p>
              <p>It does everything from tracking which appointments have been confirmed to tracking mileage to tracking notarial stamps and even automatically generating invoices.</p>
              <p>It works on <span className='text-danger'> loan signings, field inspections, and all other types of notary work. </span></p>
            </div>
          </div>

        </div>

        <hr />

        <div className="section3 mt-5 d-flex">
          <div className="p-5">
            <div >
              {/* <MaterialIcon icon="dashboard" /> */}

              <h2 className='display-6 w-75 pl-2'>Advanced Automation that saves you a ton of time.</h2>
              <div className="d-flex"> <img className='iconImg bg-light' src="https://www.notarygadget.com/Graphics/Website/CheckmarkGreenOutline.png" alt="" srcset="" /> <p className='w-50'> Automatically import your signing orders from all the major signing platforms, signing services, and escrow and title companies.</p> </div>
              <div className="d-flex"> <img className='iconImg bg-light' src="https://www.notarygadget.com/Graphics/Website/CheckmarkGreenOutline.png" alt="" srcset="" /> <p className='w-50'> Automatically send appointment reminders to your customers.</p> </div>
              <div className="d-flex"> <img className='iconImg bg-light' src="https://www.notarygadget.com/Graphics/Website/CheckmarkGreenOutline.png" alt="" srcset="" /> <p className='w-50'> Create your own custom email and text message templates. No more typing out the same email and text messages over and over again.
              </p> </div>

            </div>
          </div>
          <div className="img1">
            <img className="mt-5" src="https://www.notarygadget.com/Graphics/Website/Microchip.png" alt="" srcset="" />
          </div>
        </div>


        <hr />

        <div className="section4 mt-5 d-flex">
          <div className="section4-img">
            <img src="https://www.notarygadget.com/Graphics/Website/TaxReports.png" alt="" srcset="" />
          </div>
          <div className="">
            <div >
              <h2 className='display-6 w-75'>Save $1,000's on your taxes.</h2>
              <p className='w-75'>Not only does NotaryGadget save you a ton of time, it also helps you save big on your taxes!  In fact, <span className='text-danger font-weight-bold'> the average user saves over $1,600 per year </span>and a busy notary can easily save over $10,000 by tracking their notarial acts with NotaryGadget.</p>
              <p className="w-75">This is one of the most widely unknown benefits of being a notary.<span className='text-primaray'> <a href="/"> Click here </a> </span> see how it works.</p>

            </div>
          </div>

        </div>

        <hr />

        <div className="section5 mt-5 d-flex justify-content-center">
          <div className="section5Text ">

            <h2 className='display-6 '>Ditch the shoe box.</h2>
            <p className='w-50'>With NotaryGadget you can upload receipts for any expense using your computer, tablet, or from your phone with our free mobile app.</p>
            <p className='w-50'>The system automatically scans a digital copy of the receipt and links it to the expense.  If you ever need to see the receipt again, just click on the expense and boom...there's your receipt</p>


          </div>
          <div className="img1">
            <img className="pl-0" src="https://www.notarygadget.com/Graphics/Website/MobileApp.png" alt="" srcset="" />
          </div>
        </div>

        <hr />

        <div className="section6 mt-5 d-flex flex-column">
          <div className="heading text-center">
            <p className="display-6 font-weight-normal mb-4 text-lg-center ">Loaded with automation that <br />saves you time and money.</p>
          </div>

          <div className="boxes text-center">
            <div className="row">
              <div className="col border text-center">
                <img className="iconImg mt-2 p-1 rounded" src="https://www.notarygadget.com/Graphics/Website/IconCloudGray.png" />
                <h3 className='mt-1'>IMPORT ORDERS</h3>
                <div className="border-bottom"></div>
                <p className="mt-3">Auto import orders from SnapDocs, SigningOrder, and all the major signing, escrow, and title companies.</p>
              </div>
              <div className="col border text-center">
                <img className="iconImg mt-2 p-1 rounded" src="https://www.notarygadget.com/Graphics/Website/IconCarGray2.png" />
                <h3 className='mt-1'>MILEAGE</h3>
                <div className="border-bottom"></div>
                <p className="mt-3">Automatically calculates your mileage deduction on every signing.</p>
              </div>
              <div className="col border text-center">
                <img className="iconImg mt-2 p-1 rounded" src="https://www.notarygadget.com/Graphics/Website/IconCarGray2.png" />
                <h3 className='mt-1'>APPOINTMENT REMINDERS</h3>
                <div className="border-bottom"></div>
                <p className="mt-3">Setup automatic personalized appointment reminders for your customers.</p>
              </div>

            </div>
            <div className="row">
              <div className="col border text-center">
                <img className="iconImg  rounded p-1 mt-2" src="https://www.notarygadget.com/Graphics/Website/IconCarGray2.png" />
                <h3 className='mt-1'>EMAIL TEMPLATES</h3>
                <div className="border-bottom"></div>
                <p className="mt-3">Create your own email templates. No more retyping the same email over and over again.</p>
              </div>
              <div className="col border text-center">
                <img className="iconImg  mt-2 " src="https://www.notarygadget.com/Graphics/Website/IconInvoiceGray.png" />
                <h3 className='mt-1'>
                  AUTOMATIC INVOICES</h3>
                <div className="border-bottom"></div>
                <p className="mt-3">Instantly generate and send invoices with a single click, including your own logo.</p>
              </div>
              <div className="col border text-center">
                <img className="iconImg  mt-2 p-1 rounded" src="https://www.notarygadget.com/Graphics/Website/IconCalendarGray.png" />
                <h3 className='mt-1'>CALENDAR</h3>
                <div className="border-bottom"></div>
                <p className="mt-3">Automatically add signings and appointments to your phone and your calendar.</p>
              </div>

            </div>
            <div className="row">
              <div className="col border text-center">
                <img className="iconImg  mt-2  p-1 rounded" src="https://www.notarygadget.com/Graphics/Website/IconPercentGray.png" />
                <h3 className='mt-1'>TAXES</h3>
                <div className="border-bottom"></div>
                <p className="mt-3">Instantly generate the report you need for your taxes, including your IRS notarial acts savings.</p>
              </div>
              <div className="col border text-center">
                <img className="iconImg mt-2  p-1 rounded" src="https://www.notarygadget.com/Graphics/Website/IconDevicesGray.png" />
                <h3 className='mt-1'>ALL DEVICES</h3>
                <div className="border-bottom"></div>
                <p className="mt-3">Works on all devices (computers, macs, tablets, phones, etc).</p>
              </div>
              <div className="col border text-center ">
                <img className="iconImg mt-2 p-1 rounded" src="https://www.notarygadget.com/Graphics/Website/IconAndroidAppleGray.png" />
                <h3 className='mt-1'>
                  MOBILE APP</h3>
                <div className="border-bottom"></div>
                <p className="mt-3">Free mobile app for Android and iPhone.</p>
              </div>

            </div>
          </div>





        </div>

   <hr/>

   


      </div>
    </div>


  </>

}