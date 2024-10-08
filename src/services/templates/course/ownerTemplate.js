export const ownerEmailTemplate = (surveyData) => `
  <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto;">
    <header style="text-align: center; padding: 10px; background-color: #f4f4f4;">
      <span style="font-family: sans-serif; font-size: 20px; font-weight: bold; color: #00838f;">Async SkillUp Training</span>
    </header>
    <main style="padding: 20px;">
      <h2>New Course Registration</h2>
      <p>A user named <strong>${surveyData.firstname.toUpperCase()} ${surveyData.lastname.toUpperCase()}</strong> signed up for a course at <a href="https://training.async.ng">Async SkillUp</a>.</p>
      <p>You may need to follow up with the user via WhatsApp or phone call.</p>
  </div>
`;
