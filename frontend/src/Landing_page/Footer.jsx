import React from 'react'
function Footer() {
  return (
    <div className="border-top border-2 p-5">
      <div className="row p-5">
        <div className="col">
          <img src="../assets/logo.svg" alt="" style={{ width: "50%" }} />
          <p className='mt-3'>Copyright 2021 <br />Zrodha booking ltd <br />all rights reserved</p>
         
        </div>
        <div className="col">
          <a className='text-decoration-none' href="">Company</a> <br />
          <a className='text-decoration-none' href="">About</a> <br />
          <a className='text-decoration-none' href="">Products</a> <br />
          <a className='text-decoration-none' href="">Pricing</a> <br />
          <a className='text-decoration-none' href="">Referral programme</a> <br />
          <a className='text-decoration-none' href="">Careers</a> <br />
          <a className='text-decoration-none' href="">Zerodha.tech</a> <br />
          <a className='text-decoration-none' href="">Open source</a> <br />
          <a className='text-decoration-none' href="">Press & media</a> <br />
          <a className='text-decoration-none' href="">Zerodha Cares (CSR)</a> <br />
        </div>
        <div className="col">
          <a className='text-decoration-none' href="">Support</a> <br />
          <a className='text-decoration-none' href="">Contact us</a> <br />
          <a className='text-decoration-none' href="">Support portal</a> <br />
          <a className='text-decoration-none' href="">Z-Connect blog</a> <br />
          <a className='text-decoration-none' href="">List of charges</a> <br />
          <a className='text-decoration-none' href="">Downloads & resources</a> <br />
          <a className='text-decoration-none' href="">Videos</a> <br />
          <a className='text-decoration-none' href=""> Market overview</a> <br />
          <a className='text-decoration-none' href="">How to file a complaint?</a> <br />
          <a className='text-decoration-none' href="">Status of your complaints</a> <br />
        </div>

        <div className="col">
          <a className='text-decoration-none' href="">Account</a><br />
          <a className='text-decoration-none' href="">Open an account</a><br />
          <a className='text-decoration-none' href="">Fund transfer</a><br />
        </div>
      </div>
      <div className="main">
      <div className="text-small text-muted p-5" style={{ fontSize: "12px" }}>
      <p className="mx-5 ">
            Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration
            no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha
            Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity
            Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025; NSE-50001
            – SEBI Registration no.: INZ000038238 Registered Address: Zerodha
            Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence
            Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka,
            India. For any complaints pertaining to securities broking please
            write to
            <a href="" className="text-decoration-none">
              {" "}
              complaints@zerodha.com{" "}
            </a>
            , for DP related to{" "}
            <a href="" className="text-decoration-none">
              {" "}
              dp@zerodha.com{" "}
            </a>
            . Please ensure you carefully read the Risk Disclosure Document as
            prescribed by SEBI | ICF
          </p>
          <p className="mx-5">
            Procedure to file a complaint on{" "}
            <a href="" className="text-decoration-none">
              {" "}
              SEBI SCORES{" "}
            </a>
            : Register on SCORES portal. Mandatory details for filing complaints
            on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits:
            Effective Communication, Speedy redressal of the grievances
          </p>

          <p className="mx-5">
            {" "}
            <a href="" className="text-decoration-none">
              {" "}
              Smart Online Dispute Resolution{" "}
            </a>
            |
            <a href="" className="text-decoration-none">
              {" "}
              Grievances Redressal Mechanism
            </a>{" "}
          </p>
          <p className="mx-5">
            Investments in securities market are subject to market risks; read
            all the related documents carefully before investing.
          </p>
          <p className="mx-5">
            Attention investors: 1) Stock brokers can accept securities as
            margins from clients only by way of pledge in the depository system
            w.e.f September 01, 2020. 2) Update your e-mail and phone number
            with your stock broker / depository participant and receive OTP
            directly from depository on your e-mail and/or mobile number to
            create pledge. 3) Check your securities / MF / bonds in the
            consolidated account statement issued by NSDL/CDSL every month.
          </p>
          <p className="mx-5">
            "Prevent unauthorised transactions in your account. Update your
            mobile numbers/email IDs with your stock brokers. Receive
            information of your transactions directly from Exchange on your
            mobile/email at the end of the day. Issued in the interest of
            investors. KYC is one time exercise while dealing in securities
            markets - once KYC is done through a SEBI registered intermediary
            (broker, DP, Mutual Fund etc.), you need not undergo the same
            process again when you approach another intermediary." Dear
            Investor, if you are subscribing to an IPO, there is no need to
            issue a cheque. Please write the Bank account number and sign the
            IPO application form to authorize your bank to make payment in case
            of allotment. In case of non allotment the funds will remain in your
            bank account. As a business we don't give stock tips, and have not
            authorized anyone to trade on behalf of others. If you find anyone
            claiming to be part of Zerodha and offering such services, please
            <a href="" className="text-decoration-none">
              {" "}
              create a ticket here
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  )
}

export default Footer