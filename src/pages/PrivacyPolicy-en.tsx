import FooterSection from "@/components/FooterSection";
import Navigation from "@/components/Navigation";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col justify-between">
      <div>
        <Navigation />
        <div className="max-w-7xl mx-auto px-6 py-20">
          <h1 className="text-4xl font-bold text-black mb-12">Privacy Policy</h1>

          <div className="space-y-8 text-gray-700 text-lg">
            <div>
              <h2 className="text-2xl font-semibold mb-4">1. Responsible Party</h2>
              <p>
                Christian Schrainer<br />
                Murrstraße 12<br />
                90429 Nürnberg<br />
                Germany<br />
                Email: c.schrainer@ihrezuhauseberatung.de
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">2. Data Collection on This Website</h2>
              <p>
                We collect personal data only when necessary, such as through contact forms or tracking tools (with your consent). 
                Server log files are collected automatically for technical reasons.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">3. Purpose of Data Processing</h2>
              <p>
                Your data is processed to:
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>Answer your inquiries</li>
                  <li>Provide our services</li>
                  <li>Improve our website based on anonymized analysis</li>
                </ul>
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">4. Use of Cookies</h2>
              <p>
                We use cookies to enhance user experience and analyze usage. Non-essential cookies are only set with your consent via a cookie banner.
              </p>
            </div>

            {/* <div>
              <h2 className="text-2xl font-semibold mb-4">5. Tracking and Analytics</h2>
              <p>
                We use tools like Heatmaps (e.g., NeatMaps) and anonymous visitor analytics, always based on your prior consent.
              </p>
            </div> */}

            <div>
              <h2 className="text-2xl font-semibold mb-4">5. Data Subject Rights</h2>
              <p>
                You have the right to:
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>Request information about your stored data</li>
                  <li>Request correction or deletion</li>
                  <li>Withdraw your consent at any time</li>
                  <li>Object to data processing for legitimate reasons</li>
                </ul>
                Please contact us at the email address provided above.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">6. Data Security</h2>
              <p>
                We implement technical and organizational measures to protect your data against unauthorized access, manipulation, loss, or destruction.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">7. Changes to This Privacy Policy</h2>
              <p>
                We reserve the right to amend this Privacy Policy at any time to comply with legal requirements or to reflect changes in our services.
              </p>
            </div>
          </div>
        </div>
      </div>

      <FooterSection />
    </div>
  );
};

export default PrivacyPolicy;