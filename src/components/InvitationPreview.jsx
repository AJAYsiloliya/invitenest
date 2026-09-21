import RoyalWedding from "./invitations/RoyalWedding";
import ElegantWedding from "./invitations/ElegantWedding";
import Birthday from "./invitations/Birthday";
import Love from "./invitations/Love";
import ClassicWedding from "./invitations/ClassicWedding";
import ModernWedding from "./invitations/ModernWedding";
import BirthdayParty from "./invitations/BirthdayParty";
import RomanticInvitation from "./invitations/RomanticInvitation";





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

  if (selectedTemplate?.design === "classic-wedding") {
  return <ClassicWedding form={form} />;
  }

  if (selectedTemplate?.id === 6) {
  return <ModernWedding form={form} />;
  }
  
  if (selectedTemplate?.design === "birthday-party") {
  return <BirthdayParty form={form} />;
  }

  if (selectedTemplate?.design === "romantic-invitation") {
  return <RomanticInvitation form={form} />;
  }

  return (
    <div className="mx-auto max-w-sm rounded-3xl border p-10 text-center">
      <p>Select a template to see preview</p>
    </div>
  );
};

export default InvitationPreview;
