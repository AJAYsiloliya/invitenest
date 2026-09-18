import RoyalWedding from "./invitations/RoyalWedding";
import ElegantWedding from "./invitations/ElegantWedding";
import Birthday from "./invitations/Birthday";
import Love from "./invitations/Love";


const InvitationPreview = ({ form, selectedTemplate }) => {
  if (selectedTemplate?.design === "royal-wedding") {
    return <RoyalWedding form={form} />;
  }

  if (selectedTemplate?.design === "elegant-wedding") {
    return <ElegantWedding form={form} />;
  }

  if (selectedTemplate?.design === "birthday") {
    return <Birthday form={form} />;
  }

  if (selectedTemplate?.design === "love") {
  return <Love form={form} />;
  }

  return (
    <div className="mx-auto max-w-sm rounded-3xl border p-10 text-center">
      <p>Select a template to see preview</p>
    </div>
  );
};

export default InvitationPreview;
