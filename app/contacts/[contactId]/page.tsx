export default function ContactPage({
  params,
}: {
  params: { contactId: 'text' };
}) {
  console.log('props', params.contactId);
  return (
    <main>
      <h1>Contact Page {params.contactId}</h1>
    </main>
  );
}
