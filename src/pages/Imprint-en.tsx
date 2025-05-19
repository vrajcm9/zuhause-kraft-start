import FooterSection from "@/components/FooterSection";
import Navigation from "@/components/Navigation";

const Imprint = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col justify-between">
      <div>
        <Navigation />
        <div className="max-w-7xl mx-auto px-6 py-20">
          <h1 className="text-4xl font-bold text-black mb-12">Imprint</h1>

          <div className="space-y-8 text-gray-700 text-lg">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Information according to §5 TMG:</h2>
              <p>
                <strong>IhreZuhauseBeratung</strong><br />
                Owner: Christian Schrainer<br />
                Murrstraße 12<br />
                90429 Nürnberg<br />
                Germany
              </p>
              <p className="mt-4">
                Phone: +49 151 42802843<br />
                Email: c.schrainer@ihrezuhauseberatung.de<br />
                Website: www.ihrezuhauseberatung.de
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">Represented by:</h2>
              <p>
                Christian Schrainer
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">Responsible for content according to § 55 Abs. 2 RStV:</h2>
              <p>
                Christian Schrainer<br />
                Murrstraße 12<br />
                90429 Nürnberg<br />
                Germany
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">Commercial Register Entry</h2>
              <p>
                Register Court: Amtsgericht Nürnberg<br />
                Registration Number: HRB 12345 {/* <-- Please adjust if applicable */}
              </p>
            </div>
            
            <div>
              <h2 className="text-2xl font-semibold mb-4">Liability Disclaimer:</h2>
              <p className="mb-2">
                <strong>Liability for Content:</strong> As a service provider, we are responsible for our own content on these pages according to §7 Abs.1 TMG. According to §§8 to 10 TMG, we are not obligated to monitor transmitted or stored third-party information or investigate circumstances indicating illegal activity. Obligations to remove or block the use of information under general laws remain unaffected. Liability is only possible from the time of knowledge of a specific infringement. Upon becoming aware of any such legal violations, we will remove this content immediately.
              </p>
              <p>
                <strong>Liability for Links:</strong> Our site contains links to external websites over which we have no control. Therefore, we cannot accept any liability for external content. The respective provider or operator of the pages is always responsible for the content of linked pages. Linked pages were checked for possible legal violations at the time of linking. No illegal content was identifiable at the time of linking. However, permanent content control of the linked pages is not reasonable without specific indications of a legal violation. Upon notification of violations, we will remove such links immediately.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">Copyright:</h2>
              <p>
                The content and works created by the site operators on these pages are subject to German copyright law. Duplication, processing, distribution, and any kind of exploitation outside the limits of copyright require the written consent of the respective author or creator. Downloads and copies of this site are permitted only for private, non-commercial use. Insofar as the content on this site was not created by the operator, the copyrights of third parties are respected. Third-party content is identified as such. Should you nevertheless become aware of a copyright infringement, please inform us accordingly. Upon notification of violations, we will remove such content immediately.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">Online Dispute Resolution:</h2>
              <p>
                The European Commission provides a platform for online dispute resolution (ODR): <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">https://ec.europa.eu/consumers/odr/</a>
              </p>
              <p>
                We are neither obliged nor willing to participate in dispute resolution proceedings before a consumer arbitration board.
              </p>
            </div>
          </div>
        </div>
      </div>

      <FooterSection />
    </div>
  );
};

export default Imprint;
