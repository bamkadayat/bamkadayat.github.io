export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-[#0a192f] text-[#e6f1ff] px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-1 text-[#64ffda]">
          BM Family — Privacy Policy
        </h1>
        <p className="text-sm text-slate-400 mb-8">
          Last updated: 25 February 2025
        </p>

        <Section title="Data Controller">
          BM Family (&quot;we&quot;, &quot;us&quot;) is the data controller for
          the personal data processed in this app, in accordance with the EU
          General Data Protection Regulation (GDPR) and the Norwegian Personal
          Data Act (Personopplysningsloven).
        </Section>

        <Section title="What Data We Collect">
          <ul className="list-disc pl-5 space-y-1">
            <li>Name and email address (for authentication)</li>
            <li>Profile photo (optional, stored as encoded data)</li>
            <li>Family group membership and role</li>
            <li>Appointments, shopping lists, and notes you create</li>
            <li>Device token for push notifications</li>
          </ul>
        </Section>

        <Section title="Purpose of Processing">
          We process your data solely to provide the family coordination
          service — shared calendars, shopping lists, and notes. The legal basis
          is your consent (GDPR Article 6(1)(a)) and contractual necessity (GDPR
          Article 6(1)(b)).
        </Section>

        <Section title="Data Sharing">
          Your data is only shared with members of your family group. We do not
          sell, trade, or share your personal data with third parties. Firebase
          (Google Cloud) processes data on our behalf as a data processor under
          standard contractual clauses.
        </Section>

        <Section title="Data Storage & Security">
          Data is stored in Google Firebase (Firestore) servers. All data is
          encrypted in transit (TLS) and at rest. Access is restricted through
          Firebase Authentication and Firestore security rules.
        </Section>

        <Section title="Data Retention">
          Your data is retained as long as your account exists. When you delete
          your account or request data deletion, all associated personal data is
          permanently removed within 30 days.
        </Section>

        <Section title="Your Rights Under GDPR">
          <p className="mb-2">You have the right to:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Access your personal data</li>
            <li>Rectify inaccurate data</li>
            <li>Erase your data (&quot;right to be forgotten&quot;)</li>
            <li>Restrict processing</li>
            <li>Data portability</li>
            <li>Object to processing</li>
            <li>Withdraw consent at any time</li>
          </ul>
          <p className="mt-2">
            To exercise any of these rights, use the &quot;Request Data
            Deletion&quot; option in the app or contact us directly.
          </p>
        </Section>

        <Section title="Supervisory Authority">
          If you believe your data protection rights have been violated, you have
          the right to lodge a complaint with the Norwegian Data Protection
          Authority (Datatilsynet) at{" "}
          <a
            href="https://www.datatilsynet.no"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#64ffda] hover:underline"
          >
            datatilsynet.no
          </a>
          .
        </Section>

        <Section title="Contact">
          For questions about this privacy policy or your personal data, contact
          us at:{" "}
          <a
            href="mailto:bamkadayat@gmail.com"
            className="text-[#64ffda] hover:underline"
          >
            bamkadayat@gmail.com
          </a>
        </Section>

        <hr className="border-slate-700 my-10" />

        <h1 className="text-3xl font-bold mb-1 text-[#64ffda]">
          BM Family — Terms of Use
        </h1>
        <p className="text-sm text-slate-400 mb-8">
          Last updated: 25 February 2025
        </p>

        <Section title="1. Acceptance">
          By using BM Family, you agree to these Terms of Use and our Privacy
          Policy. If you do not agree, please do not use the app.
        </Section>

        <Section title="2. Description of Service">
          BM Family is a private family coordination app that allows family
          members to share appointments, shopping lists, and notes. The app is
          intended for personal, non-commercial use within a family group.
        </Section>

        <Section title="3. User Accounts">
          You must provide accurate information when creating an account. You are
          responsible for maintaining the confidentiality of your login
          credentials and for all activities under your account.
        </Section>

        <Section title="4. Acceptable Use">
          You agree to use the app only for its intended purpose of family
          coordination. You may not use the app for any unlawful purpose or in a
          way that could harm, disable, or impair the service.
        </Section>

        <Section title="5. Content">
          You retain ownership of content you create (appointments, notes,
          shopping items). You are solely responsible for the content you share
          within your family group.
        </Section>

        <Section title="6. Data Protection">
          We process your personal data in accordance with GDPR and Norwegian
          data protection law. See the Privacy Policy above for full details.
        </Section>

        <Section title="7. Limitation of Liability">
          The app is provided &quot;as is&quot; without warranties of any kind.
          We are not liable for any data loss, service interruptions, or damages
          arising from the use of the app.
        </Section>

        <Section title="8. Changes to Terms">
          We may update these terms from time to time. Continued use of the app
          after changes constitutes acceptance of the updated terms.
        </Section>

        <Section title="9. Governing Law">
          These terms are governed by and construed in accordance with the laws
          of Norway. Any disputes shall be resolved by the courts of Norway.
        </Section>

        <Section title="10. Contact">
          For questions about these terms, contact us at:{" "}
          <a
            href="mailto:bamkadayat@gmail.com"
            className="text-[#64ffda] hover:underline"
          >
            bamkadayat@gmail.com
          </a>
        </Section>
      </div>
    </div>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-6">
      <h2 className="text-xl font-semibold mb-2 text-slate-200">{title}</h2>
      <div className="text-slate-300 leading-relaxed">{children}</div>
    </div>
  );
}
